# SearchInventory

```lua
ESX.SearchInventory(item, count)
```

This function search inventory for the specified item and count.

## Arguments

| Argument  | Data Type | Explanation                                                          |
|-----------|-----------|----------------------------------------------------------------------|
| item      | string    | The item to search for                                               |
| count     | int       | the quantity of the item                                             |

### Example Usage

```lua
 CreateThread( function()
    while true do
        Wait(2000)
        if checkItem('bread') then
            print('I just ate some bread')
        else 
            print('I have no more bread')
        end

    end    
end)
function checkItem(item)
  local hasItem = ESX.SearchInventory(item, 1)
        if hasItem >= 1 then
          return true
        else
          return false
        end
end
```
