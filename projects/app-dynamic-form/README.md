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
"form" : {
"elements" : [
            {
                "name" : "first_name",
                "data_type": "text",
                "display_name": "First name",
                "value" : "",
                "edit": "True"
            },
            ....
            ... 
]
},
"metadata": {
        "URL" : "https://skluoiwe235323.com/formvalue", <----- Submit Url
"TableColumnSize" : 2,
"DisplayHint": "table"
}
}
</pre>
`