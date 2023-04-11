# GetItemLabel

```lua
ESX.GetItemLabel(item)
```

This function returns an item label.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation |
|----------|-----------|----------|---------------|-------------|
| item     | string    | No       | -             | Item name   |

## Example

```lua
RegisterCommand('checklabel', function(source, args)
if args[1] == nil then print('no argument') end
local item = args[1]
local label = checkLabel(item)
print(label)
end)

function checkLabel(item)
    local label = ESX.GetItemLabel(item)
    return label
end
```
