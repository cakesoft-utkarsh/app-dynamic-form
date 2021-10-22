# AppDynamicForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

# Installation
If there is a dependency issue angular@common then use
npm i app-dynamic-form


# Usage
`<app-dynamic-form schema_url=<Your Schema_URL> [style.display]="!isShow ? 'block' : 'none'"></app-dynamic-form>`

The display is optional toggle using isShow variable


# Schema Format

Schema Url consiting of JSON schema for Form generation

e.g.
`
<pre>{
&emsp;"form" : {
&emsp;&emsp;"elements" : [
            {
             &emsp;&emsp;   "name" : "first_name",
               &emsp;&emsp; "data_type": "text",
       &emsp;&emsp;         "display_name": "First name",
             &emsp;&emsp;   "value" : "",
              &emsp;&emsp;  "edit": "True"
          &emsp;&emsp;  },
            ....
            ... 
&emsp;&emsp;&emsp;]
&emsp;},
&emsp;"metadata": {
 &emsp;&emsp;       "URL" : "https://skluoiwe235323.com/formvalue", <----- Submit Url
&emsp;&emsp;"TableColumnSize" : 2,
&emsp;&emsp;"DisplayHint": "table"
&emsp;}
}
</pre>
`