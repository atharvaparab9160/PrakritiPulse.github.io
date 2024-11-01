const options0 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd438ce628emsha197cfce4c42daap15e05ajsn135235f5469c',
		'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
	}
};

function getlocation_id(city){
  fetch(
    "https://foreca-weather.p.rapidapi.com/location/search/" + city,
    options0
  )  
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      locationid = response.locations[0].id;
      console.log("location id:",locationid);
      return locationid
      })
}


const getWeather = (city) => {
  fetch(
    "https://foreca-weather.p.rapidapi.com/location/search/" + city,
    options0
  )  
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      loc_id = response.locations[0].id;
      console.log("location id:",loc_id);
      
      cityName1.innerHTML = city;
      cityName2.innerHTML = city;
      cityName3.innerHTML = city;
      cityName4.innerHTML = city;

      fetch(
        "https://foreca-weather.p.rapidapi.com/current/"+loc_id+"?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
        options0
      )
        .then((response) => response.json())
        .then((response) => {
          
          console.log(response);
          console.log("getweather",loc_id)
          

          cloud_pct1.innerHTML = response.current.cloudiness;
          cloud_pct2.innerHTML = response.current.cloudiness;
          temp1.innerHTML = response.current.temperature;
          temp2.innerHTML = response.current.temperature;
          temp3.innerHTML = response.current.temperature;
          zerosummarytemp.innerHTML = response.current.temperature;
          feels_like1.innerHTML = response.current.feelsLikeTemp;
          feels_like2.innerHTML = response.current.feelsLikeTemp;
          humidity1.innerHTML = response.current.relHumidity;
          humidity2.innerHTML = response.current.relHumidity;
          humidity3.innerHTML = response.current.relHumidity;
          min_temp1.innerHTML = response.current.thunderProb;
          min_temp2.innerHTML = response.current.thunderProb;
          max_temp1.innerHTML = response.current.symbolPhrase;
          max_temp2.innerHTML = response.current.symbolPhrase;
          wind_speed1.innerHTML = response.current.windSpeed;
          wind_speed2.innerHTML = response.current.windSpeed;
          wind_speed3.innerHTML = response.current.windSpeed;
          wind_degrees1.innerHTML = response.current.windDir + "° " + response.current.windDirString;
          wind_degrees2.innerHTML = response.current.windDir + "° " + response.current.windDirString;
          sunrise1.innerHTML = response.current.dewPoint;
          sunrise2.innerHTML = response.current.dewPoint;
          sunset1.innerHTML = response.current.precipProb;
          sunset2.innerHTML = response.current.precipProb;
    }).catch((err) => console.error(err));
  }).catch((err) => console.error(err))
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Mumbai");



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3c01b0426emshd528bd071c646eap1782b0jsn791fcb41d136',
		'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
	}
};
// mumbai = 101275339
//
// pune row
//
fetch(
  "https://foreca-weather.p.rapidapi.com/current/101259229?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    pune_cloud_pct.innerHTML = response.current.cloudiness;
    pune_temp.innerHTML = response.current.temperature;
    pune_feels_like.innerHTML = response.current.feelsLikeTemp;
    pune_humidity.innerHTML = response.current.relHumidity;
    pune_min_temp.innerHTML = response.current.thunderProb;
    pune_max_temp.innerHTML = response.current.symbolPhrase;
    pune_wind_speed.innerHTML = response.current.windSpeed;
    pune_wind_degrees.innerHTML = response.current.windDir+ "° " + response.current.windDirString;
    pune_sunrise.innerHTML = response.current.dewPoint;
    pune_sunset.innerHTML = response.current.precipProb;
    ;
  })
  .catch((err) => console.error(err));
//
// Banglore row
//
fetch(
  "https://foreca-weather.p.rapidapi.com/current/101277333?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bangalore_cloud_pct.innerHTML = response.current.cloudiness;
    bangalore_temp.innerHTML = response.current.temperature;
    bangalore_feels_like.innerHTML = response.current.feelsLikeTemp
    bangalore_humidity.innerHTML = response.current.relHumidity;
    bangalore_min_temp.innerHTML = response.current.thunderProb;
    bangalore_max_temp.innerHTML = response.current.symbolPhrase;
    bangalore_wind_speed.innerHTML = response.current.windSpeed;
    bangalore_wind_degrees.innerHTML = response.current.windDir+ "° " + response.current.windDirString;
    bangalore_sunrise.innerHTML = response.current.dewPoint;
    bangalore_sunset.innerHTML = response.current.precipProb;
  })
  .catch((err) => console.error(err));
