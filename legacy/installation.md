# Installation

Offical guide to installing **ESX Legacy**.

Make sure you have successfully Installed and setup your [database](../../tutorials/database) before you start! :)

## Requirements

- [oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip)
- spawnmanager

## Download

### Using Git

```git
 cd resources
 git clone https://github.com/esx-framework/esx-legacy
```

### Manually

- Download [ESX Legacy](https://github.com/esx-framework/esx-legacy/archive/refs/heads/main.zip)

## Install

- Extract the `[esx]` and `[esx_addons]` folders
- Place Them into the `Resouces` folder in your server.
- Go into the `[SQL]` Folder:

  - Import `legacy.sql` in your database

- Make sure you are **NOT** using any of these resources:

  - `essentialmode`
  - `basic-gamemode`
  - `mapmanager`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `mysql-async`
  - `QBCore`
  - `default_spawnpoint`

- Use The `server.cfg` provided or:
  - Make sure your `server.cfg` to looks similar to this

```diff  title="server.cfg"
add_principal group.admin group.user
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow


ensure oxmysql
ensure spawnmanager
ensure es_extended

ensure esx_menu_default
ensure esx_menu_list
ensure esx_menu_dialog
```

- [Exand your server with unique, multiplayer high quality scripts & minigames From Rcore, Use creator code `ESX` for 10% off](https://store.rcore.cz/esx)
