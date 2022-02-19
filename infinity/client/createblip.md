# CreateBlip

```lua
ESX.CreateBlip(name, text, coords, sprite, size, color)
```

Registers a blip for the client.

## Example

```lua
ESX.CreateBlip("shops| 24/7", "24/7 Store",vector3(373.59,325.52,103.57),59,0.8,25)
```

## Arguments

|   **Argument**   |  **Data Type** | **Optional** |      **Default Value**       |       **Explanation**       |
|--------------|------------|----------|--------------------------|-----------------|
|  name        |  string    | No       | -                        | Name of Blip    |
|  text        |  string    | Yes      | "unknown" .. name        | Label of Blip   |
|  coords      |  Vector3   | No       | xPlayer, args, showError | Function to run |
|  sprite      |  Int       | Yes      | 52        | Blip Sprite   |
|  size        |  Int       | Yes      | 1.0        | Blip Size|
|  colour      |  Int       | Yes      | 1        | Blip Colour|