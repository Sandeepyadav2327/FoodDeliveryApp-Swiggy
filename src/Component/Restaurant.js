import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )

}
// cors problem when we call swiggy api directly from our browser 
// to solve this problem we set a intermediate server which will call api and give us the result c

// CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web page
//  from one origin (protocol, domain, or port) can access resources from another origin. When we create
//   a frontend clone of a website and try to call its backend API directly, the browser checks whether
//    the server allows requests from our origin (e.g., http://localhost:3000). If the server does not 
//     include the Access-Control-Allow-Origin header for our origin, the browser blocks the response 
//     and throws a CORS error, even if the API itself is working correctly. This restriction is enforced 
//     only by browsers; tools like Postman do not enforce CORS. If we own the backend, we can enable CORS
//      by sending the appropriate headers. If we do not own the backend, we cannot fix CORS from the
//       frontend and must use our own backend as a proxy or use an API that allows cross-origin requests.