# esx:exitedVehicle

#### Available from this version: [1.9.1](https://github.com/esx-framework/esx_core/releases/tag/1.9.1)

This event is triggered when the player entered the vehicle

#### Arguments

| Argument    | Type   | Explanation |
| ----------- | ------ | ----------- |
| vehicle     | number |             |
| plate       | string |             |
| seat        | number |             |
| displayName | string |             |
| netID       | number |             |

### Example Client-Side Usage

```lua
AddEventHandler('esx:exitedVehicle', function(vehicle, plate, seat, displayName, netID)
	print('entered vehicle, plate:', plate, 'vehicleName:', displayName)
end)
```

### Example Server-Side Usage

```lua
RegisterNetEvent('esx:exitedVehicle', function(vehicle, plate, seat, displayName, netID)
	print(('player %s entering vehicle (%s) plate: %s, netID: %s'):format(GetPlayerName(source), displayName, plate, netID))
end)
```
