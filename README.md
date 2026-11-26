# Ihyaa Feud

A real-time, two-team quiz game with a public game screen and a private host console.

## Stack
- Cloudflare Worker for the API and WebSocket gateway
- Durable Objects for authoritative match state and live synchronization
- Static HTML/CSS/JavaScript frontend

## Local development
1. Install Node.js and Wrangler.
2. Run `npm install`.
3. Run `npx wrangler dev`.
4. Open the local URL. Create a match from the host console.

## Public deployment

### Automatic deployment from GitHub
1. Open Cloudflare Dashboard → Workers & Pages → Create application → GitHub.
2. Authorize GitHub if asked, then select `8kaneki8/ihyaa-feud` and branch `main`.
3. Keep the project root at `/` and the Worker name as `ihyaa-feud` (it must match `wrangler.toml`).
4. Set the build command to `npm install` and the deploy command to `npm run deploy` (or `npx wrangler deploy`). No framework build command is required.
5. Save and deploy. Later pushes to `main` can trigger automatic deployments.

### Manual deployment from your computer
1. Create or log in to a Cloudflare account.
2. From this repository, run `npm install`.
3. Run `npx wrangler login`.
4. Deploy with `npm run deploy`.
5. Open the deployed URL. Create a match and share the Game Screen URL with players.
6. Keep the Host Control URL and host key private.

The first deployment may ask Cloudflare to create the Durable Object namespace/migration. Follow Wrangler's prompt, then deploy again if requested.

## URLs
- Home / host setup: `/`
- Public game screen: `/?room=ROOM_CODE`
- Host console: `/?room=ROOM_CODE&host=1` (host key is stored in that browser after match creation)

## Notes
- The buzzer is external. The host records which team buzzed first.
- Religious question content is sample/demo content and must be reviewed and sourced before a public event.
- The host makes the final decision on answer matching.
- Do not share the host control link or host key publicly.
