# ESX.Game.GetClosestPlayer

```lua
ESX.Game.GetClosestPlayer(coords)
```

This function gets the closest player.


#### ESX.Game.GetClosestPlayer Example

```lua
local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()

if closestPlayer == -1 or closestDistance > 3.0 then
  ESX.ShowNotification('There\'s no players nearby!')
else
  ESX.ShowNotification('Don\'t get too close to ' .. GetPlayerName(closestPlayer))
end
```
