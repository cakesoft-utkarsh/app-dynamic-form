import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
interface Element {
  name: string;
  data_type: string;
  display_name: string;
  value: string;
  edit: string;
}

interface Form {
  elements: Element[];
}

interface Metadata {
  URL: string;
  TableColumnSize: number;
  DisplayHint: string;
}

interface RootObject {
  form: Form;
  metadata: Metadata;
}

export interface JsonFormData {
  elements: Element[];
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
})
export class AppDynamicFormComponent implements OnInit {
  @Input() schema_url!: String;
  public myForm: FormGroup = this.fb.group({});
  public data!: RootObject;
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  createForm(data: RootObject) {
    for (const element of data.form.elements) {
      const validatorsToAdd = [];
      if(element.data_type=="text")
      {
        validatorsToAdd.push(Validators.min(3));
      }
      if(element.data_type=="date")
      {
        const date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
        validatorsToAdd.push(Validators.pattern(date_regex));
      }
      if(element.data_type=="float")
      {
        const float_regex = /^\d+\.\d{0,2}$/;
        validatorsToAdd.push(Validators.pattern(float_regex));
      }
      if(element.display_name=="email")
      {
        validatorsToAdd.push(Validators.email);
      }
        validatorsToAdd.push(Validators.required);
      this.myForm.addControl(
        element.name,
        this.fb.control(element.value, validatorsToAdd)
      );
    }
  }
  ngOnInit() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `${this.schema_url}`
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
      })
      .then((dataJson) => {
        this.data = JSON.parse(dataJson.contents) as RootObject;
        console.log('WHRE is this', this.data);
        this.createForm(this.data);
      });
  }
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
    this.http.post(`${this.data?.metadata.URL}`, this.myForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
