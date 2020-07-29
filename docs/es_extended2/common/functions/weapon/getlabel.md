# utils.weapon.getLabel

```lua
utils.weapon.getLabel(weaponName)
```
This function gets the weapon label for a given weapon.

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
local weaponLabel = utils.weapon.getLabel('WEAPON_ASSAULTRIFLE')

print(weaponLabel) -- Returns label of weapon
```