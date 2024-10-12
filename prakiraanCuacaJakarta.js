const API_KEY = "3b8060132ff39008a07a559c14d8e060"; 
const LAT = -6.2088; // Latitude Jakarta
const LON = 106.8456; // Longitude Jakarta

async function getWeatherForecast() {
    try {
        
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

       
        const list = data.list;

        console.log("Prakiraan Cuaca Jakarta untuk 5 Hari Ke Depan:");
        
        
        for (let i = 0; i < 5; i++) {
            const day = list[i * 8]; 
            const temp = day.main.temp;
            console.log(`Hari ${i + 1}: ${temp}°C`);
        }

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}


getWeatherForecast();
