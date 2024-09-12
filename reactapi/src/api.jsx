import axios from 'axios'
const apikey = ""
const searchImages= async (a)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
         Authorization:'Client-ID ${apikey}',
       },
       params:{
         query:a,
       },
     })
     return response.data.results;
   }
export default searchImages;
