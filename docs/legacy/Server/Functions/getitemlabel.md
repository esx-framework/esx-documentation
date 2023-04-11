# GetItemLabel

```lua
ESX.GetItemLabel(item)
```

This function returns an item label.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation |
| -------- | --------- | -------- | ------------- | ----------- |
| item     | string    | No       | -             | Item name   |

## Example

```lua
RegisterCommand('checklabel', function(source, args)
    if args[1] == nil then print('no argument') end
    local label = ESX.GetItemLabel(args[1])

    print(label)
end)
```
