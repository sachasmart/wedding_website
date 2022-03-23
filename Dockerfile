FROM node:12

WORKDIR /sacha/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8085
CMD [ "node", "dist/main" ]