FROM nginx:1.21.4-alpine
COPY dist/mobydick-app-frontend /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80