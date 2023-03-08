# getMoney

```lua
xPlayer.getMoney()
```

This function gets the current cash balance.

## Example

```lua
local Cost = 2500 -- Define a suitable cost
local PlayerMoney = xPlayer.getMoney() -- Get the Current Player`s Balance.

if PlayerMoney >= Cost then -- check if the Player`s Money is more or equal to the cost.
  print("you can afford to pay!" ) -- Player has enough money
  xPlayer.removeMoney(Cost) -- remove Cost from balance
else
  print("you cannot afford this!") -- Player`s money is less then cost
end
```
