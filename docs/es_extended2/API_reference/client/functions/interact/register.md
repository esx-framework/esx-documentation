# Register

```lua
Input.Register(data)
```
this function create a marker

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| name | string | No | - | No description |
| type | string | No | - | No description |
| distance | float | No | - | No description |
| radius | float | No | - | No description |
| pos | coords | No | - | No description |
| size | float | No | - | Applies just if `type = 'marker'` |
| mtype | int | No | - | Applies just if `type = 'marker'` |
| color | RGBA | No | - | Applies just if `type = 'marker'` |
| rotate | boolean | No | - | Applies just if `type = 'marker'` |
| model | hash | No | - | Applies just if `type = 'npc'` |
| heading | float | No | - | Applies just if `type = 'npc'` |

### Dependency
```lua
local Interact = M('interact')
```

### Example
```lua
Interact.Register({
	name = 'simpleMarker',
	type = 'marker',
	distance = 100.0,
	radius = 2.0,
	pos = vector3(91.252, -1397.006, 28.206),
	size = 1.0,
	mtype = 1,
	color = {r = 0, g = 0, b = 255, a = 255},
	rotate = false
})
```
```lua
Interact.Register({
	name = 'simpleNPC',
	type = 'npc',
	model = 0x62018559,
	heading = 100.0,
	distance = 10.0,
	radius = 2.0,
	pos = vector3(91.252, -1397.006, 28.206)
})
```

[Improve this documentation]()