# Use the latest Node.js LTS Alpine image as the base image
FROM node:lts-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy app source code
COPY . .

# Build the app
RUN pnpm build

# Expose port 3000 for the Next.js app
EXPOSE 3000 

# Set the command to start the Next.js app
CMD ["pnpm", "start"]