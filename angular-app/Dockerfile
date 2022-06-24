#Building app
FROM node:latest as build
WORKDIR /app

# Restore dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Create build file
COPY . ./
RUN npm run build --prod

#Runtime
FROM nginx:alpine as runtime

COPY --from=build /app/dist/angular-app /usr/share/nginx/html

EXPOSE 80

cmd ["nginx", "-g", "daemon off;"]