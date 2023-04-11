# DeleteObject

```lua
ESX.Game.DeleteObject(object)
```

This function deletes an object.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation       |
| -------- | --------- | -------- | ------------- | ----------------- |
| object   | string    | No       | -             | The object handle |

## Example

```lua

CreateThread(function()
  while true do
    local PlayerPed = ESX.PlayerData.ped
    local PlayerCoords = GetEntityCoords(PlayerPed)

    local Object = ESX.Game.GetClosestVehicle(PlayerCoords, {["police"] = true}) -- will grab the closest Police Car to the player
    ESX.Game.DeleteObject(Object) -- Deletes the Police Car

  Wait(0) -- IMPORTANT: Without this, the thread will crash the client.
  end
end)

```
