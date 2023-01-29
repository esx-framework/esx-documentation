# GetPlayerFromId

```lua
ESX.GetPlayerFromId(playerId)
```

This function gets a ESX player object from a server id. Returns `nil` for invalid players.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| playerId | number    | No       | -             | The Server ID of the Target Player|

## Example

```lua
RegisterNetEvent('esx_ambulancejob:healMe', function()
  local source = source -- Change Source from a global to a local to ensure it does not change
  local xPlayer = ESX.GetPlayerFromId(source) -- Get the Player Object

  if xPlayer.job.name == 'ambulance' then -- use the object to geb the job name of the player.
    xPlayer.triggerEvent('esx_basicneeds:healPlayer') -- trigger an event from the player
  else 
    print("Player ".. xPlayer.getName() .. "Tried to Heal someone!")
  end
end)
```
