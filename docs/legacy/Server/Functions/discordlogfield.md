# DiscordLog With Fields

```lua
ESX.DiscordLogFields(name, title, color, fields)
```

This function logs to a Discord Webhook.

## Argument

| Argument | Data Type | Optional | Default Value | Explanation          |
|----------|-----------|----------|---------------|----------------------|
| name     | string     | Yes       | Default             | Webhook Name (found in `Config.logs.lua`)|
| title    | string     | No       | -             | Webhook Title     |
| color    | string     | Yes       | Default             | Webhook Colour (found in `Config.logs.lua`)     |
| fields   | table     | No       | -             | Fields To Log     |

## Example

```lua
ESX.DiscordLogFields("UserActions", "/car Triggered", "pink", {
	{name = "Player", value = xPlayer.name, inline = true},
	{name = "ID", value = xPlayer.source, inline = true},
	{name = "Vehicle", value = args.car, inline = true}
})
```
