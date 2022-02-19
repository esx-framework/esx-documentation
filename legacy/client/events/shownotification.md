# showNotification

```lua
TriggerClientEvent('esx:showNotification', source, '~y~Hello ~b~world~s~!')
```

This event shows a basic notification to the player. This is what you'll want to use server side when you wan to send a notification.

## Supported Color Syntax

* `~r~` --> Red
* `~b~` --> Blue
* `~g~` --> Green
* `~y~` --> Yellow
* `~p~` --> Purple
* `~o~` --> Orange
* `~c~` --> Grey
* `~m~` --> Dark Grey
* `~u~` --> Black
* `~n~` --> New Line
* `~s~` --> White (**Default**)
* `~w~` --> White
* `~h~` --> Bold
* `~nrt~` --> ?

## Note

Do not use this event for client side, instead use [ESX.ShowNotification](./../functions/shownotification)
