/**
 * Created by Krasimir on 4/2/2016.
 */
'use strict';

musicApp.controller('ArtistDetails',
    function($scope, author, date) {
        var artist = {
                id: 1,
                name: "Linkin Park",
                image:"/img/1.jpg",
                created:"01/10/1998",
                additionalInformation: {
                location:"USA",
                    bandMembers:["Chester Benington","Mike Shinoda","Felix","Joseph Han","Rob Burton"],
                    albums:12,
                    singles:25
            },
                albums:[{
                    id:1,
                    name:"Hybrid Theory",
                    image:"/img/hybrid-theory.jpg",
                    year:1999,
                    songs:12,
                    rating:0,
                    price:12,
                    status:1
                },{
                    id:2,
                    name:"Meteora",
                    image:"/img/meteora.jpg",
                    year:2003,
                    songs:10,
                    rating:0,
                    price:11,
                    status:2
                },{
                    id:3,
                    name:"A thousand suns",
                    image:"/img/thousand-suns.png",
                    year:2008,
                    songs:14,
                    rating:0,
                    price:10,
                    status:3
                },{
                    name:"Reanimation",
                    image:"http://upload.wikimedia.org/wikipedia/en/7/7b/Linkin_park_reanimation.jpg",
                    year:"2002",
                    songs:"25",
                    price:"24",
                    status:"2"
                }]
        };

        $scope.artist = artist;
        $scope.author = author;
        $scope.date = date;
        $scope.hideInfo = true;
        $scope.showHideInfo = "Show info";
        $scope.showMoreInfo = showMoreInfo;

        function showMoreInfo() {
            $scope.hideInfo = !$scope.hideInfo;
            if($scope.hideInfo) {
                $scope.showHideInfo = "Show info";
            } else {
                $scope.showHideInfo = "Hide info";
            }
        }


    });