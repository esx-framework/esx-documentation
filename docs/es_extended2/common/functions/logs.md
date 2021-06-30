# logs

There is a central method to log actions to discord. 

When you trigger from a server-sided file:
```lua
emit('esx:logs:toDiscord', 'Message'..arguments..'', 'paste your discord webhook')
```

When you trigger from a client-sided file:
```lua
emitServer('esx:logs:toDiscord', 'message'..arguments..'', 'paste your discord webhook')
```
Logs are already integrated in the admin module and in the rpchat module. 

### Dependency
You need to activite the logs module in the base folder.

### Example
.../server/...
```lua
local identity  = Player.fromId(player.source):getIdentity()
local firstname = identity:getFirstName()
emit('esx:logs:toDiscord', 'The player '..firstname..' joined the server.', 'paste your discord webhook')
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/logs.md)
