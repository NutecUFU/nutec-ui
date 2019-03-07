FROM node:10.15 as build
ARG package_name
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build:$package_name

FROM nginx:1.15-alpine
ARG package_name
COPY config/nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/packages/nutec-$package_name/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
