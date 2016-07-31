(function(){
	var app = angular.module('dataApp', []);
	app.controller('bodyCtrl', function($scope, $q,  dataService){ //main controller
		$scope.selection = [];

		$scope.selectResult = function(result) {
			if ($scope.selection.indexOf(result) > -1) {
				$scope.selection.splice($scope.selection.indexOf(result), 1);
			} else {
				$scope.selection.push(result);
			}
		}

		$scope.isResultSelected = function(result) {
			return ($scope.selection.indexOf(result) > -1);
		}


		dataService
			.getResults()
			.then(function(results){
				$scope.question = results.question;
				$scope.answers = (function(answers){
					var ret = [];
					for(var r in answers) {
						var answer = angular.copy(answers[r]);
						answer.caption = parseInt(r) + 1;	
						answer.color = palette[r];
						ret.push(answer);
					}
					return ret;
				}) (results.answers);
				$scope.results = (function(userTags){
					var ret = [];
					for(var r in userTags) {
						var result = angular.copy(userTags[r]);
						result.team = {
							key: r.split(':')[1],
							name: r.split(':')[1]
						}
						result.total = result.answers.reduce(function(total, value){
							return total + value;
						})						
						ret.push(result);
					}
					return ret;
				}) (results.userTags);

				$scope.total = $scope.answers.reduce(function(a, b){
					return {
						count: a.count + b.count
					};
				})

				dataService
					.getTeams()
					.then(function(teams){
						for(var t in teams) {
							var team = teams[t];
							var key = 'team-' + team._id;
							var findResult = (function(results, key){
								for(var r in results) {
									var result = results[r];
									if (result.team.key == key) return result;
								}
							})($scope.results, key)
							if (findResult) {
								findResult.team = team;
							}
						}
					})
			})
	})

	app.service('dataService', function($http, $q){
		var dataService = this;
		var cache = {};

		dataService.getResults = function() { // returns promise, dummy object
			return $q(function(resolve, reject){				
				resolve(results);
			})
		}

		dataService.getTeams = function() { // returns promise, ajax, cachable
			return cache.getTeams = (cache.getTeams) ? cache.getTeams
				: $q(function(resolve, reject){
					$http.get(getTeamsUrl).then(function(res){
						var teams = res && res.data && res.data.teams || null;
						if (!teams) return reject();
						resolve(teams)
					})
				});
		}
	})

	app.filter ('percentage', function(){
		return decimal2percentage;
	})

	app.directive ('graphicPie', function(){
		return {			
			scope: {
				result: "=",
				answers: "="
			},
			link: function($scope, $e, attrs) {		
				if (!$e.length) return;
				
				var canvas = new Raphael($e[0], '360', '240');
				var rows = answers2rows($scope.result.answers, $scope.answers);

				pieChart.call(canvas, 180, 120, 60, rows, "#000")
				
			}
		}
	})

	angular.bootstrap(document, ['dataApp']);
})()

