# showAdvancedNotification

```lua
TriggerClientEvent('esx:showAdvancedNotification', source, title, subject, msg, icon, iconType)
```

This event shows a notification for the specified source. This is what you'll want to use server side when you want to send a notification.

## Example

```lua
TriggerClientEvent('esx:showAdvancedNotification', source, 'title', 'subject', 'msg', 'CHAR_AMMUNATION', 3)
```

## Result

![Result](https://i.imgur.com/bX1oxrF.jpg)

## Note

Do not use this event for client side, instead use [ESX.ShowAdvancedNotification](./../functions/showadvancednotification)
