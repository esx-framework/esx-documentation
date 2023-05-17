# Creating A Server

This Guide will show the quick and easy way to setup a FiveM server using txAdmin!

- [Host your server with Oxygenserv, use code `ESX` for 40% off](https://www.oxygenserv.com/en/hosting/gta-v-server/)

## Starting Notes

- make sure to register a free licence key at [Cfx.re Keymaster](https://keymaster.fivem.net/)

- When asked for an IP use the Public IPv4 IP of the server :)

## Step 1: Installing The Server

- Head To the [Artifact Download page](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)
- Click the download with the highest number - [see here](https://i.imgur.com/OMcCVIW.png)
- Open the `server.zip` you just downloaded.
- Extract it somewhere you want to store it. We'll pick `C:\FXServer\server`
- Open the extracted folder, it should look like [this](https://docs.fivem.net/server-setup/windows-step-5.png)

## Step 2: Starting Your Server

- In the Extacted folder, find `FXserver.exe` and double click it.
  -This site should open in your browser, if it does not, open your browser and goto `localhost:40120`.
- Make sure the PIN is filled in and then press `Link Account`.
- You will then be prompted to log into your [Cfx.re](https://forum.cfx.re/) account, click `Yes, Allow` once done.
- You will then be promted to create a backup password, incase CFX.re auth does not work.

## Step 3: Setting Up Your Server

- Assuming you are now on a menu similar to [this](https://docs.fivem.net/server-setup/windows-step2-5.png), click `Next`.
- From Here Choose `Popular Template`.
- This will give you a choice of multiple options.
  - CFX Default - A plain server with **0** community resources.
  - [QBCore](https://github.com/qbcore-framework/qb-core) -> An alternative framework to ESX.
  - ESX Legacy -> The offical ESX-Framework Template.
  - ZAP Hosting ESX Pack -> A tweaked ESX Template, maintained by ZAP hosting - **not recommended**.

> For QBCore, ESX Legacy and ZAP Hosting ESX Pack, you will require a database, [see here for how to set this up](./database.md).

- For this Tutorial, we will be selecting **ESX Legacy**.
- Once selected, Press `Save` and then Head to the `Recipe Deployer`!

## Step 4: Deploying Your Server

- The Recipe Deployer will take you to an overview of the Recipe selected.
- By default, these should be correct, so scroll to the bottom and press `Next`.
- It will then ask for your [Cfx.re licence key](https://keymaster.fivem.net/).
- Once Entered, Press `Run Recipe`.
- This will start installing your server!
- once it has finished, click `Save & Run Server`.
- you will then be taken to the txAdmin dashboard, and can load into your server!
