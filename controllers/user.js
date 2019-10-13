const axios = require('axios');
const userModel = require('../models/user');

//Endpoint to list Github users with events and gists
exports.gitHubList = async ({ body }, res, next) => {
  let responseArray = [];
  for (let username of body.usernames) {
    let response = await axios
      .all([
        axios.get('https://api.github.com/users/' + username + '/events'),
        axios.get('https://api.github.com/users/' + username + '/gists')
      ])
      .catch(error => {
        console.log(error);
      });

    //We want to know the number of events that the user has
    let events = response[0].data;
    let eventsNumber = events.reduce(
      (a, obj) => a + Object.keys(obj).length,
      0
    );

    //If the number is more than 5 then we need only show the firts five
    if (eventsNumber > 5) {
      events = events.slice(0, 5);
    }

    //We want to know the number of gists that the user has
    let gists = response[1].data;
    let gistsNumber = gists.reduce((a, obj) => a + Object.keys(obj).length, 0);

    //If the number of gists is greater than 3 then we need only to show the firts three
    if (gistsNumber > 3) {
      gists = gists.slice(0, 3);
    }

    //In this seccion we create the User object for the response and store the data on the database
    let userObject = {
      username: username,
      events: events,
      gists: gists
    };
    try {
      for (files of userObject.gists) {
        delete files.files;
      }
    } catch (error) {
      return res.status(400).json({ error: error });
    }
    responseArray.push(userObject);
    let user = new userModel(userObject).save().catch(error => {
      return res.status(400).json({ error: error });
    });
  }
  return res.status(200).json(responseArray);
};
