# ESX.TriggerServerCallback

```lua
ESX.TriggerServerCallback(name, cb, args)
```

This function triggers a server callback. See [ESX.RegisterServerCallback](../../server/functions/registerservercallback.md) on registering server callbacks.

!!! warning
      This is an async function and must be treated as one, examples on how to properly use the async function callback is shown below.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                                                                                                                                                         |
|----------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | string    | No       | -             | A valid server callback name                                                                                                                                        |
| cb       | function  | No       | -             | The returned function when the async task has completed. The invoked function a varied size of arguments depending on how many arguments are parsed from the server |
| args     | any       | Yes      | -             | Any arguments to parse to the async function                                                                                                                        |

## ESX.TriggerServerCallback Example

```
local myAgument = 'hello'

ESX.TriggerServerCallback('esx_example:test', function(isBusy, numKills)
	print(isBusy, numKills)
	print('this code is an asynchronous task')
end, myAgument)

print('this code is running in sync')
```