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
&emsp;"form" : {<br>
&emsp;&emsp;"elements" : [<br>
            {<br>
             &emsp;&emsp;   "name" : "first_name",<br>
               &emsp;&emsp; "data_type": "text",<br>
       &emsp;&emsp;         "display_name": "First name",<br>
             &emsp;&emsp;   "value" : "",<br>
              &emsp;&emsp;  "edit": "True"<br>
          &emsp;&emsp;  },<br>
            ....
            ... <br>
&emsp;&emsp;&emsp;]<br>
&emsp;},<br>
&emsp;"metadata": {<br>
 &emsp;&emsp;       "URL" : "https://skluoiwe235323.com/formvalue", <----- Submit Url<br>
&emsp;&emsp;"TableColumnSize" : 2,<br>
&emsp;&emsp;"DisplayHint": "table"<br>
&emsp;}<br>
}
</pre>
`