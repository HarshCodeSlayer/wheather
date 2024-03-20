let type = document.getElementById("type");
let temp = document.getElementById("tmp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "2328a9ebdb7e2439ece3e9ce956a4226";

const data = async function(search){
    
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name)
    city.innerHTML = jsonData.name;
    type.innerHTML =Math.floor(jsonData.main.temp)+"°C";
    temp.innerHTML=jsonData.weather[0].main;
}
    function myFun(){
    search=input.value;
    data(search)

}

