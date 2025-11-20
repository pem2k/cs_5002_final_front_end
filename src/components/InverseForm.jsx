import React, { useState } from "react";

export default function InverseForm(){
    return(
        /*const [number_input, set_number_input] = useState("");
        const [mod_input, set_mod_input] = useState("");
        const [steps, set_steps] = useState([]);
        const [result, set_result] = useState("")*/

        <form action={submit_handler}>
            <input name="number" placeholder="Number" />
            <input name="mod" placeholder="Modulus"/>
            <button type="submit">Calculate</button>
        </form>
)
}

const submit_handler = (event) => {
    event.preventDefault();
    // axios call to backend here
}