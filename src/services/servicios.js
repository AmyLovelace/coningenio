import  mockdata  from '../services/mock/mockDataServices';
export async function getServices() {
    try {
      const response = await fetch('https://ciisa.coningenio.cl/v1/services', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ciisa'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.data; 
    } catch (error) {
      console.error('Error fetching services:', error);
      return mockdata.data
    }
  }
  