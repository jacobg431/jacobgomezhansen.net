# Use an official Node.js runtime as a parent image
FROM node:22.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package.json package-lock.json ./

# Install any needed packages specified in package-lock.json
RUN npm ci

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Make port 5173 available to the world outside this container
EXPOSE 4173

# Define environment variables
ENV NODE_ENV=production
ENV PORT=4173

# Run the app when the container launches
CMD ["npm", "run", "prod"]