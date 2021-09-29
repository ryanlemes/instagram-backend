FROM node:16-alpine

WORKDIR /app

COPY package*.json tsconfig.json ./

COPY src /app/src

RUN npm install && \
    npm run build

EXPOSE 3000

CMD [ "node", "./dist/index.js" ]