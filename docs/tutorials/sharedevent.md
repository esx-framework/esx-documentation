# esx:getSharedObject Deprecation

Hello! you are probably here because your server told you to come here! This Event has been in ESX for around 5 years and should no longer be used since we now have way better ways to import the ESX object into your script!

## Export

The Export can be simply used by doing:

```lua
ESX = exports["es_extended"]:getSharedObject()
```

This Is great if your working on a multi-framework script so that the user does not have to change anything to switch between the frameworks.
It Also has the benifit of not requiring you to wait into it has recived the object and prevents Race conditions.

## Import

The import can be used by simply adding this into the `fxmanifest.lua`:

```lua
shared_script '@es_extended/imports.lua'
```

The import is the **best** and recommended way to use ESX within a script, this is because it will automatically sync data between ESX and the script,
meaing the script will have automatic knowlege of ESX.PlayerData aswell as if you are loaded in aswell as the ability to detect when you are Relogging and/or switching characters, meaning no vulnerable events needed, to having to grab the entire playerdata table every time you want to use it, its just there, and working and amazing.
