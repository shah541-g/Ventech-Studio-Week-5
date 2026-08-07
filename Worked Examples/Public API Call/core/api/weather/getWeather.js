
const APIKEY = "8d37e0d83d5d6cbcaf11c2b530dc36e7"
const BASEURL = "https://api.openweathermap.org/data/2.5/weather"

export async function getWeatherDetails(lat,lng){
  try {
    const response = await fetch(`${BASEURL}?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`)
    if(!response.ok){
      throw new Error(`Weather Request failed with status: ${response.status}`)
    } 
    const data = await response.json()
    return data;
  } catch (error) {
    throw error;
  }
}
