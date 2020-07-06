# Translations

```lua
local translations = run('data/locales/' .. Config.Locale .. '.lua')['Translations']
LoadLocale('module-name-here', Config.Locale, translations)
```

This function translate the module.

## Example

### Locale

```lua
Translations = {
    ['Test'] = 'Translate test'
}
```

### Module

```lua
local translations = run('data/locales/' .. Config.Locale .. '.lua')['Translations']
LoadLocale('module-name-here', Config.Locale, translations)

print(_U('module-name-here:Test')) -- Returns 'Translate test'

```
