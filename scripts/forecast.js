const key = 'S3o0AV3WZt3YUp9AsAkzoKNLXBwgsYhf';

//get weather forecast information

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; // base url of the api endpoint
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

getCity('manchester').then(data => { //adding the city that we want to search here
        return getWeather(data.Key); //returning the result of the promise after passing in the data.key
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));