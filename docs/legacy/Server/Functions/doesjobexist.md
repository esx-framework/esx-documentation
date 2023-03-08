# DoesJobExist

```lua
ESX.DoesJobExist(job, grade)
```

This function returns whether or not the job and grade specified is valid.

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation           |
| --------- | --------- | -------- | ------------- | --------------------- |
| Job Name  | string    | No       | -             | The name of the job.  |
| Job Grade | number    | No       | -             | The grade of the job. |

## Example

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local Job = 'police'
local Grade = 4 -- highest police grade

if ESX.DoesJobExist(Job, Grade) then -- make sure the Job and Grade are both defined in the database
  xPlayer.setJob(Job, Grade)
end
```
