import React from "react";

export default function Home() {
  return (
    <div className="container mt-1 fs-5">
      <div className="card border-0 p-4">

        <p className="fs-5">
          We implemented a function using the Extended Euclid's Algorithm to find the inverse of a modulo function using extended Euclidean Algorithm. The function can be accessed via this web app. It app produces all the works for a user provided problem.
        </p>

        <p className="fs-5">
          The definition of multiplicative inverse of A mod B, for two positive integers A and B, is not very far from the definition of multiplicative inverse of an integer. It is an integer x such that when we multiply a and A mod B we get 1.
        </p>

        <p className="text-center fs-5">
          Ax mod B = 1
        </p>
        <p className="text-left fs-6">
        For a detailed description of the topic, please see Seymour Lipschutz and Marc L Lipson (2022):
        </p>
        <p className="text-left fs-6">
         “Properties of the Integers”. In: Schaum’s Outline of Discrete Mathematics. 4th ed. Accessed via Northeastern University Library. New York: McGraw Hill, 2022. Chap. 11. url: <a href="https://www.accessengineeringlibrary.com.ezproxy.neu.edu/content/book/9781264258802/chapter/chapter11">https://www.accessengineeringlibrary.com.ezproxy.neu.edu/content/book/9781264258802/chapter/chapter11</a>
        </p>
      </div>
      
    </div>
  );
}
