FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY . .

# Install app dependencies
WORKDIR /usr/src/app/jiff

RUN npm install

EXPOSE 8080

CMD [ "node", "demos/tezos-voting/server.js" ]