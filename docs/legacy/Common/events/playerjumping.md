# esx:playerJumping

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player jumping

### Example Client-Side Usage

```lua
AddEventHandler('esx:playerJumping', function()
	print('You jumped')
end)
```

### Example Server-Side Usage

```lua
RegisterNetEvent('esx:playerJumping', function()
	print(('player %s jumped'):format(GetPlayerName(source)))
end)
```
