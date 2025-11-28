import React, { useState } from "react";
import '../App.css'
import axios from "axios"
import WorkShower from "./WorkShower";

// const exampleResponse = ["--------------------------------------------------------------------------------", "First Part: Euclidean Algorithm", "--------------------------------------------------------------------------------", "Euclidean algorithm gives us the following equations.", "", "2001 = 197 * 10 + 31                                                     ... (1)", "197 = 31 * 6 + 11                                                        ... (2)", "31 = 11 * 2 + 9                                                          ... (3)", "11 = 9 * 1 + 2                                                           ... (4)", "9 = 2 * 4 + 1                                                            ... (5)", "", "--------------------------------------------------------------------------------", "Second Part: Reversing", "--------------------------------------------------------------------------------", "Isolating 2 from (5)", "1 = 9 * 1 + 2 * -4                                                       ... (6)", "Isolating 9 from (4) and putting in (6).", "Rearrange to keep as a linear combination of 11 and 9:", "1 = 11 * -4 + 9 * 5                                                      ... (7)", "", "Isolating 11 from (3) and putting in (7).", "Rearrange to keep as a linear combination of 31 and 11:", "1 = 31 * 5 + 11 * -14                                                    ... (8)", "", "Isolating 31 from (2) and putting in (8).", "Rearrange to keep as a linear combination of 197 and 31:", "1 = 197 * -14 + 31 * 89                                                  ... (9)", "", "Isolating 197 from (1) and putting in (9).", "Rearrange to keep as a linear combination of 2001 and 197:", "1 = 2001 * 89 + 197 * -904                                              ... (10)", "", "Because we want a positive multiplicative inverse", "    replace -904 with -904 + k * 2001", "    such that -904 + k * 2001 > 0.", "In this case, k = 1 and we replace -904 with 1097.", "    Also find new coefficient of 2001 as", "    89 - k * 197 = -108, since k = 1.", "", "Finally:", "1 = 2001 * -108 + 197 * 1097                                            ... (11)", "", "B\u00e9zout's coefficients are -108 and 1097.", "", "The multiplicative inverse of 197 mod 2001 is 1097.", "--------------------------------------------------------------------------------"]

export default function InverseForm(){
    const [numberInput, setNumberInput] = useState("");
    const [modInput, setModInput] = useState("");
    const [steps, setSteps] = useState([])

    
    const dashes = "--------------------------------------------------------------------------------"

    const btnLinks = (
  <div>
            <div className="mb-3">
                <pre style={{ fontFamily: "monospace" }}>{dashes}</pre>
            </div>
              <div className="mb-3">
                <pre style={{ fontFamily: "monospace" }}>Resources</pre>
            </div>
            <div className="mb-3">
                <pre style={{ fontFamily: "monospace" }}>{dashes}</pre>
            </div>
            <div className="d-flex gap-3 justify-content-center">
            <a href="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse" target="_blank" rel="noreferrer">
                <div className="text-left">
                    <button className="btn btn-dark btn-text mt-0 mb-2 fade-in">Euclidean Algorithm</button>
                </div>
            </a>
            <a href="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse" target="_blank" rel="noreferrer">
                <div className="text-left">
                    <button className="btn btn-dark btn-text mt-0 mb-2 fade-in">Modular Multiplicative Inverse</button>
                </div>
            </a>
            </div>
        </div>
    )

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
                url: "https://modulo-inverse-api-ad08dd8371c5.herokuapp.com/",
                //url: "http://localhost:5000",
                data: userSubmission
            }).then(response => {
                const works = response.data.works
                    
                if (typeof works ==="string"){
                    setSteps([dashes,works,dashes])
                }

                else{
                    works.unshift(btnLinks)
                    setSteps(works)
                }

            }).catch(error=> console.error("error:", error))
            }
        }

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <div>
                <div>
                        <form onSubmit={submitHandler} className="container">
                            <div className="form-floating mb-2">
                                <input 
                                    name="number"
                                    placeholder=" "
                                    className="form-control"
                                    autocomplete="off"
                                    id="Number"onChange={(event) => setNumberInput(event.target.value)} />

                                <label htmlFor="Number">Number</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input 
                                    name="mod" 
                                    placeholder=" " 
                                    className="form-control" 
                                    autocomplete="off"
                                    id="Modulo" 
                                    onChange={(event) => setModInput(event.target.value)} />

                                <label htmlFor="Modulo">Modulo</label>

                            </div>

                            <div className=" d-flex justify-content-center">
                                <button type="submit" className="mt-2 btn btn-dark btn-text">Calculate</button>
                                
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

