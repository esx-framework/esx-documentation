# Installation

Instructions on how to download and install the basics of **ES Extended**.

## Requirements

- [mysql-async](https://github.com/brouznouf/fivem-mysql-async)
- [async](https://github.com/esx-framework/async)

## Download

### Using Git

```diff
 cd resources
 git clone https://github.com/esx-framework/esx-legacy 
```

### Manually

- Download <https://github.com/esx-framework/esx-legacy>
- Put it in the `resource` directory

## Install

- Import `es_extended.sql` in your database
- Make sure your `server.cfg` to looks similar to this

```diff
add_principal group.admin group.user
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow


start mysql-async
start es_extended

start esx_menu_default
start esx_menu_list
start esx_menu_dialog
```

- Make Sure you are **NOT** running an of these resources:
  - `essentialmode`
  - `basic-gamemode`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `default_spawnpoint`
