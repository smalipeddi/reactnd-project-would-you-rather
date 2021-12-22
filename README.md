# Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Would you rather Application

It is built using react redux .

Redux store is created.

Routing is added to navigate within the UI 

various components like sign In, Home, Leader Board, New Questions , User Details, Answered , Un Answered ,, View Pol, View Results are added 

Hooks are used for funcntional components .

### Sign In Page

Sign In  page is created to allow the user to Sign In and redirect to the home page.
Only the logged in users are allowed to naviagte throughout the application.

It is created by storing the users in the store and by making the isLoggedIn flag to true.
The isLoggedIn boolean flag is responsible for validating the user  as a authedUser on the pages.

### Home page

The home page displays both the Answered and UnAnswered Questions by the auhed User.

The home page gets access to the questions, categorize them based on the questions from the users state .

The home page displays the UnAnswered Questions by default on the home page.

Each card displays the Question and the has showPoll button which will navigate the user to show Poll and Show Results pages based on Un Anaswered and Answered Questions 

### New Question 

New question page gives user ability to add question.
Two states get udated .

Firstly the questions state is uodated with the new entry in array of questions

Secondly - the User state is upated with the question array in array of question ids

### Leader Board 

Leader board displays all users and the number of questions asked and Number of Questions Answered with the score.

DATA.js file is used to access API calls .

### Home page - Un Anaswered Qustions (UnAnsweredPoll)

This section is displayed by default on the home page.
Each question has a button to poll, and takes user to View poll page
User can poll and as a resut te user state for that user and the questions state is updated accordingly.

### Home page - Answered Questions (AnsweredPoll)

This section is displayed when user toggles between un answered and answered tabs.
Each question has a button to poll, and takes user to View Results page
User can view the poll results as % of first option and second options answered 

### User info 

This component displays authed user info and the logout option

### PageNotFound 
This page is displaye whenever user navigates away from authed user access sections or any url unknown

### Navigation

This component is used to render the nav bar on each page.


