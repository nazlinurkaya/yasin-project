# Stage 1: Build React App
FROM node:18 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code and build the app
COPY . ./
RUN npm run build

# Stage 2: Serve React App with Nginx
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]