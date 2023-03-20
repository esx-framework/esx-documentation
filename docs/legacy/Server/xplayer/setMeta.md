# setMeta

```lua
xPlayer.setMeta(index, value, subValue)
```

## Arguments

| Argument | Data Type           | Optional | Default Value | Explanation |
| -------- | ------------------- | -------- | ------------- | ----------- |
| index    | string              | No       | -             |             |
| value    | number/string/table | No       | -             |             |
| subValue | string              | Yes      | -             |             |

## Example

```lua
RegisterCommand('setMeta', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    xPlayer.setMeta('shopPrices', {bread = 200, water = 300})
end, false)
```