# Menu:destroy()

```lua
Menu:destroy()
```
This function destroy a menu.

## Example
```lua
local menu = Menu('Test', {
	float = 'center|middle',
	title = 'Test menu',
	items = {
		{name = 'Close',    label = 'Close', type = 'button'},
	}
})

menu:on('item.click', function(item, index)
	if item.name == 'exit' then
		menu:destroy()
	end
end)

```