# esx:enteringVehicle

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player entering the vehicle

#### Arguments

| Argument | Type   | Explanation |
| -------- | ------ | ----------- |
| vehicle  | number |             |
| plate    | string |             |
| seat     | number |             |
| netID    | number |             |

### Example Client-Side Usage

```lua
AddEventHandler('esx:enteringVehicle', function(vehicle, plate, seat, netID)
	print('Entering vehicle, plate:', plate)
end)
```

### Example Server-Side Usage

```lua
RegisterNetEvent('esx:enteringVehicle', function(vehicle, plate, seat, netID)
	print(('player %s entering vehicle plate: %s, netID: %s'):format(GetPlayerName(source), plate, netID))
end)
```
