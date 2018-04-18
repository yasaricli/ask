FROM node:4.9.0

MAINTAINER Yasar ICLI <yasaricli@gmail.com>

ENV ROOT_URL=http://localhost
ENV PORT=3000

# Docker link alias DB --> DB
ENV MONGO_URL=mongodb://DB

# Set the working directory to /app
WORKDIR /app

ADD ask.tar.gz /app

# Install any needed packages specified in requirements.txt
RUN (cd bundle/programs/server/ && npm install)

# Make port 80 available to the world outside this container
EXPOSE 3000

# Run app.py when the container launches
CMD ["node", "bundle/main.js"]
