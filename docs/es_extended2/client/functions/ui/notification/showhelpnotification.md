# utils.ui.showHelpNotification

```lua
utils.ui.showHelpNotification(msg, thisFrame, beep, duration)
```
This function shows a help notification with a message. These help notification support displaying button inputs in [this list](https://docs.fivem.net/docs/game-references/controls/#controls).

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation                                                                         |
|-----------|-----------|----------|---------------|-------------------------------------------------------------------------------------|
| msg       | string    | No       | -             | The message to display                                                              |
| thisFrame | boolean   | Yes      | false         | Only show this frame? Should be used with scripts that show notifications in a loop |
| beep      | boolean   | Yes      | true          | Play the beep sound?                                                                |
| duration  | number    | Yes      | -1 (5000 ms)  | Duration to show the help notification in milliseconds                              |


## Example
```lua
local utils = M('utils')

utils.ui.showHelpNotification('A simple message ~INPUT_VEH_DROP_PROJECTILE~ ~INPUT_VEH_FLY_YAW_RIGHT~ ', false, true, 3000)
```
![](https://i.imgur.com/DcxWl3r.png)