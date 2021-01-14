# Database Queries

The way we interface with the database in ESX v2 is through its integrated
query handler, that can be imported using the `persistent` module. This module
handles any persistent data that needs to be stored through the database.

**Importing the `persistent` Module**

Place this at the top of your `module.lua` in the module
where you wish to use/create persistent data

```lua
M('persistent')
```

TODO: Finish query section
