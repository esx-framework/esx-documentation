# xPlayer.getAccount

```lua
xPlayer.getAccount(account)
```

This function gets details (returned in an table) for an account.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation      |
|----------|-----------|----------|---------------|------------------|
| account  | string    | No       | -             | An valid account |

## Returned Table Content

| Child | Data Type | Explanation     |
|-------|-----------|-----------------|
| name  | string    | Account name    |
| money | number    | Account balance |
| label | string    | Account label   |
