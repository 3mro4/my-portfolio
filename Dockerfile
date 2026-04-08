# ─── Stage 1: Build Angular App ───────────────────
FROM node:20-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Build Angular for production
RUN npm run build

# ─── Stage 2: Serve with Nginx ────────────────────
FROM nginx:alpine AS production

# Copy built files from Stage 1
COPY --from=builder /app/dist/my-portfolio/browser /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]