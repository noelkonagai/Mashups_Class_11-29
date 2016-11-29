

// var url = 'https://noelkonagai.carto.com/api/v2/viz/e88c65ea-9f4e-11e6-bb68-0ef24382571b/viz.json'

// cartodb.createVis('map', url)
//   .done(function(vis, layers) {
//   });

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Title', 'Introduction', 'Map', 'STS-21','STS-21 Map', 'Novaya Zemlya'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : ['#fff', '#ccc', '#fff','#990000','#990000','#ccc'],
        paddingTop: '0px',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
    console.log("Here");

    main();
});
  //   var CARTOCSS = [
  // 'Map {',
  // '-torque-frame-count:256;',
  // '-torque-animation-duration:20;',
  // '-torque-time-attribute:"date";',
  // '-torque-aggregation-function:"count(cartodb_id)";',
  // '-torque-resolution:2;',
  // '-torque-data-aggregation: linear;',
  // '}',
  // '#ussr_nuclear_tests_clean_dates {',
  // '  comp-op: lighter;',
  // '  marker-fill-opacity: 0.5;',
  // '  marker-line-color: #FFF;',
  // '  marker-line-width: 0;',
  // '  marker-line-opacity: 1;',
  // '  marker-type: ellipse;',
  // '  marker-width: 15;',
  // '  marker-fill: #850200;',
  // '}',
  // '#ussr_nuclear_tests_clean_dates[frame-offset=1] {',
  // ' marker-width:7.5;',
  // ' marker-fill-opacity:0.3;', 
  // '}',
  // '#ussr_nuclear_tests_clean_dates[frame-offset=2] {',
  // ' marker-width:9.5;',
  // ' marker-fill-opacity:0.15;', 
  // '}'
  //   ].join('\n');

function main() {
    console.log("Main!");
      $('map').append(cartodb.createVis('map', 'https://noelkonagai.carto.com/api/v2/viz/e88c65ea-9f4e-11e6-bb68-0ef24382571b/viz.json', {
          shareable: false,
          title: false,
          description: true,
          search: false,
          tiles_loader: true,
          center_lat: 60,
          center_lon: 85,
          zoom: 3
      })
      .done(function(vis, layers) {
        var slider = vis.timeSlider;
        slider.formatter(function(d) {
          return "Year: " + d.getFullYear();
        })
      })
      .error(function(err) {
        console.log(err);
      }));

      $('STS').append(cartodb.createVis('map', 'https://noelkonagai.carto.com/api/v2/viz/1d3c6310-3a47-4a8c-bfac-6b69c2df7450/viz.json', {
          shareable: false,
          title: true,
          description: true,
          search: false,
          tiles_loader: true,
          center_lat: 50.07,
          center_lon: 78.43,
          zoom: 8
      })
      .done(function(vis, layers) {
        var slider = vis.timeSlider;
        slider.formatter(function(d) {
          return "Year: " + d.getFullYear();
        })
      })
      .error(function(err) {
        console.log(err);
      }));
}

// var map = new L.Map('map', {
//   zoomControl: true,
//   center: [60, 85],
//   zoom: 3
// });

// var thing = L.tileLayer('http://{s}.api.cartocdn.com/base-dark/{z}/{x}/{y}.png', {
//   attribution: 'CARTO'
// }).addTo(map);



// var torqueLayer = new L.TorqueLayer({
//       user       : 'noelkonagai',
//       table      : 'ussr_nuclear_tests_clean_dates',
//       cartocss: CARTOCSS

// });
// torqueLayer.error(function(err){
//   for(error in err){
//     console.warn(err[error]);
//   }
// });

// maplayer.addTo(map);
// map.touchZoom.disable();
// // map.doubleClickZoom.disable();
// map.scrollWheelZoom.disable();
// map.keyboard.disable();
// // torqueLayer.play();
