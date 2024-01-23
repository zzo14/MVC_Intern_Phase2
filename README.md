## Talent Competition Code Repository

This project will help interns at MVP Studio to understand how ReactJs, C# Web Api, MongoDb is used in Talent Code Architecture. 

Please follow the instructions below to understand how to get started. If you have any questions, please check if it's asked on QuestionHub or raise the question there to get support. 

### React tutorials/resources
* https://reactjs.org/docs/hello-world.html
* MVP Studio React Training.pdf can be found here
ReactExamples.zip can be found [here](https://drive.google.com/file/d/1dXZeb3hmMsYbE1hmGEkb4_hyOkNiAbPa/view?usp=sharing)

React coding examples in ReactExamples.zip:
*ReactHelloWorld.html: Printing hello world using React
*ReactTimeline.css: CSS File for Timeline example
*ReactTimeline.html: React components and container example
*ReactTimelinePassObject.html: Passing a prop as an attribute and javascript object example
*ReactTimelinePassArray.html : Passing an array of javascript objects example

### Do’s and don’ts
See the [coding guidelines](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/coding-guidelines) and [FAQ](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/faqs)  
Please try not to add styles inside the jsx file. Instead, please add your styles to TalentTheme.css.  
Please use ES6, jsx, use state  
Limit your use of javascript or jQuery - jQuery is required for AJAX, but very little else.  
Use AJAX to get/send data to the controller  
Please use plain javascript not typescript  

**Don't add any new fields to the Models or add new fields to the documents in the database.**  
For example,  don't add any new fields to the User or Job models.

**Note : Make sure that you have Visual Studio 2017 installed in your computer.
Visual Studio 2015 does not work with ReactJS**

### Install react, babel, webpack, js tokens and react tags:
* Find the folder that contains webpack.config.js in the solution explorer
* Right click on the folder and select 'Open Folder in File Explorer'
* Open command prompt (windows + R, type cmd) and go to the folder that contains webpack.config.js (E.g: cd C:\Talent\Talent\Talent.WebApp\Scripts\react)
Install npm util packages:
`npm install`
* Check webpack version (make sure it's 4.5.0):
`webpack -version`

### Launch Talent project
[Check the wiki](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/Starting-the-project) for more details.
* Get the latest source via Source Control Explorer
* Run webpack:
`cd C:\Talent\Talent\App\Talent.App.WebApp\wwwroot\js\react`
`npm run build`
* Launch Talent.WebApp project in Visual Studio. Register an account using your email address and log in.

### Project Structure  
[Check the wiki](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/project-structure) for more details.
 - Web Application:
    - `Talent.WebApp` : All frontend files are located here
 - Microservices:
    - `Talent.Services.Identity` : backend functions related to Login/Logout
    - `Talent.Services.Profile` : backend functions related to Profile
    - `Talent.Services.Talent` : backend functions related to Talent Matching, Jobs

### React tips
* Common coding mistakes using jsx
* Class names: class (html) => className (jsx), tabindex (html) => tabIndex (jsx)
* Require closing parent element or fragments: https://reactjs.org/docs/fragments.html
* Jsx Closing tags differ from html tags, you must have a closing tag for images and inputs: `<img></img>, <input</input>`
* Forgetting to turn on webpack : `npm run build`
* Forgetting to clear the cache

### How to connect to the database
[Click here](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/mongo-db) for more details.

## Competition task

[Click here](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/competition-task) for more details.

* Task 1 : Employer profile page
  * Add last name to the primary contact details
  * Allow users to edit company contact details by clicking on the edit button
  * Display the user's full name on primary contact details (for read only display)

* Task 2 : Manage Job page
  * Display jobs as a list of cards
  * Bonus/Optional: Update a job, Close a job
* Submitting tasks
  * Please submit tasks the same way you did for Onboarding:
  * Upload code to your personal GitHub account
  * Deploy a copy to Azure
  * Notify your mentor using the industryconnect.io internship portal

