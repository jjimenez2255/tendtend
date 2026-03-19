FROM nginx:alpine

COPY landing-page/nginx.conf /etc/nginx/conf.d/default.conf
COPY landing-page/ /usr/share/nginx/html

EXPOSE 8080
