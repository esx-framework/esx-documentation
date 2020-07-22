# utils.weapon.getComponent

```lua
utils.weapon.getComponent(weaponName, weaponComponent)
```
This function returns the weapon component object for a weapon. Includes the component label, name and hash key. See the weapon config file for the available components.

### Example
```lua
local utils = M("utils")

local weaponComponent = utils.weapon.getComponent('WEAPON_ASSAULTRIFLE', "COMPONENT_ASSAULTRIFLE_CLIP_01")
local tableDump = utils.table.dump(weaponComponent)
print(tableDump) -- Retruns all information about this weapon component

-- Example label component
print(weaponComponent.label) -- Returns native label of weapon component
```