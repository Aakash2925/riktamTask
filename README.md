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
  Open the browser and go to http://localhost:2100 to view the running UI.
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
    - Screenshot: ![Screenshot (1086)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/4afd234e-7db5-4c46-bc6c-1dfef662e255)


2. **Login User**
    - Method: POST
    - Endpoint: `/api/user/login`
    - Description: Route for logging a user into the application.
    - Screenshot: ![Screenshot (1088)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/163d053e-fbd6-4d13-b761-5d3945463781)


3. **Logout User**
    - Method: GET
    - Endpoint: `/api/user/logout`
    - Description: Route for logging out of the application.
    - Screenshot: ![Screenshot (1100)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/eb9dc38b-5f2f-4b23-bbf9-8ff81f372b3a)

4. **Update User Details**
    - Method: PUT
    - Endpoint: `/api/user/update`
    - Description: Route to update details of an already registered user.
    - Screenshot: ![Screenshot (1101)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/336c40b1-f543-4675-a719-f4babf667024)

## Group Management Feature

This feature provides APIs for managing Group - addition, removal, and search by Normal and Admin Users

## API Endpoints

1. **Add Self**
    - Method: GET
    - Endpoint: `/api/group/addSelf`
    - Description: Route to add self to the group ( can happen only when the person is admin)
    - Screenshot: ![Screenshot (1090)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/f11a1511-872a-465d-84e6-9c3e23c2e865)

2. **Remove Self ( Leave the Group )**
    - Method: DELETE
    - Endpoint: `/api/group/removeSelf`
    - Description: Route to leave the group
    - Screenshot: ![Screenshot (1093)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/d1916bb1-0283-4dba-a89a-f35284014fa7)

3. **Add Other User**
    - Method: POST
    - Endpoint: `/api/group/addUser`
    - Description: Route to add any user ( can only be done by admin )
    - Screenshot: ![Screenshot (1091)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/bbcfe87a-11f9-4e36-9187-9ddd004002f4)

4. **Remove User**
    - Method: DELETE
    - Endpoint: `/api/group/removeUser`
    - Description: Route to remove any user from the group ( can only be done by admin )
    - Screenshot: ![Screenshot (1092)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/942fac6f-b6ec-4838-a67d-162c86275492)

5. **Search any User in the Group**
    - Method: GET
    - Endpoint: `/api/group/searchUser`
    - Description: Route for searching user in the group (can be done by both admin and normal user)
    - Screenshot: ![Screenshot (1094)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/9c2f7667-3316-4913-8da3-cd49889fcfc5)

## Chat Management Feature

This feature provides APIs for managing Chat - add messages, delete messages, like messages, comment on other users' messages, and search message of any other user.

## API Endpoints

1. **Add Message**
    - Method: POST
    - Endpoint: `/api/chat/addMsg`
    - Description: Route for Adding a msg in the group chat
    - Screenshot: ![Screenshot (1095)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/58957565-26b2-47a6-b76f-7e0a6ff19532)

2. **Delete Message ( Leave the Group )**
    - Method: DELETE
    - Endpoint: `/api/chat/deleteMsg`
    - Description: Route for Deleting a message in the group chat
    - Screenshot: ![Screenshot (1099)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/e06a06a5-47e2-4a56-b5ec-86881e5b0885)

3. **Like Message**
    - Method: POST
    - Endpoint: `/api/chat/like`
    - Description: Route for liking a message
    - Screenshot: ![Screenshot (1096)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/91320a59-1b8a-4101-a7aa-123c0becc424)

4. **Comment on Message**
    - Method: POST
    - Endpoint: `/api/chat/comment`
    - Description: Route for commenting on a message in the group chat
    - Screenshot: ![Screenshot (1097)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/f9476038-ab57-4d0c-9848-65e22e782d5e)

5. **Search other user's messages**
    - Method: GET
    - Endpoint: `/api/chat/search`
    - Description: Route for searching any user's chat in the group
    - Screenshot: ![Screenshot (1098)](https://github.com/abhi6299/Riktam-assignment-groupChatAPI-Nodejs/assets/48280843/c57342c0-fd2b-469f-a8a2-ddea8641376f)

## Postman

For more documentation on the above APIs including Authorization Token, body parameters to be passed, and different folders with different routes to implement the project, please visit the following link:

[Postman Collection](https://www.postman.com/mission-saganist-17847365/workspace/riktam/collection/30566706-c6bf18f8-6291-48b5-ab71-424a41182495?action=share&creator=30566706)

## Contributing
Kindly create a PR for any contribution or suggestions. Thanks!
