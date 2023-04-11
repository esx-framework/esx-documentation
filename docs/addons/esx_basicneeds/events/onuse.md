---
sidebar_label: On Use
---

# esx_basicneeds:onUse

```lua
AddEventHandler("esx_basicneeds:onUse", type, prop_name)
```

This Event is triggered whenever a player Uses a food or drink item, it is used for displaying a prop in the players hands and playing the animation of the type used.

## Arguments

| Argument  | Data Type | Optional | Default Value                                | Explanation                                      |
| --------- | --------- | -------- | -------------------------------------------- | ------------------------------------------------ |
| Type      | string    | No       | -                                            | The Type of item used (either "food" or "drink") |
| Prop Name | string    | Yes      | "prop_cs_burger_01" or "prop_ld_flow_bottle2 | The Prop To Use When Eating                      |

## Example

```lua

AddEventHandler("esx_basicneeds:onUse", function(Type, prop_name)
    if not prop_name then
        prop_name = Type == "food" and "prop_cs_burger_01" or "prop_ld_flow_bottle2"
    end
    print(("Player Used Item! Type: %s. Prop: %s"):format(Type, prop_name))
end)
```
