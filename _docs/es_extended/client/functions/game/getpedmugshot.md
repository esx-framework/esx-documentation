# ESX.Game.GetPedMugshot

```lua
local mugshot, mugshotStr = ESX.Game.GetPedMugshot(ped)
```

This function generates a Mugshot of the current player usable in various applications.

#### ESX.Game.GetPedMugshot Example

!!! warning
    Be sure to use `UnregisterPedheadshot(mugshot)` after using it, because the game only allows you 34 mugshots, and you won't be allowed to use mugshot once this limit is reached if you don't unregister it.

```lua
ESX = nil

Citizen.CreateThread(function()

  while ESX == nil do

    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

    Citizen.Wait(0)

  end

  while true do

    Citizen.Wait(10)

    if IsControlJustReleased(0, 22) then -- Spacebar Key

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

##### Result

![Mugshot Example](https://i.imgur.com/OV72S12.jpg)


##### Related

[ESX.ShowAdvancedNotification](../showadvancednotification.md)
