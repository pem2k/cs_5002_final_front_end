import React from "react"

// considering writeup of entire project on web side, render latex with: https://www.npmjs.com/package/react-latex-next

export default function Home(){
    return(
        <div className="mt-2">
            <div className=" container">
                <p>
                    We implemented a function using the Extended Euclid's Algorithm to find the inverse of a modulo function using extended Euclidean Algorithm. The function can be accessed via this web app. It app produces all the works for a user provided problem.
                </p>
                <p>
                    The definition of multiplicative inverse of A mod B, for two positive integers A and B, is not very far from the definition of multiplicative inverse of an integer. It is an integer x such that when we multiply a and A mod B we get 1.
                </p>
                <p>
                    Ax mod B = 1
                </p>
            </div>
        </div>
    )
}