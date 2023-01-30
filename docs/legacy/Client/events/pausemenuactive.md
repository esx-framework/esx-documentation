# esx:pauseMenuActive

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player toggle pause menu

### Example Usage

```lua
AddEventHandler('esx:pauseMenuActive', function(isActive)
	print('pause menu state:', isActive)
end)
```
