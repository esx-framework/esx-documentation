# DiscordLog

```lua
ESX.DiscordLog(name, title, color, message)
```

This function logs to a Discord Webhook.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| name   | string     | Yes       | Default             | Webhook Name (found in `Config/logs.lua`)|
| title   | string     | No       | -             | Webhook Title     |
| color   | string     | Yes       | Default             | Webhook Colour (found in `Config/logs.lua`)     |
| message   | string     | No       | -             | Message To Log     |

## Example

```lua
ESX.DiscordLog(
    "UserActions", -- Name Of Webhook
    "User Joined", -- Message Title
    "green", -- Colour
    "**ID**:```diff\n+ ".. _source .. "```\n**Name**:```diff\n+ ".. player_data.nametag .."```" -- Message
)
```
