# Config

```lua
module.Config = run('data/config.lua', {vector3 = vector3})['Config']
```

This function get the config for the module.

## Example

### Config

```lua
Config = {}
Config.Test = 'This is a test'
```

### Module

```lua
module.Config = run('data/config.lua', {vector3 = vector3})['Config']

print(module.Config.Test) --Returns 'This is a test'
```



