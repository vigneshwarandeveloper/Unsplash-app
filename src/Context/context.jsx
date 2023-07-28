import { createContext,useState,useContext,useEffect} from "react";

const AppContext=createContext();


export const AppProvider=({children})=>{

    const [IsDark,setIsDark]=useState(true);
    const [search,setsearch]=useState("Motivation");


    const handleDarktheme=()=>{
        const newtheme=!IsDark;
        setIsDark(newtheme)
        const body=document.querySelector("body")
        body.classList.toggle("dark-theme",newtheme)
    }
    useEffect(()=>{
        handleDarktheme();
    },[])
    return(
        <AppContext.Provider value={{IsDark,handleDarktheme,search,setsearch}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext=()=>{
    return useContext(AppContext)
}