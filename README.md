# 09 Node.js Homework: Professional README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Future Idea](#future-idea)
* [Demo](#demo)
* [Sources](#sources)
* [License](#license)


 ## Introduction
 Uses node and the command line to generate a README file along with a LICENSE file for the user-specified inputs.
 * GitHub Repository: https://github.com/JXIong15/09-readme-generator
 * Video Demonstration: https://drive.google.com/file/d/1oj2ipnA7n120UpnVb8gouwQNRhDQUU_o/view
	* Sample [README.md](./Develop/README.md)
	* Sample [LICENSE](./Develop/LICENSE)


## Functionality
* When the user types "node index.js" in the /09-readme-generator/Develop directory, then the program is initiated.
* The user is asked a series of questions pertaining to their project and themself.
* The LICENSE file is then generated accordingly followed by the README file with the user's inputs. Both files are in the Developed folder.


## Tasks Completed
* In the 09-readme-generator directory, downloaded the inquirer package using npm.
* In the index.js file:
	* included all of the required packages needed
	* created an array of question-objects
	* created a function to write the new README file and place it in the same Develop directory.
	* created an initialized function that is immediately called once the user types in "node index.js" in the command line. This function then asks the user a series of questions before returning those results into the writeToFile function.
		* data is passed through the generateMarkdown function, which is created in the "generateMarkdown.js" file.
* In the generateMarkdown.js file:
	* included all required packages and files
	* created a function to retrieve the licensing badge icon url in association to the license the user-specified
	* created a function to retrieve the license link to make the badge click to more information about the license
	* created a function, similar to the generateMarkdown function in the index.js file, that creates a LICENSE file with the user-input information
	* in the generateMarkdown(data) function, used a tag-template to create the content for the README file. This is then returned to the index.js file and a README.md file is created with the user-inputs.


## Future Idea
* Using the comand line to somehow input tests to display on the README. Tests like images and demos.


## Demo
<p align="center">
    <img src="./Develop/Assets/demo.gif" width="100% height="100%" stylealt="demo"/> 
</p>


## Sources
* Badges and License Templates: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
* README Template: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
* Inquirer Package: https://www.npmjs.com/package/inquirer


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, Trilogy, Northwestern Coding Bootcamp</p>
