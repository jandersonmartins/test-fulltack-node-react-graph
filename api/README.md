# Full stack test

## Development

Startup:

```sh
docker-compose -f docker-compose.dev.yml up --build
```

Clean:

```sh
docker-compose -f docker-compose.dev.yml down
```

## Tests

Build services:

```sh
docker-compose -f docker-compose.dev.yml build
```

Run all tests

```sh
docker-compose -f docker-compose.dev.yml run api yarn test
```
