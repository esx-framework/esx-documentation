# esx:showHelpNotification

```lua
TriggerClientEvent('esx:showHelpNotification', source, msg)
```

This event shows a help notification with the parsed message. These help notification support displaying button inputs, see [this list](https://pastebin.com/HPg8pYwi)

#### esx:showHelpNotification Example

```lua
TriggerClientEvent('esx:showHelpNotification', source, 'Hit ~INPUT_CONTEXT~ to do shit!')
```

##### Result

![Result](http://imgbin.org/images/26209.jpg)

###### Note

Do not use this event for client side, instead use [ESX.ShowHelpNotification](../functions/showhelpnotification.md)
