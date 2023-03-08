# Default Spawn Position

#### Available from this version: [1.9.2](https://github.com/esx-framework/esx_core/releases/tag/1.9.2)

From the update 1.9.2, the default position will no longer be changed in the database but in the es_extended config on this line.

Line 21

```lua
Config.DefaultSpawn = {x = -269.4, y = -955.3, z = 31.2, heading = 205.8}
```

If you are moving from older versions, you must insert this sql. So if you want to use the new system for setting the default position.

```sql
ALTER TABLE `users`
ALTER `position` SET DEFAULT NULL;
```
