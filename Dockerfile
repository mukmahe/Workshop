FROM cypress/browsers:chrome69
RUN npm i cypress
RUN $(npm bin)/cypress run --browser chrome