# Listening for Events

Listening to events in ESX v2 is different from the method you may be used
to in FXServer or in ESX v1. Instead, there is a new function we use to Register
a listener.

All listeners are prefixed with the keyword `on`

**Listening for Non-Networked Events**

If we need to listen to events emitted from the same side
(server-server, client-client). We use `on`

```lua
on("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```

**Listening for Emitted Events from the Client**

If we need to listen to events originating from the client on the server-side,
we use `onClient`

```lua
onClient("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```

**Listening for Emitted Events from the Server**

If we need to listen to events originating from the server on the client-side,
we use `onServer`

```lua
onServer("eventName", function(eventParam1, eventParam2)
    -- Code here will be executed once the event is triggered.
end)
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/scripting_manual/events/listeningevents.md)
