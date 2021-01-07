FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG AUTH_HOST
ARG POSTS_HOST

ENV NODE_ENV=production PORT=80
EXPOSE 80

RUN npm run build

CMD ["npm", "start"]
