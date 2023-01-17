# esx:setAccountMoney

## Server Side

This event is triggered when the player has change any money/account

#### Arguments

| Argument    | Data Type | Explanation              |
| ----------- | --------- | ------------------------ |
| player      | number    | player serverId          |
| accountName | string    | money, black_money, bank |
| money       | number    |                          |
| reason      | string    |                          |

### Example Usage

```lua
RegisterNetEvent('esx:setAccountMoney', function(player, accountName, money, reason)
	if accountName == 'money' then
		print(player, ' money is: ', money)
		print('Reason:', reason)
	end
end)
```
