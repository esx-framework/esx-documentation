# Installation

Instructions on how to download and install the basics of **ESX Infinity**.

## Requirements

- [oxmysql](https://github.com/overextended/oxmysql)

## Download

### Using Git

```diff
 cd resources
 git clone https://github.com/esx-framework/esx-infinity
```

### Manually

- Download <https://github.com/esx-framework/esx-infinity>
- Extract the `[Gamemodes]`, `[base]` and `[addons]` folders
- Put it them into the `resource` directory

## Install

- Make Sure you are **NOT** running an of these resources:
  - `essentialmode`
  - `es_extended`
  - `basic-gamemode`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `default_spawnpoint`

- Add this into your `server.cfg`:

```diff
ensure esx-infinity
```
