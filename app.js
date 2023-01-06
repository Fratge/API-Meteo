// Une clé API n'est pas publique, par conséquent la mienne n'est pas présente
const APIKEY = 'YOUR API KEY'; 


function apiCall(city){
    let url = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no
`;
    fetch(url).
        then((response) => 
            response.json().then(data => {
                console.log(data);
                document.querySelector('#city').innerHTML = '<i class="fa-solid fa-map-pin"></i>' + data.location.name;
                document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>' + data.current.temp_c + ' °C';
                document.querySelector('#humidity').innerHTML = '<i class="fa-solid fa-droplet"></i> ' + data.current.humidity + ' %';
                document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i> ' + data.current.wind_kph + ' hm/h';
        })
    )
    .catch((err) => console.log('Erreur : ' + err));
};

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
    
})
apiCall('Strasbourg');



