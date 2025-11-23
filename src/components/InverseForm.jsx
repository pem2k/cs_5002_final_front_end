import React, { useState } from "react";
import axios from "axios"
import WorkShower from "./WorkShower";

export default function InverseForm(){
    const [numberInput, setNumberInput] = useState("");
    const [modInput, setModInput] = useState("");
    /*const [steps, set_steps] = useState([]);
    const [result, set_result] = useState("")*/

    const submit_handler = (event) => {
        event.preventDefault();

        const userSubmission ={
            number: numberInput,
            mod: modInput,
        }
        
        console.log(userSubmission)

        axios({
            method: "post",
            url: "not configured yet",
            data: userSubmission
        }).then(response => {
            // loop over and display workshower
        }).catch(error=> console.error("error:", error))
    }

    return(
        <div className="container d-flex">
            <div className= "container">
                <div className=" container">
                    <form onSubmit={submit_handler}>
                        <input name="number" placeholder="Number" className = "form-control bg-dark text-light text-center mt-2" onChange={(event) => setNumberInput(event.target.value)} />
                        <input name="mod" placeholder="Modulus" className = "form-control bg-dark text-light text-center mt-2" onChange={(event) => setModInput(event.target.value)}/>
                        <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark btn-text mt-3 ">Calculate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}

