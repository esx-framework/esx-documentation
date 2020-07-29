# utils.weapon.getComponent

```lua
utils.weapon.getComponent(weaponName, weaponComponent)
```
This function returns the weapon component object for a weapon. Includes the component label, name and hash key. See the weapon config file for the available components.

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| weaponName | string | No | - | Sets weapon name |
| weaponComponent | string | No | - | Sets component of weapon |

!!! note
    *You can see all weapons here <Link not create yet\>.*

### Dependency
```lua
local utils = M("utils")
```

### Example

!!! note
    *Use utils.weapon.get(weaponName) to find the component or search in weapons.json file.*

```lua
local weaponComponent = utils.weapon.getComponent('WEAPON_ASSAULTRIFLE', "COMPONENT_ASSAULTRIFLE_CLIP_01")
local tableDump = utils.table.dump(weaponComponent)

print(tableDump) -- Returns all information about this weapon component
```
```lua
local weaponComponent = utils.weapon.getComponent('WEAPON_ASSAULTRIFLE', "COMPONENT_ASSAULTRIFLE_CLIP_01")

print(weaponComponent.label) -- Returns component label of weapon
```