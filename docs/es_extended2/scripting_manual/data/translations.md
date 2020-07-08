# Translations

```lua
local translations = run('data/locales/' .. Config.Locale .. '.lua')['Translations']
LoadLocale('module-name-here', Config.Locale, translations)
```

This function translate the module.

