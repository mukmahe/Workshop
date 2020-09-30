///<reference types="Cypress"/>

const cypress = require('cypress');
const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const fse = require('fs-extra');

async function runTest() {
    await fse.remove('TestReports');
    const {totalFailed} = await cypress.run()
    const jsonReport = await merge();
    await generator.create(jsonReport);
    process.exit({totalFailed})
}
runTest();