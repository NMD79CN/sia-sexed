'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('SaferSexCtrl', function ($scope) {
  // Proportion of HIV infectors
  var chart1 = {};
  chart1.type = "ColumnChart";
  chart1.cssStyle = "height:400px; width:60%;";
  chart1.data = {"cols": [
      {id: "year", label: "Year", type: "string"},
      {id: "male-id", label: "Male", type: "number"},
      {id: "female-id", label: "Female", type: "number"}
  ], "rows": [
      {c: [
          {v: "2009"},
          {v: 71.7, f: "71.7%"},
          {v: 28.3, f: "28.3%"},
      ]},
      {c: [
          {v: "2010"},
          {v: 70.7, f: "70.7%"},
          {v: 29.3, f: "29.3%"}
      ]},
      {c: [
          {v: "2011"},
          {v: 69, f: "69%"},
          {v: 31, f: "31%"}
      ]},
      {c: [
          {v: "2012"},
          {v: 68.5, f: "68.5%"},
          {v: 31.5, f: "31.5%"}
      ]},
      {c: [
          {v: "2013"},
          {v: 67.5, f: "67.5%"},
          {v: 32.5, f: "32.5%"}
      ]}
  ]};
  chart1.options = {
      "title": "Distribution of HIV Infectors by genders",
      "isStacked": "true",
      "fill": 10,
      "displayExactValues": true,
      "vAxis": {
          "title": "Percent", "gridlines": {"count": 6}
      },
      "hAxis": {
          "title": "Year"
      }
  };
  chart1.formatters = {};
  $scope.chartHiv = chart1;

  // % people use protection
    var chart1 = {};
    chart1.type = "PieChart";
    chart1.data = [
       ['Age group', 'Percent'],
       ['Age 0-19', 2],
       ['Age 20-29', 32.9],
       ['Age 30-39',45.1],
       ['Age >=40', 20]
      ];
    chart1.options = {
        // displayExactValues: true,
        width: 400,
        height: 200,
        is3D: true,
        chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };
    // chart1.formatters = {
    //   number : [{
    //     columnNum: 1,
    //     pattern: "#.##%"
    //   }]
    // };

    $scope.chartProtection = chart1;
});