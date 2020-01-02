var request = require('request-promise');


var dialogueAPI = {
  //token: '54306a8d7c3e4bc5860eb6f2c3287c45',
  query: '',
  getResponse: function(query) {
    return request({
      "method":"GET",
      "uri": "http://127.0.0.1:5000/api/getresponse?query="+query,
      "json": false,
      "headers": {
        //"Authorization": "Bearer " + dialogueAPI.token,
        "User-Agent": "chat-client"
      }
    });
  }
}


var getRes = function(query) {
  return dialogueAPI.getResponse(query).then(function(res){return res});;
}




//getRes('hello').then(function(res){console.log(res)});

module.exports = {getRes}
