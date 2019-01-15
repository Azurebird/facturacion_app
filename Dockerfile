FROM node:10.5
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 8080/tcp
CMD ["npm", "start"]