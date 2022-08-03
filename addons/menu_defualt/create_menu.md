# Creating a Menu

ESX Menu Default is a great way to create easy to use Menus for players. However, it is not always clear how to use it, this tutorial will show you exactly how to!

## Structure

`ESX.UI.Menu.Open(type, namespace, name, data, OnSelect, cancel)`

There are a couple key parts to creating a menu:

| Part      | Data Type |                            Explanation                                    |
|-----------|-----------|---------------------------------------------------------------------------|
| type      | string    | The Type of menu to display, in this case, `defualt`                      |
| namespace | string    | Where to store the menu, normally `GetCurrentResourceName()` is used      |
| name      | string    | Unique Name For the menu                                                  |
| data      | table     | The Elements to show in the menu                                          |
| OnSelect  | function  | Triggers when an element is chosen                                        |
| cancel    | function  | Triggers when they attempt to close a menu                                |

## Elements

Elements are the data that the client sees in the menu, they typically consist of 2 key parts, `name` and `label`,
the Label, is what is shown to the user, and the name is what is used to identify the element later on.

```lua title="Simple Element"
-- @Label - String - name to show to user
-- @name - String - element identifier
local Elements = {
  {label = "I`m An Element", name = "element1"}
}
```

```lua title="Slider Elements"
-- @Label - String - name to show to user
-- @name - String - element identifier
-- @value - Number - Default value for slider
-- @type - string - define the element Type
-- @min - Number - Minimum Slider Value
-- @max - Number - Maximum Slider Value
local Elements = {
  {label = "Bread - £200", name = "bread", value = 1, type = 'slider', min = 1,max = 100}
}
```

```lua title="HTML Elements"
-- @Label - String - name to show to user
-- @name - String - element identifier
-- Element Labels also have HTML support!
local Elements = {
  {label = '<span style="color:green;">HEY! IM GREEN!/span>', name = "geen_element"}
}
```

## On Select

This function is triggered when an element is selected and returns arguments `data` and `menu`. We use
`data.current` is used to grab the selected element and its atributes.

```lua
funcion(data, menu)
  --- for a simple element
  if data.current.name == "element1" then
    print("Element 1 Selected")
    menu.close()
  end

  -- for slider elements 

  if data.current.name == "bread" then 
    print(data.current.value)
  end
end
```

## Cancel

This function is triggered when the user tries to close the menu and returns arguments `data` and `menu`.

```lua
funcion(data, menu)
  print("Closing Menu - " .. menu.title)
  menu.close() -- close menu
end
```

## End Result

Once you combine all these parts, you get a Menu Interface in which you can interact with :)

```lua
    local Elements = {
        {label = "I`m An Element", name = "element1"},
        {label = "Bread - £200", name = "bread", value = 1, type = 'slider', min = 1,max = 100},
        {label = '<span style="color:green;">HEY! IM GREEN!/span>', name = "geen_element"}
      }
      
      ESX.UI.Menu.Open("default", GetCurrentResourceName(), "Example_Menu", {
        title = "Example Menu", -- The Name of Menu to show to users,
        align    = 'top-left', -- top-left | top-right | bottom-left | bottom-right | center |
        elements = Elements -- define elements as the pre-created table
      }, function(data,menu) -- OnSelect Function
        --- for a simple element
        if data.current.name == "element1" then
          print("Element 1 Selected")
          menu.close()
        end
      
        -- for slider elements 
      
        if data.current.name == "bread" then 
          print(data.current.value)
      
          if data.current.value == 69 then 
            print("Nice!")
            menu.close()
          end
        end
      end, function(data, menu) -- Cancel Function
        print("Closing Menu")
        menu.close() -- close menu
      end)
```
