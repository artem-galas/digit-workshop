# Digit Pipedrive workshop

Repository was created for [digit.dev](https://www.digit.dev/) conference

## Development
In order to use this repo [Node Js](https://nodejs.org/) should be installed

To start a development server install dependencies have to be installed

Script down bellow will start application in development mode:

```bash
$ docker-compose up
```

will spin up container with DB and run the application

## Technologies:
- [fastify](https://www.fastify.io/) - NodeJS framework
- [knex](http://knexjs.org/) - SQL builder
- [jest](https://jestjs.io/) - testing runner

## API:

- `GET /v1/deals` - returns list of deals

✅ 200 OK
```json
[
  {
    "id": 1,
    "title": "Super Deal",
    "stage": "Contacts",
    "value": 1500,
    "status": "open"
  },
  {
    "id": 2,
    "title": "Amazing Deal",
    "stage": "Testing",
    "value": 400,
    "status": "open"
  }
]
```

- `GET /v1/deals/:id` - returns one deal by provided ID
  
✅ 200 OK
```json
  {
    "id": 1,
    "title": "Super Deal",
    "stage": "Contacts",
    "value": 1500,
    "status": "open"
  }
```

❌ 404 Not Found - if provided ID could not be found in Deals DB

- `POST /v1/deals` - creates new Deal by provided values

Params:
```json
  {
  "id": 1,
  "title": "Super Deal",
  "stage": "Contacts",
  "value": 1500,
  "status": "open"
}
```

✅ 200 OK - returns created Deal
