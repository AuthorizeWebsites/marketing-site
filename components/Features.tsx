import { ReactElement } from "react";

const items = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    headerText: "Modern CMS",
    bodyText: (
      <>
        Authorize sets you up with modern{" "}
        <a
          href="https://en.wikipedia.org/wiki/Headless_content_management_system"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          headless CMS
        </a>{" "}
        that lets you change page content on any or all of your one-off pages
        and add new books and series completely on your own. This means you
        won't have to come back every time you need to add content to your site.
      </>
    ),
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    headerText: "All Static Architecture",
    bodyText: (
      <>
        Authorize sites are completely{" "}
        <a
          href="https://en.wikipedia.org/wiki/Static_web_page"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          static
        </a>{" "}
        allowing them to be hosted directly on a CDN rather than a web server.
        This means 3x faster load times and 10x lower hosting costs. It's pretty
        awesome.
      </>
    ),
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    headerText: "Custom-ish Design",
    bodyText:
      "Because Authorize sites don't use any premade themes they can have all sorts of custom designs that your average Wordpress theme just never could, but Authorize sites are designed to standardize what needn't be custom to reduce upkeep costs. We call this balance \"custom-ish\" design.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
        />
      </svg>
    ),
    headerText: "Fast Turn Around",
    bodyText:
      "You might think custom means slow development time. You'd be wrong. Every Authorize site starts with the same scaffolding code allowing them to go from customer order to live in less than a week.",
  },
];

function Item({
  headerText,
  bodyText,
  icon,
}: {
  headerText: string;
  bodyText: string;
  icon: ReactElement;
}) {
  return (
    <li>
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 text-white bg-orange-500 rounded-md">
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium leading-6 text-gray-200">
            {headerText}
          </h4>
          <p className="mt-2 text-base leading-6 text-gray-400">{bodyText}</p>
        </div>
      </div>
    </li>
  );
}

function Features() {
  return (
    <div className="pt-16 pb-24 bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-orange-500 sm:text-4xl sm:leading-10">
            Features
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-white lg:mx-auto">
            Authorize sites are built differently, and that has some advantages.
            Here's why you should go with Authorize over the other guys.
          </p>
        </div>
        <div className="mt-10">
          <ul className="space-y-10 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-10 md:space-y-0">
            {items.map((item) => (
              <Item {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
