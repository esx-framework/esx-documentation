# IsPlayerLoaded

```lua
ESX.IsPlayerLoaded()
```

This function checks if the player has loaded in.

## Example

```lua
CreateThread(function()
    while true do
        local sleep = 1000 -- Make the Thread Sleep if doing nothing
        local IsLoaded = ESX.IsPlayerLoaded()
        if IsLoaded then
            -- Do Thigs here!
        end
        Wait(sleep)
    end
end)
```
