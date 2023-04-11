# GetClosestObject

```lua
ESX.Game.GetClosestObject(coords, modelFilter)
```

This function returns the closest object handle, and distance to the object.

## Arguments

| Argument    | Data Type     | Optional | Default Value            | Explanation                                                                                                                            |
| ----------- | ------------- | -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| coords      | table&vector3 | Yes      | (your player ped coords) | Coords to search at                                                                                                                    |
| modelFilter | table         | Yes      | -                        | Enables whitelist mode for getting closest object. The table must be key-value where the key is the model hash, and value set to true. |

## Example

```lua

CreateThread(function()
  while true do
    local PlayerPed = ESX.PlayerData.ped
    local PlayerCoords = GetEntityCoords(PlayerPed)

    local Object = ESX.Game.GetClosestObject(PlayerCoords, {["police"] = true}) -- will grab the closest Police Car to the player
    ESX.Game.DeleteObject(Object) -- Deletes the Police Car

  Wait(0) -- IMPORTANT: Without this, the thread will crash the client.
  end
end)
```
