# Update

```lua
menu.update()
```

This function update a menu. After this function use menu.refresh()

## Example
https://github.com/esx-framework/esx-legacy/blob/main/%5Besx%5D/esx_skin/client/main.lua#L100-L113

```lua
local newData = {
    value = newNumber
}
menu.update({name = data.current.name}, newData) -- Update menu
menu.refresh()
```