# Step 1: build Angular app
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG APP_VERSION="local-dev"
ARG BUILD_DATE="local-dev"

# Overwrite environment file with actual build values
RUN mkdir -p src/app && \
    echo "export const environment = { version: '${APP_VERSION}', buildDate: '${BUILD_DATE}' };" > src/app/environment.ts

# Clean Angular cache to ensure it reads the newly generated environment.ts
RUN rm -rf .angular && npm run build

# Step 2: serve using nginx
FROM nginx:alpine

COPY --from=build /app/dist/ui/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]