//
// Kolkata row
//
fetch(
  "https://foreca-weather.p.rapidapi.com/current/101275004?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    kolkata_cloud_pct.innerHTML = response.current.cloudiness;
    kolkata_temp.innerHTML = response.current.temperature;
    kolkata_feels_like.innerHTML = response.current.feelsLikeTemp
    kolkata_humidity.innerHTML = response.current.relHumidity;
    kolkata_min_temp.innerHTML = response.current.thunderProb;
    kolkata_max_temp.innerHTML = response.current.symbolPhrase;
    kolkata_wind_speed.innerHTML = response.current.windSpeed;
    kolkata_wind_degrees.innerHTML = response.current.windDir+ "° " + response.current.windDirString;
    kolkata_sunrise.innerHTML = response.current.dewPoint;
    kolkata_sunset.innerHTML = response.current.precipProb;
  })
  .catch((err) => console.error(err));
//
// Delhi row
//
fetch(
  "https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    delhi_cloud_pct.innerHTML = response.current.cloudiness;
    delhi_temp.innerHTML = response.current.temperature;
    delhi_feels_like.innerHTML = response.current.feelsLikeTemp
    delhi_humidity.innerHTML = response.current.relHumidity;
    delhi_min_temp.innerHTML = response.current.thunderProb;
    delhi_max_temp.innerHTML = response.current.symbolPhrase;
    delhi_wind_speed.innerHTML = response.current.windSpeed;
    delhi_wind_degrees.innerHTML = response.current.windDir + "° " + response.current.windDirString;
    delhi_sunrise.innerHTML = response.current.dewPoint;
    delhi_sunset.innerHTML = response.current.precipProb;
  })
  .catch((err) => console.error(err));
//
// Bhopal row
//
fetch(
  "https://foreca-weather.p.rapidapi.com/current/101275841?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bhopal_cloud_pct.innerHTML = response.current.cloudiness;
    bhopal_temp.innerHTML = response.current.temperature;
    bhopal_feels_like.innerHTML = response.current.feelsLikeTemp
    bhopal_humidity.innerHTML = response.current.relHumidity;
    bhopal_min_temp.innerHTML = response.current.thunderProb;
    bhopal_max_temp.innerHTML = response.current.symbolPhrase;
    bhopal_wind_speed.innerHTML = response.current.windSpeed;
    bhopal_wind_degrees.innerHTML = response.current.windDir+ "° " + response.current.windDirString;
    bhopal_sunrise.innerHTML = response.current.dewPoint;
    bhopal_sunset.innerHTML = response.current.precipProb;
  })
  .catch((err) => console.error(err));

////////////////
//////////////
// air quality
/////////////
//////////////

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "89da569304msh42427e8c3206254p1d6254jsnfaacc0313090",
    "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather2 = (city) => {
  fetch(
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" +
      city,
    options2
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      custom_CO.innerHTML = response.CO.concentration;
      custom_COaqi.innerHTML = response.CO.aqi;
      custom_NO2.innerHTML = response.NO2.concentration;
      custom_NO2aqi.innerHTML = response.NO2.aqi;
      custom_O3.innerHTML = response.O3.concentration;
      custom_O3aqi.innerHTML = response.O3.aqi;
      // // custom_PM2.innerHTML=response.PM2_5.concentration;
      // custom_PM2aqi.innerHTML=response.PM2_5.aqi;
      custom_PM10.innerHTML = response.PM10.concentration;
      custom_PM10aqi.innerHTML = response.PM10.aqi;
      custom_SO2.innerHTML = response.SO2.concentration;
      custom_SO2aqi.innerHTML = response.SO2.aqi;
      custom_overall_aqi.innerHTML = response.overall_aqi;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather2(city.value);
});

getWeather2("Mumbai");

//
// pune row=101259229
//
fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Pune",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    pune_CO.innerHTML = response.CO.concentration;
    pune_COaqi.innerHTML = response.CO.aqi;
    pune_NO2.innerHTML = response.NO2.concentration;
    pune_NO2aqi.innerHTML = response.NO2.aqi;
    pune_O3.innerHTML = response.O3.concentration;
    pune_O3aqi.innerHTML = response.O3.aqi;
    // let PM25 = "PM2.5";
    // pune_PM2.innerHTML=response. PM25.concentration;
    // pune_PM2aqi.innerHTML=response. PM25.aqi;
    pune_PM10.innerHTML = response.PM10.concentration;
    pune_PM10aqi.innerHTML = response.PM10.aqi;
    pune_SO2.innerHTML = response.SO2.concentration;
    pune_SO2aqi.innerHTML = response.SO2.aqi;
    pune_overall_aqi.innerHTML = response.overall_aqi;
  })
  .catch((err) => console.error(err));

