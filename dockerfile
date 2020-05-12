FROM node:12.16.2

RUN npm i -g @nestjs/cli

WORKDIR /app

ADD package.json /app/package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]