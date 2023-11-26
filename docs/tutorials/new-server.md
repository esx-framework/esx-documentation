# Base Server and Database Setup

This is the offical guide to installing and setting up a Server using ESX as the server framework and MariaDB for the system database.

- [Host your server with Oxygenserv, use code `ESX` for 40% off](https://www.oxygenserv.com/en/hosting/gta-v-server/)

## Section 1: Installation of MariaDB

The majority of resources in FiveM and ESX were designed for use with MySQL 5.7, which may encounter compatibility issues with MySQL 8. We recommend the use of MariaDB for better compatibility and greater performance overall.

1. Download and run the installer for [MariaDB 10.11.4](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.11.4).
2. Click on Next. [(Screenshot)](https://prnt.sc/Y3txPkEvRPrs)
3. Accept the license agreement and click on Next. [(Screenshot)](https://prnt.sc/n_aespb1GfFz)
4. Ensure that all options are selected for install and clock on Next. [(Screenshot)](https://prnt.sc/n_DfWFVwfa5Z)
5. Ensure that the checkbox for "Modify password for database user 'root'" is selected, enter the same password in both boxes, and click on Next. [(Screenshot)](https://prnt.sc/_zAnafPmYauy)
6. Accept the defaults and click on Next. [(Screenshot)](https://prnt.sc/UU2bY9IfPYJJ)
7. Click on Install and wait for the installation to complete. [(Screenshot)](https://prnt.sc/S80D-1he9hqb)
8. If you receive a User Account Control prompt asking to allow the installation, click on Yes.
9. Click on Finish. [(Screenshot)](https://prnt.sc/7i3B_VxoOCOG)

## Section 2: Creating your FiveM Server database and user

1. Open HeidiSQL which was installed with MariaDB.
2. The Hostname/IP address should by default be 127.0.0.1 which should not be changed, unless you are connecting to the database from a different computer.
3. Enter the username `root` with the password you set in step 5 from section 1.
4. Click on Open.
5. Right-Click on Localhost in the list on the left, hover over `Create new` and then click on `Database`.
6. Type in a name for your database (we will use the example name `testserver`), then click on OK.
7. Click on the Tools menu, then click on User Manager.
8. Click on Add in the top-right corner (with the green plus sign next to it). This will create a new user.
9. On the right side of the User Manager window, enter a username in the `User name` field, enter a password and repeat.
10. Below the Repeat Password box, click on Add Object.
11. Select the database and click on OK.
12. The only permissions that are required for an ESX-based FiveM server are `SELECT`, `ALTER`, `CREATE`, `DELETE`, `INSERT` and `UPDATE`. Expand the database `testserver`, tick the boxes next to the permissions just mentioned, then click on Save.

## Section 3: Installing The Server

1. Go to the FiveM [Artifact Downloads page](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)
2. Download the most recent artifact version, [see here](https://i.imgur.com/OMcCVIW.png) for an example.
3. Open the `server.zip` you just downloaded.
4. Choose a location on your server where you want to store your files. We'll use the example `C:\fxserver` (aka the Server Home folder).
4. Extract the Zip file you downloaded to a folder within `C:\fxserver` with the name being whatever the build number is. For example, if you downloaded version 6501 the folder path would be `C:\fxserver\6501`.
5. In the server home folder, create a file called `server_start.bat`. Open it with Notepad or Visual Studio Code, paste the code below and save.

```bat
@echo off
:start
"C:/fxserver/6501//FXServer.exe" +set serverProfile "myserver" +set txAdminPort 40120
timeout 30
goto start
```

6. Run the `server_start.bat` file you just created.
7. Assuming you are now on a menu similar to [this](https://prnt.sc/pvRbppA5_s7e), click `Next`.
8. Enter a name for the server, and click on Next.
9. For the deployment type, we will select `Remote URL Template`. This will allow us to use the ESX Framework recipe to install the latest version of ESX along with other resources such as `esx_policejob` and `esx_ambulancejob`.
10. Paste the below recipe link into the URL field.

```
https://raw.githubusercontent.com/esx-framework/esx-recipes/legacy/recipe.yaml
```

11. In the Data Location section, enter the path `C:/fxserver/testserver` (noting the forward slashes in the path) and click on Next.
12. Click on `Go to Recipe Deployer`.
13. Do not modify the recipe, and click on Next.
14. Enter your server License Key (which you can get from [Keymaster](https://keymaster.cfx.re)) and click on `Show/Hide Database options`.
15. For the database parameters, ensure that the Host and Port are `localhost` and `3306` respectively. Enter the database username and password you created in section 2 as well as the database name. Once entered, click on Run Recipe.
16. Once the recipe has finished running, click on Done.
17. You are now taken to a window containing the fresh version of your new `server.cfg` file. You can make changes as needed, however it's strongly recommended to take a backup of the file first before doing so.
18. Click on `Save and Run Server` to launch the newly-built server!

There we go! You have successfully installed and configured your first basic FiveM Server built on the ESX Framework. If you have any issues, please feel free to open a thread in the ESX Support forum on [Discord](https://discord.esx-framework.org/) where someone can give you a hand to troubleshoot.