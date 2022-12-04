import axios from  'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '28666112a7msh40149f2c086ca14p1b6d6ejsn20932d1d3e63',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 
    });

    return data
}