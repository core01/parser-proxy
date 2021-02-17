FROM node:12.20.2-alpine3.10
WORKDIR /app
COPY . .
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]


