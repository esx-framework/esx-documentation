---
title: ESX.GetPlayers
category: ES Extended
order: 3
---

```lua
local xPlayers = ESX.GetPlayers

for i=1, #xPlayers, 1 do
  local xPlayer = ESX.GetPlayerFromId(xPlayers[i])
end
```

Get players
