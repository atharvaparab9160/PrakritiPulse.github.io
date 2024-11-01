// location id

const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "89da569304msh42427e8c3206254p1d6254jsnfaacc0313090",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  },
};

let locationid;
const innerimageicon = document.querySelector(".innerimageicon");

const getlocationid = (city) => {
  fetch(
    "https://foreca-weather.p.rapidapi.com/location/search/" + city,
    options3
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      locationid = response.locations[0].id;
      // console.log(locationid);

      //forcast
      //  getforcast = (locationid) => {
      const options4 = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "89da569304msh42427e8c3206254p1d6254jsnfaacc0313090",
          "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
        },
      };

      fetch(
        "https://foreca-weather.p.rapidapi.com/forecast/daily/" +
          locationid +
          "?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full",
        options4
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);

          zerophrase2.innerHTML = response.forecast[0].symbolPhrase;
          zerophrase1.innerHTML = response.forecast[0].symbolPhrase;
          zerorainpct.innerHTML = response.forecast[0].cloudiness;
          zeroforcastdate.innerHTML = response.forecast[0].date;
          zeromaxtemp1.innerHTML = response.forecast[0].maxTemp;
          zeromintemp1.innerHTML = response.forecast[0].minTemp;
          zerowindspeed.innerHTML = response.forecast[0].maxWindGust;
          zeropressure.innerHTML = response.forecast[0].pressure;
          zerohumidity.innerHTML = response.forecast[0].maxRelHumidity;
          zerouv.innerHTML = response.forecast[0].uvIndex;
          zerodewpoint.innerHTML = response.forecast[0].maxDewPoint;
          zerosunrise.innerHTML = response.forecast[0].sunrise;
          zerosunset.innerHTML = response.forecast[0].sunset;
          zeromoonrise.innerHTML = response.forecast[0].moonrise;
          zeromoonset.innerHTML = response.forecast[0].moonset;

          const zeroinnerimageicon1 = document.getElementById(
            "zeroinnerimageicon1"
          );
          const zeroinnerimageicon2 = document.getElementById(
            "zeroinnerimageicon2"
          );
          // innerimageicon1.src = "images/d400.png";

          const mainimagecloud0 = response.forecast[0].symbol;
          console.log(mainimagecloud0);
          zeroinnerimageicon1.src = `images/${mainimagecloud0}.png`;
          zeroinnerimageicon2.src = `images/${mainimagecloud0}.png`;



          onephrase2.innerHTML = response.forecast[1].symbolPhrase;
          onephrase1.innerHTML = response.forecast[1].symbolPhrase;
          onerainpct.innerHTML = response.forecast[1].cloudiness;
          oneforcastdate.innerHTML = response.forecast[1].date;
          onemaxtemp1.innerHTML = response.forecast[1].maxTemp;
          onemintemp1.innerHTML = response.forecast[1].minTemp;
          // max_temp1.innerHTML = response.forecast[1].maxTemp;
          // max_temp2.innerHTML = response.forecast[1].maxTemp;
          // min_temp1.innerHTML = response.forecast[1].minTemp;
          // min_temp2.innerHTML = response.forecast[1].minTemp;
          const avgmaxtemp1 = response.forecast[1].maxTemp;
          const avgmintemp1 = response.forecast[1].minTemp;

          onesummarytemp.innerHTML = (avgmaxtemp1 + avgmintemp1)/2;

          onewindspeed.innerHTML = response.forecast[1].maxWindGust;
          onepressure.innerHTML = response.forecast[1].pressure;
          onehumidity.innerHTML = response.forecast[1].maxRelHumidity;
          oneuv.innerHTML = response.forecast[1].uvIndex;
          onedewpoint.innerHTML = response.forecast[1].maxDewPoint;
          onesunrise.innerHTML = response.forecast[1].sunrise;
          onesunset.innerHTML = response.forecast[1].sunset;
          onemoonrise.innerHTML = response.forecast[1].moonrise;
          onemoonset.innerHTML = response.forecast[1].moonset;

          const oneinnerimageicon1 =document.getElementById("oneinnerimageicon1");
          const oneinnerimageicon2 =document.getElementById("oneinnerimageicon2");

          const mainimagecloud1 = response.forecast[1].symbol;
          console.log(mainimagecloud1);
          oneinnerimageicon1.src = `images/${mainimagecloud1}.png`;
          oneinnerimageicon2.src = `images/${mainimagecloud1}.png`;

      

          
          twophrase2.innerHTML = response.forecast[2].symbolPhrase;
          twophrase1.innerHTML = response.forecast[2].symbolPhrase;
          tworainpct.innerHTML = response.forecast[2].cloudiness;
          twoforcastdate.innerHTML = response.forecast[2].date;
          twomaxtemp1.innerHTML = response.forecast[2].maxTemp;
          twomintemp1.innerHTML = response.forecast[2].minTemp;

          const avgmaxtemp2 = response.forecast[2].maxTemp;
          const avgmintemp2 = response.forecast[2].minTemp;

          twosummarytemp.innerHTML = (avgmaxtemp2 + avgmintemp2)/2;

          twowindspeed.innerHTML = response.forecast[2].maxWindGust;
          twopressure.innerHTML = response.forecast[2].pressure;
          twohumidity.innerHTML = response.forecast[2].maxRelHumidity;
          twouv.innerHTML = response.forecast[2].uvIndex;
          twodewpoint.innerHTML = response.forecast[2].maxDewPoint;
          twosunrise.innerHTML = response.forecast[2].sunrise;
          twosunset.innerHTML = response.forecast[2].sunset;
          twomoonrise.innerHTML = response.forecast[2].moonrise;
          twomoonset.innerHTML = response.forecast[2].moonset;

          const twoinnerimageicon1 =
            document.getElementById("twoinnerimageicon1");
          const twoinnerimageicon2 =
            document.getElementById("twoinnerimageicon2");

          const mainimagecloud2 = response.forecast[2].symbol;
          console.log(mainimagecloud2);
          twoinnerimageicon1.src = `images/${mainimagecloud2}.png`;
          twoinnerimageicon2.src = `images/${mainimagecloud2}.png`;

      
          
         
          threephrase2.innerHTML = response.forecast[3].symbolPhrase;
          threephrase1.innerHTML = response.forecast[3].symbolPhrase;
          threerainpct.innerHTML = response.forecast[3].cloudiness;
          threeforcastdate.innerHTML = response.forecast[3].date;
          threemaxtemp1.innerHTML = response.forecast[3].maxTemp;
          threemintemp1.innerHTML = response.forecast[3].minTemp;
          
          const avgmaxtemp3 = response.forecast[3].maxTemp;
          const avgmintemp3 = response.forecast[3].minTemp;

          threesummarytemp.innerHTML = (avgmaxtemp3 + avgmintemp3)/2;
          
          threewindspeed.innerHTML = response.forecast[3].maxWindGust;
          threepressure.innerHTML = response.forecast[3].pressure;
          threehumidity.innerHTML = response.forecast[3].maxRelHumidity;
          threeuv.innerHTML = response.forecast[3].uvIndex;
          threedewpoint.innerHTML = response.forecast[3].maxDewPoint;
          threesunrise.innerHTML = response.forecast[3].sunrise;
          threesunset.innerHTML = response.forecast[3].sunset;
          threemoonrise.innerHTML = response.forecast[3].moonrise;
          threemoonset.innerHTML = response.forecast[3].moonset;

          const threeinnerimageicon1 = document.getElementById(
            "threeinnerimageicon1"
          );
          const threeinnerimageicon2 = document.getElementById(
            "threeinnerimageicon2"
          );

          const mainimagecloud3 = response.forecast[3].symbol;
          console.log(mainimagecloud3);
          threeinnerimageicon1.src = `images/${mainimagecloud3}.png`;
          threeinnerimageicon2.src = `images/${mainimagecloud3}.png`;

      
          
         
          fourphrase2.innerHTML = response.forecast[4].symbolPhrase;
          fourphrase1.innerHTML = response.forecast[4].symbolPhrase;
          fourrainpct.innerHTML = response.forecast[4].cloudiness;
          fourforcastdate.innerHTML = response.forecast[4].date;
          fourmaxtemp1.innerHTML = response.forecast[4].maxTemp;
          fourmintemp1.innerHTML = response.forecast[4].minTemp;
          
          const avgmaxtemp4 = response.forecast[4].maxTemp;
          const avgmintemp4 = response.forecast[4].minTemp;

          foursummarytemp.innerHTML = (avgmaxtemp4 + avgmintemp4)/2;
          
          fourwindspeed.innerHTML = response.forecast[4].maxWindGust;
          fourpressure.innerHTML = response.forecast[4].pressure;
          fourhumidity.innerHTML = response.forecast[4].maxRelHumidity;
          fouruv.innerHTML = response.forecast[4].uvIndex;
          fourdewpoint.innerHTML = response.forecast[4].maxDewPoint;
          foursunrise.innerHTML = response.forecast[4].sunrise;
          foursunset.innerHTML = response.forecast[4].sunset;
          fourmoonrise.innerHTML = response.forecast[4].moonrise;
          fourmoonset.innerHTML = response.forecast[4].moonset;

          const fourinnerimageicon1 = document.getElementById(
            "fourinnerimageicon1"
          );
          const fourinnerimageicon2 = document.getElementById(
            "fourinnerimageicon2"
          );

          const mainimagecloud4 = response.forecast[4].symbol;
          console.log(mainimagecloud4);
          fourinnerimageicon1.src = `images/${mainimagecloud4}.png`;
          fourinnerimageicon2.src = `images/${mainimagecloud4}.png`;

      
          
         
          fivephrase2.innerHTML = response.forecast[5].symbolPhrase;
          fivephrase1.innerHTML = response.forecast[5].symbolPhrase;
          fiverainpct.innerHTML = response.forecast[5].cloudiness;
          fiveforcastdate.innerHTML = response.forecast[5].date;
          fivemaxtemp1.innerHTML = response.forecast[5].maxTemp;
          fivemintemp1.innerHTML = response.forecast[5].minTemp;
          
          const avgmaxtemp5 = response.forecast[5].maxTemp;
          const avgmintemp5= response.forecast[5].minTemp;

          fivesummarytemp.innerHTML = (avgmaxtemp5 + avgmintemp5)/2;
          
          fivewindspeed.innerHTML = response.forecast[5].maxWindGust;
          fivepressure.innerHTML = response.forecast[5].pressure;
          fivehumidity.innerHTML = response.forecast[5].maxRelHumidity;
          fiveuv.innerHTML = response.forecast[5].uvIndex;
          fivedewpoint.innerHTML = response.forecast[5].maxDewPoint;
          fivesunrise.innerHTML = response.forecast[5].sunrise;
          fivesunset.innerHTML = response.forecast[5].sunset;
          fivemoonrise.innerHTML = response.forecast[5].moonrise;
          fivemoonset.innerHTML = response.forecast[5].moonset;

          const fiveinnerimageicon1 = document.getElementById(
            "fiveinnerimageicon1"
          );
          const fiveinnerimageicon2 = document.getElementById(
            "fiveinnerimageicon2"
          );

          const mainimagecloud5 = response.forecast[5].symbol;
          console.log(mainimagecloud5);
          fiveinnerimageicon1.src = `images/${mainimagecloud5}.png`;
          fiveinnerimageicon2.src = `images/${mainimagecloud5}.png`;

      
          
         
          sixphrase2.innerHTML = response.forecast[6].symbolPhrase;
          sixphrase1.innerHTML = response.forecast[6].symbolPhrase;
          sixrainpct.innerHTML = response.forecast[6].cloudiness;
          sixforcastdate.innerHTML = response.forecast[6].date;
          sixmaxtemp1.innerHTML = response.forecast[6].maxTemp;
          sixmintemp1.innerHTML = response.forecast[6].minTemp;
          
          const avgmaxtemp6 = response.forecast[6].maxTemp;
          const avgmintemp6 = response.forecast[6].minTemp;

          sixsummarytemp.innerHTML = (avgmaxtemp6 + avgmintemp6)/2;
          
          sixwindspeed.innerHTML = response.forecast[6].maxWindGust;
          sixpressure.innerHTML = response.forecast[6].pressure;
          sixhumidity.innerHTML = response.forecast[6].maxRelHumidity;
          sixuv.innerHTML = response.forecast[6].uvIndex;
          sixdewpoint.innerHTML = response.forecast[6].maxDewPoint;
          sixsunrise.innerHTML = response.forecast[6].sunrise;
          sixsunset.innerHTML = response.forecast[6].sunset;
          sixmoonrise.innerHTML = response.forecast[6].moonrise;
          sixmoonset.innerHTML = response.forecast[6].moonset;

          const sixinnerimageicon1 =
            document.getElementById("sixinnerimageicon1");
          const sixinnerimageicon2 =
            document.getElementById("sixinnerimageicon2");

          const mainimagecloud6 = response.forecast[6].symbol;
          console.log(mainimagecloud6);
          sixinnerimageicon1.src = `images/${mainimagecloud6}.png`;
          sixinnerimageicon2.src = `images/${mainimagecloud6}.png`;

      
          
         
          sevenphrase2.innerHTML = response.forecast[7].symbolPhrase;
          sevenphrase1.innerHTML = response.forecast[7].symbolPhrase;
          sevenrainpct.innerHTML = response.forecast[7].cloudiness;
          sevenforcastdate.innerHTML = response.forecast[7].date;
          sevenmaxtemp1.innerHTML = response.forecast[7].maxTemp;
          sevenmintemp1.innerHTML = response.forecast[7].minTemp;
          
          const avgmaxtemp7 = response.forecast[7].maxTemp;
          const avgmintemp7 = response.forecast[7].minTemp;

          sevensummarytemp.innerHTML = (avgmaxtemp7 + avgmintemp7)/2;
          
          sevenwindspeed.innerHTML = response.forecast[7].maxWindGust;
          sevenpressure.innerHTML = response.forecast[7].pressure;
          sevenhumidity.innerHTML = response.forecast[7].maxRelHumidity;
          sevenuv.innerHTML = response.forecast[7].uvIndex;
          sevendewpoint.innerHTML = response.forecast[7].maxDewPoint;
          sevensunrise.innerHTML = response.forecast[7].sunrise;
          sevensunset.innerHTML = response.forecast[7].sunset;
          sevenmoonrise.innerHTML = response.forecast[7].moonrise;
          sevenmoonset.innerHTML = response.forecast[7].moonset;

          const seveninnerimageicon1 = document.getElementById(
            "seveninnerimageicon1"
          );
          const seveninnerimageicon2 = document.getElementById(
            "seveninnerimageicon2"
          );

          const mainimagecloud7 = response.forecast[7].symbol;
          console.log(mainimagecloud7);
          seveninnerimageicon1.src = `images/${mainimagecloud7}.png`;
          seveninnerimageicon2.src = `images/${mainimagecloud7}.png`;
        })
        .catch((err) => console.error(err));

      // end forcast
    })

    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getlocationid(city.value);
});
getlocationid("mumbai");



