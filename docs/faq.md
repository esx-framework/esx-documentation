# F.A.Q

Here's some answers to frequently asked questions

## Why does ESX not use Steam as identification anymore? 

Steam identification was ditched the same time as when we ditched essentialmode. The reason is that the Steam identifier does not always belong to a Steam account that owns the game.

- Players who buy a non-Steam copy of the game have the key tied to the Rockstar account - only
- Players who buy a Steam copy of the game have the game tied to a Steam and Rockstar account

This means that non-Steam players can join your server with different Steam accounts to for example get the starting account balances.

The Rockstar identification tied to the game copy, this way if people want to for example farm starting account balances they will have to acquire game keys. Because of all this the Steam identifier is not eligable to use to identify a player.

## Do you provide any suppport, can I receive help?

No we do not provide any support for our projects. It's a full time job to "help" people who are in constant need of help.

The majority of the FiveM scripting "community" are sadly a kind of people who don't want to learn anything and only ask others to fix their problems.

## Do I need essentialmode?

No you do not. Furthermore ES has a SQL injection vulnerability, we recommend you stay away from that ancient framework.

## FXServer Start Order

When installing ESX the start order in your configuration file must be correct. Some ESX resources also require to be started after their depenencies. For example esx_policejob must be started after esx_society.

Here's an example configuration file for all official ESX resources.

??? note "Example server.cfg"
    ```
    endpoint_add_tcp "0.0.0.0:30120"
    endpoint_add_udp "0.0.0.0:30120"
    sv_listingIPOverride "YOUR_IP_ADRESS"

    set sv_licenseKey "<key>" # https://keymaster.fivem.net/ for onesync you must pay fivem, or instead you can buy cheap onesync keys from sites
    set steam_webApiKey "none"
    set mysql_connection_string "mysql://username:password@adress/database?dateStrings=true"
    sv_maxClients 5
    sv_hostname "Your Server Label"
    sv_scriptHookAllowed 0
    sv_endpointPrivacy true

    add_principal group.admin group.user
    add_ace resource.es_extended command.add_ace allow
    add_ace resource.es_extended command.add_principal allow
    add_ace resource.es_extended command.remove_principal allow

    exec resources.cfg
    ```

??? note "Example resources.cfg"
    ```
    start chat
    start sessionmanager
    restart sessionmanager
    start hardcap
    start mysql-async
    start es_extended
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
    start esx_status
    start esx_basicneeds
    start esx_clotheshop
    start esx_garage
    start esx_holdup
    start esx_drugs
    start esx_atm
    ```
