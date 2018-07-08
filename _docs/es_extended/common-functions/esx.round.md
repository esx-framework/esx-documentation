---
title: ESX.Round
category: ES Extended
order: 3
---

```lua
ESX.Round(value)
```

Rounds off a number, removing any decimals.

```lua
	local value = 5.444

	print('value        : ' .. value)            -- returns 5.444
	print('value rounded: ' .. ESX.Round(value)) -- returns 5
```