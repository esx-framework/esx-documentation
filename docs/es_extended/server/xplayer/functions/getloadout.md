# xPlayer.getLoadout

```lua
xPlayer.getLoadout()
```

This function returns the current player loadout.

#### xPlayer.getLoadout Example

```lua
for k,v in ipairs(xPlayer.getLoadout()) do
	print(v.ammo)
end
```
