# Use an official Node.js runtime as the base image
FROM node:lts-hydrogen
# Set the working directory in the container
WORKDIR /app
# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the entire project to the working directory
COPY . .
# Expose the port on which your React app will run
EXPOSE 5173
# Define the command to start your React app
CMD [ "npm", "run", "dev" ]
