# survey
Basic survey app with radar chart visualizations

Survey Application [User Experience Flow]:
-	User lands on home page
-	Users login
-	Users provide input to survey 
o	Survey questions are multiple choice (radio buttons) – 5-pt likert scale
o	Database contains the seeds of one user
-	User submits responses  
o	User response gets sent to database
o	(alternative, stored in local storage)
-	Application takes user response and displays it in form of Radar Chart, 
o	Once user submits responses, user data is displayed on a Radar Chart https://en.wikipedia.org/wiki/Radar_chart 
o	Radar chart in chartjs.org https://www.chartjs.org/docs/latest/charts/radar.html
o	https://github.com/reactjs/react-chartjs
o	Alternative: https://spyna.github.io/react-svg-radar-chart/ 
-	User logs out



Using what we’ve learned [Frontend]
1.	Create home page with menu, jumbo-picture, description of application, footer
2.	Create an about page with clickable tabs, changing pictures (or carousel)
3.	Create sample survey page #1 (standalone React component)
4.	Create a sign-in page 
5.	Create survey page with user input fields for demographics and actual survey (can keep survey simple) example: https://spyna.github.io/react-svg-radar-chart/ 
6.	Create user page to show user inputs (in table form) (keep it simple)
7.	Create user data display page, survey page #2 (React component that takes data from Database). 
8.	Style with Styled Components, ReactStrap or LESS

Using what we’ve learned [Backend]
1.	Create User table in DB Browser in SQLite
2.	Create User Response table in DB Browser in SQLite
3.	Create CRUD endpoints to interact with both User & Response tables
4.	Use Postman when building endpoints

Stretch Goals
1.	Create Radar chart component in React: https://www.npmjs.com/package/react-svg-radar-chart (sample survey page #1)
2.	Create user data display page (survey page #2)
3.	Link user input to User Response Table and Radar chart component 
4.	Once everything is done with React, convert to Redux
5.	Parallax scroll on home page
