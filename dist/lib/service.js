"use strict";const axios = require('axios');

async function getData(userid) {
 
    var user;
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+userid);
      user= response.data;
    } 
    catch (error) {     
      console.error(error);
    }

    try{
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userid);
    user.posts = posts.data;
    }
    catch (error) {     
      console.error(error);
    }

    return user;
}

module.exports = getData;