# showHelpNotification

```lua
xPlayer.showHelpNotification(msg, thisFrame, beep, duration)
```

This function shows a help notification with a message. These help notification support displaying button inputs, see [this list](https://pastebin.com/HPg8pYwi)

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation                                                                         |
|-----------|-----------|----------|---------------|-------------------------------------------------------------------------------------|
| msg       | string    | No       | -             | The message to display                                                              |
| thisFrame | boolean   | Yes      | false         | Only show this frame? Should be used with scripts that show notifications in a loop |
| beep      | boolean   | Yes      | true          | Play the beep sound?                                                                |
| duration  | number    | Yes      | -1 (5000 ms)  | Duration to show the help notification in milliseconds                              |
