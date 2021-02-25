#FROM node:7
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#VOLUME /tmp
#CMD node dist/graphServer.js
#EXPOSE 3000

FROM node:12
RUN mkdir reports
CMD echo '<!DOCTYPE html><html><body><h1>'HELLO ${INPUT_A_NAME}'</h1><p>'$(date)'</p></body></html>' > reports/report.html
