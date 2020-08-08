# utils.ui.showAdvancedNotification

```lua
utils.ui.showAdvancedNotification(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
```
This function shows an advanced notification.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| sender | string | No | - | Message header |
| subject | string | No | - | Message subject |
| msg | string | No | - | Message content |
| textureDict | string | No | - | Texture directory |
| iconType | int | No | - | Icon type |
| flash | boolean | Yes | false | Flash the notification? |
| savetoBreif | boolean | Yes | true | Save to breif? Located in Pause Menu > Help |
| hudColorIndex | int | Yes | 2 | The background color |

!!! note
    *You can see Texture Directory, Icon Types and The background color <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
utils.ui.showAdvancedNotification('This is a title', 'This is the subject', 'A simple message', 'CHAR_HUMANDEFAULT', 1, false, true, 200)
```
<center>

![](https://i.imgur.com/mU02Vm4.png)

</center>

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/ui/notification/showadvancednotification.md)