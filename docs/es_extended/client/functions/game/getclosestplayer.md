# ESX.Game.GetClosestPlayer

```lua
ESX.Game.GetClosestPlayer(coords)
```

This function gets the closest player.

## Arguments

| Argument | Data Type | Optional | Default Value     | Explanation               |
|----------|-----------|----------|-------------------|---------------------------|
| coords   | vector3   | Yes      | (player's coords) | The coords to search from |

## ESX.Game.GetClosestPlayer Example

```lua
local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()

if closestPlayer == -1 or closestDistance > 3.0 then
	ESX.ShowNotification('There\'s no players nearby you!')
else
	ESX.ShowNotification(('Found %s, they are %s unit(s) away'):format(GetPlayerName(closestPlayer), closestDistance))
end
```
