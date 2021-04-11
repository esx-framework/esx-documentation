# ESX.ShowFloatingHelpNotification

```lua
ESX.ShowFloatingHelpNotification(msg, coords)
```

This function shows a help notification with a message. These help notification support displaying button inputs, see [this list](https://pastebin.com/HPg8pYwi)

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation                                                                         |
|-----------|-----------|----------|---------------|-------------------------------------------------------------------------------------|
| msg       | string    | No       | -             | The message to display                                                              |
| coords    | Vector3   | No       | -             | The coordinates to show to notifcation at                                           |

## ESX.ShowFloatingHelpNotification Example

```lua
local coords = GetEntityCoords(PlayerPedId())
ESX.ShowFloatingHelpNotification('Your Notification', vector3(coords.x, coords.y, coords.z))
```

