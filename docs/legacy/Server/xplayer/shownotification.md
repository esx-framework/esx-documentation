# showNotification

```lua
xPlayer.showNotification(msg, type, length)
```

## Color Codes

```lua
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

This function shows a notification to the player.

## String Types

| Syntax    | Types                |
| --------- | -------------------- |
| "info"    | Info Notification    |
| "success" | Success Notification |
| "error"   | Error Notification   |

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                               |
| -------- | --------- | -------- | ------------- | ----------------------------------------- |
| msg      | string    | No       | -             | The message to display                    |
| Type     | string    | Yes      | "info"        | What type the notification would be       |
| time     | number    | Yes      | 3000          | For how long the notification should show |

## Example

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local breadCount = xPlayer.getInventoryItem('bread').count -- how much bread the player has
if breadCount > 1 then -- checks if they have more than 1 bread
  xPlayer.showNotification('Congrats!, you have '.. breadCount .. ' Bread!', 'success', 5000) -- send them a happy message, telling them how much bread they have
else -- if they have no bread
  xPlayer.showNotification('oh no! you have no bread!', 'error') -- send them a sad message expressing your disapointment
end
```
