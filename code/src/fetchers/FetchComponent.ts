export class FetchService{

    private apiUrl = 'http://localhost:5136/WeatherForecast';

    async fetchData(): Promise<any>{
        try{
            const response = await fetch(this.apiUrl)
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return await response.json();
        } catch(error){
            console.error('Error fetching data: ',error);
            throw error;
        }
    } 
}