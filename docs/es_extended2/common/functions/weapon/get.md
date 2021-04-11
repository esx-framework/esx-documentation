# utils.weapon.get

```lua
utils.weapon.get(weaponName)
```
This function gets all information about a weapon.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| weaponName | string | No | - | Sets weapon name |

!!! note
    *You can see all weapons here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local iteration, weapon = utils.weapon.get("WEAPON_ASSAULTRIFLE")
local dumpedTable = utils.table.dump(weapon)

print(iteration, weapon) -- Returns 194 and table: 00000000D35BBFE0
print(dumpedTable) -- Returns all information about that weapon
```
```lua
local iteration, weapon = utils.weapon.get("WEAPON_ASSAULTRIFLE")
print(weapon.label) -- Returns weapon label
```
```lua
local iteration, weapon = utils.weapon.get("WEAPON_ASSAULTRIFLE")

for k,v in ipairs(weapon.components) do
	print(v.label) -- Returns components labels
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/weapon/get.md)