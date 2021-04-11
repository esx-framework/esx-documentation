# Menu:destroy

```lua
Menu:destroy()
```
This function destroy a menu.

### Dependency
```lua
M("Menu")
```

### Example
```lua
local menu = Menu('Test', {
	float = 'center|middle',
	title = 'Test menu',
	items = {
		{name = 'close',    label = 'Close', type = 'button'},
	}
})

menu:on('item.click', function(item, index)
	if item.name == 'close' then
		menu:destroy()
	end
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/ui/menu/menudestroy.md)