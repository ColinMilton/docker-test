FROM node:10

WORKDIR /usr/src/docker-test2

COPY . /usr/src/docker-test2

RUN npm install

EXPOSE 3000

# COPY . .

CMD [ "npm", "start" ]

