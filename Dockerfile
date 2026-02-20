# Step 1: Build the app
FROM node:20-alpine AS build-step
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the build output from the first step to Nginx's html folder
# NOTE: If you use Vite, the folder is 'dist'. If Create React App, it's 'build'.
COPY --from=build-step /app/dist /usr/share/nginx/html

# Copy a custom Nginx config to handle SPA routing (optional but recommended)
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
