# Group Chat Backend API

## Introduction
A simplified Backend API for a robust **Group Chat** facilitating seamless communication and interaction between users. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Postman](#postman)
- [Contributing](#contributing)

## Installation
1. Clone the directory
   ```
   git clone <repo_URL>
   ```
3. Navigate to the project directory
   ```
   cd <Project_directory>
   ```
4. Install Dependencies
   ```markdown
   npm i
   ```

## Usage
1. Start the development server:
```markdown
node index.js
```
2. Open your browser:
```bash
  Open the browser and go to http://localhost:3000 to view the running UI.
```

# Features
Different APIs have been created with different features which are as follows

## User Management Feature

This feature provides APIs for managing user authentication, authorization, and updation of details in the application.

## API Endpoints

1. **Register User**
    - Method: POST
    - Endpoint: `/api/user/register`
    - Description: Route for registering a new user.



2. **Login User**
    - Method: POST
    - Endpoint: `/api/user/login`
    - Description: Route for logging a user into the application.



3. **Logout User**
    - Method: GET
    - Endpoint: `/api/user/logout`
    - Description: Route for logging out of the application.

4. **Update User Details**
    - Method: PUT
    - Endpoint: `/api/user/update`
    - Description: Route to update details of an already registered user.
 

## Group Management Feature

This feature provides APIs for managing Group - addition, removal, and search by Normal and Admin Users

## API Endpoints

1. **Add Self**
    - Method: GET
    - Endpoint: `/api/group/addSelf`
    - Description: Route to add self to the group ( can happen only when the person is admin)

2. **Remove Self ( Leave the Group )**
    - Method: DELETE
    - Endpoint: `/api/group/removeSelf`
    - Description: Route to leave the group

3. **Add Other User**
    - Method: POST
    - Endpoint: `/api/group/addUser`
    - Description: Route to add any user ( can only be done by admin )


4. **Remove User**
    - Method: DELETE
    - Endpoint: `/api/group/removeUser`
    - Description: Route to remove any user from the group ( can only be done by admin )

5. **Search any User in the Group**
    - Method: GET
    - Endpoint: `/api/group/searchUser`
    - Description: Route for searching user in the group (can be done by both admin and normal user)

## Chat Management Feature

This feature provides APIs for managing Chat - add messages, delete messages, like messages, comment on other users' messages, and search message of any other user.

## API Endpoints

1. **Add Message**
    - Method: POST
    - Endpoint: `/api/chat/addMsg`
    - Description: Route for Adding a msg in the group chat
   

2. **Delete Message ( Leave the Group )**
    - Method: DELETE
    - Endpoint: `/api/chat/deleteMsg`
    - Description: Route for Deleting a message in the group chat
    

3. **Like Message**
    - Method: POST
    - Endpoint: `/api/chat/like`
    - Description: Route for liking a message

4. **Comment on Message**
    - Method: POST
    - Endpoint: `/api/chat/comment`
    - Description: Route for commenting on a message in the group chat

5. **Search other user's messages**
    - Method: GET
    - Endpoint: `/api/chat/search`
    - Description: Route for searching any user's chat in the group

## Postman

For more documentation on the above APIs including Authorization Token, body parameters to be passed, and different folders with different routes to implement the project, please visit the following link:
## Contributing
Kindly create a PR for any contribution or suggestions. Thanks!
