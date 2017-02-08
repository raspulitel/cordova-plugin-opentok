/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {

      // Sign up for an OpenTok API Key at: https://tokbox.com/signup
      // Then generate a sessionId and token at: https://dashboard.tokbox.com
      var apiKey = "45761532"; // INSERT YOUR API Key
      var sessionId = "1_MX40NTc2MTUzMn5-MTQ4NjQ3MzI1MTk1Nn5nTzF0b3dlN1ZRY3hsMExlMndZMEJLUGl-fg"; // INSERT YOUR SESSION ID
      var token = "T1==cGFydG5lcl9pZD00NTc2MTUzMiZzaWc9OWNmMmVhYjhhOTM3N2UwYjYzYzExNWFmYjNiYTkwMjdkYTYwODVkODpzZXNzaW9uX2lkPTFfTVg0ME5UYzJNVFV6TW41LU1UUTROalEzTXpJMU1UazFObjVuVHpGMGIzZGxOMVpSWTNoc01FeGxNbmRaTUVKTFVHbC1mZyZjcmVhdGVfdGltZT0xNDg2NDczMjc5Jm5vbmNlPTAuOTgwNjAyNzAwMTczODAyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg3MDc4MDc4"; // INSERT YOUR TOKEN
      

      var networkTest = TB.initNetworkTest(apiKey,sessionId,token);

      networkTest.on({ "statsValueReceieved": function(qualityValue) {
          console.log(qualityValue);
        }
      })

      // // Very simple OpenTok Code for group video chat
      // var publisher = TB.initPublisher(apiKey,'myPublisherDiv');

      // var session = TB.initSession( apiKey, sessionId ); 


      // session.on({
      //   'streamCreated': function( event ){
      //       var div = document.createElement('div');
      //       div.setAttribute('id', 'stream' + event.stream.streamId);
      //       document.body.appendChild(div);
      //       session.subscribe( event.stream, div.id, {subscribeToAudio: false} );
      //   }
      // });
      // session.connect(token, function(){
      //   session.publish( publisher );
      // });

      // session.on({'subscriberVideoEnabled': function(event) {
      //       console.log(event);
      //     }
      // })
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
  }
};
