# GetExtendedPlayers

```lua
ESX.GetExtendedPlayers(key, val)
```

This function returns an array of all users.
You can use this function to filter players to find specific types of people such as police or admins.

## Examples

```lua title="Get All Players"
local xPlayers = ESX.GetExtendedPlayers() -- Returns all xPlayers
  print('^5'..#xPlayers..' ^2online player(s)^0') -- Get overall player count
  for _, xPlayer in pairs(xPlayers) do
    print('^1[ ^2ID : ^5'..xPlayer.source..' ^0| ^2Name : ^5'..xPlayer.getName()..' ^0 | ^2Group : ^5'..xPlayer.getGroup()..' ^0 | ^2Identifier : ^5'.. xPlayer.identifier ..'^1]^0\n') -- print players info
  end
```

```lua title="Kick all non-admin Players"
local xPlayers = ESX.GetExtendedPlayers('group', 'user')

for _, xPlayer in pairs(xPlayers) do
  xPlayer.kick('you are not an admin!')
end
```

```lua title="Give Item to all police"
local xPlayers = ESX.GetExtendedPlayers('job', 'police')

for _, xPlayer in pairs(xPlayers) do
  xPlayer.giveInventoryItem('bread', 5)
  xPlayer.showNotification('Here, have some free bread!')
end
```
