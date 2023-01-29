# esx:setJob

This event is triggered when the player has change his job

#### `job` Argument Information

| child       | type   | explanation |
| ----------- | ------ | ----------- |
| id          | number |             |
| name        | string |             |
| label       | string |             |
| grade       | string |             |
| grade_label | string |             |
| salary      | number |             |
| skin_male   | table  |             |
| skin_female | number |             |

#### `lastJob` Argument Information

It's the same as the job, only it contains the player's previous job

### Example Client-Side Usage

```lua
RegisterNetEvent('esx:setJob', function(job, lastJob)
	print('Client job is: ', job.label)
	print('Last job ', job.label)
end)
```

### Example Server-Side Usage

#### `player` Argument Information

The serverid of a player whose job has changed. (ONLY FOR SERVER SIDE!)

```lua
RegisterNetEvent('esx:setJob', function(player, job, lastJob)
	print(player, ' job is: ', job.label)
	print('Last job ', job.label)
end)
```
