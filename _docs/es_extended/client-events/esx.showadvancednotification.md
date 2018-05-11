---
title: esx:showAdvancedNotification
category: ES Extended
order: 8
---

```lua
TriggerClientEvent('esx:showAdvancedNotification', source, 'title', 'subject', 'msg', 'CHAR_AMMUNATION', 3)
```

![screenshot](https://i.imgur.com/bX1oxrF.jpg)

Shows a notification for the specified source. This is what you'll want to use server side when you want to send a notification.

### Note
Do not use this event for client side, instead see [ESX.ShowAdvancedNotification(**title**, **subject**, **msg**, **icon**, **iconType**)](../client-functions/esx.showadvancednotification)
