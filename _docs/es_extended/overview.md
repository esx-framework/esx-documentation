---
title: <b>Overview</b>
category: ES Extended
order: 1
---

Instructions on how to download and install **ES Extended**.

#### Requirements

- [essentialmode + es_admin2](https://forum.fivem.net/t/release-essentialmode-base/3665)
- [esplugin_mysql](https://forum.fivem.net/t/release-essentialmode-base/3665/1181)
- [mysql-async](https://github.com/brouznouf/fivem-mysql-async/releases/latest)
- [async](https://github.com/esx-org/async/releases/latest)

#### Downloading
There are three ways to download **ES Extended**

1) Using [FVM Installer](https://github.com/qlaffont/fvm-installer)
```
fvm install --save --folder=essential esx-org/es_extended
fvm install --save --folder=esx esx-org/esx_menu_default
fvm install --save --folder=esx esx-org/esx_menu_dialog
fvm install --save --folder=esx esx-org/esx_menu_list
```

2) Using Git
```
cd resources
git clone https://github.com/ESX-Org/es_extended [essential]/es_extended
git clone https://github.com/ESX-Org/esx_menu_default [esx]/[ui]/esx_menu_default
git clone https://github.com/ESX-Org/esx_menu_dialog [esx]/[ui]/esx_menu_dialog
git clone https://github.com/ESX-Org/esx_menu_list [esx]/[ui]/esx_menu_list
```
3) Installing Manually
- Download [es_extended](https://github.com/ESX-Org/es_extended/releases/latest)
  - Put it in `resources/[essential]`
- Download [esx_menu_default](https://github.com/ESX-Org/esx_menu_default/releases/latest)
  - Put it in `resources/[esx]/[ui]`
- Download [esx_menu_dialog](https://github.com/ESX-Org/esx_menu_dialog/releases/latest)
  - Put it in `resources/[esx]/[ui]`
- Download [esx_menu_list](https://github.com/ESX-Org/esx_menu_list/releases/latest)
  - Put it in `resources/[esx]/[ui]`

#### Installing
  
1) Import es_extended.sql into your `essentialmode` database.
  
2) Add this in your server.cfg:
```
start es_extended

start esx_menu_default
start esx_menu_dialog
start esx_menu_list
```