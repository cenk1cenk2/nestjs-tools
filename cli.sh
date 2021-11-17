#!/bin/bash

CONTAINER_NAME=nestjs_tools_monorepo

docker-compose exec "${CONTAINER_NAME}" /bin/bash -c "source /root/.bashrc && docker-node-fnm-init proxy ${*}"
