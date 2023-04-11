# hasItem

```lua
xPlayer.hasItem(item, metadata)
```

This functions checks if the player has the specified item, if they do, it will return item and item count :)

## Argument

| Argument | Data Type | Optional | Default Value | Explanation   |
| -------- | --------- | -------- | ------------- | ------------- |
| item     | string    | No       | -             | Item name     |
| metadata | string    | yes      | -             | Item metadata |

## Example

```lua
local item = xPlayer.hasItem('bread')
if item then
  print('you have '.. item.count .. ' ' .. item.label)
else
  print('you do not have any bread!')
end
```
