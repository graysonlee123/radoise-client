# radoise client

Client for interacting with the [radoise server](https://github.com/graysonlee123/radoise-server).

## Building

Since the Radoise Server API URL is required at build time, you'll need to provide it as a build argument.

```shell
docker build --build-arg API_URL=http://192.168.86.27:3000 -t radoise-client:latest .
```

## Running

Run in detached state:

```shell
docker run -p <your-port>:4173 radoise-client:latest
```
