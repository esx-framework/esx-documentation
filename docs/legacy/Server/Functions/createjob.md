# ESX.CreateJob

```lua
ESX.CreateJob(name, label, grades)
```

This function create a job at runtime.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| name     | string     | No       | -             | Name of the job|
| label    | string     | No       | -             | Label of the job   |
| grades    | table     | No       | -             | Table containing job grades information: {jobname, grade, name of the grade, label of the grade, salary of the grade}  |



## Example

```lua
ESX.CreateJob('sellerjob', 'Selling Agency', {
  'sellerjob',
  0,
  'recruit',
  'Trainee Seller',
  '100'
})
```
