# Using A Context Menu

ESX Context is a great way to make light weight menus for ESX. this tutorial will show you all the tips and tricks you need to have amazing context menus!

## Structure

ESX Context Has a very easy to use structure where you have 4 Key elements:

| Part      | Data Type |                            Explanation                    |
|-----------|-----------|-----------------------------------------------------------|
| position  | string    |  left | center | right                                    |
| elements  | table     | The Elements to show in the menu                          |
| OnSelect  | function  | Triggers when an element is clicked on                    |
| onClose   | function  | Triggers when the Context Menu Is Closed                  |

## Elements

Elements are the data that the client sees in the menu, they typically consist of 2 key parts, `title` and `icon`,
the title, is what is shown to the user, and the icon is used to make the option look nice. There are 4 types of elements available to use.

```lua title="Simple Elements"
local elements = {
  {
    icon="fas fa-check",
    title="Item A",
  },
  { -- simple Element with a little description underneath the Title
     icon="fas fa-check",
     title="Item A",
      description="Some description here. Add some words to make the text overflow."
  },
}
```

```lua title="Disabled Elements"
local elements = {
    {
      disabled= true, -- Set Element as Disabled
      icon="fas fa-times",
      title="Disabled Item",
     },
    { -- disabled Element with a little description underneath the Title
      disabled=true,
      icon="fas fa-times",
      title="Disabled Item",
      description="Some description here. Add some words to make the text overflow."
     },
}
```

```lua title="UnSelectable Elements"
-- Normally used as a Header/Label to show the purpose of the context Menu open
local elements = {
       {
         unselectable= true,
         icon="fas fa-info-circle",
         title="Unselectable Item (Header/Label?)",
     },
}
```

```lua title="Text Input Elements"
-- Normally used as a Header/Label to show the purpose of the context Menu open
local elements = {
    {
      icon="", -- disable icon
      title="Input Text", -- Title of text input to show to user
      input=true, -- Allow input
      inputType="text", -- set type to Text
      inputPlaceholder="Placeholder...", -- PlaceHolder to Show
      name="textinput1", -- input identifier
   },
}
```

```lua title="Number Input Elements"
-- Normally used as a Header/Label to show the purpose of the context Menu open
local elements = {
   {
    icon="",  -- disable icon
    title="Input Number", -- Title of number input to show to user
    input=true, -- allow input
    inputType="number", -- allow numbers to be inputted
    inputPlaceholder="Placeholder...", -- PlaceHolder value
    inputValue=0, -- default value
    inputMin=0, -- minimum value
    inputMax=50, -- maximun value
    name="numberinput1", -- input identifier
   },
}
```

## On Select

This function is triggered when an element is selected and returns arguments `element` and `menu`. We use
`element.` is used to grab the selected element and its atributes.

```lua
function onSelect(menu,element)
  print("Element Selected - ",element.title)

  --- for a simple element
  if element.title == "Item A" then
    print("Item A Selected")
    ESX.CloseContext()
  end

  -- for slider elements 

  if element.name == "textinput1" then 
    print("Name - ".. element.inputValue)
  end

  if element.name == "numberinput1" then
    print("Age - " element.inputValue)
  end

  ESX.CloseContext()
end
```

## On Close

This function is triggered when the Context Menu is closed and returns the simple argument - `menu`.

```lua
function onClose(menu)
  print("Menu closed.")
  print(ESX.DumpTable(menu))
end
```

## End Result

Once you combine these 4 parts together, you get a light weight and cool looking interface :)

```lua

local Elements = {
  {
   unselectable=true,
   icon="fas fa-info-circle",
   title="Unselectable Item",
  },
  {
   icon="fas fa-check",
   title="Item A",
   description="Some description here. Add some words to make the text overflow."
  },
  {
   disabled=true,
   icon="fas fa-times",
   title="Disabled Item",
   description="Some description here. Add some words to make the text overflow."
  },
  {
    icon="", -- disable icon
    title="Input Text", -- Title of text input to show to user
    input=true, -- Allow input
    inputType="text", -- set type to Text
    inputPlaceholder="Name ...", -- PlaceHolder to Show
    name="textinput1", -- input identifier
   },
   {
    icon="",  -- disable icon
    title="Input Number", -- Title of number input to show to user
    input=true, -- allow input
    inputType="number", -- allow numbers to be inputted
    inputPlaceholder="Age (0-50)", -- PlaceHolder value
    inputValue=0, -- default value
    inputMin=0, -- minimum value
    inputMax=50, -- maximun value
    name="numberinput1", -- input identifier
   },
}

ESX.OpenContext("right" , Elements, 
  function(menu,element) -- On Select Function
  print("Element Selected - ",element.title)

  --- for a simple element
  if element.title == "Item A" then
    print("Item A Selected")
    ESX.CloseContext()
  end

  -- for slider elements 

  if element.name == "textinput1" then 
    print("Name - ".. element.inputValue)
  end

  if element.name == "numberinput1" then
    print("Age - " element.inputValue)
  end

  ESX.CloseContext()
end, function(menu) -- on close
  print("Menu closed.")
  print(ESX.DumpTable(menu))
end)

```
