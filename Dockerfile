FROM cypress/browsers:chrome69
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
RUN npm i cypress
RUN npm run muk