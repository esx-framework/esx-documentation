# Discord Log

```lua
ESX.DiscordLog(name, title, color, message, tag_everyone)
```

Defines A PlayerData State.
Automatically Adds Data to the xPlayer Table.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| name   | string     | Yes       | Default             | Webhook Name (found in `Config/logs.lua`)|
| title   | string     | No       | -             | Webhook Title     |
| color   | string     | Yes       | Default             | Webhook Colour (found in `Config/logs.lua`)     |
| message   | string     | No       | -             | Message To Log     |
| Tag Everyone   | bool     | Yes       | false             | Adds @everyone and @here to the message |

## Example

```lua
ESX.DiscordLog(
    "UserActions", -- Name Of Webhook
    "User Joined", -- Message Title
    "green", -- Colour
    "**ID**:```diff\n+ ".. _source .. "```\n**Name**:```diff\n+ ".. player_data.nametag .."```" -- Message
)
```
