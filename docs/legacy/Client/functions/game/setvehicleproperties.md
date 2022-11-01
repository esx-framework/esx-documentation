# SetVehicleProperties

```lua
ESX.Game.SetVehicleProperties(vehicle, props)
```

This function sets various properties for an vehicle object.

## Example

```lua
local playerPed = PlayerPedId()

if IsPedInAnyVehicle(playerPed, false) then
 local vehicle = GetVehiclePedIsIn(playerPed, false)

 ESX.Game.SetVehicleProperties(vehicle, {
  plate = 'ESX',
  modTurbo = true
 })
end
```

## Valid Table Content

| Child             | Data Type | Explanation                                                         |
|-------------------|-----------|---------------------------------------------------------------------|
| model             | number    | The vehicle hash                                                    |
| plate             | number    | Vehicle plate, maximum 8 characters                                 |
| plateIndex        | number    | Plate style                                                         |
| bodyHealth        | number    | Body health                                                         |
| engineHealth      | number    | Engine health                                                       |
| tankHealth        | number    | Petrol Tank health                                                  |
| fuelLevel         | number    | Fuel level                                                          |
| dirtLevel         | number    | Dirtiness level                                                     |
| color1            | number    | Primary color                                                       |
| color2            | number    | Secondary color                                                     |
| pearlescentColor  | number    | Pearlescent color                                                   |
| wheelColor        | number    | Wheel color                                                         |
| wheels            | number    | Wheel type                                                          |
| windowTint        | number    |                                                                     |
| neonEnabled       | table     | Table with hardcoded four childs for left, back, front & back neons |
| neonColor         | table     | Packed table with three childs for r,g,b                            |
| extras            | table     | Pair table with id as index, and state as value                     |
| tyreSmokeColor    | table     | Packed table with three childs for r,g,b                            |
| modSpoilers       | number    |                                                                     |
| modFrontBumper    | number    |                                                                     |
| modRearBumper     | number    |                                                                     |
| modSideSkirt      | number    |                                                                     |
| modExhaust        | number    |                                                                     |
| modFrame          | number    |                                                                     |
| modGrille         | number    |                                                                     |
| modHood           | number    |                                                                     |
| modFender         | number    |                                                                     |
| modRightFender    | number    |                                                                     |
| modRoof           | number    |                                                                     |
| modEngine         | number    |                                                                     |
| modBrakes         | number    |                                                                     |
| modTransmission   | number    |                                                                     |
| modHorns          | number    |                                                                     |
| modSuspension     | number    |                                                                     |
| modArmor          | number    |                                                                     |
| modTurbo          | boolean   |                                                                     |
| modSmokeEnabled   | boolean   |                                                                     |
| modXenon          | boolean   |                                                                     |
| modFrontWheels    | number    |                                                                     |
| modBackWheels     | number    |                                                                     |
| modPlateHolder    | number    |                                                                     |
| modVanityPlate    | number    |                                                                     |
| modTrimA          | number    |                                                                     |
| modOrnaments      | number    |                                                                     |
| modDashboard      | number    |                                                                     |
| modDial           | number    |                                                                     |
| modDoorSpeaker    | number    |                                                                     |
| modSeats          | number    |                                                                     |
| modSteeringWheel  | number    |                                                                     |
| modShifterLeavers | number    |                                                                     |
| modAPlate         | number    |                                                                     |
| modSpeakers       | number    |                                                                     |
| modTrunk          | number    |                                                                     |
| modHydrolic       | number    |                                                                     |
| modEngineBlock    | number    |                                                                     |
| modAirFilter      | number    |                                                                     |
| modStruts         | number    |                                                                     |
| modArchCover      | number    |                                                                     |
| modAerials        | number    |                                                                     |
| modTrimB          | number    |                                                                     |
| modTank           | number    |                                                                     |
| modWindows        | number    |                                                                     |
| modLivery         | number    |                                                                     |
