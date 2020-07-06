# Triggering Events

### Triggering local events

```lua
emit('eventName', eventParam1, eventParam2)
```

### Triggering client events

```lua
emitClient('eventName', source, eventParam1, eventParam2)
```
### Triggering server events

```lua
emitServer('eventName', eventParam1, eventParam2)
```