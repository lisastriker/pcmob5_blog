import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
const API="https://lisastriker.pythonanywhere.com" //Ctr [ or ] moves indent left n right
const API_WHOAMI = "/whoami"

export function useUsername(){ //hooks are called use in front must
        const [username, setUsername] = useState("");
        const [error, setError] = useState(false);
        const [refresh, setRefresh] = useState(false);
        const [loading, setLoading] = useState(false); 
        /* syntax for async write (async ()=>{})(); */ 
        useEffect(()=>{
            (async()=>{
                setLoading(true);
                const token = await AsyncStorage.getItem("token");
                console.log(token)
                if(token==null){
                    setError(true)
                    setUsername(null)
                } else {
                    try{
                        const response = await axios.get(API + API_WHOAMI,{
                            headers: {Authorization:`JWT ${token}`}
                        })
                        setUsername(response.data.username)
                        //setLoading(false)
                    } catch(e) {
                        setError(true)
                        setUsername(null)
                        //setLoading(false)
                    } finally{
                        setLoading(false)
                    }     //Regardless or error or not it will setLoading is false. 
                }
            })();
            setRefresh(false) //After u done with all stuff, then refresh will set back to false
        },[refresh]) //If refresh variable changes it will refresh
        return [username, loading, error, setRefresh]
}