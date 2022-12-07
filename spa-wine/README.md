# Catalog for Wine Connoisseurs
Angular single page application generated with Angular CLI version 14.2.5.
## :speech_balloon: Concept
An application where wine connoisseurs, after authentication, can share their wine preferences as well as edit, delete, like, unlike and see all their own wine posts. Also, they can visit their user's profile summary page. 
## :information_source: Structure
The application has the following parts:
### Home page
* Static page for all guests.
* They can visit all other sections depending on the authentication status - header information is changed on login and logout and shows the current user after login.
### All Wines Page
* Guests can browse all wines posted so far using pagination. They can choose how many pages to see or jump to first or last page.
* Search for wines.
* The guest can see wine details by clicking the 'Details' button which will open the details page.
### Details Page - available by:
1. 'Details' button in Home Page - available for all. Without authentication it will show only general information such as detailed wine information as well as summary of total likes and a list of people who liked the wine post. If authenticated, the user can take advantage of the full functionality of this page, which is:
* Edit and Delete if the user is an owner of the post (described in more details below).
* Like and Unlike if the user is NOT an owner of the post.
2. 'Details' button in Wines of... Page - the list displays owner's wines, therefore buttons 'Edit' and 'Delete' are available.
3. 'See more...' button in Profile Page - users see buttons 'Edit' and 'Delete' or 'Like' and 'Unlike' depending on whether 'created wines' list or 'liked wines' list is chosen.
### Register Page
* Guests should register in order to use the functionality of the application.
* The sign up form validates each field and shows the necessary information for filling.
* After successful registration the user is automatically logged in and a 'success' message is shown.
### Login Page
* Registered users can log in by their email and password.
* The login up form validates each field.
* After successful login, a 'success' message is shown.

## After authentication the users can use the following parts:
### Create Wine Post Page
* The create form validates each field and shows the necessary information for filling.
### Edit Wine Page
* Available only for logged in users who are creators of the wine post.
* The edit form validates each field and shows the necessary information for filling.
### Delete Wines - available only for creators of wine posts
### Wines of...(user's email) Page
* A list with the created wine posts of the user.
* Details page can be accessed by 'Details' button.
### Profile Page showing user information as below:
* Full name, email, count of created wines, count of liked wines.
* A list with created wines.
* A list with liked wines.
### Errors
Errors from the backend are also displayed for better user experience. For example, when the email address has already been taken. These are shown in red for one second.
## Some technical stuff
* Start development server - run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
* Build the project - run `ng build`. The build artifacts will be stored in the `dist/` directory.

## :paperclips: Project link on Internet
* Now available at :point_right: https://angular-project-wine.web.app




