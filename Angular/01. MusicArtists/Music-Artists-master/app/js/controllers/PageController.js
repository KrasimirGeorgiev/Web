/**
 * Created by Krasimir on 4/2/2016.
 */

'use strict';
musicApp.controller('PageController',
    function PageConroller($scope){
        $scope.author = "Krasimir Georgiev";
        $scope.date = {
            year: "2016",
            month: "04",
            day: "02"
        }
    }
);