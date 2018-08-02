# esx:onPlayerDeath

```lua
AddEventHandler('esx:onPlayerDeath', function(data)

end)
```

#### *Data* Table Information

* `victimCoords` --> Victim coords in its own table
* `weaponHash` --> Weapon hash used to kill the player
* `deathCause` --> Hash used of the object / model / weapon to kill the player
* `killed` (boolean): Was the player killed by an online player?
* `killerPed`
* `killerCoords`
* `distance` --> Distance (in GTA Units) between the two players when killed
* `killerType` --> [Ped Type](https://runtime.fivem.net/doc/reference.html#_0xFF059E1E4C01E63C)
* `killerinveh` (boolean)
* `killervehseat`
* `killervehname`

#### Example Server-Side Usage

Simple Kill Notifications

```lua
RegisterServerEvent('esx:onPlayerDeath')
AddEventHandler('esx:onPlayerDeath', function(data)
  data.victim = source

  if data.killed then
    TriggerClientEvent('esx:showNotification', -1, GetPlayerName(data.victim) .. 'was killed by ' .. GetPlayerName(data.killerPed) .. ' from ' .. data.distance .. ' units')
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
