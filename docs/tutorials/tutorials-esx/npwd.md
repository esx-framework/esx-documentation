# Support for NPWD

If you are using esx-legacy 1.9.2, all you need is to download npwd and esx will automatically detect that you have it on the server.

All you have to do is to set useResourceIntegration to true in the config.

```json
"general": {
    "useResourceIntegration": true,
    "toggleKey": "f1",
    "toggleCommand": "phone",
    "defaultLanguage": "en"
},
 ```