---
title: esx:showNotification
category: ES Extended
order: 8
---

```lua
TriggerClientEvent('esx:showNotification', source, '~y~Hello ~b~world~s~!')
```

Shows a notification for the specified source. This is what you'll want to use server side when you want to send a notification.

## Supported color syntax
- `~r~` = Red
- `~b~` = Blue
- `~g~` = Green
- `~y~` = Yellow
- `~p~` = Purple
- `~o~` = Orange
- `~c~` = Grey
- `~m~` = Darker Grey
- `~u~` = Black
- `~n~` = New Line
- `~s~` = Default White
- `~w~` = White
- `~h~` = Bold Text
- `~nrt~` = ???

### Note
Do not use this event for client side, instead see [ESX.ShowNotification(**msg**)](../../client-functions/esx.shownotification)
