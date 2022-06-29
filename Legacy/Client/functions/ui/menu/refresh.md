# Refresh

```lua
menu.refresh()
```

This function refresh a menu. Used after the menu.update()

## Example
https://github.com/esx-framework/esx-legacy/blob/main/%5Besx%5D/esx_skin/client/main.lua#L100-L113

```lua
local newData = {
    value = newNumber
}
menu.update({name = data.current.name}, newData)
menu.refresh() -- Refresh menu
```