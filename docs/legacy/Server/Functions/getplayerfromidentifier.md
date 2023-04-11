# GetPlayerFromIdentifier

```lua
ESX.GetPlayerFromIdentifier(identifier)
```

This function returns the ESX player from the Rockstar identifier. Returns `nil` if no player is found.

## Example

```lua
local xPlayer = ESX.GetPlayerFromIdentifier('888452e629a590b9d79245f0030b1f7b9a81d558') -- attempt to get player

if xPlayer then -- check if player is in server
  print(xPlayer.getName() .. 'is In the server!') -- grab the Players Name
  print('They have $'.. xPlayer.getMoney() .. 'and are a ' .. xPlayer.group) -- grab how much cash they have and if they are an admin or a user
else
  print('This Player is not in the server.')
end
```
