# setMaxWeight

```lua
xPlayer.setMaxWeight(newWeight)
```

This functions sets the max weight that the player can hold in their inventory.

## Argument

| Argument  | Data Type | Optional | Default Value | Explanation    |
|-----------|-----------|----------|---------------|----------------|
| newWeight | number    | No       | -             | New max weight |

## Example

```lua
-- Adds 30 to the max weight if they are police :)
if xPlayer.job.name == "police" then
  xPlayer.setMaxWeight(ESX.GetConfig().MaxWeight + 30)
end
```
