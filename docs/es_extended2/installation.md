# Installation

Instructions on how to download and install **esx-reborn**.

## Requirements
- [An installed MariaDB Server](https://downloads.mariadb.org/) (we will not support MySQL)
- [ghmattimysql by GHMatti](https://github.com/GHMatti/ghmattimysql/releases/tag/1.3.2)
- [Node.Js 10+](https://nodejs.org/en/)
- [cron](https://github.com/esx-framework/cron)


### How to install
1. Grab the resource, install it as usual (place it in the `/resource` subfolder of your FXServer).
2. Open a cmd in the `esx-reborn` resource.
3. Type `npm i` or `yarn` in-order-to install dependents packages.
4. Copy the part of the `server.cfg` sample and paste it to yours.
5. Remove config.json in the ghmattimysql resource, unless you plan to use it instead of set mysql_connection_string.
6. Import `esx-reborn.sql` in your database.


### MariaDB
??? note "How install MariaDB on linux"
    1. Run `sudo nano /etc/yum.repos.d/MariaDB.repo`
    2. Paste the following:
    ```
    [mariadb]
    name = MariaDB
    baseurl = http://yum.mariadb.org/10.5.3/centos7-amd64
    gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
    gpgcheck=1
    ```
    3. Then Ctrl+X, then y to save, then enter
    4. Run `sudo yum remove mariadb-server`
    5. Run `sudo yum remove mariadb`
    6. Run `sudo yum install mariadb`
    7. Run `sudo yum install mariadb-server`
    8. Add `sql_mode='MYSQL40'` below `[mariadb]` in `/etc/my.cnf.d/server.cnf`
    9. Run `mariadb-upgrade`
    10. Run `service mysql restart`
    
??? note "How to install MariaDB on windows"
    1. [download MariaDB](https://downloads.mariadb.org/)
    2. Double click the installer and follow the steps.
       2.1. Read the end-user license agreement and click the next button.
       2.2. Choose the directory that stores the MariaDB files and click the Next button. The default location on Windows is C:\Program Files\MariaDB 10.4\.
       2.3. Type a password for the root user account. You will use this password to connect to MariaDB later.  The root user is the default user of the MariaDB, which has all privileges. The Use UTF8 as the default server's character set option allows you to use the UTF8 as the default character set when you create new databases and tables. Click next.
       2.4. Hit the "install as a service" box. Configure your port and click next.
       2.5. Click next.
       2.6. Click install. You will now install MariaDB.
       2.7. Click finish. 
     3. You can find the MariaDB tools in the startup menu.
     [More information](https://www.mariadbtutorial.com/getting-started/install-mariadb/)
     
```
# minimum resources and config to get it working

set mysql_connection_string "mysql://user:password@localhost/esx-reborn?charset=utf8mb4&multipleStatements=true"

stop webadmin

ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager
ensure hardcap
ensure rconlog
ensure baseevents

ensure yarn

ensure ghmattimysql
ensure cron

ensure esx-reborn # Will now auto-generate fxmanifest.lua to prevent platform-dependant behavior, will prompt you to type ensure esx-reborn in console when fxmanifest has changed. To save some typing, uncomment below lines

# stop esx-reborn
# start esx-reborn

# REQUIRED
# Add permission for esx-reborn to execute ACL commands
add_ace resource.esx-reborn command.add_ace allow
add_ace resource.esx-reborn command.remove_principal allow
add_ace resource.esx-reborn command.add_principal allow
add_ace resource.esx-reborn command.remove_ace allow
add_ace resource.esx-reborn command.list_aces allow
add_ace resource.esx-reborn command.list_principals allow
add_ace resource.esx-reborn command.remove_aces_for_object allow
```
