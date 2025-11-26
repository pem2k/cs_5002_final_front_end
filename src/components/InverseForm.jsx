import React, { useState } from "react";
import axios from "axios"
import WorkShower from "./WorkShower";

// const exampleResponse = ["--------------------------------------------------------------------------------", "First Part: Euclidean Algorithm", "--------------------------------------------------------------------------------", "Euclidean algorithm gives us the following equations.", "", "2001 = 197 * 10 + 31                                                     ... (1)", "197 = 31 * 6 + 11                                                        ... (2)", "31 = 11 * 2 + 9                                                          ... (3)", "11 = 9 * 1 + 2                                                           ... (4)", "9 = 2 * 4 + 1                                                            ... (5)", "", "--------------------------------------------------------------------------------", "Second Part: Reversing", "--------------------------------------------------------------------------------", "Isolating 2 from (5)", "1 = 9 * 1 + 2 * -4                                                       ... (6)", "Isolating 9 from (4) and putting in (6).", "Rearrange to keep as a linear combination of 11 and 9:", "1 = 11 * -4 + 9 * 5                                                      ... (7)", "", "Isolating 11 from (3) and putting in (7).", "Rearrange to keep as a linear combination of 31 and 11:", "1 = 31 * 5 + 11 * -14                                                    ... (8)", "", "Isolating 31 from (2) and putting in (8).", "Rearrange to keep as a linear combination of 197 and 31:", "1 = 197 * -14 + 31 * 89                                                  ... (9)", "", "Isolating 197 from (1) and putting in (9).", "Rearrange to keep as a linear combination of 2001 and 197:", "1 = 2001 * 89 + 197 * -904                                              ... (10)", "", "Because we want a positive multiplicative inverse", "    replace -904 with -904 + k * 2001", "    such that -904 + k * 2001 > 0.", "In this case, k = 1 and we replace -904 with 1097.", "    Also find new coefficient of 2001 as", "    89 - k * 197 = -108, since k = 1.", "", "Finally:", "1 = 2001 * -108 + 197 * 1097                                            ... (11)", "", "B\u00e9zout's coefficients are -108 and 1097.", "", "The multiplicative inverse of 197 mod 2001 is 1097.", "--------------------------------------------------------------------------------"]

export default function InverseForm(){
    const [numberInput, setNumberInput] = useState("");
    const [modInput, setModInput] = useState("");
    const [steps, setSteps] = useState([])
    
    const dashes = "--------------------------------------------------------------------------------"
    const submitHandler = (event) => {
        event.preventDefault();

        const userSubmission ={
            number: Number(numberInput),
            mod: Number(modInput),
        }

        if (userSubmission.number < 0 || userSubmission.mod < 0){
            setSteps([dashes,"Error, you must provide a positive numeric value for the number and modulus", dashes])
            return
        }

        if (!userSubmission.number || !userSubmission.mod ){
            setSteps([dashes,"Error, you must provide a positive numeric value for the number and modulus", dashes])
            return
        }
            
        else{
            axios({
                method: "post",
                url: "http://localhost:5000/",
                data: userSubmission
            }).then(response => {
                const works = response.data.works
                    
                if (typeof works ==="string"){
                    setSteps([dashes,works,dashes])
                }

                else{
                    setSteps(works)
                }

            }).catch(error=> console.error("error:", error))
            }
        }

    return(
        <div><div className="container d-flex field-limiter">
            <div className="container">
                <div className=" container">
                    <form onSubmit={submitHandler} className="container">
                        <input name="number" placeholder="Number" className="form-control bg-dark text-light text-center mt-2" onChange={(event) => setNumberInput(event.target.value)} />
                        <input name="mod" placeholder="Modulus" className="form-control bg-dark text-light text-center mt-2" onChange={(event) => setModInput(event.target.value)} />
                        <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark btn-text mt-3 ">Calculate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="d-flex flex-column align-items-center mt-2">
                {steps.map((work, i) => (
                    <WorkShower key={work + i} work={work} />
                ))}
            </div>
        </div>
       
)
}

