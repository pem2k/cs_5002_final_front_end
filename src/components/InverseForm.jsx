import React, { useState } from "react";

import WorkShower from "./WorkShower";

export default function InverseForm(){
    return(
        /*const [number_input, set_number_input] = useState("");
        const [mod_input, set_mod_input] = useState("");
        const [steps, set_steps] = useState([]);
        const [result, set_result] = useState("")*/
        
        <div className="container d-flex justify-content center">
            <div className= "container">
                <div className=" container">
                    <form action={submit_handler}>
                        <input name="number" placeholder="Number" className = "form-control bg-dark text-light text-center mt-2" />
                        <input name="mod" placeholder="Modulus" className = "form-control bg-dark text-light text-center mt-2"/>
                        <div className=" d-flex justify-content-center">
                            <br/>
                            <button type="submit" className="btn btn-dark btn-text mt-3 ">Calculate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}

const submit_handler = (event) => {
    event.preventDefault();
    // axios call to backend here, this will populate 
    // the work shower which will include the result
}