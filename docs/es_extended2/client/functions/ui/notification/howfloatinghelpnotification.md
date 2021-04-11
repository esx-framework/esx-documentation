# utils.ui.howFloatingHelpNotification

```lua
utils.ui.howFloatingHelpNotification(msg, coords, timeout)
```
This function show a floating text.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| msg | string | No | - | Message |
| coords | coords | No | - | Position to be displayed |
| timeout | int | Yes | 5000 | Duration in milliseconds in which it will be shown |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.ui.howFloatingHelpNotification('Floating Text', vector3(-269.4, -955.3, 31.2), 5000)  
```
<center>

![](https://i.imgur.com/ffGSdqn.png)

</center>

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/ui/notification/howfloatinghelpnotification.md)