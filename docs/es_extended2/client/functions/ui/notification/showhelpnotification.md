# utils.ui.showHelpNotification

```lua
utils.ui.showHelpNotification(msg, thisFrame, beep, duration)
```
This function shows a help notification with a message.

### Arguments
| Argument  | Data Type | Optional | Default Value | Explanation   |
|-----------|-----------|----------|---------------|------|
| msg | string | No | - | The message to display |
| thisFrame | boolean | Yes | false | Only show this frame? Should be used with scripts that show notifications in a loop |
| beep | boolean | Yes | true | Play the beep sound? |
| duration | number | Yes | -1 (5000 ms) | Duration to show the help notification in milliseconds |

!!! note
    *These help notification support displaying button inputs [here](https://docs.fivem.net/docs/game-references/controls/#controls).*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.ui.showHelpNotification('A simple message ~INPUT_VEH_DROP_PROJECTILE~ ~INPUT_VEH_FLY_YAW_RIGHT~ ', false, true, 3000)
```
<center>

![](https://i.imgur.com/DcxWl3r.png)

</center>

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/ui/notification/showhelpnotification.md)