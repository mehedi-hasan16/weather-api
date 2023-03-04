
const API_KEY ='Input-your-API-key-here';

const loadData =(city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
        
}

const displayData = (data)=>{
    const {main:{temp},name, weather} = data;

    document.getElementById('place-name').innerText = name;
    document.getElementById('temp').innerText = temp;
    document.getElementById('weather').innerText = weather[0].main;
}




document.getElementById('src-btn').addEventListener('click',function(){
    const cityName = document.getElementById('cityName').value;
    loadData(cityName);
})
