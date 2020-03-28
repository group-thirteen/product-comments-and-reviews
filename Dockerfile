FROM node:latest
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY . .
RUN npm install
#Expose port and start application
EXPOSE 8080
CMD npm run docker 
