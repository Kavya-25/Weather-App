let background=[
    {
        src:'https://images.pexels.com/photos/958982/pexels-photo-958982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        src:'https://images.pexels.com/photos/2529153/pexels-photo-2529153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
]
let weather={
    "apiKey":"4afe1deb6e5b8337d07c3fcb6d500b70",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city 
        +"&units=metric&appid=" 
        + this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
        const {name,visibility}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity,temp_min,temp_max}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText=name;
        document.querySelector(".icon").src="http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".descr").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity : "+ humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed : "+speed+" km/hr";
        document.querySelector(".min-temp").innerText="Min. Temperature: "+ temp_min +"°C";
        document.querySelector(".max-temp").innerText="Max. Temperature: "+ temp_max +"°C";
        document.querySelector(".visibility").innerText="Visibility: "+visibility;
    },
    search:function(){
        this.fetchWeather(document.querySelector("#search_bar").value);
    }
};
document.querySelector("#searchBtn").addEventListener("click",()=>{
    weather.search();
    let x=Math.floor(Math.random()*(background.length));
    document.querySelector(".card").style.backgroundImage=`url(${(background[x]).src})`
    document.body.style.backgroundImage=`linear-gradient(to bottom, rgba(0, 0,0 , 0.5), rgba(0, 0, 0, 0.5)), url(${(background[x]).src})`
})