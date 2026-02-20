# Stage 1: Build (Keep this the same as before)
FROM node:20-alpine AS build-step
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy your build output (adjust 'dist' if your build folder is different)
COPY --from=build-step /app/dist /usr/share/nginx/html

# Copy our custom Nginx template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Use 'envsubst' to replace ${PORT} in the template and save it to the real config path
# Then start Nginx
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
