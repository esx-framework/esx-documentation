# utils.weapon.getFromHash

```lua
utils.weapon.getFromHash(weaponHash)
```
This function gets the weapon for through the hash.

### Example
```lua
local utils = M("utils")

local weaponHash = utils.weapon.getFromHash(-1074790547) -- 'WEAPON_ASSAULRIFLE'
local tableDump = utils.table.dump(weaponHash)
print(tableDump) -- Returns all information about weapon

-- Example weapon description
print(weaponHash.description) -- Returns native description of weapon
```