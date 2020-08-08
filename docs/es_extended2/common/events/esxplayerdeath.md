# esx:player:death

```lua
on('esx:player:death', function(data)

end)
```

### Table Information (data)

| child          | type    | explanation                                                                                        |
|----------------|---------|----------------------------------------------------------------------------------------------------|
| victimCoords   | table   |                                                                                                    |
| killerCoords   | table   |                                                                                                    |
| deathCause     | string  | Returns the hash of the weapon/model/object that killed the victim.                                |
| killedByPlayer | boolean | Was the player killed by another player? The data below is only generated when killed by a player. |
| distance       | number  | The distance (in GTA units) between the victim and killer upon death                               |
| killerServerId | number  | The killer's server id                                                                             |
| killerClientId | number  | The killer's client id

### Example Client-Side

Here is a perfect example for checking if the player (client side) is dead, which is useful for a lot of things, for example only allowing menus to be open if alive.

```lua
local IsDead = false

on('esx:onPlayerDeath', function(data)
	IsDead = true
end)
```


### Example Server-Side

Simple Kill Notifications

```lua
onServer('esx:player:death', function(data)
	data.victim = source

	if data.killedByPlayer then
		emitClient('esx:showNotification', -1, GetPlayerName(data.victim) .. 'was killed by ' .. GetPlayerName(data.killerServerId) .. ' from ' .. data.distance .. ' units')
	else
		emitClient('esx:showNotification', -1, GetPlayerName(data.victim) .. ' died')
	end
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/events/esxplayerdeath.md)