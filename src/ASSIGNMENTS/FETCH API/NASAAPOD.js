import React, {useEffect,useState} from 'react'
import './NasaApod.css'

function NASAAPOD() {
    const[data, setData] = useState(null)
    const[Loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
useEffect(()=>{
   const fetchApi = async ()=>{
    try{
        const apiKey = "tBQgW0MkHoLtDJcOnk7SF214XkKlfpc3nQN8R1Pi";
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        const response = await fetch(url);
        if(!response.ok){throw new Error("Fail to fetch data!!")};
        const jsonData= await response.json();
        setData(jsonData)
        setLoading(false);
        console.log(data);
    }
    catch(error){
        setError(error);
        setLoading(false);
        
    }
   
   }
   fetchApi();
}, [data])

    
   
if(Loading){
return <div>Loading....</div>
} 
if(error){
    return <div>error.message</div>
    }      
    const backgroundImageStyle = {
        backgroundImage: `url(${data.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <>
    <div className="nasa-apod-image" style={backgroundImageStyle}>
        <div className='title'><h1>{data.title}</h1></div>
       <div className='date'> <p>{data.date} </p></div>
       
     
      <div className='explain'><p>{data.explanation} </p></div>  

    </div>
    </>
  )
}

export default NASAAPOD