# Template Node app

A quick jumping-off point for Dockerized Node applications.

Includes a Docker image with the following app dependencies installed:

-   express for serving the application
-   nodemon for code reloading in development
-   eslint to lint the code base
-   mocha and chai for unit testing
-   babel for the ES2015-and-up desugarings

Another Docker container runs an nginx reverse-proxy to sit in front of the node app. The two services are managed with docker-compose.

## Setup

Install [Docker Compose](https://docs.docker.com/compose/install) and start the Docker daemon.

Rename `env_file.template` to `env_file` and fill in the secrets. **Do NOT commit this file.**

Rename `docker-compose.override.yml.example` to `docker-compose.override.yml`.

## Usage

See the [Makefile](./Makefile) for all available actions.

###### Install the app inside a container

```bash
make build
```

###### Start the containers

```bash
make start
```

###### Run tests

```bash
make test
```

###### Lint the project files

```bash
make lint
```

###### Get a shell inside the container

```bash
make shell
```

###### Start the application server

```bash
make server
```

###### Stop the container

```bash
make stop
```
