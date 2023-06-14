"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Footer = () => {
  const [enLan, setEnLan] = useState(false);
  return (
    <>
      {enLan ? (
        <footer class="custom-footer-img">
          <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className=" mx-auto flex pr-10">
                <div>
                  <img
                    className="w-[220px] ml-14"
                    src="https://i.ibb.co/bzQb2JW/eb36985f666bcc3f0a3b257004a8ba9b.png"
                    alt="logo_image"
                  />
                  <div className="text-3xl text-white font-bold uppercase mt-4 text-center">
                    Lok Janshakti Party
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-indigo-50 p-5">
                <h1 class="mb-6 text-xl font-bold text-white">Contact Us</h1>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-telephone-forward pr-2"></i> 1800-800-800
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-telephone-forward pr-2"></i> 1800-800-800
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-envelope pr-2"></i>{" "}
                      lokjanshaktiparty@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-indigo-50 p-5">
                <h2 class="mb-6 text-xl text-white font-semibold">
                  Popular Links
                </h2>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Our Constitution
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Upcoming Events
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      News & Media
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:h dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between p-2.5">
              <span class="text-sm text-white">
                <span>
                  LJP Center Office 7-A, Boring Road Chauraha, Patna, Bihar -
                  800001
                </span>
                <br />© 2023{" "}
                <a href="https://eklevelup.com/" class="hover:underline">
                  EkLevelUp™
                </a>
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <div className="text-white text-sm">Connect With Us</div>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Instagram page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-youtube w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <span class="sr-only">Youtube account</span>
                </a>
              </div>
            </div>
          </div>
          <br />
        </footer>
      ) : (
        <footer class="custom-footer-img">
          <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className=" mx-auto flex pr-10">
                <div>
                  <img
                    className="w-[220px] ml-14"
                    src="https://i.ibb.co/bzQb2JW/eb36985f666bcc3f0a3b257004a8ba9b.png"
                    alt="logo_image"
                  />
                  <div className="text-4xl text-white font-bold uppercase mt-4 text-center">
                  लोक जनशक्ति पार्टी 
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-indigo-50 p-5">
                <h1 class="mb-6 text-xl font-bold text-white">हमसे संपर्क करें  </h1>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-telephone-forward pr-2"></i> 1800-800-800
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-telephone-forward pr-2"></i> 1800-800-800
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      <i class="bi bi-envelope pr-2"></i>{" "}
                      lokjanshaktiparty@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-indigo-50 p-5">
                <h2 class="mb-6 text-xl text-white font-semibold">
                लोकप्रिय लिंक 
                </h2>
                <ul class="text-white font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                    हमारे बारे में 
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                    हमारा संविधान 
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                    आगामी कार्यक्रम 
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                    समाचार एवं मीडिया 
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                    गैलरी 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:h dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between p-2.5">
              <span class="text-sm text-white">
                <span>
                एल जे पी  केन्द्रीय कार्यालय 7-ए, बोरिंग रोड चौराहा, पटना, बिहार -
                  800001
                </span>
                <br />© 2023{" "}
                <a href="https://eklevelup.com/" class="hover:underline">
                  EkLevelUp™
                </a>
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <div className="text-white text-sm">हमसे संपर्क करें</div>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Instagram page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a href="#" class="text-white hover:text-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-youtube w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  <span class="sr-only">Youtube account</span>
                </a>
              </div>
            </div>
          </div>
          <br />
        </footer>
      )}
    </>
  );
};

export default Footer;
