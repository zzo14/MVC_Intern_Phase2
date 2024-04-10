# MVP_Intern_Phase2 - Competition task

## Talent Competition Code Repository

This project will help interns at MVP Studio to understand how ReactJs, C# Web Api, and MongoDb are used in Talent Code Architecture. 

Please follow the instructions below to understand how to get started. 

### Install react, babel, webpack, js tokens and react tags:
* Find the folder that contains webpack.config.js in the solution explorer
* Right-click on the folder and select 'Open Folder in File Explorer'
* Open the command prompt (windows + R, type cmd) and go to the folder that contains webpack.config.js (E.g: cd C:\Talent\Talent\Talent.WebApp\Scripts\react)
Install npm util packages:
`npm install`
* Check webpack version (make sure it's 4.5.0):
`webpack -version`

### Project Structure  
[Check the wiki](http://git.mvp.studio/talent-competition/talent-competition/wikis/guides/project-structure) for more details.
 - Web Application:
    - `Talent.WebApp` : All frontend files are located here
 - Microservices:
    - `Talent.Services.Identity` : backend functions related to Login/Logout
    - `Talent.Services.Profile` : backend functions related to Profile
    - `Talent.Services.Talent` : backend functions related to Talent Matching, Jobs

### Competition task

[Click here](https://talentappwebapp20240123195850.azurewebsites.net/Home) for Showcase.

* Task 1: Employer profile page
  * Add the last name to the primary contact details
  * Allow users to edit company contact details by clicking on the edit button
  * Display the user's full name on primary contact details (for read-only display)
  #### Task1 - Contact Details Card View
  ![Contact Details Card View](/show_pics/Task1.png)
  Here is the view of the employer's contact details, displaying primary and company contact details.

* Task 2: Manage Job page
  * Display jobs as a list of cards
  * Bonus/Optional: Update a job, Close a job
  #### Task2 - Jobs Card View
  ![Jobs Card View](/show_pics/Task2-1.png)
  Here is the view of the Job's summary as a list of cards, displaying the job title, location and summary. Users can filter or sort cards by clicking the dropdown list.
  
  #### Task2 Bonus - Update a Job
  ![Edit Job page](/show_pics/Task2-editJob.png)
  Here is the view that the employer can update a job by clicking the edit button.
  
  #### Task2 Bonus - Close a Job
  ![Close Job page](/show_pics/Task2-closeJob.png)<br>
  Here is the view that the employer can close a job by clicking the close button, displaying a popup to confirm whether to close.
    
* Submitting tasks
  * Please submit tasks the same way you did for Onboarding:
  * Upload code to your personal GitHub account
  * Deploy a copy to Azure
  * Notify your mentor using the industryconnect.io internship portal
