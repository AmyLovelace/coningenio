import  mockdata  from '../services/mock/mockDataNosotros';
export async function getAbout() {
    try {
      const response = await fetch('https://ciisa.coningenio.cl/v1/about-us', {
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
      console.error('Error fetching about:', error);
      return mockdata.data
    }
  }
  