---
title: ESX.Scaleform.Utils.RequestScaleformMovie
category: ES Extended
order: 6
---

```lua
ESX.Scaleform.Utils.RequestScaleformMovie(movie)
```

Requests and returns the scaleform movie parsed.

## Example
```lua
	local scaleform = ESX.Scaleform.Utils.RequestScaleformMovie('MP_BIG_MESSAGE_FREEMODE')

	PushScaleformMovieFunction(scaleform, 'SHOW_SHARD_WASTED_MP_MESSAGE')
```