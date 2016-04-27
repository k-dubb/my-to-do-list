(function() {

var app = angular.module('myTodo');

    app.controller('MainController', function($scope, $http) {

// function mainController($scope, $http) {
    // $scope.formData = {};
// var myTodo = angular.module('myTodo');

// function mainController($scope, $http) {
//     $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $http.get('/api/photos')
        .success(function(data) {
            $scope.photos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });



    // $scope.showPhoto = function(){
    //     return photo.url;
    //     console.log(photo.url)

    // }

        // toggle between checkboxes when choosing background image
    $scope.choosePhoto = function(position, photos) {

        angular.forEach(photos, function(photo, index) {
            if (position != index) {
                photo.checked = false;
            }
            
        });
    }

    //     $http.get('/api/photos/' + id)
    //         .success(function(data) {
    //             $scope.photos = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    // };

      //   $http({
      //       method: 'GET',
      //       url: '/api/photos' + id
      //   }).then(function successCallback(response) {
      //   console.log('success', response.data);

      // self.photos = response.data;

      // self.currentPhoto = {
      //   type:
      //   url:
      // }

        // var picture = this.photo.type;




});
})();