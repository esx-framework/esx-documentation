# Support for NPWD

#### Available from this version: [1.9.2](https://github.com/esx-framework/esx_core/releases/tag/1.9.2)

If you are using esx-legacy 1.9.2, all you need is to download npwd and esx will automatically detect that you have it on the server.

Make sure you are not using [esx-npwd](https://github.com/project-error/npwd). If you use it, please remove it. Thanks.

All you have to do is to set useResourceIntegration to true in the config.

```json
"general": {
    "useResourceIntegration": true,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en"
},
 ```