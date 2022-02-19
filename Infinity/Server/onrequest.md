# OnRequest

```lua
ESX.OnRequest(name, cb)
```

This function registers a server request.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                                                                                                      |
|----------|-----------|----------|---------------|------------------------------------------------------------------------------------------------------------------|
| name     | string    | No       | -             | Server callback name                                                                                             |
| cb       | function  | No       | -             | Callback function, which contains an varied size of arguments depending on how many arguments parsed from client |
| ...args  | any       | No       | -             | The args provided after the handler on the client Request                                          |

## Example

```lua
local myMemeServer = 'Meme data string'
-- The first argument of the handler function is the player source (NetID),
-- cb is the callback function we call when we want to return data to client
-- subsequent parameters were the arguments called from the client.
ESX.OnRequst('myScript:getMeme', function(src, cb, param1, param2)
  -- Logic needed to derive whatever data you would like to send back
  -- using the passed params on the handler (src, param1, param2, etc)

  -- Send back our meme data to client handler
  cb(myMemeServer)
end)
```
