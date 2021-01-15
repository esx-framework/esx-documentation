# Translations

```lua
local translations = run('data/locales/' .. Config.Locale .. '.lua')['Translations']
LoadLocale('module-name-here', Config.Locale, translations)
```

This function translate the module.

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/scripting_manual/data/translations.md)