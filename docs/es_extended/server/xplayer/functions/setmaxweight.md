# xPlayer.setMaxWeight

```lua
xPlayer.setMaxWeight(newWeight)
```

This functions sets the max weight that the player can hold in their inventory.

## Argument

| Argument  | Data Type | Optional | Default Value | Explanation    |
|-----------|-----------|----------|---------------|----------------|
| newWeight | number    | No       | -             | New max weight |

#### xPlayer.setMaxWeight Example

```lua
if xPlayer.group ~= 'user' then
	xPlayer.setMaxWeight(ESX.GetConfig().MaxWeight + 30)
end
```
