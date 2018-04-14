---
title: <b>Start order</b>
category: ES Extended
order: 2
---

Start order of all ESX scripts for running them **properly**.

#### Requirements

- Logic

#### Things to know

When you're downloading scripts, specially esx ones, they are some "requirements" wich are important for them to run properly.
The starting order of each files in your cfg file is **important**. Requirements scripts need to be started before the script you're installing. If it not, you're script is not gonna work as intended or not working at all.
So be sure to start them in the right order.

#### Exemple CFG file

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"

set mysql_connection_string "server=adress;database=dbname;userid=user;password=psswd"
set es_enableCustomData 1
set sv_licenseKey "XXXXXXXXXXXXXXXXXXX"
sv_scriptHookAllowed 1
rcon_password blablablabla
sv_hostname "ESX PUBLIC SERVER"
set temp_convar "ESX"

# disable announcing? clear out the master by uncommenting this
#sv_master1 ""

# want to only allow players authenticated with a third-party provider like Steam?
sv_authMaxVariance 1
sv_authMinTrust 1

# add system admins
add_ace group.admin command allow # allow all commands
add_ace group.admin command.quit deny # but don't allow quit
add_ace resource.essentialmode command.add_ace allow
add_ace resource.essentialmode command.add_principal allow
add_principal identifier.steam:XXXXXXXXXXXXX group.admin # add the admin to the group

# hide player endpoints in external log output
sv_endpointprivacy true

#### FIVEM DEFAULT ####
    start mapmanager
    start chat
    start spawnmanager
    start sessionmanager
    restart sessionmanager
    start fivem
    start hardcap
    start rconlog
    start scoreboard
    start baseevents

#### MYSQL ASYNC
    start mysql-async

#### ESSENTIAL MODS
    start essentialmode
    start esplugin_mysql
    start es_admin2
    start es_extended

#### ESX REQUIRED MODS
    start instance
    start cron
    start skinchanger
    start esx_skin
    start esx_menu_default
    start esx_menu_list
    start esx_menu_dialog
    start esx_phone
    start esx_addonaccount
    start esx_addoninventory
    start esx_datastore
    start esx_society
    start esx_service
    start esx_billing

#### ESX JOBS
    start esx_jobs
    start esx_joblisting
    start esx_taxijob
    start esx_mecanojob
    start esx_policejob    
    start esx_property
    start esx_realestateagentjob
    start esx_bankerjob
    start esx_ambulancejob
    start esx_vehicleshop

#### ESX ANY OTHER MODS
    start esx_status
    start esx_basicneeds
    start esx_clotheshop
    start esx_garage
    start esx_holdup
    start esx_drugs
    start esx_atm

#### ANY NON ESX MODS
    #start nonESXmod
```
