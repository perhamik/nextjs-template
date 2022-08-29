FROM node:16-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
COPY package*.json /usr/src/app/

# Installing dependencies
WORKDIR /usr/src/app
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build
EXPOSE 3000

#Run dev server
CMD ["yarn", "run", "start"]