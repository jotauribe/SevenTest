const axios = require('axios')
const userModel = require('../models/user')

//Endpoint to list Github users with events and gists
exports.gitHubList= async ({body}, res, next)=>{
    let responseArray = []
    for (let username  of  body.usernames){
        let response = await axios.all([
            axios.get('https://api.github.com/users/'+username+'/events'),
            axios.get('https://api.github.com/users/'+username+'/gists')
        ]).catch(error => {
            console.log(error)
          });

        let events = response[0].data
        let eventsNumber = events.reduce((a, obj) => a + Object.keys(obj).length, 0)
        
        if(eventsNumber > 5){
            events = events.slice(0, 5)
        }

        let gists = response[1].data
        let gistsNumber = gists.reduce((a, obj) => a + Object.keys(obj).length, 0)

        if(gistsNumber > 3){
            gists = gists.slice(0, 3)
        }

        let userObject = {
            username: username,
            events: events,
            gists: gists
        }
        try {
            for(files of userObject.gists){
                delete files.files
            }
        } catch (error) {
           return res.status(400).json({error: error})
        } 
        responseArray.push(userObject)
        let user = new userModel(userObject).save().catch(error => {
            return res.status(400).json({error: error})
          });
    }
    return res.status(200).json(responseArray);
}