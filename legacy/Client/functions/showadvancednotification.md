# ShowAdvancedNotification

```lua
ESX.ShowAdvancedNotification(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
```

This function shows an advanced notification.

## Arguments

| Argument      | Data Type | Optional | Default Value | Explanation                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| sender        | string    | No       | -             | Message header                                                                                    |
| subject       | string    | No       | -             | Message subject                                                                                   |
| msg           | string    | No       | -             | Message content                                                                                   |
| textureDict   | string    | No       | -             | Texture directory, see [Texture Directory](#Texture_Directory) for accepted values                |
| iconType      | number    | No       | -             | Icon type, see [Icon Types](#Icon_Types) for accepted values                                      |
| flash         | boolean   | Yes      | false         | Flash the notification?                                                                           |
| savetoBreif   | boolean   | Yes      | true          | Save to breif? Located in Pause Menu > Help                                                       |
| hudColorIndex | number    | Yes      | nil           | The background color, see <https://gyazo.com/68bd384455fceb0a85a8729e48216e15> for available colors |

## Example

```lua
function notification(msg)
  local mugshot, mugshotStr = ESX.Game.GetPedMugshot(PlayerPedId())
  ESX.ShowAdvancedNotification('title', 'subject', 'msg', mugshotStr, 1)
  UnregisterPedheadshot(mugshot)
end
```

![Advanced Notification Example Picture](https://i.imgur.com/bX1oxrF.jpg)

## Texture Directory

To specify an texture directory you can either simply parse an already existing notification image, or you can for example create a player mugshot with ESX.

* [Existing Image](https://wiki.gtanet.work/index.php?title=Notification_Pictures)
* [Player Mugshots](./game/getpedmugshot))

## Icon Types

| Icon Type | Explantation        |
|-----------|---------------------|
| 1         | Chat Box            |
| 2         | Email               |
| 3         | Add Friend Request  |
| 7         | Right Jumping Arrow |
| 8         | RP Icon             |
| 9         | $ Icon              |
