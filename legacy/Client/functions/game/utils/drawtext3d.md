# Utils.DrawText3D

```lua
ESX.Game.Utils.DrawText3D(coords, text, size, font)
```

This function draws 3D text on the specified coords. Must be drawn every frame, ideally in a loop. `size` and `font` arguments are optional.

## Example

```lua
local Location = vector3(0,0,0) -- Location to show the Text

CreateThread(function()
  while true do 
    local PlayerPed = ESX.PlayerData.ped 
    local PlayerCoords = GetEntityCoords(PlayerPed)

    ESX.Game.Utils.DrawText3D(Location, "Hello World!", 1.0, 1) -- Show a 3D "Hello World!" At `Location`.

    Wait(Sleep) -- IMPORTANT: Without this, the thread will crash the client.
  end
end)
```
