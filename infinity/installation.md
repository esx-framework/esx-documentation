---
sidebar_position: 1
---

# Installation

Offical guide to installing **ESX Infinity**.

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
- Extract the `[gamemodes]`, `[base]` and `[addons]` folders
- Put it them into the `resource` directory

## Install

- Make sure you are **NOT** running any of these resources:
  - `essentialmode`
  - `es_extended`
  - `basic-gamemode`
  - `mapmanager`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `default_spawnpoint`

- Add this into your `server.cfg`:

```diff
ensure esx-infinity
```
