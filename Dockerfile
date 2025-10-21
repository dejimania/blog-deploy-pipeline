# ====================================
# 🌐 Dockerfile for Static Blog Website
# ====================================

# official Nginx base image
FROM nginx:alpine

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static content
RUN rm -rf ./*

# Copy entire blog project into the Nginx web root
COPY . .

# Expose port 80 for web traffic
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
