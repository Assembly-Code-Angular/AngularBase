export class FetchService{

    private apiUrl = 'http://localhost:5136/';

    async fetchData(link:string): Promise<any>{
        try{
            const response = await fetch(this.apiUrl+link)
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