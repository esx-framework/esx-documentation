---
title: ESX.ShowAdvancedNotification
category: ES Extended
order: 6
---

```lua
ESX.ShowAdvancedNotification(title, subject, msg, icon, iconType)
```

![screenshot](https://i.imgur.com/bX1oxrF.jpg)

Shows an advanced notification

### Constructor explained
- `title` - very top title
- `subject` - acts like a sub-title
- `msg` - the message
- `icon` the icon, see acceptable icons below
- `iconType` the icon at the top-right cornor, see acceptable values below

### icon
To specify an icon, you can either simply parse an already existing notification image, or you can create a player mugshot with ESX.
- [Existing image list](https://wiki.gtanet.work/index.php?title=Notification_Pictures)
- [Player mugshots](esx.game.getpedmugshot.md)

### iconType list
```
1. Chat Box
2. Email
3. Add Friend Request
7. Right Jumping Arrow
8. RP Icon
9. $ Icon
```
