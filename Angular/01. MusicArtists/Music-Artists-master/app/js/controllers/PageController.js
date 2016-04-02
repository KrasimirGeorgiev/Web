/**
 * Created by Krasimir on 4/2/2016.
 */

'use strict';
musicApp.controller('PageController',
    function PageConroller($scope, author, date){
        $scope.author = author;
        $scope.date = date;
    }
);