const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = "6752733ea402fcd2153d13b9589fc9e1";
const city = document.getElementById('info');
const cut=document.getElementById('cut');


let Fun = () =>{
  event.preventDefault();
  console.log("hii");
    var k = city.value;
    console.log(k);
    cut.innerHTML = ``;
    fetch(url + k +`&appid=${key}`).then((res) => {
        return res.json();
    }).then((data) => {
        // logo.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        console.log("data",data);

        cut.innerHTML += `
        <div class="weatherIcon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" id="logo" width="200px"></div>
        <div class="weatherInfo">
          <div class="temperature"><span id="fo">${data.wind.deg}</span></div>
          <div class="description">    
            <div class="weatherCondition">CLOUDS</div>    
            <div class="place">${data.clouds.all}</div>
          </div>
        </div>
        <div class="date">1st Jan</div>
        `
    }).catch((err) => {
        console.log("err" ,err);
    })
}

