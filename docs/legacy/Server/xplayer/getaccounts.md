# getAccounts

```lua
xPlayer.getAccounts()
```

This function gets all registered player accounts.

## Returned Table Content

The returned table contains an index-value table of all accounts, and for each child there is a key-value tabl with the following content:

| Child | Data Type | Explanation     |
| ----- | --------- | --------------- |
| name  | string    | Account name    |
| money | number    | Account balance |
| label | string    | Account label   |
