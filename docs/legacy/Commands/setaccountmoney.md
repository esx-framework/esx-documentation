---
sidebar_label: setaccountmoney
---

# Set Account Money

```
setaccountmoney [ID] [Account] [amount]
```

This command sets the users account balance.

## Arguments

| Argument | Data Type | Optional | Default Value | Explanation               |
| -------- | --------- | -------- | ------------- | ------------------------- |
| ID       | number    | No       | -             | The ServerID of the user. |
| Account  | string    | No       | -             | The name of the account.  |
| Amount   | number    | No       | -             | The amount to add.        |

### Valid Accounts

- Bank
- Money
- Black

## Note

> Money = Cash
> Black = Dirty money
