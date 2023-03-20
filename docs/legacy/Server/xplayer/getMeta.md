# getMeta

```lua
xPlayer.getMeta(index, subIndex)
```

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation |
| -------- | --------- | -------- | ------------- | ----------- |
| index    | string    | Yes      | -             |             |
| subIndex | string    | Yes      | -             |             |

## Example

```lua
RegisterCommand('getMeta', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    print(xPlayer.getMeta('shopPrices', 'bread'))
    print(json.encode(xPlayer.getMeta(),{indent=true}))
end, false)
```