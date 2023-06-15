/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import ImgChirag from "../../assets/Images/chiragpaswan.png";

const ChiragPaswan = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="text-center text-gray-700 text-extrabold text-6xl">
          Chirag Paswan
        </div>{" "}
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 container mx-auto">
          <div className="">
            <div className="p-4">
              <p className=" first-letter:text-5xl first-letter:text-gray-900 first-letter:pr-1 text-justify leading-8 text-gray-800 text-lightbold text-lg">
                Chirag Kumar Paswan (born 31 October 1982) is an Indian
                politician, former actor and president of the Lok Janshakti
                Party (Ram Vilas). He is the son of late Member of Parliament
                and Union Minister, Ram Vilas Paswan.
                <br />
                Subsequently, Paswan contested the 2014 elections for the Lok
                Janshakti Party in the seat of Jamui. He won the seat, defeating
                the nearest rival Sudhansu Shekhar Bhaskar of Rashtriya Janata
                Dal by over 85,000 votes. Paswan retained his seat in the 2019
                elections, securing a total of 528,771 votes and defeating
                nearest rival Bhudeo Choudhary. Paswan also owns a NGO named
                Chirag Ka Rojgar, a foundation to provide jobs to the unemployed
                youths of his state. Paswan was elected as member of the 16th
                Lok Sabha in the 2014 Indian general election from Jamui
                constituency in Bihar, while his father won from Hajipur
                constituency both through Lok Janshakti Party. Ahead of the
                upcoming Bihar Assembly Elections 2020, Chirag Paswan launched
                Bihar First, Bihari First campaign drawing attention of the
                youth of Bihar. Bihar First, Bihari First a 'number one'
                State
                <br />
                On 14 June 2021, Chirag was replaced as Lok Sabha leader of the
                LJP by his uncle Pashupati Kumar Paras. A day after, Chirag
                expelled 5 rebel MP's for anti-party activities including his
                uncle Pashupati Kumar Paras and cousin Prince Raj
              </p>
            </div>
          </div>
          <div>
            <div className="border-double border-4 border-gray-600">
              <Image src={ImgChirag} alt="chiragpaswan" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiragPaswan;
