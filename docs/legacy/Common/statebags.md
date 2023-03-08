# Using StateBags

#### Available from this version: [1.9.2](https://github.com/esx-framework/esx_core/releases/tag/1.9.2)

#### Available StateBags

| Argument   | Type   | Explanation |
| ---------- | ------ | ----------- |
| identifier | string |             |
| license    | string |             |
| job        | table  |             |
| group      | string |             |
| name       | string |             |

### Example Client-Side Usage

```lua
local playerState = LocalPlayer.state

RegisterCommand('stateBags', function(source, args, rawCommand)
    print('Identifier: '..playerState.identifier)
    print('License: '..playerState.license)
    print('Job: '..json.encode(playerState.job, {indent = true}))
    print('Group: '..playerState.group)
    print('Name: '..playerState.name)
end)
```

### Example Server-Side Usage

```lua
RegisterCommand('stateBagsServer', function(source, args, rawCommand)
    local playerState = Player(source).state

    print('Identifier: '..playerState.identifier)
    print('License: '..playerState.license)
    print('Job: '..json.encode(playerState.job, {indent = true}))
    print('Group: '..playerState.group)
    print('Name: '..playerState.name)
end)
```
