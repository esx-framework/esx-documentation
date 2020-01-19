# xPlayer.getLoadout

```lua
xPlayer.getLoadout()
```

This function returns the player loadout.

## Returned Table Content

The returned table contains an index-value table, and for each child there is a key-value table with the following content:

| Child      | Data Type | Explanation         |
|------------|-----------|---------------------|
| name       | string    | Weapon name         |
| ammo       | number    | Weapon ammo         |
| label      | string    | Weapon label        |
| components | table     | Weapon component(s) |

## xPlayer.getLoadout Example

```lua
for k,v in ipairs(xPlayer.getLoadout()) do
	print(v.ammo)
end
```
