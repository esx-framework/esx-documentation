# showNotification

# Exports
```lua
exports["esx_notify"]:Notify("info", 3000, "Text Here")
```
# Events
```lua
TriggerEvent("ESX:Notify", "info", 3000, "Text Here")
```

This event shows a basic notification to the player. This is what you'll want to use server side when you want to send a notification.

## String Types

| Syntax | Types           |
|-----------|----------------------|
| "info"    | Info Notification    |
| "success" | Success Notification |
| "error"   | Error Notification   |

## Arguments

| Argument      | Data Type | Optional | Default Value | Explanation                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| Type          | string    | Yes      | "info"        | What type the notification would be                                                               |
| time          | number    | Yes      | 3000          | For how long the notification should show                                                         |
| msg           | string    | No       | -             | The message to display                                                                            |
