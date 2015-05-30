
angular.module('starter.controllers', ['angularMoment'])

//.controller('DashCtrl', 'moment', 'angularMoment', function($scope, moment, angularMoment) {
.controller('DashCtrl', ['$scope', 'moment', '$interval', '$state', function($scope, moment, $interval, $state) {

	//var now = moment().format('h:mm:ss a');


//Get phone UUID
   var start = device.uuid;

//STORE TO LOCAL STORAGE

  var start = new Date();
    $scope.startedAt = start;

    //Put the date/time of last load into localStorage
    var priorCount = window.localStorage["ourCount"]; //.key("ourCount");
    //console.log("priorCount");
    //console.log(priorCount);
    priorCount = Number(priorCount);
    //console.log("prior count Num  :: ", priorCount);
    var nextCount = priorCount += 1;
    //console.log("nextCount");
    //console.log(nextCount);

    window.localStorage.setItem("ourCount",nextCount);

    window.localStorage.setItem(nextCount.toString(), "Hello at "+start);

//THIS SWIPES US TO A NEW PAGE
  $scope.swipeRight = function(){
    //where we choose the place to route to
    $state.go("tab.chats");
  }

	$scope.momentResult = moment().format('h:mm:ss');

// 	$scope.startTimer = function(){
// //	var moment = require('moment');
// 		var start = new Date();
// 		$scope.startedAt = start;

// 	}

var count = 0;

var pulsar;
  $scope.start = function(){
   pulsar = $interval(updateTime, 1000);
  }

  function updateTime(){
    var now = moment();
    count +=1;
    $scope.currentTime = now;
    //$("#goesHere").html(now);
    console.log(now);
    console.log(count);
    //console.log("update time");
    //updateCurrentTime();
  }

$scope.stop = function(){
  $interval.cancel(pulsar);
}

  // function timer(){
  //   setInterval(function(){updateTime()},1000)
  // };

  // timer();



// function updateCurrentTime(){
//     now = moment().format('h:mm:ss');
//     //$('#currentT').html(now);
//     //scope.currentTime = now;
//     setTimeout(updateCurrenTime, 1000);
//   })();

}])


// WORKING
// .controller('DashCtrl', function($scope) {

// 	//var now = moment().format('h:mm:ss a');
// 	$scope.momentResult = "now";//"WTF"; //moment().format('h:mm:ss');

// 	$scope.startTimer = function(){
// //	var moment = require('moment');
// 		var start = new Date();
// 		$scope.startedAt = start;

// 	}




// })








.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
