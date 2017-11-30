---
title: ESX.GetPlayers
category: ES Extended
order: 9
---

```lua
ESX.GetPlayers()
```

This functions returns an array of all online players ID.

You can access to each player data like that:

```lua
local xPlayers = ESX.GetPlayers()

for i=1, #xPlayers, 1 do

	local xPlayer = ESX.GetPlayerFromId(xPlayers[i])

	if xPlayer.getName() == "Gepetto" then
		xPlayer.addMoney(100)
		TriggerClientEvent('esx:showNotification', xPlayer.source, "Blablabla ...")
	end

end
```