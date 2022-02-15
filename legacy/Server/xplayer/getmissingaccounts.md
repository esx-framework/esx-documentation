# getMissingAccounts

```lua
xPlayer.getMissingAccounts(cb)
```

This function gets missing accounts. It's an internal function used when saving player data to database and should not be used.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation                                                              |
|----------|-----------|----------|---------------|--------------------------------------------------------------------------|
| cb       | function  | No       | -             | Callback function with `missingAccounts` (index-value table) as argument |

## Returned Table Content

The returned table contains an index-value table, and for each child there is a key-value table with the following content:

| Key          | Value         |
|--------------|---------------|
| Account name | Account label |
