# The Module System
*There is no more `esx_` prefixed outsides resources on ESX v2.
We have dropped support in favor of the module system*

## What's a module?
In essence, modules are the new replacement for any resource that was previously
prefixed with `esx_`. They serve as a way of encapsulating and accessing common
functions/properties accross ESX.

All 3rd party scripts extending functionality,
must now be packaged according to this module system.

## How do Esx2 modules work?
Modules are composed of three parts (not mandatory, you can only use of of these):

- `client\` - Handle all client-side logic and state (Files will all be sent to client)

- `server\` - Handle all server-side logic and state (Files will stay on the server)

- `shared\` - These scripts handle logic on both the server and the client (server and client side files)

Each of these parts is further divided into three sub parts

- `events.lua`: This is code primarily related to event handling
  (where listeners and their callback functions are mounted)

- `main.lua`: Responsible for importing other modules and managing this module general state.
  (Think of this almost as the entry point and main execution point of your module)

- `module.lua`: Holds the properties and functions you wish to be *public* or *exported*
  to other modules. (Anything that will be accessible outside of your module should be placed here)

## How do I add 3rd Party Modules
Download the module you'd like to install and place it in the `es_extended/modules/__user__/` directory
then add the module to the `es_extended/modules/__user__/modules.json` file.

A `module.json` files should have the following basic structure:

```json
[
  "first-module-here",
  "second-module-here",
  "third-module-here"
]
```

> **Warning - First Time Installation**
>
> If this is your first time stalling, you may not have a `modules.json`
> in the `es_extended/modules/__user__/` directory.
>
> ***Simply, Create one and add the the module's name there***

## Why the Change?
In ESX 2, we went with modules because it was both cleaner and had the benefit of yielding
overall higher performance compared to the multi-script system.

This also hopefully set's a standard & pattern that can remain consistent
across all ESX resources, hopefully improving the development experience as well.
