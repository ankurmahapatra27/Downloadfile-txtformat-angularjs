var app = angular.module ('myApp',[]);
app.controller ('myCtrl', function ($scope) {
    $scope.downloadData='cdhugdwyugfwuyd';

   $scope.setupDownloadLink = function() {
        //console.log(downloadTxt);
        console.log($scope.downloadData);
       downloadTxt.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent($scope.downloadData);
       // console.log(download.href);
    };
});
