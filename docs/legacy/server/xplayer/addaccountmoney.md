# addAccountMoney

```lua
xPlayer.addAccountMoney(account, money)
```

This function adds `Money` Instead the specified `account`.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                                                                       |
| -------- | --------- | -------- | ------------- | --------------------------------------------------------------------------------- |
| account  | string    | No       | -             | An valid account, a list of valid accounts can be found in the configuration file |
| money    | number    | No       | -             | Amount of money to add                                                            |

## Example

```lua
  local xPlayer = ESX.GetPlayerFromId(playerId)
  xPlayer.addAccountMoney('bank', 1000)
```
