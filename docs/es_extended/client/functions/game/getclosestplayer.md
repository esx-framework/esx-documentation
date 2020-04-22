# ESX.Game.GetClosestPlayer

```lua
ESX.Game.GetClosestPlayer(coords)
```

This function gets the closest player client id, and distance to the player.

## Argument

| Argument | Data Type     | Optional | Default Value            | Explanation         |
|----------|---------------|----------|--------------------------|---------------------|
| coords   | table&vector3 | Yes      | (your player ped coords) | Coords to search at |

## ESX.Game.GetClosestPlayer Example

```lua
local closestPlayer, closestPlayerDistance = ESX.Game.GetClosestPlayer()

if closestPlayer == -1 or closestPlayerDistance > 3.0 then
	ESX.ShowNotification('There\'s no player near you!')
else
	ESX.ShowNotification(('Found %s, they are %s unit(s) away'):format(GetPlayerName(closestPlayer), closestPlayerDistance))
end
```
