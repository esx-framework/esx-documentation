---
title: esx:onPlayerDeath
category: ES Extended
order: 8
---

```lua
local IsDead = false

AddEventHandler('esx:onPlayerDeath', function()
	IsDead = true
end)

AddEventHandler('playerSpawned', function(spawn)
	IsDead = false
end)
```

Here is an perfect example for checking if the player (client side!) is dead, which is useful for a lot of things.
