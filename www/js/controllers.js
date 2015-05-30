
angular.module('starter.controllers', ['angularMoment'])

//.controller('DashCtrl', 'moment', 'angularMoment', function($scope, moment, angularMoment) {
.controller('DashCtrl', ['$scope', 'moment', function($scope, moment) {

	//var now = moment().format('h:mm:ss a');




	$scope.momentResult = moment().format('h:mm:ss');

	$scope.startTimer = function(){
//	var moment = require('moment');
		var start = new Date();
		$scope.startedAt = start;

	}

  var now = moment();

  $scope.currentTime = now; //updateCurrentTime();

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
