---
title: esx:onPlayerDeath
category: ES Extended
order: 4
---

```lua
AddEventHandler('esx:onPlayerDeath', function(data)
	
end)
```

## `data` table information
- `victimCoords`: victim coords in its own table
- `wepaonHash`: weapon hash used to kill player
- `deathCause`: hash used of the object/model/weapon to kill the player
- `killed` (boolean): was the player killed by an online player?
- `killerPed`
- `killerCoords`
- `distance`: distance (in gta units) between the two players when killed
- `killerType`: [ped type](https://runtime.fivem.net/doc/reference.html#_0xFF059E1E4C01E63C)
- `killerinveh` (boolean)
- `killervehseat`
- `killervehname`

## Example usage server-side
Simple kill notifications

```lua
RegisterServerEvent('esx:onPlayerDeath')
AddEventHandler('esx:onPlayerDeath', function(data)
	data.victim = source

	if data.killed then
		TriggerClientEvent('esx:showNotification', -1, GetPlayerName(data.victim) .. ' was killed by ' .. GetPlayerName(data.killerPed) .. ' from ' .. data.distance .. ' units')
	else
		TriggerClientEvent('esx:showNotification', -1, GetPlayerName(data.victim) .. ' died')
	end
end)

```

## Example usage client-side
Here is an perfect example for checking if the player (client side!) is dead, which is useful for a lot of things, for example only allowing menus to be open if alive.

```lua
local IsDead = false

AddEventHandler('esx:onPlayerDeath', function(data)
	IsDead = true
end)

AddEventHandler('playerSpawned', function(spawn)
	IsDead = false
end)
```