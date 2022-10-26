# GetJobs

```lua
ESX.GetJobs()
```

Returns all known jobs along with their grades.

## Example

```lua
function getJobs()
  local jobs = ESX.GetJobs() -- returns ESX.Jobs
  local availableJobs = {} -- Define our table to use
  for k,v in pairs(jobs) do -- loop through all Jobs
    if v.whitelisted == false then -- Check they are not whitelisted
      availableJobs[k] = {label = v.label} -- add them to the available jobs table
    end
 end
 return availableJobs -- returns all Non-Whitelisted Jobs
end
```
