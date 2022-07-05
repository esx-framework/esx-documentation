# showNotification

```lua
TriggerClientEvent('esx:showNotification', source, 'Hello world!', "info", time)
```

This event shows a basic notification to the player. This is what you'll want to use server side when you wan to send a notification.

## String Types

| Syntax | Types           |
|-----------|----------------------|
| "info"    | Info Notification    |
| "success" | Success Notification |
| "error"   | Error Notification   |

## Arguments

| Argument      | Data Type | Optional | Default Value | Explanation                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| msg           | string    | No       | -             | The message to display                                                                            |
| time          | number    | Yes      | 3000          | For how long the notification should show                                                         |
| Type          | string    | Yes      | "info"        | What type the notification would be                                                               |

## Color Codes

```
~r~ = Red
~b~ = Blue
~g~ = Green
~y~ = Yellow
~p~ = Purple
~c~ = Grey
~m~ = Dark Grey
~u~ = Black
~o~ = Orange
```

## Note

Do not use this event for client side, instead use [ESX.ShowNotification](./../functions/shownotification)
