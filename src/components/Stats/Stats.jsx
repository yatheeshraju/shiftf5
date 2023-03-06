import React from "react";
import securedevw from "./secure_dev_w.svg";
function Stats() {
  return (
    <div className="z-20  flex items-center justify-center overflow-hidden bg-white">
      <section className="container mb-32 text-gray-800 text-center md:text-left">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
            <img
              src={securedevw}
              alt="secure dev"
              className="max-w-xs m-auto md:max-w-sm"
            />
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-3xl font-bold mb-6 pb-2">
                Simple and Secure
              </h2>
              <p className="text-gray-500 mb-6 pb-2">
                A growing collection of tools helpful for your developers in
                every day work that will prevent token and data leaks to unknown
                web apps that cause un recoverable loss of reputation of your
                org.
              </p>
              <div className="flex flex-wrap mb-6">
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    No Adds
                  </p>
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    No Tracking
                  </p>
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    Runs in Browser
                  </p>
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    No API calls
                  </p>
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    Secure
                  </p>
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    No Limits
                  </p>
                </div>
              </div>
              <a
                href="https://mn49dggb2zz.typeform.com/to/bspQITbQ"
                rel="noreferrer"
                target="_blank"
                className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              >
                Reach US
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
