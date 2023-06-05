# esx_society:checkSocietyBalance

```lua
AddEventHandler('esx_society:checkSocietyBalance', function(society)
```

This event is called when the user check society balance

### Example
```lua
AddEventHandler('esx_society:checkSocietyBalance', function(society)
  local xPlayer = ESX.GetPlayerFromId(source)
  local society = GetSociety(society)
  if society == xPlayer.job.name then
    print('The player '..xPlayer.getName()..' checked society '..society..' balance!')
  else
    print('The player '..xPlayer.getname()..' tried to check society '..society..' balance but was not authorized!')
  end
end)
```
