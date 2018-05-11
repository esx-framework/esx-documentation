---
title: ESX.Game.GetPedMugshot
category: ES Extended
order: 6
---

![screenshot](https://i.imgur.com/OV72S12.jpg)

```lua
local mugshot, mugshotStr = ESX.Game.GetPedMugshot(ped)
```

You can do it like in the following example with ESX.ShowAdvancedNotification:

```
Be sure to use UnregisterPedheadshot(mugshot) after using it,
because the game only allows you 34 mugshot and you won't be allowed to use
mugshot once this limit is reached if you don't unregister it.
```

```lua
ESX = nil

Citizen.CreateThread(function()

	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	while true do
		Citizen.Wait(10)
		if IsControlJustReleased(0, 22) then -- Spacebar key
		    notification('Hello')
		end
	end
end)

function notification(msg)
	local mugshot, mugshotStr = ESX.Game.GetPedMugshot(GetPlayerPed(-1))
	ESX.ShowAdvancedNotification('Test', 'Testing!', msg, mugshotStr, 1)
	UnregisterPedheadshot(mugshot)
end
```
### Related
- [ESX.ShowAdvancedNotification](esx.showadvancednotification.md)
