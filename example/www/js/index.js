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
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function () {

    // Sign up for an OpenTok API Key at: https://tokbox.com/signup
    // Then generate a sessionId and token at: https://dashboard.tokbox.com
    var apiKey = "45761532"; // INSERT YOUR API Key
    var sessionId = "1_MX40NTc2MTUzMn5-MTQ4NzU5MjMwNDEyMX50ZHFwSDNNaE1Pd2ROdXpsclZSbjFaMGV-fg"; // INSERT YOUR SESSION ID
    var token = "T1==cGFydG5lcl9pZD00NTc2MTUzMiZzaWc9ZWVlYjE1OGQ1NzJjNjYwMDc5NDEwZjYzYmM0Zjc5MGUzMzlmZTg0MTpzZXNzaW9uX2lkPTFfTVg0ME5UYzJNVFV6TW41LU1UUTROelU1TWpNd05ERXlNWDUwWkhGd1NETk5hRTFQZDJST2RYcHNjbFpTYmpGYU1HVi1mZyZjcmVhdGVfdGltZT0xNDg3NTkyMzIxJm5vbmNlPTAuOTY1MTIzNjEwMjk2ODE2OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg4MTk3MTE5"; // INSERT YOUR TOKEN

    document.getElementById("buttonPerformNetworkTest").addEventListener("click", function () {
      var networkTest = TB.initNetworkTest(apiKey, sessionId, token, 35);
      networkTest.on({
        "statsValueReceieved": function (qualityValue) {
          console.log(qualityValue);
          alert(qualityValue);
        }
      });
    });


    // // Very simple OpenTok Code for group video chat
    // var publisher = TB.initPublisher(apiKey, 'myPublisherDiv');
    // var session = TB.initSession(apiKey, sessionId);

    // session.on({
    //   'streamCreated': function (event) {
    //     var div = document.createElement('div');
    //     div.setAttribute('id', 'stream' + event.stream.streamId);
    //     div.style.width = 100 + "%";
    //     div.style.height = 50 + "%";
    //     document.body.appendChild(div);
    //     session.subscribe(event.stream, div.id, {
    //       subscribeToAudio: false
    //     });
    //   }
    // });
    // session.connect(token, function () {
    //   session.publish(publisher);
    // });

    // session.on({
    //   'subscriberVideoEnabled': function (event) {
    //     console.log(event);
    //   }
    // });

    // session.on({
    //   'subscriberVideoDisabled': function (event) {
    //     console.log(event);
    //   }
    // });

    // session.on({
    //   'subscriberVideoDataReceivingStopped': function () {
    //     console.log('subscriberVideoDataReceivingStopped');
    //   }
    // });

  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {}
};