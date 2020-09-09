import { createContext, useContext, useState } from "react";
import { Transition } from "@tailwindui/react";

const ConsultationContext = createContext(undefined);

export const ConsultationProvider = ({ children }: { children: any }) => {
  return (
    <ConsultationContext.Provider value={useState(false)}>
      {children}
    </ConsultationContext.Provider>
  );
};

export function OpenConsultationOnClick({ children }: { children: any }) {
  const [showContext, setShowContext] = useContext(ConsultationContext);

  return <span onClick={() => setShowContext(true)}>{children}</span>;
}

function Consultation() {
  const [showContext, setShowContext] = useContext(ConsultationContext);
  const [sending, setSending] = useState(false);

  const [fields, setFields] = useState({
    email: "",
    website: "",
    cms: false,
    newsletter: false,
    hosting: false,
    ecommerce: false,
    customization: false,
    support: false,
    everything: false,
  });

  return (
    <Transition
      show={showContext}
      enter="transform transition-all ease-in-out duration-1000"
      enterFrom="-translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transform transition-all ease-in-out duration-1000"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="-translate-x-full opacity-0"
      className="fixed inset-y-0 left-0 z-20 w-full max-w-xl overflow-y-auto bg-white bg-opacity-100 shadow-2xl sm:rounded-lg sm:m-8"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <button
        onClick={() => setShowContext(false)}
        className="absolute text-gray-500 bg-gray-200 bg-opacity-0 border border-gray-300 rounded-md shadow-sm hover:text-gray-800 hover:bg-opacity-75 top-4 right-4 focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col p-4 pt-16 space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 ">
          Let's talk
        </h1>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Your Email
            </label>
            <span
              className="text-sm leading-5 text-gray-500"
              id="email-required"
            >
              Required
            </span>
          </div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              value={fields.email}
              onChange={(e) => {
                e.persist();
                setFields((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              className="block w-full form-input sm:text-sm sm:leading-5 focus:shadow-outline-orange focus:border-orange-500"
              placeholder="you@example.com"
              aria-describedby="email-required"
              required
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="website"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Your Current Website
            </label>
            <span
              className="text-sm leading-5 text-gray-500"
              id="current-website-optional"
            >
              Optional
            </span>
          </div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="website"
              type="text"
              value={fields.website}
              onChange={(e) => {
                e.persist();
                setFields((prev) => ({
                  ...prev,
                  website: e.target.value,
                }));
              }}
              className="block w-full form-input sm:text-sm sm:leading-5 focus:shadow-outline-orange focus:border-orange-500"
              placeholder="https://georgerrmartin.com/"
              aria-describedby="current-website-optional"
            />
          </div>
        </div>
        <div className="mt-6 space-y-1 sm:mt-5">
          <h1 className="block text-sm font-medium leading-5 text-gray-700">
            Features you're interested in
          </h1>
          <div className="sm:border-t sm:border-gray-200 sm:pt-5">
            <div role="group" aria-labelledby="label-email">
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline">
                <div className="mt-4 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          type="checkbox"
                          value={fields.cms.toString()}
                          onChange={(e) =>
                            setFields((prev) => ({
                              ...prev,
                              cms: !prev.cms,
                            }))
                          }
                          className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          Contentful CMS
                        </label>
                        <p className="text-gray-500">
                          I'll walk you through what your new CMS will look.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="candidates"
                            type="checkbox"
                            value={fields.newsletter.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                newsletter: !prev.newsletter,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-700"
                          >
                            Newsletter Integration
                          </label>
                          <p className="text-gray-500">
                            We'll go over your specific service and how you'd
                            like it integrated.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            value={fields.hosting.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                hosting: !prev.hosting,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Hosting
                          </label>
                          <p className="text-gray-500">
                            I'll show you how I'd host your new site.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            value={fields.ecommerce.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                ecommerce: !prev.ecommerce,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            E-commerce
                          </label>
                          <p className="text-gray-500">
                            We can go over what your ideal E-commerce solution
                            would look like and what that might cost.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            value={fields.customization.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                customization: !prev.customization,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Design Customization
                          </label>
                          <p className="text-gray-500">
                            You tell me what unique design you'd like, and I'll
                            tell you how I can do it for you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            value={fields.support.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                support: !prev.support,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Long Term Support
                          </label>
                          <p className="text-gray-500">
                            I'll walk you through the sort of long-term support
                            you'll get both if you stay with us and if you go
                            your own way.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            value={fields.everything.toString()}
                            onChange={(e) =>
                              setFields((prev) => ({
                                ...prev,
                                everything: !prev.everything,
                              }))
                            }
                            className="w-4 h-4 text-orange-500 transition duration-150 ease-in-out focus:border-orange-400 focus:shadow-outline-orange form-checkbox"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-5">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Everything
                          </label>
                          <p className="text-gray-500">
                            I'll give you the full pitch, answer any questions,
                            and give you a custom quote via email within 24
                            hours of the call.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (fields.email === "") {
              alert("An email is required.");
              return;
            }
            setSending(true);
            try {
              fetch("/api/email", {
                method: "POST",
                headers: {
                  ["Content-Type"]: "application/json",
                },
                body: JSON.stringify({
                  to: "alex.h.bruns@gmail.com",
                  from: "alex@alexbruns.dev",
                  subject: "Authorize Consultation Submission",
                  html: `<pre>${JSON.stringify(fields, null, 2)}</pre>`,
                }),
              })
                .then(() => {
                  alert(
                    "Your consultation request was sent. We'll be in contact shortly."
                  );
                  setShowContext(false);
                  setFields({
                    email: "",
                    website: "",
                    cms: false,
                    newsletter: false,
                    hosting: false,
                    ecommerce: false,
                    customization: false,
                    support: false,
                    everything: false,
                  });
                  setSending(false);
                })
                .catch(() => {
                  alert(
                    "Something seems to have gone wrong. Sorry about that. Please try again in a little."
                  );
                  setSending(false);
                });
            } catch (err) {
              alert(
                "Something seems to have gone wrong. Sorry about that. Please try again in a little."
              );
              setSending(false);
            }
          }}
          disabled={sending}
          className="px-4 py-2 text-lg font-semibold tracking-wider text-white bg-gray-900 rounded-md shadow-md focus:outline-none focus:shadow-outline-orange hover:bg-gray-800 /shadow-lg"
        >
          Submit
        </button>
      </div>
    </Transition>
  );
}

export default Consultation;
