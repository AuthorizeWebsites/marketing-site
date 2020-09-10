import { useState } from "react";
import { OpenConsultationOnClick } from "./Consultation";

const items = [
  {
    q: "Do you use Wordpress?",
    a: (
      <>
        Nope. I know it's hard to imagine an author site <strong>not</strong>{" "}
        using Wordpress, but I don't think Wordpress is the right tool for the
        job. So, I don't use it, and that lets me deliver a faster site and a
        better experience for both you and your readers. That being said, I do
        set you up with a&mdash;I think better&mdash;CMS that gives you all the
        content editing advantages of a Wordpress site. So, don't worry about
        having to call me up every other day to make content changes.
        Additionally, I give you a detailed deployment guide if you ever choose
        to part ways so you can host everything on your own should you want to.
      </>
    ),
  },
  {
    q: "What do you use?",
    a: (
      <>
        Your website is built using a popular JavaScript framework called{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Next.js
        </a>{" "}
        which pulls your content from our headless CMS of choice,{" "}
        <a
          href="https://www.contentful.com/"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Contentful
        </a>
        . The reasons for these choices are a bit technical, but basically,
        Next.js allows me to serve your website entirely via a CDN making it
        super fast (way faster than even the fastest Wordpress site), and
        Contentful allows me to give you an easy web interface through which to
        add new books, update text around the site, etc.
        <br />
        <br />
        I went with this tech stack over Wordpress because it gives me some
        advantages that just aren't possible with Wordpress. For instance, every
        Wordpress site requires a server because it generates each page upon
        request rather than at build time. This just isn't necessary for author
        sites which rarely have content changes and can be rebuilt whenever they
        do. Using my architecture, your site is built once then deployed to a
        CDN where it can be cached all over the globe reducing load times by 3x
        or more. Then, whenever you make a change, your site is automatically
        rebuilt and redeployed.
        <br />
        <br />
        If you'd still like to learn more about the nitty gritty technical
        decisions behind Authorize, feel free to setup a consultation{" "}
        <span className="underline">
          <OpenConsultationOnClick>here</OpenConsultationOnClick>
        </span>
        .
      </>
    ),
  },
  {
    q: "Do you have a demo I can look at?",
    a: (
      <>
        You can find a live demo{" "}
        <a
          href="https://authorize-demo.vercel.app/"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          here
        </a>
        . If you'd like to see what the CMS interface looks like I'd be happy to
        show it to you during a consultation (we can't make it public for
        obvious reasons). You can sign up for a consultation{" "}
        <span className="underline cursor-pointer">
          <OpenConsultationOnClick>here</OpenConsultationOnClick>
        </span>
        .
      </>
    ),
  },
  {
    q: "What does custom-ish really mean?",
    a: (
      <>
        Put simply, it means I use tools that allow me to build completely
        custom sites but I restrict the amount of customization I do down to the
        things that I think are actually worth customizing. So, for instance, I
        use a custom color pallete for each site to match each author's
        individual brand, but I standardize the layout of each book page because
        book pages are overwhelmingly just carbon copies of each other and by
        standardizing them I can let you, the author, add books on your own
        rather than having to call me up every time you publish something new.
        In fact, because of this decision you can have as many books as youd
        like. Gone are the days of "5 book pages then $10 for each extra book".
        <br />
        <br />
        Importantly, this is only a design decision. We are completely capable
        of building out super custom features should you want or need them.
        However, that obviously costs a bit more. At the end of the day,
        custom-ish is how we balance pricing and features.
      </>
    ),
  },
  {
    q: "What's the catch?",
    a: (
      <>
        I'm hesitant to put anything here because, from my point of view, there
        just isn't a catch. However, there is a trade-off. Authorize sites are
        designed to be populated by the author but not extended by the author.
        What that means is you can add new books and series to your hearts
        content, but you can't go in and change specific book pages on your own
        (without getting into the code). If having that extreme a level of
        control is a requirement for you, Authorize may just not be the right
        fit for you.
      </>
    ),
  },
];

function Item({ q, a }: { q: string; a: any }) {
  const [showA, setShowA] = useState(false);

  return (
    <div className="pt-6">
      <dt className="text-lg leading-7">
        <button
          onClick={() => setShowA((prev) => !prev)}
          className="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
        >
          <span className="font-medium text-gray-900">{q}</span>
          <span className="flex items-center ml-6 h-7">
            <svg
              className={`${
                showA ? "rotate-0" : "-rotate-180"
              } w-6 h-6 transform transition-transform ease-in-out duration-300`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      {showA && (
        <dd className="pr-12 mt-2">
          <p className="text-base leading-6 text-gray-500">{a}</p>
        </dd>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:text-4xl sm:leading-10">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-200">
            <dl className="space-y-6 divide-y-2 divide-gray-200">
              {items.map((item) => (
                <Item {...item} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
