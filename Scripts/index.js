

  //   const apiKey = "0926e3715bd414c4bdd946435fb4553d";
  //   const inputVal = b.city;

  //   // added weather data api
  //   const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  //   fetch(url4)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.warn(data);
  //       let city1 = data;
  //       document.getElementById("weather").innerHTML =
  //         "Your City's Current temperature is : " +
  //         city1.main.temp +
  //         " Degree Celcius";
  //     });
  //   // console.log(b.ip);
  // });

  $(document).ready(function () {
    // for getting date
    $("#ip").prepend(` <h5> <i class="far fa-clock"></i> ${Date()}</h5>`);

// geolocation api
    url1 = "https://freegeoip.app/json/";
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        let results=data;
        $("#geol").prepend( `<h5>Your Location Is Detected As</h5>`+`<h3> <i class="fas fa-street-view"></i> ${results.city +"-"+results.region_name}</h3>`);

        const apiKey = "0926e3715bd414c4bdd946435fb4553d";
        const inputVal = results.city;
    
        // added weather data api
        const url4 = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
        fetch(url4)
          .then(res => res.json())
          .then(data => {
             console.log(data);
             $("#weather").prepend(`<h5>Current Weather at your location is :</h5>`+`<h4> <i class="fas fa-cloud-sun-rain"></i> ${data.main.temp +" <span>&#8451;</span>"}</h4>`);
        });

        url5 = "https://type.fit/api/quotes"; 
        fetch(url5)
    .then((res) => res.json())
    .then(function (data) {
      
      // get random data between 0-100
      var x = Math.floor(Math.random() * 100 + 1);
      console.log(data[x].author);
      // console.log(data[0]);
      $("#qut").prepend(`<b>Quote</b> <i class="fas fa-user-secret text-light"></i> <h6>Author - ${data[x].author}</h6>`+`<h4> ${data[x].text}</h4>`)
      
    });

    });
   
 



  });
// get public ip,

  