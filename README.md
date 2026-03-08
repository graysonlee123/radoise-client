# radoise client

A simple client that acts as a remote control for an instance of the [radoise server](https://github.com/graysonlee123/radoise-server) project.

## Prerequisites

- pnpm v10.15.0 or later
- Node.js v22.18.0 or later
- Docker (for building)

## Development

### Setup

1. Clone the repository:

```shell
git clone https://github.com/graysonlee123/radoise-client.git
cd radoise-client
```

2. Install dependencies:

```shell
pnpm install
```

3. Configure your environment variables

Include the URL for your radoise server in a `.env` file at the root of the project.

```.env
VITE_API_URL=http://localhost:3000
```

### Running the client

Start the development server:

```shell
pnpm dev
```

The server will start on port 5173 by default.

## Building

Since the Radoise Server API URL is required at build time, you'll need to provide it as a build argument.

```shell
docker build --build-arg API_URL=http://192.168.86.27:3000 -t radoise-client:latest .
```

## Running

Run in detached state:

```shell
docker run -d -p <your-port>:4173 radoise-client:latest
```
## Deployment behind a reverse proxy

If the client is served over HTTPS but the radoise server is on a local HTTP address, browsers will block the requests as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content). The fix is to proxy the API through your reverse proxy and build with `VITE_API_URL=/api`.

Example Caddy config:

```
radoise.example.com {
        handle_path /api/* {
                reverse_proxy 192.168.1.x:3000
        }
        reverse_proxy localhost:<your-port>
}
```

Then build with:

```shell
docker build --build-arg API_URL=/api -t radoise-client:latest .
```

## Changes

See the [commit history](https://github.com/graysonlee123/radoise-client/commits/main) for recent changes and updates.
