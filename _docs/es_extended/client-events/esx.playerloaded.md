---
title: esx:playerLoaded
category: ES Extended
order: 9
---

```lua
RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
	
  local identifier   = xPlayer.identifier
  local accounts     = xPlayer.accounts
  local inventory    = xPlayer.inventory
  local job          = xPlayer.job
  local loadout      = xPlayer.loadout
  local lastPosition = xPlayer.lastPosition
  local money        = xPlayer.money

end)
```