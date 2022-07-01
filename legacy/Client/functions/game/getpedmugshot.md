# GetPedMugshot

```lua
local mugshot, mugshotStr = ESX.Game.GetPedMugshot(ped)
```

This function generates a mugshot of the ped usable in various applications.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation    |
| -------- | --------- | -------- | ------------- | -------------- |
| ped      | string    | No       | -             | The ped handle |

## Example

!!! warning
    Be sure to use `UnregisterPedheadshot(mugshot)` after using it, because the game only allows you 34 mugshots, and you won't be allowed to use mugshot once this limit is reached if you don't unregister it.

```lua
function Notify(msg)
  local mugshot, mugshotStr = ESX.Game.GetPedMugshot(GetPlayerPed(-1))
  ESX.ShowAdvancedNotification('Test', 'Testing!', msg, mugshotStr, 1)
  UnregisterPedheadshot(mugshot)
end
```

![Mugshot Example](https://i.imgur.com/OV72S12.jpg)

## Also See

[ESX.ShowAdvancedNotification](./../showadvancednotification)
