'use strict';

/* Controllers */
var sexEdControllers = angular.module('SexEdControllers');

sexEdControllers.controller('SaferSexCtrl', function ($scope) {
  //Provinces
  $scope.provinces = ['Hà Nội', 'Thành phố Hồ Chí Minh'];

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
        width: 600,
        height: 300,
        is3D: true,
        chartArea: {height:"100%"}
    };
    $scope.chartProtection = chart1;
});

// $scope.branches = [['STI Ngôi nhà tuổi trẻ clinics (miễn phí)
//   5 Nguyễn Quý Đức Street,  Thanh Xuân District, Hà Nội
//   Phone: 04.35540155',
//   'Hải Đăng Men Health Club clinics
//    5, 30 Backway Cát Linh, Đống Đa District, Hà Nội
//   Phone: 04.37349148',
//   'Leprosy Dermatology Hospital
//   79B Nguyễn Khuyến Street, Đống Đa District, Hà Nội
//   Phone: 04.38510163/04.37334152',
//   'National Leprosy Dermatology Hospita
//   Phương Mai Street,  Đống Đa District, Hà Nội
//   Phone: 04.38524762,
//   Đống Đa Hospital, Hà Nội'
//   '190 Nguyễn Lương Bằng Street,  Đống Đa District, Hà Nội
//   Phone: 04.35115039/04.35118752',
//   'Association for HIV/AIDS Prevention and Control,  Hà Nội
//   86 Thợ Nhuộm Street, Hoàn Kiếm District, Hà Nội
//   Phone: 04.38221526',
//   'Trường Giang General Hospital
//   15, 168 Backway Kim Giang Street,  Hoàng Mai District, Hà Nội
//   Phone: 04.35599957',
//   'Light Center
//   4 Building A2, Nguyễn Khánh Toàn Street, Cầu Giấy District, Hà Nội
//   Phone: 04.362671455',
//   'Center for Women Health Support  - Đức Giang Hospital
//   Trường Lâm Street, Đức Giang, Long Biên District, Hà Nội
//   Phone: 04.38776625'],
//   ['Ánh Dương Center  (miễn phí)
//     71 Võ Thị Sáu Street, Ward 6, District 3, Hồ Chí Minh City
//     Phone: 08.38209426',
//     'STI Clinics - Bầu trời xanh Club (Sexuality for men Project)
//     (free testing and treatment)
//     8/104 Đinh Bộ Lĩnh Street, Ward 24, Bình Thạnh District,  Hồ Chí Minh City
//     Phone: 08.35513940/08.22160848',
//     'An Hòa Clinics  (free diagnosis and treatment)
//     958/24k Lò Gốm Street, Ward 8, District 6,  Hồ Chí Minh City
//     Phone: 08.38545285',
//     'Consulting and Assisting Community Center, District 1
//     48 - 52 Mã Lộ Street, Tân Định Ward, District 1, Hồ Chí Minh City
//     Phone: 08.3820654',
//     'Dermatologic Clinics (DFID)
//     82 Cao Lỗ, Ward 4, District 8, Hồ Chí Minh City
//     Phone: 08.38506186',
//     'Marie Stopes Clinics, District 5
//     42 Học Lạc, Ward 14, District 5,  Hồ Chí Minh City
//     Phone: 08.39241713/08.38552616',
//     'Marie Stopes Clinics, District 1
//     253 Trần Quang Khải Street, Tân Định Ward, District 1,  Hồ Chí Minh City
//     Phone: 08.35265950'
//   ]];