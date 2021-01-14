# Triggering Events

Triggering events is also different in ESX v2 compared to both ESX v1 and
the regular FXServer implementation.

Functions that trigger events are always prefixed with the keyword `emit`

**Emit a Non-Networked event**

We use `emit` to trigger events on the same side of
the network (client-client, server-server)

```lua
emit('eventName', eventParam1, eventParam2)
```

**Triggering Client Events from Server**

If we want to trigger a client event from the server side,
we use *emitClient*

```lua
emitClient('eventName', source, eventParam1, eventParam2)
```

**Trigger a Server Event from Client**

If we want to trigger a server event from the client side,
we use *emitServer*

```lua
emitServer('eventName', eventParam1, eventParam2)
```
[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/scripting_manual/events/triggeringevents.md)
