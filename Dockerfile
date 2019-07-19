FROM node:10

# Create app directory
WORKDIR /var/tezosmpc

COPY . .

# Install app dependencies
WORKDIR /var/tezosmpc/src

RUN npm install

EXPOSE 8080

CMD [ "node", "demos/tezos-voting/server.js" ]