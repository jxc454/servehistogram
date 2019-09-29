FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
VOLUME /tmp
CMD node graphServer.js
EXPOSE 3000


