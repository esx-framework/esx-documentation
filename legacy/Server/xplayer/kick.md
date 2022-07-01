# kick

```lua
xPlayer.kick(reason)
```

This function kicks a player with a reason.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation                          |
|----------|-----------|----------|---------------|--------------------------------------|
| reason   | string    | Yes      | -             | Kick reason, will be shown to player |

```lua

if xPlayer.getName() == "offensive name" then -- Check for a certain name
  xPlayer.kick("offensive Name") -- kick them 
end
```
