# MC-site

A static subsite for a Minecraft-related main site.

## Architecture

- **Runtime**: Node.js 20
- **Server**: Plain Node.js HTTP server (`server.js`) serving static files
- **Port**: 5000 (0.0.0.0)
- **Frontend**: Static HTML/CSS/JS (`index.html`, `app.js`, `tab-navigation.js`)
- **Minecraft tools**: `minecraft/` directory with addon data and kit/scoreboard builders
- **Styles**: Tailwind CSS (`tailwind.css`, `tailwind.config.js`)

## Running

```
node server.js
```

## Deployment

Configured as `autoscale` with `node server.js` as the run command.
