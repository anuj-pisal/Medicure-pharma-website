import React,{useState} from "react";
import General from "./General";
import Change_password from "./Change_password";

const logic = () =>{
    const[currentComp,setcurrentComp] = useState('General');
    const renderComponent = ()=>{
        switch(currentComp){
            case 'General':
                return <General/>;
             case 'Change_password':
                return <Change_password/>
            default:
                return <General/>   
        }
    };
    return(
        <>
        <div>
            
        </div>
        
        </>
    )
}