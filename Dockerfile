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

# Make port 3000 available to the world outside this container
EXPOSE 3000
ENV PORT=3000

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
CMD ["npm", "run", "dev"]