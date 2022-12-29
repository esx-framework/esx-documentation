---
sidebar_label: giveaccountmoney
---

# Give Account Money

```lua
giveaccountmoney [ID] [Account] [amount]
```

This command adds to the users account balance.

## Arguments

| Argument   | Data Type | Optional | Default Value |       Explanation         |
|------------|-----------|----------|---------------|---------------------------|
| ID         | number    | No       | -             | The ServerID of the user. |
| Account    | string    | No       | -             | The name of the account.  |
| Amount     | number    | No       | -             | The amount to add.        |

### Valid Accounts

- Bank
- Money
- Black

> "Money" is the players cash and "Black" is their "dirty money"
