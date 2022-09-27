const key = 'S3o0AV3WZt3YUp9AsAkzoKNLXBwgsYhf';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; // base url of the api endpoint
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data)

};

getCity('Miami');