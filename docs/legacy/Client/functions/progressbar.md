# Progressbar

```lua
ESX.Progressbar(message, lenght, options)
```

## Usage

* ESX Function
```lua
    ESX.Progressbar("test", 25000,{
        FreezePlayer = false, 
        animation ={
            type = "anim",
            dict = "mini@prostitutes@sexlow_veh", 
            lib ="low_car_sex_to_prop_p2_player" 
        }, 
        onFinish = function()
        --Code here
    end})
```

* Export
  
```lua
    exports["esx_progressbar"]:Progressbar("Unlocking Storage", 3000,{
        FreezePlayer = true, 
        animation ={
            type = "anim",
            dict = "anim@mp_player_intmenu@key_fob@", 
            lib ="fob_click"
        },
        onFinish = function()
        --Code here
    end})
```

* Cancel
  
```lua
    ESX.Progressbar("Unlocking Storage", 3000,{
        FreezePlayer = true, 
        animation ={
            type = "anim",
            dict = "anim@mp_player_intmenu@key_fob@", 
            lib ="fob_click"
        },
        onFinish = function()
        --Code here
    end, onCancel = function()
        --Code here
    end
    })
```

* Scenario
  
```lua
    ESX.Progressbar("Unlocking Storage", 3000,{
        FreezePlayer = true, 
        animation ={
            type = "Scenario",
            Scenario = "PROP_HUMAN_BUM_BIN", 
        },
        onFinish = function()
        --Code here
    end, onCancel = function()
        --Code here
    end
    })
```
  

This function shows a progress bar and execute code on finish and/or on cancel .

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation                               |
| -------- | --------- | -------- | ------------- | ----------------------------------------- |
| message  | string    | No       | -             | The message to display                    |
| lenght   | int       | No       | -             | the duration in ms                        |
| options  |table      | Yes      | -             | Options                                   |
