# clearMeta

```lua
xPlayer.clearMeta(index)
```

## Arguments

| Argument       | Data Type       | Optional | Default Value | Explanation      |
| -------------- | --------------- | -------- | ------------- | ---------------- |
| index          | string/table    | No       | -             |                  |

## Example

```lua
RegisterCommand('clearMeta', function(source)
    local xPlayer = ESX.GetPlayerFromId(source)

     xPlayer.clearMeta('shopPrices')
end, false)
```