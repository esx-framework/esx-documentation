# ESX.ShowAdvancedNotification

```lua
ESX.ShowAdvancedNotification(title, subject, msg, icon, iconType)
```

This function shows an advanced notification. See [Arguments Explained](#arguments-explained) for an explanation of what each argument does.

#### ESX.ShowAdvancedNotification Example

```lua
function notification(msg)

  local mugshot, mugshotStr = ESX.Game.GetPedMugshot(GetPlayerPed(-1))

  ESX.ShowAdvancedNotification('title', 'subject', 'msg', mugshotStr, 1)

  UnregisterPedheadshot(mugshot)

end
```

##### Result

![Advanced Notification Example Picture](https://i.imgur.com/bX1oxrF.jpg)

#### Arguments Explained

* `title` --> Title / Header
* `subject` --> Sub-Title / Subject
* `msg` --> Message / Content
* `icon` --> Icon, see [Icons](#icons) for accepted values below.
* `iconType` --> The Icon at the top-right corner, see [Icon Types](#icons-types) for accepted values below.

#### Icons

To specify an icon you can either simply parse an already existing notification image, or you can create a player mugshot with ESX.

* [Existing Image](https://wiki.gtanet.work/index.php?title=Notification_Pictures)
* [Player Mugshots](game/getpedmugshot.md)

#### Icon Types

* `1` --> Chat Box
* `2` --> Email
* `3` --> Add Friend Request
* `7` --> Right Jumping Arrow
* `8` --> RP Icon
* `9` --> $ Icon
