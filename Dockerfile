#FROM node:7
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#VOLUME /tmp
#CMD node dist/graphServer.js
#EXPOSE 3000

FROM node:12
#CMD node --help > help.log
CMD echo HELLO ${A_NAME}
