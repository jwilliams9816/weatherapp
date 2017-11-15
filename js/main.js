// Default location (area code or city, state – in quotes)
var lc = "Westerly,RI";   


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
  html =  '<main>';
  html += '<section class="top">';
  html += '<h1 class="wdata-01">'+weather.city+', '+weather.region+'</h1>';  
  html += '<h2 class="wdata-02">'+weather.updated+';</h2>';
  html += '<p class="wdata-03">'+weather.wind.direction+'</p>';
  html += '<div class="left">';
  html += '<h3 class="wdata-04">'+weather.low+'&deg;</h3>';
  html += '</div>';
  html += '<div class="right">';
  html += '<h3 class="wdata-05">'+weather.high+'&deg;</h3>';
  html += '</div>';
  html += '<h4 class="wdata-06">'+weather.temp+ '&deg;</h4>';
  html += '</section>';
  html += '<section class="bottom">';
  html += '<div class="one">';
  html += '<h3 class="wdata-04">'+weather.forecast[1].day+'</h3>';
  html += '</div>';
  html += '<div class="two">';
  html += '<h3 class="wdata-05">'+weather.forecast[2].day+'</h3>';
  html += '</div>';
  html += '<div class="three">';
  html += '<h3 class="wdata-05">'+weather.forecast[3].day+'</h3>';
  html += '</div>';
  html += '<div class="four">';
  html += '<h3 class="wdata-05">'+weather.forecast[4].day+'</h3>';
  html += '</div>';
  html += '<div class="five">';
  html += '<h3 class="wdata-05">'+weather.forecast[5].day+'</h3>';
  html += '</div>';
  html += '<div class="six">';
  html += '<h3 class="wdata-05">'+weather.forecast[6].day+'</h3>';
  html += '</div>'; 
    html += '<div class="one">';
    html += '<h3 class="wdata-04">'+weather.forecast[1].high+'</h3>';
    html += '</div>';
    html += '<div class="two">';
    html += '<h3 class="wdata-05">'+weather.forecast[2].high+'</h3>';
    html += '</div>';
    html += '<div class="three">';
    html += '<h3 class="wdata-05">'+weather.forecast[3].high+'</h3>';
    html += '</div>';
    html += '<div class="four">';
    html += '<h3 class="wdata-05">'+weather.forecast[4].high+'</h3>';
    html += '</div>';
    html += '<div class="five">';
    html += '<h3 class="wdata-05">'+weather.forecast[5].high+'</h3>';
    html += '</div>';
    html += '<div class="six">';
    html += '<h3 class="wdata-05">'+weather.forecast[6].high+'</h3>';
    html += '</div>'; 
  html += '</section>';
  html += '</main>';

	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

 