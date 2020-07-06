# xPlayer.showNotification

```lua
xPlayer.showNotification(msg, flash, saveToBrief, hudColorIndex)
```

This function shows a basic notification to the player.

## Arguments

| Argument      | Data Type | Optional | Default Value | Explanation                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| msg           | string    | No       | -             | The message to display                                                                            |
| flash         | boolean   | Yes      | false         | Flash the notification?                                                                           |
| saveToBreif   | boolean   | Yes      | true          | Save to breif? Located in Pause Menu > Help                                                       |
| hudColorIndex | number    | Yes      | nil           | The background color, see https://gyazo.com/68bd384455fceb0a85a8729e48216e15 for available colors |

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
* `~s~` --> White (Default)
* `~w~` --> White
* `~h~` --> Bold
