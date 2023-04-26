const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "89da569304msh42427e8c3206254p1d6254jsnfaacc0313090",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName1.innerHTML = city;
  cityName2.innerHTML = city;
  cityName3.innerHTML = city;
  cityName4.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct1.innerHTML = response.cloud_pct;
      cloud_pct2.innerHTML = response.cloud_pct;
      temp1.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      temp3.innerHTML = response.temp;
      zerosummarytemp.innerHTML = response.temp;
      feels_like1.innerHTML = response.feels_like;
      feels_like2.innerHTML = response.feels_like;
      humidity1.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      humidity3.innerHTML = response.humidity;
      // min_temp1.innerHTML = response.min_temp;
      // min_temp2.innerHTML = response.min_temp;
      // max_temp1.innerHTML = response.max_temp;
      // max_temp2.innerHTML = response.max_temp;
      wind_speed1.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees1.innerHTML = response.wind_degrees;
      wind_degrees2.innerHTML = response.wind_degrees;
      sunrise1.innerHTML = sunriseset(response.sunrise);
      sunrise2.innerHTML = sunriseset(response.sunrise);
      sunset1.innerHTML = sunriseset(response.sunset);
      sunset2.innerHTML = sunriseset(response.sunset);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Mumbai");

//
// pune row
//
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    pune_cloud_pct.innerHTML = response.cloud_pct;
    pune_temp.innerHTML = response.temp;
    pune_feels_like.innerHTML = response.feels_like;
    pune_humidity.innerHTML = response.humidity;
    pune_min_temp.innerHTML = response.min_temp;
    pune_max_temp.innerHTML = response.max_temp;
    pune_wind_speed.innerHTML = response.wind_speed;
    pune_wind_degrees.innerHTML = response.wind_degrees;
    pune_sunrise.innerHTML = sunriseset(response.sunrise);
    pune_sunset.innerHTML = sunriseset(response.sunset);
  })
  .catch((err) => console.error(err));
//
// Banglore row
//
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bangalore_cloud_pct.innerHTML = response.cloud_pct;
    bangalore_temp.innerHTML = response.temp;
    bangalore_feels_like.innerHTML = response.feels_like;
    bangalore_humidity.innerHTML = response.humidity;
    bangalore_min_temp.innerHTML = response.min_temp;
    bangalore_max_temp.innerHTML = response.max_temp;
    bangalore_wind_speed.innerHTML = response.wind_speed;
    bangalore_wind_degrees.innerHTML = response.wind_degrees;
    bangalore_sunrise.innerHTML = sunriseset(response.sunrise);
    bangalore_sunset.innerHTML = sunriseset(response.sunset);
  })
  .catch((err) => console.error(err));
//
// Kolkata row
//
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    kolkata_cloud_pct.innerHTML = response.cloud_pct;
    kolkata_temp.innerHTML = response.temp;
    kolkata_feels_like.innerHTML = response.feels_like;
    kolkata_humidity.innerHTML = response.humidity;
    kolkata_min_temp.innerHTML = response.min_temp;
    kolkata_max_temp.innerHTML = response.max_temp;
    kolkata_wind_speed.innerHTML = response.wind_speed;
    kolkata_wind_degrees.innerHTML = response.wind_degrees;
    kolkata_sunrise.innerHTML = sunriseset(response.sunrise);
    kolkata_sunset.innerHTML = sunriseset(response.sunset);
  })
  .catch((err) => console.error(err));
//
// Delhi row
//
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    delhi_cloud_pct.innerHTML = response.cloud_pct;
    delhi_temp.innerHTML = response.temp;
    delhi_feels_like.innerHTML = response.feels_like;
    delhi_humidity.innerHTML = response.humidity;
    delhi_min_temp.innerHTML = response.min_temp;
    delhi_max_temp.innerHTML = response.max_temp;
    delhi_wind_speed.innerHTML = response.wind_speed;
    delhi_wind_degrees.innerHTML = response.wind_degrees;
    delhi_sunrise.innerHTML = sunriseset(response.sunrise);
    delhi_sunset.innerHTML = sunriseset(response.sunset);
  })
  .catch((err) => console.error(err));
//
// Bhopal row
//
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    bhopal_cloud_pct.innerHTML = response.cloud_pct;
    bhopal_temp.innerHTML = response.temp;
    bhopal_feels_like.innerHTML = response.feels_like;
    bhopal_humidity.innerHTML = response.humidity;
    bhopal_min_temp.innerHTML = response.min_temp;
    bhopal_max_temp.innerHTML = response.max_temp;
    bhopal_wind_speed.innerHTML = response.wind_speed;
    bhopal_wind_degrees.innerHTML = response.wind_degrees;
    bhopal_sunrise.innerHTML = sunriseset(response.sunrise);
    bhopal_sunset.innerHTML = sunriseset(response.sunset);
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
// pune row
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
// bangalore row
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
// kolkata row
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
// delhi row
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
// bhopal row
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



