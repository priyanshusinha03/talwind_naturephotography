/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Img from "../../assets/Images/ramvilas.png";
import Image from "next/image";

const Ramvilaspaswan = () => {
  return (
    <div>
      <div className="text-center text-gray-700 text-extrabold text-6xl">
        Padma Bhushan Shri Ramvilas Paswan
      </div>{" "}
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 container mx-auto">
        <div>
          <div className="border-double border-4 border-gray-600">
            <Image src={Img} alt="ramvilaspaswan" width="100%" />
          </div>
        </div>
        <div>
          <div className="p-4">
            <p className=" first-letter:text-5xl first-letter:text-gray-900 first-letter:pr-1 text-justify leading-8 text-gray-800 text-lightbold text-lg">
              Ram Vilas Paswan (5 July 1946 – 8 October 2020)[3] was an Indian
              politician from Bihar and the Cabinet Minister of Consumer
              Affairs, Food and Public Distribution in the first and second Modi
              ministries. Paswan was also the president of the Lok Janshakti
              Party, nine-times Lok Sabha member and two-time Rajya Sabha MP.[4]
              He started his political career as member of Samyukta Socialist
              Party and was elected to the Bihar Legislative Assembly in 1969.
              Later, Paswan joined Lok Dal upon its formation in 1974, and
              became its general secretary. He opposed the emergency, and was
              arrested during this period. He first entered the Lok Sabha in
              1977, as a Janata Party member from Hajipur constituency, and was
              elected again in 1980, 1989, 1991 (from Rosera), 1996, 1998, 1999,
              2004 and 2014. 
              <br />
              In 2000, Paswan formed the Lok Janshakti Party (LJP) as its
              president. Subsequently, in 2004, he joined the ruling United
              Progressive Alliance government and remained a Union Minister in
              Ministry of Chemicals and Fertilizers and Ministry of Steel. He
              was posthumously awarded India's third highest civilian award the
              Padma Bhushan in 2021. 
              <br /><br />
              He was known for holding cabinet positions under 7 governments. He
              was known as the weatherman of Indian politics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ramvilaspaswan;
