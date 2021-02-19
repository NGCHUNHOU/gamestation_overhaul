(()=>{var e={209:()=>{!function(e){"use strict";e(document).ready((function(){var t=e("#google_map"),a=t.attr("data-pin"),r=t.attr("data-map-x"),i=t.attr("data-map-y"),n=t.attr("data-scrollwhell"),o=t.attr("data-draggable");null==a&&(a="images/icons/location.png"),null!=r&&null!=i||(r=40.007749,i=-93.266572),null==n&&(n=0),null==o&&(o=0);var l=r,s=i,d=[["Welcome",l,s,2]];if(void 0!==t)var c=new google.maps.Map(document.getElementById("google_map"),{zoom:13,scrollwheel:n,navigationControl:!0,mapTypeControl:!1,scaleControl:!1,draggable:o,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],center:new google.maps.LatLng(l,s),mapTypeId:google.maps.MapTypeId.ROADMAP});var m,u,p=new google.maps.InfoWindow;for(u=0;u<d.length;u++)m=new google.maps.Marker({position:new google.maps.LatLng(d[u][1],d[u][2]),map:c,icon:a}),google.maps.event.addListener(m,"click",function(e,t){return function(){p.setContent(d[t][0]),p.open(c,e)}}(m,u))}))}(jQuery)},430:()=>{isWindows=navigator.platform.indexOf("Win")>-1,isWindows?($(".sidebar .sidebar-wrapper, .main-panel, .main").perfectScrollbar(),$("html").addClass("perfect-scrollbar-on")):$("html").addClass("perfect-scrollbar-off");var e=!0,t=0,a=!1,r=0,i=0;function n(e,t,a){var r;return function(){var i=this,n=arguments;clearTimeout(r),r=setTimeout((function(){r=null,a||e.apply(i,n)}),t),a&&!r&&e.apply(i,n)}}$(document).ready((function(){$("body").bootstrapMaterialDesign(),$sidebar=$(".sidebar"),md.initSidebarsCheck(),window_width=$(window).width(),md.checkSidebarImage(),0!=$(".selectpicker").length&&$(".selectpicker").selectpicker(),$('[rel="tooltip"]').tooltip(),$(".form-control").on("focus",(function(){$(this).parent(".input-group").addClass("input-group-focus")})).on("blur",(function(){$(this).parent(".input-group").removeClass("input-group-focus")})),$('input[type="checkbox"][required="true"], input[type="radio"][required="true"]').on("click",(function(){$(this).hasClass("error")&&$(this).closest("div").removeClass("has-error")}))})),$(document).on("click",".navbar-toggler",(function(){if($toggle=$(this),1==t)$("html").removeClass("nav-open"),$(".close-layer").remove(),setTimeout((function(){$toggle.removeClass("toggled")}),400),t=0;else{setTimeout((function(){$toggle.addClass("toggled")}),430);var e=$('<div class="close-layer"></div>');0!=$("body").find(".main-panel").length?e.appendTo(".main-panel"):$("body").hasClass("off-canvas-sidebar")&&e.appendTo(".wrapper-full-page"),setTimeout((function(){e.addClass("visible")}),100),e.click((function(){$("html").removeClass("nav-open"),t=0,e.removeClass("visible"),setTimeout((function(){e.remove(),$toggle.removeClass("toggled")}),400)})),$("html").addClass("nav-open"),t=1}})),$(window).resize((function(){md.initSidebarsCheck(),r=i=0,setTimeout((function(){md.initDashboardPageCharts()}),500)})),md={misc:{navbar_menu_visible:0,active_collapse:!0,disabled_collapse_init:0},checkSidebarImage:function(){$sidebar=$(".sidebar"),image_src=$sidebar.data("image"),void 0!==image_src&&(sidebar_container='<div class="sidebar-background" style="background-image: url('+image_src+') "/>',$sidebar.append(sidebar_container))},showNotification:function(e,t){type=["","info","danger","success","warning","rose","primary"],color=Math.floor(6*Math.random()+1),$.notify({icon:"add_alert",message:"Welcome to <b>Material Dashboard Pro</b> - a beautiful admin panel for every web developer."},{type:type[color],timer:3e3,placement:{from:e,align:t}})},initDocumentationCharts:function(){0!=$("#dailySalesChart").length&&0!=$("#websiteViewsChart").length&&(dataDailySalesChart={labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},optionsDailySalesChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}},new Chartist.Line("#dailySalesChart",dataDailySalesChart,optionsDailySalesChart),new Chartist.Line("#websiteViewsChart",dataDailySalesChart,optionsDailySalesChart))},initFormExtendedDatetimepickers:function(){$(".datetimepicker").datetimepicker({icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-screenshot",clear:"fa fa-trash",close:"fa fa-remove"}}),$(".datepicker").datetimepicker({format:"MM/DD/YYYY",icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-screenshot",clear:"fa fa-trash",close:"fa fa-remove"}}),$(".timepicker").datetimepicker({format:"h:mm A",icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-screenshot",clear:"fa fa-trash",close:"fa fa-remove"}})},initSliders:function(){var e=document.getElementById("sliderRegular");noUiSlider.create(e,{start:40,connect:[!0,!1],range:{min:0,max:100}});var t=document.getElementById("sliderDouble");noUiSlider.create(t,{start:[20,60],connect:!0,range:{min:0,max:100}})},initSidebarsCheck:function(){$(window).width()<=991&&0!=$sidebar.length&&md.initRightMenu()},checkFullPageBackgroundImage:function(){$page=$(".full-page"),image_src=$page.data("image"),void 0!==image_src&&(image_container='<div class="full-page-background" style="background-image: url('+image_src+') "/>',$page.append(image_container))},initDashboardPageCharts:function(){if(0!=$("#dailySalesChart").length||0!=$("#completedTasksChart").length||0!=$("#websiteViewsChart").length){dataDailySalesChart={labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},optionsDailySalesChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}};var e=new Chartist.Line("#dailySalesChart",dataDailySalesChart,optionsDailySalesChart);md.startAnimationForLineChart(e),dataCompletedTasksChart={labels:["12p","3p","6p","9p","12p","3a","6a","9a"],series:[[230,750,450,300,280,240,200,190]]},optionsCompletedTasksChart={lineSmooth:Chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}};var t=new Chartist.Line("#completedTasksChart",dataCompletedTasksChart,optionsCompletedTasksChart);md.startAnimationForLineChart(t);var a=Chartist.Bar("#websiteViewsChart",{labels:["J","F","M","A","M","J","J","A","S","O","N","D"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(e){return e[0]}}}]]);md.startAnimationForBarChart(a)}},initMinimizeSidebar:function(){$("#minimizeSidebar").click((function(){$(this),1==md.misc.sidebar_mini_active?($("body").removeClass("sidebar-mini"),md.misc.sidebar_mini_active=!1):($("body").addClass("sidebar-mini"),md.misc.sidebar_mini_active=!0);var e=setInterval((function(){window.dispatchEvent(new Event("resize"))}),180);setTimeout((function(){clearInterval(e)}),1e3)}))},checkScrollForTransparentNavbar:n((function(){$(document).scrollTop()>260?e&&(e=!1,$(".navbar-color-on-scroll").removeClass("navbar-transparent")):e||(e=!0,$(".navbar-color-on-scroll").addClass("navbar-transparent"))}),17),initRightMenu:n((function(){$sidebar_wrapper=$(".sidebar-wrapper"),a?$(window).width()>991&&($sidebar_wrapper.find(".navbar-form").remove(),$sidebar_wrapper.find(".nav-mobile-menu").remove(),a=!1):($navbar=$("nav").find(".navbar-collapse").children(".navbar-nav"),mobile_menu_content="",nav_content=$navbar.html(),nav_content='<ul class="nav navbar-nav nav-mobile-menu">'+nav_content+"</ul>",navbar_form=$("nav").find(".navbar-form").get(0).outerHTML,$sidebar_nav=$sidebar_wrapper.find(" > .nav"),$nav_content=$(nav_content),$navbar_form=$(navbar_form),$nav_content.insertBefore($sidebar_nav),$navbar_form.insertBefore($nav_content),$(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click((function(e){e.stopPropagation()})),window.dispatchEvent(new Event("resize")),a=!0)}),200),startAnimationForLineChart:function(e){e.on("draw",(function(e){"line"===e.type||"area"===e.type?e.element.animate({d:{begin:600,dur:700,from:e.path.clone().scale(1,0).translate(0,e.chartRect.height()).stringify(),to:e.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}}):"point"===e.type&&(r++,e.element.animate({opacity:{begin:80*r,dur:500,from:0,to:1,easing:"ease"}}))})),r=0},startAnimationForBarChart:function(e){e.on("draw",(function(e){"bar"===e.type&&(i++,e.element.animate({opacity:{begin:80*i,dur:500,from:0,to:1,easing:"ease"}}))})),i=0},initFullCalendar:function(){$calendar=$("#fullCalendar"),today=new Date,y=today.getFullYear(),m=today.getMonth(),d=today.getDate(),$calendar.fullCalendar({viewRender:function(e,t){"month"!=e.name&&$(t).find(".fc-scroller").perfectScrollbar()},header:{left:"title",center:"month,agendaWeek,agendaDay",right:"prev,next,today"},defaultDate:today,selectable:!0,selectHelper:!0,views:{month:{titleFormat:"MMMM YYYY"},week:{titleFormat:" MMMM D YYYY"},day:{titleFormat:"D MMM, YYYY"}},select:function(e,t){swal({title:"Create an Event",html:'<div class="form-group"><input class="form-control" placeholder="Event Title" id="input-field"></div>',showCancelButton:!0,confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1}).then((function(a){var r;event_title=$("#input-field").val(),event_title&&(r={title:event_title,start:e,end:t},$calendar.fullCalendar("renderEvent",r,!0)),$calendar.fullCalendar("unselect")})).catch(swal.noop)},editable:!0,eventLimit:!0,events:[{title:"All Day Event",start:new Date(y,m,1),className:"event-default"},{id:999,title:"Repeating Event",start:new Date(y,m,d-4,6,0),allDay:!1,className:"event-rose"},{id:999,title:"Repeating Event",start:new Date(y,m,d+3,6,0),allDay:!1,className:"event-rose"},{title:"Meeting",start:new Date(y,m,d-1,10,30),allDay:!1,className:"event-green"},{title:"Lunch",start:new Date(y,m,d+7,12,0),end:new Date(y,m,d+7,14,0),allDay:!1,className:"event-red"},{title:"Md-pro Launch",start:new Date(y,m,d-2,12,0),allDay:!0,className:"event-azure"},{title:"Birthday Party",start:new Date(y,m,d+1,19,0),end:new Date(y,m,d+1,22,30),allDay:!1,className:"event-azure"},{title:"Click for Creative Tim",start:new Date(y,m,21),end:new Date(y,m,22),url:"http://www.creative-tim.com/",className:"event-orange"},{title:"Click for Google",start:new Date(y,m,21),end:new Date(y,m,22),url:"http://www.creative-tim.com/",className:"event-orange"}]})},initVectorMap:function(){$("#worldMap").vectorMap({map:"world_mill_en",backgroundColor:"transparent",zoomOnScroll:!1,regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":.9,stroke:"none","stroke-width":0,"stroke-opacity":0}},series:{regions:[{values:{AU:760,BR:550,CA:120,DE:1300,FR:540,GB:690,GE:200,IN:200,RO:600,RU:300,US:2920},scale:["#AAAAAA","#444444"],normalizeFunction:"polynomial"}]}})}}},582:()=>{!function(){let e=document.querySelectorAll("div.sidebar-wrapper ul.nav li.nav-item");if("collapsed"===document.querySelector(".sidebar").dataset.displaystatus){for(let t=0;t<e.length;t++)e[t].querySelector("a.nav-link p").style.display="none",e[t].querySelector("a.nav-link").style.display="inline-block",e[t].querySelector("i.material-icons.sidebar-icon").style.float="none",e[t].querySelector("i.material-icons.sidebar-icon").style.margin=0;document.querySelector("div.sidebar-wrapper").style.transition="0.5s width",document.querySelector("div.sidebar-wrapper").style.width="100%",document.querySelector("div.sidebar-wrapper").style.display="inline-block",document.querySelector("div.sidebar div.logo").style.display="none",document.querySelector("div.sidebar").style.width="90px",document.querySelector("div.sidebar").style.display="inline-block",$(".sidebar-btn").css({transition:"0.5s left",left:"30%"}),document.querySelector(".main-panel").style.width="calc(100% - 90px)",document.querySelector("span.material-icons.sidebar-btn").innerText="arrow_forward"}else if("expanded"===document.querySelector(".sidebar").dataset.displaystatus){for(let t=0;t<e.length;t++)e[t].querySelector("a.nav-link p").removeAttribute("style"),e[t].querySelector("a.nav-link").removeAttribute("style"),e[t].querySelector("i.material-icons.sidebar-icon").removeAttribute("style"),e[t].querySelector("i.material-icons.sidebar-icon").removeAttribute("style");document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar div.logo").removeAttribute("style"),document.querySelector("div.sidebar").removeAttribute("style"),document.querySelector("div.sidebar").removeAttribute("style"),document.querySelector(".sidebar-btn").removeAttribute("style"),document.querySelector("span.material-icons.sidebar-btn").innerText="arrow_back"}}(),$(".sidebar-btn").on("click",(()=>{"collapsed"==document.querySelector(".sidebar").dataset.displaystatus?document.querySelector(".sidebar").dataset.displaystatus="expanded":"expanded"==document.querySelector(".sidebar").dataset.displaystatus&&(document.querySelector(".sidebar").dataset.displaystatus="collapsed")}));let e=e=>{$.ajax({contentType:"application/x-www-form-urlencoded",method:"POST",url:"/gamestation/admin/state.php",data:"state="+e})},t=document.querySelector(".sidebar");new MutationObserver((t=>{t.forEach((t=>{let a=document.querySelectorAll("div.sidebar-wrapper ul.nav li.nav-item");if("data-displaystatus"===t.attributeName&&"collapsed"===t.target.getAttribute(t.attributeName)){for(let e=0;e<a.length;e++)a[e].querySelector("a.nav-link p").style.display="none",a[e].querySelector("a.nav-link").style.display="inline-block",a[e].querySelector("i.material-icons.sidebar-icon").style.float="none",a[e].querySelector("i.material-icons.sidebar-icon").style.margin=0;document.querySelector("div.sidebar-wrapper").style.transition="0.5s width",document.querySelector("div.sidebar-wrapper").style.width="100%",document.querySelector("div.sidebar-wrapper").style.display="inline-block",document.querySelector("div.sidebar div.logo").style.display="none",document.querySelector("div.sidebar").style.width="90px",document.querySelector("div.sidebar").style.display="inline-block",$(".sidebar-btn").css({transition:"0.5s left",left:"30%"}),document.querySelector(".main-panel").style.width="calc(100% - 90px)",document.querySelector("span.material-icons.sidebar-btn").innerText="arrow_forward",e("collapsed")}else if("data-displaystatus"===t.attributeName&&"expanded"===t.target.getAttribute(t.attributeName)){for(let e=0;e<a.length;e++)a[e].querySelector("a.nav-link p").removeAttribute("style"),a[e].querySelector("a.nav-link").removeAttribute("style"),a[e].querySelector("i.material-icons.sidebar-icon").removeAttribute("style"),a[e].querySelector("i.material-icons.sidebar-icon").removeAttribute("style");document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar-wrapper").removeAttribute("style"),document.querySelector("div.sidebar div.logo").removeAttribute("style"),document.querySelector("div.sidebar").removeAttribute("style"),document.querySelector("div.sidebar").removeAttribute("style"),document.querySelector(".sidebar-btn").removeAttribute("style"),document.querySelector(".main-panel").style.width="calc(100% - 260px)",document.querySelector("span.material-icons.sidebar-btn").innerText="arrow_back",e("expanded")}}))})).observe(t,{subtree:!0,attributes:!0,childList:!0})}},t={};function a(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a(582),a(430),a(209)((function(e){"use strict";e(".input100").each((function(){e(this).on("blur",(function(){""!=e(this).val().trim()?e(this).addClass("has-val"):e(this).removeClass("has-val")}))}));var t=e(".validate-input .input100");function a(t){if("email"==e(t).attr("type")||"email"==e(t).attr("name")){if(null==e(t).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/))return!1}else if(""==e(t).val().trim())return!1}function r(t){var a=e(t).parent();e(a).addClass("alert-validate")}e(".validate-form").on("submit",(function(){for(var e=!0,i=0;i<t.length;i++)0==a(t[i])&&(r(t[i]),e=!1);return e})),e(".validate-form .input100").each((function(){e(this).focus((function(){!function(t){var a=e(t).parent();e(a).removeClass("alert-validate")}(this)}))}))}))(jQuery),console.log("webpack is working")})();