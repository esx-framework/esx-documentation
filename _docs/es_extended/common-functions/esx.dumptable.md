---
title: ESX.DumpTable
category: ES Extended
order: 3
---

```lua
ESX.DumpTable(table)
```

Dumps the table to a readable string with a tree structure. It's not perfect but does the job

```lua
	local myTable = { {esx = 'awesome'} }

	local dumpedTable = ESX.DumpTable(myTable)

	print(dumpedTable)

	-- print below
	{
		[1] = {
			["esx"] = awesome,
		},
	}

```