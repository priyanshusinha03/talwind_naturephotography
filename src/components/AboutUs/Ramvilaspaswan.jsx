/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Img from "../../assets/Images/ramvilas.png";
import Image from "next/image";

const Ramvilaspaswan = () => {
  const [enLan, setEnLan] = useState(false);
  return (
    <>
      {enLan ? (
        <div>
          <div className="text-center text-gray-700 text-extrabold text-6xl">
            Padma Bhushan Shri Ramvilas Paswan Ji
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
                  Ram Vilas Paswan (5 July 1946 – 8 October 2020)[3] was an
                  Indian politician from Bihar and the Cabinet Minister of
                  Consumer Affairs, Food and Public Distribution in the first
                  and second Modi ministries. Paswan was also the president of
                  the Lok Janshakti Party, nine-times Lok Sabha member and
                  two-time Rajya Sabha MP. He started his political career as
                  member of Samyukta Socialist Party and was elected to the
                  Bihar Legislative Assembly in 1969. Later, Paswan joined Lok
                  Dal upon its formation in 1974, and became its general
                  secretary. He opposed the emergency, and was arrested during
                  this period. He first entered the Lok Sabha in 1977, as a
                  Janata Party member from Hajipur constituency, and was elected
                  again in 1980, 1989, 1991 (from Rosera), 1996, 1998, 1999,
                  2004 and 2014.
                  <br />
                  In 2000, Paswan formed the Lok Janshakti Party (LJP) as its
                  president. Subsequently, in 2004, he joined the ruling United
                  Progressive Alliance government and remained a Union Minister
                  in Ministry of Chemicals and Fertilizers and Ministry of
                  Steel. He was posthumously awarded India's third highest
                  civilian award the Padma Bhushan in 2021.
                  <br />
                  <br />
                  He was known for holding cabinet positions under 7
                  governments. He was known as the weatherman of Indian
                  politics.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center text-gray-700 font-extrabold text-6xl">
          पद्म भूषण श्री रामविलास पासवान जी
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
                रामविलास पासवान (5 जुलाई 1946 - 8 अक्टूबर 2020)[3] एक थे
                  बिहार के भारतीय राजनेता और कैबिनेट मंत्री
                  पहले में उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण
                  और दूसरा मोदी मंत्रालय। पासवान के अध्यक्ष भी थे
                  लोक जनशक्ति पार्टी, नौ बार लोकसभा सदस्य और
                  दो बार के राज्यसभा सांसद। के रूप में उन्होंने अपने राजनीतिक जीवन की शुरुआत की
                  संयुक्त सोशलिस्ट पार्टी के सदस्य और के लिए चुने गए थे
                  1969 में बिहार विधान सभा। बाद में, पासवान लोक में शामिल हो गए
                  1974 में इसके गठन के बाद दल, और इसका जनरल बन गया
                  सचिव। उन्होंने आपातकाल का विरोध किया, और इस दौरान उन्हें गिरफ्तार कर लिया गया
                  यह कालखंड। उन्होंने पहली बार 1977 में एक के रूप में लोकसभा में प्रवेश किया
                  हाजीपुर निर्वाचन क्षेत्र से जनता पार्टी के सदस्य, और निर्वाचित हुए
                  1980, 1989, 1991 (रोसेरा से), 1996, 1998, 1999 में फिर से,
                  2004 और 2014
                  <br /> <br />
                  2000 में, पासवान ने इसके रूप में लोक जनशक्ति पार्टी (LJP) का गठन किया
                  अध्यक्ष। इसके बाद, 2004 में, वह सत्तारूढ़ यूनाइटेड में शामिल हो गए
                  प्रगतिशील गठबंधन सरकार और केंद्रीय मंत्री रहे
                  रसायन और उर्वरक मंत्रालय और मंत्रालय में
                  इस्पात। उन्हें मरणोपरांत भारत के तीसरे सर्वोच्च पुरस्कार से सम्मानित किया गया था
                  2021 में नागरिक पुरस्कार पद्म भूषण।
                  <br />
                  <br />
                  उन्हें 7 साल से कम उम्र के कैबिनेट पदों पर रहने के लिए जाना जाता था
                  सरकारें। उन्हें भारत का वेदरमैन कहा जाता था
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ramvilaspaswan;
