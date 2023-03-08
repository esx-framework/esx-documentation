# showNotification

```lua
xPlayer.showNotification(msg, flash, saveToBrief, hudColorIndex)
```

This function shows a basic notification to the player.

## String Colors

| Syntax | Color           |
| ------ | --------------- |
| ~r~    | Red             |
| ~b~    | Blue            |
| ~g~    | Green           |
| ~y~    | Yellow          |
| ~p~    | Purple          |
| ~o~    | Orange          |
| ~c~    | Grey            |
| ~m~    | Dark Grey       |
| ~u~    | Black           |
| ~n~    | New Line        |
| ~s~    | White (default) |
| ~w~    | White           |
| ~h~    | Toggle Bold     |

## Arguments

| Argument      | Data Type | Optional | Default Value | Explanation                                                                                         |
| ------------- | --------- | -------- | ------------- | --------------------------------------------------------------------------------------------------- |
| msg           | string    | No       | -             | The message to display                                                                              |
| flash         | boolean   | Yes      | false         | Flash the notification?                                                                             |
| saveToBreif   | boolean   | Yes      | true          | Save to breif? Located in Pause Menu > Help                                                         |
| hudColorIndex | number    | Yes      | nil           | The background color, see <https://gyazo.com/68bd384455fceb0a85a8729e48216e15> for available colors |

## Example

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local breadCount = xPlayer.getInventoryItem('bread').count -- how much bread the player has
if breadCount > 1 then -- checks if they have more than 1 bread
  xPlayer.showNotification('Congrats!, you have '.. breadCount .. ' Bread!') -- send them a happy message, telling them how much bread they have
else -- if they have no bread
 xPlayer.showNotification('oh no! you have no bread!') -- send them a sad message expressing your disapointment
end
```
