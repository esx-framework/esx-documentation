# ESX.Scaleform.Utils.RequestScaleformMovie

```lua
ESX.Scaleform.Utils.RequestScaleformMovie(movie)
```

This function requests and returns the scaleform movie parsed.

#### ESX.Scaleform.Utils.RequestScaleformMovie Example

```lua
local scaleform = ESX.ScaleForm.Utils.RequestScaleformMovie('MP_BIG_MESSAGE_FREEMODE')

PushScaleformMovieFunction(scaleform, 'SHOW_SHARD_WASTED_MP_MESSAGE')
```
