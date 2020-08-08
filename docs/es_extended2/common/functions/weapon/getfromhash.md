# utils.weapon.getFromHash

```lua
utils.weapon.getFromHash(weaponHash)
```
This function gets the weapon for through the hash.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| weaponHash | int | No | - | Sets weapon hash |

!!! note
    *You can see all weapons here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local weaponHash = utils.weapon.getFromHash(-1074790547) -- 'WEAPON_ASSAULRIFLE'
local tableDump = utils.table.dump(weaponHash)

print(tableDump) -- Returns all information about weapon
```
```lua
local weaponHash = utils.weapon.getFromHash(-1074790547) -- 'WEAPON_ASSAULRIFLE'

print(weaponHash.description) -- Returns description of weapon
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/common/functions/weapon/getfromhash.md)