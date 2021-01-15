# HUD.RegisterElement

```lua
HUD.RegisterElement(name, index, priority, html, data)
```
This function set hud element on screen

### Dependency
```lua
local HUD  = M('game.hud')
```


### Example
```lua
HUD.RegisterElement('JobHud', 2, 0, "<div>Trucking Level : {level}}</div>", {level = 1})
```

