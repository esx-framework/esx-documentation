# Auto Migrations

ESX v2 implements automatic database migrations by accessing a
`.sql` file in the `migrations` folder of modules who need it. ESX v.2
read's this file on module initializationand ensures that the schema
is present on the within the database.

If the schema is not present, ESX will automatically insert the
tables and rows at module initialization.

If the schema is present, ESX will simply initalize the module as normal.

## Setting Up an Auto Migration

The migration sequence is triggered by an event handler typically located
in `server/events.lua`. Here is an example from the `owned.vehicles` core module

`events.lua`
```lua
local migrate = M('migrate')

on("esx:db:ready", function()
  migrate.Ensure("owned.vehicles", "core")
end)
```

First we import the `migrate` module using the M() import method and set it
equal to the variable `migrate`.

We then access the `ensure` method by calling it using
`migrate.Ensure(moduleName, moduleGroup)`

In this case the moduleName is `owned.vehicles` and the moduleGroup is
`core`.

In order for our migration to take place, we must have an `*.sql`, present
within the migrations directory of our module. Here is the directory structure
for the `owned.vehicles` module


**Directory for `owned.vehicles`**
```
  Client\
    events.lua
    main.lua
    module.lua
  Migrations\
    0.sql <--- What must be present
  Server\
    events.lua
    main.lua
    module.lua
```

Once the module is setup correctly with the `Migrations/*.sql` file and the
event listener is added in `events.lua`, ESX will automatically migrate
on this modules initalization if needed.

TODO: Confirm accuracy of migration system
