$(document).ready(function() {
   $("#clear").click(function() {
    $("#results").empty();
   });
   $("#search").click(function() {
    var part1 = "https://api.foursquare.com/v2/venues/search?v=20161016&near=";

    var searchVal1 = $("#location").val();
    var part2 = "&query=";
    var searchVal2 = $("#food").val();
    var part3 = "&intent=checkin&client_id=KNUBWSXGZ01BFPWOKN10EZ4IK4FHCK34HSY00FQDRANACJHC&client_secret=ULXFVPA5JEJAUQNTZ2SEBHBPONNWCNEXJXU2PMH50L15ZOJ1";
    var url = part1 + searchVal1 + part2 + searchVal2 + part3;
    
    $.getJSON(url, function(response) {
     // var infoUrl= response.venues[1] + response.venues[2].formattedPhone + response.location.formattedAddress; 
     var firstVenue = response.response.venues[0].name;
    
     var secondVenue= response.response.venues[0].contact.formattedPhone;
     var thirdVenue=response.response.formattedAddress;
     alert(thirdVenue);
     //var info = "<p>'" + infoUrl + "'/>";
    // $("body").append(info);

    });
   });
 });