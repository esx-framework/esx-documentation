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
AddEventHandler('esx:enteringVehicle', function(vehicle, plate, seat, netId)
    print('esx:enteringVehicle', 'vehicle', vehicle, 'plate', plate, 'seat', seat, 'netId', netId)
end)
```

### Example Server-Side Usage

```lua
AddEventHandler('esx:enteringVehicle', function(plate, seat, netId)
    print('esx:enteringVehicle', 'source', source, 'plate', plate, 'seat', seat, 'netId', netId)
end)
```
