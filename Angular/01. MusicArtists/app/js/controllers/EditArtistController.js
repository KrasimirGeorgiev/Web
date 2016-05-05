/**
 * Created by Krasimir on 5/4/2016.
 */
'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope) {
        $scope.saveArtist = function(artist, newArtistForm) {
            if(newArtistForm.$valid) {
                alert(artist.name + " " + artist.created)
            }
            // alert(artist.name + " " + artist.created);
        };
        $scope.cancel = function(artist) {
            alert("cancel"); // TODO: Redirect
        };
    }
);