# esx:enteringVehicleAborted

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player aborted vehicle enter

### Example Client-Side Usage

```lua
AddEventHandler('esx:enteringVehicleAborted', function()
    print('esx:enteringVehicleAborted')
end)
```

### Example Server-Side Usage

```lua
RegisterNetEvent('esx:enteringVehicleAborted', function()
    print('esx:enteringVehicleAborted', source)
end)
```
