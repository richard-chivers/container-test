FROM node:7.2.0-slim

WORKDIR /code

RUN npm install -g nodemon

COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

COPY . /code

EXPOSE 8000
CMD ["node", "/code/app.js"]