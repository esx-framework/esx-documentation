# Listening Events

Listening local events
```lua
on("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```

Listening client events
```lua
onClient("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```

Listening server events
```lua
onServer("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```