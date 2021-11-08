FROM node:12-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/mobydick-app-frontend /usr/share/nginx/html
COPY --from=build /usr/local/app/default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/local/app/

EXPOSE 80