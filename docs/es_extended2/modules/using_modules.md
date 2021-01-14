# Enable/Disable Modules

Which modules are active when starting an ESX v2 server are determined by the
contents of the `module.json` in the following paths

* `modules/__core__/modules.json` - For essential core modules utilized by ESX v2
* `modules/__base__/modules.json` - For base modules included with ESX v2
* `modules/__user__/modules.json` - For user third party modules

**To disable/enable modules simply remove/add the name module
from the respective modules.json file**

> **Warning:**
>
> We recommend you never disable `__core__` modules as they are essential to the
> internal operations of ESX v2. Disabling these modules can result in significant
> problems with the behavior of ESX v2


## Adding modules

When adding new modules to your server, always place them in the `modules/__user__/`
directory.

To activate them, simply add the name of the module (*its directory name*),
to `modules/__user__/modules.json`

> You may not have a modules.json if this is your first time adding
> a third party module. Simply create the file according to the format below,
> and replace the text with your modules name
>
**Example `modules.json`**
```json
[
  "your-module-here"
]
```

## Deactivating Modules

Modules can be deactivated the same way as they are activated, just the
opposite way around!

If you would like to disable a ESX `__base__` or `__user__` module, simply navigate to
to the respective `modules.json`  and remove the module from the file.

Now restart your server and this module should no longer be running.
