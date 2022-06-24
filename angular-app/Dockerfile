#Building app.
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

RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY ./nginx.conf /etc/nginx/conf.d

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/nginx.conf && nginx -d 'deamon off;'