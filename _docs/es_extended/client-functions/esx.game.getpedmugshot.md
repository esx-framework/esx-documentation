---
title: ESX.Game.GetPedMugshot
category: ES Extended
order: 6
---

![screenshot](https://i.imgur.com/OV72S12.jpg)

```lua
local mugshot, mugshotStr = ESX.Game.GetPedMugshot(ped)
```

You can you it like in the following example:

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
		Wait(0)
	end

	while true do
		if IsControlJustReleased(0, 22) then -- Spacebar key
		    notification("Hello")
		end
		Wait(0)
	end

end)

function notification(msg)
    SetNotificationTextEntry("STRING")
    AddTextComponentString(msg)
    local mugshot, mugshotStr = ESX.GetPedMugshot(GetPlayerPed(-1))
    SetNotificationMessage(mugshotStr, mugshotStr, false, 1, "Test", "Testing!")
    DrawNotification(false, false)
    UnregisterPedheadshot(mugshot)
end
```

More info about SetNotificationMessage:
https://runtime.fivem.net/doc/reference.html#_0x1CCD9A37359072CF