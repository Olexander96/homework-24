document.addEventListener('DOMContentLoaded', () => {

const API = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&limit=1&id=524901&appid=56c60fffd3fd0c72e2d2649391a26b08'

    function startFetch() {
         fetch(API)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('localData', JSON.stringify(data))
                let obj = JSON.parse(localStorage.getItem('localData'))
                document.querySelector('.city-name').textContent = obj.name;
                document.querySelector('.humidity').textContent = `Вологість:  ${obj.main.humidity}%`;
                document.querySelector('.temperature').textContent = `Температура: ${Math.round(obj.main.temp - 273)}°`;
                document.getElementById('clouds').textContent = obj.weather[0].description;        
            })
            .catch((error) => {
                console.log('Помилка запиту! ' + error);
            })
        return
    }

    startFetch()
    setInterval(startFetch, 7200000)//кожні 2 години
    
})
