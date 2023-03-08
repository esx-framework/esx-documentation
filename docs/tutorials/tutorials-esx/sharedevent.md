# esx:getSharedObject Deprecation

Hello! This Event has been in ESX for around 5 years and should no longer be used since we now have way better ways to import the ESX object into your script!

## Import

The import can be used by simply adding this into the `fxmanifest.lua`:

```lua
shared_script '@es_extended/imports.lua'
```

The import is the **best** and recommended way to use ESX within a script, this is because it will automatically sync data between ESX and the script,
meaing the script will have automatic knowlege of ESX.PlayerData aswell as if you are loaded in aswell as the ability to detect when you are Relogging and/or switching characters, meaning no vulnerable events needed, to having to grab the entire playerdata table every time you want to use it, its just there, and working and amazing.

## Export

The Export can be simply used by doing:

```lua
ESX = exports["es_extended"]:getSharedObject()
```

This Is great if your working on a multi-framework script so that the user does not have to change anything to switch between the frameworks.
It Also has the benifit of not requiring you to wait into it has recived the object and prevents Race conditions.

## Example

We will show how exactly this is done in the following example. I don't recommend this script to anyone, but we'll show it anyway.

We will demonstrate this on the deprecated [esx_communityservice](https://github.com/apoiat/ESX_CommunityService).

### Import

First, we will show the **recommended** and most advantageous method, the import method.

Delete lines `13` and `28`-> `33` from the `client/main.lua` file.

```lua
ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)
```

Subsequently, we will also remove the lines `1` and `3` from the `server/main.lua`.

```lua
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
```

We then **import** the es_extended tables into the resource.
This Can be done by adding the follow line into the `fxmanifest.lua` or the `__resource.lua`:

```lua
shared_script '@es_extended/imports.lua'
```

### Export

As the second and last option, we will show the export method. We will again delete the same lines from the client and server file as the `import` method above.

However, unlike the import, we now export the ESX table into our resource.
We add this export to the very beginning of the `client/main.lua` and the `server/main.lua`.

```lua
ESX = exports["es_extended"]:getSharedObject()
```
