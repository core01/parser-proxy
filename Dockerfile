FROM node:lts-alpine3.16
WORKDIR /app
COPY . .
RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "start" ]


