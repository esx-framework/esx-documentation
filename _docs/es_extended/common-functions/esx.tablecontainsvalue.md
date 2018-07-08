---
title: ESX.TableContainsValue
category: ES Extended
order: 3
---

```lua
ESX.TableContainsValue(table, value)
```

Searches a table and returns if the parsed value is found within.

```lua
	local tableContent = { 'dude', 'esx' }

	local foundValue = ESX.TableContainsValue(tableContent, 'esx') -- returns boolean

	print(foundValue) -- returns true
```