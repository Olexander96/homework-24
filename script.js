document.addEventListener('DOMContentLoaded', () => {

const API = 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&limit=1&id=524901&appid=56c60fffd3fd0c72e2d2649391a26b08'

    // function startFetch() {
         fetch(API)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('data', JSON.stringify(data));
                console.log(data)
                document.querySelector('.city-name').textContent = data.name;
                document.querySelector('.humidity').textContent = `Вологість:  ${data.main.humidity}%`;
                document.querySelector('.temperature').textContent = `Температура: ${Math.round(data.main.temp - 273)}°`;
                document.getElementById('clouds').textContent = data.weather[0].description;        
            })
            .catch((error) => {
                console.log('Помилка запиту! ' + error);
            })
        // return
    // }

    //  setInterval(startFetch, 7200000)
    
})
