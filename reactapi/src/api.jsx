import axios from 'axios'
const searchImages= async (a)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
         Authorization:'Client-ID VdInKbJMYNmobstq4IT-EdtDtVce9wCHAedNDLug_7s',
       },
       params:{
         query:a,
       },
     })
     return response.data.results;
   }
export default searchImages;