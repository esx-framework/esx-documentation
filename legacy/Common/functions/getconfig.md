# GetConfig

```lua
ESX.GetConfig()
```

This function Returns the ESX config and its current values.

## Example

```lua
local ESXConfig = ESX.GetConfig()

if ESX.Config.Locale then 
  Config.Locale = ESXConfig.Config.Locale
end
```
