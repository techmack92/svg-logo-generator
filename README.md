# SVG Logo Generator
[![GitHub license](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


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
[This link](https://drive.google.com/file/d/1aHwVp6TSnOUTC3O981mYrREvLcOxw7x9/view?usp=sharing) will route you to a video walkthrough that shows the CLI application's functionality.<br><br>
You can also watch below:<br>

https://github.com/techmack92/svg-logo-generator/assets/124395371/802f37b0-f2a9-4040-9249-7d32e37a751f



## Contributing
If you have any contributing ideas for this project, contact me using the methods in [Questions](#questions) section

## Tests
+ The test suite has one test for each shape class: `Circle, Triangle & Square`<br>
+ Each class is tested using a `render()` method that returns a string containg the SVG markup<br>
+ The SVG markup should reflect the shape, shape color, text & text color provided in test suite<br><br>

***To initiate test, use command:*** `npm test` & Jest will run the test suite.

## License
Licensed under the <a href="https://github.com/techmack92/code-quiz/main/LICENSE"> **MIT**</a> license.

## Questions
If you have any questions about this project, use the contact methods below.<br>
[GitHub](https://github.com/techmack92) <br>
[Email](mailto:mldixon9750@gmail.com)