//
// bangalore row = 101277333
//
fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Bangalore",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bangalore_CO.innerHTML = response.CO.concentration;
    bangalore_COaqi.innerHTML = response.CO.aqi;
    bangalore_NO2.innerHTML = response.NO2.concentration;
    bangalore_NO2aqi.innerHTML = response.NO2.aqi;
    bangalore_O3.innerHTML = response.O3.concentration;
    bangalore_O3aqi.innerHTML = response.O3.aqi;
    // bangalore_PM2.innerHTML=response.PM2_5.concentration;
    // bangalore_PM2aqi.innerHTML=response.PM2_5.aqi;
    bangalore_PM10.innerHTML = response.PM10.concentration;
    bangalore_PM10aqi.innerHTML = response.PM10.aqi;
    bangalore_SO2.innerHTML = response.SO2.concentration;
    bangalore_SO2aqi.innerHTML = response.SO2.aqi;
    bangalore_overall_aqi.innerHTML = response.overall_aqi;
  })
  .catch((err) => console.error(err));

//
// kolkata row = 101275004
//
fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Kolkata",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    kolkata_CO.innerHTML = response.CO.concentration;
    kolkata_COaqi.innerHTML = response.CO.aqi;
    kolkata_NO2.innerHTML = response.NO2.concentration;
    kolkata_NO2aqi.innerHTML = response.NO2.aqi;
    kolkata_O3.innerHTML = response.O3.concentration;
    kolkata_O3aqi.innerHTML = response.O3.aqi;
    // kolkata_PM2.innerHTML=response.PM2_5.concentration;
    // kolkata_PM2aqi.innerHTML=response.PM2_5.aqi;
    kolkata_PM10.innerHTML = response.PM10.concentration;
    kolkata_PM10aqi.innerHTML = response.PM10.aqi;
    kolkata_SO2.innerHTML = response.SO2.concentration;
    kolkata_SO2aqi.innerHTML = response.SO2.aqi;
    kolkata_overall_aqi.innerHTML = response.overall_aqi;
  })
  .catch((err) => console.error(err));

//
// delhi row = 101273294
//
fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    delhi_CO.innerHTML = response.CO.concentration;
    delhi_COaqi.innerHTML = response.CO.aqi;
    delhi_NO2.innerHTML = response.NO2.concentration;
    delhi_NO2aqi.innerHTML = response.NO2.aqi;
    delhi_O3.innerHTML = response.O3.concentration;
    delhi_O3aqi.innerHTML = response.O3.aqi;
    // delhi_PM2.innerHTML=response.PM2_5.concentration;
    // delhi_PM2aqi.innerHTML=response.PM2_5.aqi;
    delhi_PM10.innerHTML = response.PM10.concentration;
    delhi_PM10aqi.innerHTML = response.PM10.aqi;
    delhi_SO2.innerHTML = response.SO2.concentration;
    delhi_SO2aqi.innerHTML = response.SO2.aqi;
    delhi_overall_aqi.innerHTML = response.overall_aqi;
  })
  .catch((err) => console.error(err));

//
// bhopal row = 101275841
//
fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Bhopal",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bhopal_CO.innerHTML = response.CO.concentration;
    bhopal_COaqi.innerHTML = response.CO.aqi;
    bhopal_NO2.innerHTML = response.NO2.concentration;
    bhopal_NO2aqi.innerHTML = response.NO2.aqi;
    bhopal_O3.innerHTML = response.O3.concentration;
    bhopal_O3aqi.innerHTML = response.O3.aqi;
    // bhopal_PM2.innerHTML=response.PM2_5.concentration;
    // bhopal_PM2aqi.innerHTML=response.PM2_5.aqi;
    bhopal_PM10.innerHTML = response.PM10.concentration;
    bhopal_PM10aqi.innerHTML = response.PM10.aqi;
    bhopal_SO2.innerHTML = response.SO2.concentration;
    bhopal_SO2aqi.innerHTML = response.SO2.aqi;
    bhopal_overall_aqi.innerHTML = response.overall_aqi;
  })
  .catch((err) => console.error(err));

// sunrise,sunset

function sunriseset(sectime) {
  // Time given in seconds
  const seconds = sectime;

  // Convert seconds to milliseconds
  const timestampMs = seconds * 1000;

  // Create a new Date object with the timestamp in milliseconds
  const desiredDate = new Date(timestampMs);

  // Get the hours and minutes from the Date object
  const hours = desiredDate.getHours();
  const minutes = desiredDate.getMinutes();

  // Convert hours and minutes to string with leading zeros if needed
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  // Create the formatted time string in "HH:mm" format
  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
}




// const options111 = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '89da569304msh42427e8c3206254p1d6254jsnfaacc0313090',
// 		'x-rapidapi-host': 'foreca-weather.p.rapidapi.com'
// 	}
// };

// fetch(
//     'https://foreca-weather.p.rapidapi.com/current/101259229?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en',
//     options111
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => console.error(err));


