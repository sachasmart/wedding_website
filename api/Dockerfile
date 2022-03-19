FROM node:16.7-alpine AS base

RUN mkdir -p /home/node/smart-api
WORKDIR /home/node/smart-api

RUN npm install -g nodemon @nestjs/cli

ENTRYPOINT "npm run"


FROM base AS prod

USER node

COPY . .
RUN npm install
RUN npm run build
RUN rm -rf ./src

CMD "start:prod"
