import { OpenConsultationOnClick } from "./Consultation";

function Pricing() {
  return (
    <div className="bg-gray-800">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-3xl font-extrabold leading-9 text-center text-orange-500 sm:text-4xl sm:leading-10">
              Pricing
            </h2>
            <p className="text-xl leading-7 text-white">
              Pricing comes in two parts. To build your site we charge an up
              front fee. Then, if you want us to handle your hosting and provide
              continued support we charge a reasonable monthly fee. The prices
              below are just estimates. You can cancel at any time and get all
              the code and a guide on how to host it all yourself.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-800 h-3/4" />
          <div className="relative z-10 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide text-orange-500 uppercase bg-orange-100 rounded-full"
                      id="tier-standard"
                    >
                      Up Front
                    </h3>
                  </div>
                  <div className="flex items-baseline mt-4 text-6xl font-extrabold leading-none">
                    $500
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    We'll set up your new site and teach you how it all works.
                    So, you can make changes with confidence.
                  </p>
                </div>
                <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        You get a solid custom(ish) website.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        We'll migrate over your old site's data if it exists.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        We'll teach you how to use your new CMS.
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <OpenConsultationOnClick>
                      <a
                        className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md cursor-pointer hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        aria-describedby="tier-standard"
                      >
                        Build My Site
                      </a>
                    </OpenConsultationOnClick>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide text-orange-500 uppercase bg-orange-100 rounded-full"
                      id="tier-standard"
                    >
                      Monthly
                    </h3>
                  </div>
                  <div className="flex items-baseline mt-4 text-6xl font-extrabold leading-none">
                    $50
                    <span className="ml-1 text-2xl font-medium leading-8 text-gray-500">
                      /mo
                    </span>
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    Let us handle day-to-day upkeep so you can focus on what's
                    important, writing.
                  </p>
                </div>
                <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Hosting is completely covered.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        You get 2 hours of free support{" "}
                        <strong>every month</strong>.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        We can handle your domain too (not required).
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        You get free updates as we improve our templates.
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <OpenConsultationOnClick>
                      <a
                        className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md cursor-pointer hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        aria-describedby="tier-standard"
                      >
                        Support My Site
                      </a>
                    </OpenConsultationOnClick>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
