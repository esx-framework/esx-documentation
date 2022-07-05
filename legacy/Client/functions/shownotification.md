# ShowNotification

```lua
ESX.ShowNotification(msg, time, type)
```

## Example 
```lua
ESX.ShowNotification("I i ~r~love~s~ donuts", "success", 3000)
```

This function shows a notification to the player.

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

|-----------|--------|
| ~r~  |  Red      |
| ~b~  |  Blue     |
| ~g~  | Green     |
| ~y~  | Yellow    |
| ~p~  | Purple    |
| ~c~  |  Grey     |
| ~m~  | Dark Grey |
| ~u~  | Black     |
| ~o~  | Orange    |
 


