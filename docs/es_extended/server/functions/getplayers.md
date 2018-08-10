# ESX.GetPlayers

```lua
ESX.GetPlayers()
```

This function returns an array of all online players ID's.

You can use this to access each players data.

#### ESX.GetPlayers Example

```lua
local xPlayers = ESX.GetPlayers()

for i=1, #xPlayers, 1 do

  local xPlayer = ESX.GetPlayerFromId(xPlayers[i])

  if xPlayer.getName() == "Gepetto" then

    xPlayer.addMoney(100)

    TriggerClientEvent('esx:showNotification', xPlayer.source, "Blablabla...")

  end

end
```
