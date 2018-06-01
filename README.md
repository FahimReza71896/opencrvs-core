# OpenCRVS

This repo contains the frontend components and frontend related middleware for the OpenCRVS app.

## Development environment setup

1. Clone the repo
2. Run `yarn` to install deps
3. Run `yarn dev` to up the dev environment (frontend will autoreload and backend services are started via docker-compose)

Optional: full backend setup

4. Log into the OpenHIM at [here](http://localhost:8888) to load one initial config - default password is root@openhim.org:openhim-password (login will fail a security check as we are using self signed certs by default, follow the instructions in the error message)
5. One logged in click Export/Import then drop the file `infrastructure/openhim-base-config.json` into the import box and click 'Import'
6. Test the setup with `curl http://localhost:5001/fhir/Patient/123` you should get some JSON with a 'Not found' error.

## Docker scripts

There are a number of docker scripts available via `yarn`. `yarn dev` is the easiest command to run to get started (see above) but if you need to manage the docker containers some of these scripts may be useful.

The `yarn compose:*` scripts only setup the dependencies in docker containers and not the applications in this repository. The `yarn compose:all:*` scripts setup everything including the applications in this repository in docker containers. These scripts are useful to test everything in an environment that more closely resembles staging and/or production.

For each of the above there are:
  * base scripts which build and start the containers. E.g. `yarn compose` and `yarn compose:all`
  * `*:build` scripts which just build the images
  * `*:up` scripts which just run pre-build images in containers
  * `*:down` scripts which stop and remove the containers (along with data not stored in a volume!)

## Deploying to staging

To deploy to staging we use the same docker-compose files that are used in the docker setup above with a few minor tweaks to configure the stack for staging. The deployment uses Docker Swarm and sets up an OpenCRVS stack containing each service with a number of replicas defined in the docker compose files.

The deploy is easily executed by just running: `yarn deploy:staging` - you will need ssh access to the server for this to work.

Some useful commands to manage the swarm:
  * `ssh root@209.97.128.246 docker service ls` - see all services running in the swarm including how many replicas are running
  * `ssh root@209.97.128.246 docker service logs -f <service-id>` - stream the logs for a particular service (which could include logs from multiple replicas)
  * `ssh root@209.97.128.246 docker stack ps opencrvs` - view all tasks (containers) running in the opencrvs stack

To scale a service change the deploy->replicas setting in the corresponding compose file and run the deploy again.
