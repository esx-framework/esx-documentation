# setAccountMoney

## Client Side

This event is triggered when the player has change any money/account

#### `account` Argument Information

| child | type   | explanation                             |
| ----- | ------ | --------------------------------------- |
| name  | string | Account name (money, black_money, bank) |
| money | number | Account balance                         |
| label | string | Account label                           |

### Example Usage

```lua
RegisterNetEvent('esx:setAccountMoney', function(account)
	if account.name == 'money' then
		print('Client money is: ', account.money)
	end
end)
```
