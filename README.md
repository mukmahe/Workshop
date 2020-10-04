# Cypress Workshop

#### After cloning the project, please run following command to install all dependencies
$` npm i`  

#### Run via Command Line
$` npx cypress open`  

#### Application Under Test
:point_right: katalon-demo-cura.herokuapp.com/profile.php#login


#### Branches
* ###### _[Level1] - Initial Project Structure to give introduction to Mocha, Assertions and Cypress basic commands 
* ###### _[Level2] - Restructure the code using POM, fixtures and Object mapping for locators  
* ###### _[master] - Demonstrate reporting, file uploading etc


#### Jenkins SetUp
1. Visit https://www.jenkins.io/download/ and download stable version of jenkins war file 
2. Cut this war file from downloads folder and then paste this in a folder say Documents/Jenkins
3. Open Iterm(for MAC)/CMD(for Windows) and reach to 'CypressAutomation' folder eg- $$cd /Users/mukulmaheshwari/Documents/Jenkins
4. Execute Jenkins on port 8080 by using command $java -jar jenkins.war -httpPort=8080 
5. Open http://localhost:8080/ on your browser
6. Click on new item and enter name as CypressAutomation, select freestyle project and click OK


#### Some Good Coding Conventions
1. File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. 
Source- https://google.github.io/styleguide/jsguide.html#file-name
2. Use camelCase for identifier names (variables and functions)
