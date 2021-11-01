
# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM nginx:latest

# Set the working directory
WORKDIR /

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image

# Copy the build output to replace the default nginx contents.
COPY ./dist/mobydick-app-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80