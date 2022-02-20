# DefineState

```lua
ESX.DefineState(states)
```

Defines a PlayerData state.
Automatically adds data to the xPlayer Table.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| states   | Table     | No       | -             | States To Define     |

## Table Layout

```lua
    ["statename"] = {
        value = "", -- Default Value (any type)
        type = "VARCHAR(255)", -- Data Type to Store (string)
        save = true -- Save to Database (bool)
    }
```

## Example

```lua
ESX.DefineState({
    ["firstname"] = {
        value = "",
        type = "VARCHAR(255)",
        save = true
    },
    ["DOB"] = {
        value = "21/11/2001",
        type = "VARCHAR(255)",
        save = true
    },
    ["height"] = {
        value = 150,
        type = "INT",
        save = true
    },
})
```