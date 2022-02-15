# GetPlayers

```lua
ESX.GetPlayers()
```

This function returns an array of all online players ID's.

You can use this to access each players data.

## Example

```lua
local xPlayers = ESX.GetPlayers()

for i=1, #xPlayers, 1 do
  local xPlayer = ESX.GetPlayerFromId(xPlayers[i])

  xPlayer.addMoney(100)
  xPlayer.showNotification('Here, take ~g~$100~s~ for free!')
end
```
