# SVG Logo Generator

## Navigation Links
+ [Overview](#overview)
+ [Installation](#installation)
+ [Usage](#usage)
+ [Demo](#demo)
+ [Contributing](#contributing)
+ [Tests](#tests)
+ [License](#license)
+ [Questions](#questions)

## Overview
The purpose of this project is to generate an SVG logo file that reflects user input.

## Installation
***Install these programs on your computer:***
+ Visual Studio<br>
+ GitBash <br> 
+ Node.js<br>
+ Jest (for testing)

***Initialize the application:***<br>
1. Clone this repository<br> 
2. Use command: `npm init -y` to install the Node Package Manager<br> 
3. Use command: `npm install inquirer@8.0.0` to install the correct inquirer package for this application
4. Use command: `npm install --save-dev jest` to install Jest as a devDependency

## Usage
When user has completed all installation steps:<br> 
1. Begin the application by using command: `node index.js`<br> 
2. Answer the prompts that display on the screen<br> 
3. Once all questions are answered, your SVG logo file will generate in the `dist` folder

## Demo
This link will route you to a video walkthrough that shows the CLI application's functionality<br> You can also watch below:<br>

## Contributing
If you have any contributing ideas for this project, contact me using the methods in [Questions](#questions) section

## Tests
+ The test suite has one test for each shape class: `Circle, Triangle & Square`<br>
+ Each class is tested using a `render()` method that returns a string containg the SVG markup<br>
+ The SVG markup should reflect the shape, shape color, text & text color provided in test suite<br><br>

***To initiate test, use command:*** `npm test` & Jest will run the test suite.

## License
[![GitHub license](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)


## Questions
If you have any questions about this project, use the contact methods below.<br>
[GitHub](https://github.com/techmack92) <br>
[Email](mailto:mldixon9750@gmail.com)
