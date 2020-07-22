# utils.ui.showAdvancedNotification

```lua
utils.ui.showAdvancedNotification(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
```
This function shows an advanced notification.

## Arguments
| Argument      | Data Type | Optional | Default Value | Explanation                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| sender        | string    | No       | -             | Message header                                                                                    |
| subject       | string    | No       | -             | Message subject                                                                                   |
| msg           | string    | No       | -             | Message content                                                                                   |
| textureDict   | string    | No       | -             | Texture directory, see [Texture Directory](#Texture_Directory) for accepted values                |
| iconType      | number    | No       | -             | Icon type, see [Icon Types](#Icon_Types) for accepted values                                      |
| flash         | boolean   | Yes      | false         | Flash the notification?                                                                           |
| savetoBreif   | boolean   | Yes      | true          | Save to breif? Located in Pause Menu > Help                                                       |
| hudColorIndex | number    | Yes      | nil           | [The background color](https://gyazo.com/68bd384455fceb0a85a8729e48216e15) |

## Example
```lua
local utils = M("utils")

utils.ui.showAdvancedNotification('This is a title', 'This is the subject', 'A simple message', 'CHAR_HUMANDEFAULT', 1, false, true, 200)
```

![](https://i.imgur.com/mU02Vm4.png)