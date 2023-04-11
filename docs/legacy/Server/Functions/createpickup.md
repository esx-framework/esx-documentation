# CreatePickup

```lua
ESX.CreatePickup(type, name, count, label, playerId, components, tintIndex)
```

This function creates a pickup.

## Arguments

| Argument   | Data Type | Optional | Default Value | Explanation                                                                                                                                  |
| ---------- | --------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string    | No       | -             | The pickup type, valid inputs: `item_standard` for items, `item_money` for cash, `item_account` for an account and `item_weapon` for weapons |
| name       | string    | No       | -             | The name of either the item, account or weapon                                                                                               |
| count      | number    | No       | -             | The count of the item, cash, account or weapon ammo                                                                                          |
| label      | string    | No       | -             | The pickup label drawn                                                                                                                       |
| playerId   | number    | No       | -             | The player server id who created the pickup, used to determine pickup spawn point                                                            |
| components | table     | Yes      | -             | Only used when `type` is `item_weapon`, an index-value table with components                                                                 |
| tintIndex  | number    | Yes      | -             | Only used when `type` is `item_weapon`, a tint index                                                                                         |
