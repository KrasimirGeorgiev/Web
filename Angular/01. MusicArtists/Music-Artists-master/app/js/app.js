'use strict';

var musicApp = angular
    .module('musicApp', [])
    .value('author', {
        name: 'Krasimir Georgiev'
    })
    .value('date', {
        year: '2016',
        month: '04',
        day: "02"
    });