# RequestScaleformMovie

```lua
ESX.Scaleform.Utils.RequestScaleformMovie(movie)
```

This function requests and returns a scaleform handle for the movie parsed.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation                                                                       |
|----------|-----------|----------|---------------|-----------------------------------------------------------------------------------|
| movie    | string    | No       | -             | The movie name, [list of avilable scaleforms](https://scaleform.devtesting.pizza) |

## Example

```lua
local scaleform = ESX.ScaleForm.Utils.RequestScaleformMovie('MP_BIG_MESSAGE_FREEMODE')
```
