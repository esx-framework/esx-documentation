# onPlayerDeath

```lua
AddEventHandler('esx:onPlayerDeath', function(data)

end)
```

#### `data` Table Information

| child          | type    | explanation                                                                                        |
|----------------|---------|----------------------------------------------------------------------------------------------------|
| victimCoords   | table   |                                                                                                    |
| killerCoords   | table   |                                                                                                    |
| deathCause     | string  | Returns the hash of the weapon/model/object that killed the victim.                                |
| killedByPlayer | boolean | Was the player killed by another player? The data below is only generated when killed by a player. |
| distance       | number  | The distance (in GTA units) between the victim and killer upon death                               |
| killerServerId | number  | The killer's server id                                                                             |
| killerClientId | number  | The killer's client id

#### Example Server-Side Usage

Simple Kill Notifications

```lua
RegisterServerEvent('esx:onPlayerDeath')
AddEventHandler('esx:onPlayerDeath', function(data)
	data.victim = source

	if data.killedByPlayer then
		TriggerClientEvent('esx:showNotification', -1, GetPlayerName(data.victim) .. 'was killed by ' .. GetPlayerName(data.killerServerId) .. ' from ' .. data.distance .. ' units')
	else
		TriggerClientEvent('esx:showNotification', -1, GetPlayerName(data.victim) .. ' died')
	end
end)
```

#### Example Client-Side Usage

Here is a perfect example for checking if the player (client side) is dead, which is useful for a lot of things, for example only allowing menus to be open if alive.

```lua
local IsDead = false

AddEventHandler('esx:onPlayerDeath', function(data)
	IsDead = true
end)

AddEventHandler('playerSpawned', function(spawn)
	IsDead = false
end)
```
