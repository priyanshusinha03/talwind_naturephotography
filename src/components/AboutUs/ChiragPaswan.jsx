/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImgChirag from "../../assets/Images/chiragpaswan.png";

const ChiragPaswan = () => {
  const [enLan, setEnLan] = useState(false);
  return (
    <div>
      {enLan ? (
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
                  Janshakti Party in the seat of Jamui. He won the seat,
                  defeating the nearest rival Sudhansu Shekhar Bhaskar of
                  Rashtriya Janata Dal by over 85,000 votes. Paswan retained his
                  seat in the 2019 elections, securing a total of 528,771 votes
                  and defeating nearest rival Bhudeo Choudhary. Paswan also owns
                  a NGO named Chirag Ka Rojgar, a foundation to provide jobs to
                  the unemployed youths of his state. Paswan was elected as
                  member of the 16th Lok Sabha in the 2014 Indian general
                  election from Jamui constituency in Bihar, while his father
                  won from Hajipur constituency both through Lok Janshakti
                  Party. Ahead of the upcoming Bihar Assembly Elections 2020,
                  Chirag Paswan launched Bihar First, Bihari First campaign
                  drawing attention of the youth of Bihar. Bihar First, Bihari
                  First a 'number one' State
                  <br />
                  On 14 June 2021, Chirag was replaced as Lok Sabha leader of
                  the LJP by his uncle Pashupati Kumar Paras. A day after,
                  Chirag expelled 5 rebel MP's for anti-party activities
                  including his uncle Pashupati Kumar Paras and cousin Prince
                  Raj
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
      ) : (
        <div className="mt-10">
          <div className="text-center text-gray-700 font-bold text-6xl">
            चिराग पासवान
          </div>{" "}
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 p-10 container mx-auto">
            <div>
              <div className="p-4">
                <p className=" first-letter:text-5xl first-letter:text-gray-900 first-letter:pr-1 text-justify leading-8 text-gray-800 text-lightbold text-lg">
                  चिराग कुमार पासवान (जन्म 31 अक्टूबर 1982) एक भारतीय
                  राजनीतिज्ञ, लोक जनशक्ति पार्टी (रामविलास) के पूर्व अभिनेता
                  अध्यक्ष हैं। वह दिवंगत संसद सदस्य और केंद्रीय मंत्री, रामविलास
                  पासवान के पुत्र हैं।
                  <br /><br />
                  इसके बाद पासवान ने लोकसभा के लिए 2014 का चुनाव लड़ा जमुई की
                  सीट पर जनशक्ति पार्टी। इन्होंने जीती सीट के सुधांशु शेखर
                  भास्कर को मात दी राष्ट्रीय जनता दल 85,000 से अधिक मतों से
                  जीता। पासवान ने अपने 2019 के चुनाव में सीट, कुल 528,771 वोट
                  हासिल किए और निकटतम प्रतिद्वंद्वी भूदेव चौधरी को हराया। पासवान
                  भी हैं चिराग का रोजगार नाम का एक एनजीओ, जो नौकरी देने का
                  फाउंडेशन है अपने राज्य के बेरोजगार युवा। पासवान चुने गए 2014
                  भारतीय जनरल में 16 वीं लोक सभा के सदस्य बिहार में जमुई
                  निर्वाचन क्षेत्र से चुनाव, जबकि उनके पिता लोक जनशक्ति के
                  माध्यम से दोनों हाजीपुर निर्वाचन क्षेत्र से जीते दल। आगामी
                  बिहार विधानसभा चुनाव 2020 से पहले, चिराग पासवान ने बिहार
                  फर्स्ट, बिहारी फर्स्ट अभियान की शुरुआत की बिहार के युवाओं का
                  ध्यान आकर्षित करना। बिहार फर्स्ट, बिहारी पहला 'नंबर वन' राज्य
                  <br /><br />
                  14 जून 2021 को चिराग को लोकसभा नेता के रूप में बदल दिया गया
                  उनके चाचा पशुपति कुमार पारस ने लोजपा। एक दिन बाद, चिराग ने
                  पार्टी विरोधी गतिविधियों के लिए 5 बागी सांसदों को निष्कासित कर
                  दिया जिसमें उनके चाचा पशुपति कुमार पारस और चचेरा भाई प्रिंस
                  शामिल हैं.
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
      )}
    </div>
  );
};

export default ChiragPaswan;
