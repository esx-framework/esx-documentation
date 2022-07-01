# setJob

```lua
xPlayer.setJob(name, grade)
```

This functions sets the player job, the job must be defined in the `jobs` database table.

## Arguments

| Argument | Data Type     | Optional | Default Value | Explanation |
|----------|---------------|----------|---------------|-------------|
| name     | string        | No       | -             | Job name    |
| grade    | string&number | No       | -             | Job grade   |

## Example

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local Job = "police"
local Grade = 4 -- highest police grade

if ESX.DoesJobExist(Job, Grade) then -- make sure the Job and Grade are both defined in the database
  xPlayer.setJob(Job, Grade)
end 
```
