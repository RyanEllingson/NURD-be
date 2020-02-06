# Backend repo for NURD project

# How to query the backend

Games:
To perform a search for a board game, send a POST request to "/api/games/board"
The req.body should be an object with a key "name" which is the name you want to search for.

To perform a search for a board game, send a POST request to "/api/games/video"
The req.body should be an object with a key "name" which is the name you want to search for.

Groups:
The Group database objects have the following structure:
organizer: {
    type: String,
    required: true
  },
  gameTitle: {
    type: String,
    required: true
  },
  location: {
      type: String,
      required: true
  },
  gameType: {
    type: String,
    required: true
  },
  minimumAge: {
    type: Number
  },
  requiredGender: {
    type: String
  },
  maxMembers: {
    type: Number,
    default: 0
  },
  currentMembers: {
    type: Array,
    default: []
  }
  In order to create a new group, send a POST request to "/api/groups"
  The req.body should be a Group object containing all the information required to create the desired Group.

  In order to retrieve all groups in the database, send a GET request to "/api/groups"
  
  In order to retrieve all groups with a specified gameType, send a POST request to "/api/groups/type"
  The req.body should be an object with key "gameType" whose value is the type of groups you would like to get.

  In order to add a member to a group, send a PUT request to "/api/groups/add-member/:id" where ":id" is the id number of the group to which you would like to add a member.
  The req.body should be an object with key "name" whose value is the username of the user being added to the group.

  In order to delete a group, send a DELETE request to "/api/groups/:id" where ":id" is the id number of the group you would like to delete.