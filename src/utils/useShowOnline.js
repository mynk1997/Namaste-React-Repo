import { useEffect, useState } from "react"

const useShowOnline=()=>{
    const [showStatus,setShowStatus]= useState(true);
    useEffect(()=>{
       window.addEventListener("offline",()=>{
        setShowStatus(false);
       });
       window.addEventListener("online",()=>{
        setShowStatus(true);
       });   
    },[])
     return showStatus;
    
}
export default useShowOnline;