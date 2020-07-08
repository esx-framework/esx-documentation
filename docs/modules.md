# Modules 
*_There is no more `esx_` resource on this version. This had been deprecated in favor of modules_*

## What's a module?
A module is an isolated bloc that work independently from any resources or other module (except the core modules provided by esx)

## How does modules work?
Modules are composed of three parts (not mandatory, you can only use of of these) :

- client - handle all client logic (as usual)

- server - handle all server logic (as usual)

- shared - handle both logic

Each part are again divided in three parts in-order-to make things clearer :

- events.lua : responsible of handling events (the code to execute when an event is received)

- main.lua : responsible of importing needed core modules and managing the module state. (control flow)

- module.lua : see this one as all the functions that would be useful to your module.

## How to install a module?
Grab the module you'd like to install. Paste it in the `es_extended/modules/__user__/` directory and add the module name to the list of the `es_extended/modules/__user__/modules.json` file. `modules.json` file should looks like this :

```json
[
  "module-name-here"
]
```

**__WARNING:__** __The file may not already exists if it's your first installation, just create a file named `modules.json` in the `es_extended/modules/__user__/` directory.__

## Why is it better?
For a better and cleaner architecture it's obviously better to have a pattern already set. You'll end up with organized files and modules.

Another thing is the performance, so far, it's more optimized to work this way.