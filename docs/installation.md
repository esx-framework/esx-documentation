# Installation

Instructions on how to download and install **es_extended** *develop branch*.

## Requirements

- [MariaDB Server](https://downloads.mariadb.org/) (we will not support MySQL)
- [Mysql-Async](https://github.com/brouznouf/fivem-mysql-async)
- [NodeJs 8+](https://nodejs.org/en/)
- [Async](https://github.com/esx-framework/async)
- [Cron](https://github.com/esx-framework/cron)

## Download

### Using Git

```
git clone https://github.com/es_extended/tree/develop
```

### Manually

- Download https://github.com/esx-framework/es_extended/tree/develop

## How to Install

- Put the resources in the `cfx-server-data/resources` directory
- Import `es_extended.sql` in your database
- Open a cmd in the es_extended resource.
- Type `npm i` or `yarn` in-order-to install dependents packages.
- Copy the part of the `server.cfg` sample and paste it to yours.

```
# minimum resources and config to get it working

set mysql_connection_string "mysql://user:password@localhost/es_extended?charset=utf8mb4"

stop webadmin

ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager
ensure hardcap
ensure rconlog
ensure baseevents

ensure yarn

ensure mysql-async
ensure cron

ensure es_extended # Will now auto-generate fxmanifest.lua to prevent platform-dependant behavior, will prompt you to type ensure es_extended in console when fxmanifest has changed. To save some typing, uncomment below lines

# stop es_extended
# start es_extended

# Add permission for es_extended to execute ACL commands
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_ace allow
add_ace resource.es_extended command.list_aces allow
add_ace resource.es_extended command.list_principals allow
add_ace resource.es_extended command.remove_aces_for_object allow
```
