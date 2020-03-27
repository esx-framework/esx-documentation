# F.A.Q

Here's some answers to frequently asked questions

## FXServer Start Order

When you're downloading scripts, especially **ES Extended** scripts there are "requirements". Which are vital to them running properly. The start order of your scripts in your `server.cfg` is _**important**_. Requirements for a script must be above the script that requires it, if it's loaded afterwards the script may not work as intended. So having your start order correct is vital.

??? note "Example server.cfg"
    ```
    endpoint_add_tcp "0.0.0.0:30120"
    endpoint_add_udp "0.0.0.0:30120"
    sv_listingIPOverride "YOUR_IP_ADRESS"

    set sv_licenseKey "XXXXXXXXXXXXXXXXXXX" # https://keymaster.fivem.net/
    set steam_webApiKey "none"
    set mysql_connection_string "server=adress;database=dbname;userid=user;password=psswd"

    sv_maxClients 5
    sv_hostname "Your Server Label"
    sv_scriptHookAllowed 0
    sv_endpointPrivacy true

    add_principal group.admin group.user
    add_ace resource.es_extended command.add_ace allow
    add_ace resource.es_extended command.add_principal allow
    add_ace resource.es_extended command.remove_principal allow

    #### FIVEM DEFAULT ####
        start chat
        start sessionmanager
        restart sessionmanager
        start hardcap

    #### ESSENTIAL
        start mysql-async
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
