import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Consultation, {
  OpenConsultationOnClick,
} from "../components/Consultation";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <div className="bg-gray-800">
        <hr className="max-w-screen-xl mx-auto border-gray-900" />
        <a id="features" />
      </div>
      <Features />
      <div className="bg-gray-800">
        <hr className="max-w-screen-xl mx-auto border-gray-900" />
        <a id="team" />
      </div>
      <Team />
      <div className="bg-gray-800">
        <hr className="max-w-screen-xl mx-auto border-gray-900" />
        <a id="pricing" />
      </div>
      <Pricing />
      <a id="faq" />
      <FAQ />
      <Consultation />
      <div className="flex items-center justify-center px-4 py-8 bg-gray-50">
        <OpenConsultationOnClick>
          <button className="px-6 py-3 text-3xl font-semibold leading-tight tracking-wider text-white transition-all duration-300 ease-in-out transform bg-orange-500 rounded-md focus:outline-none hover:shadow-lg hover:scale-110">
            Schedule A Consultation
          </button>
        </OpenConsultationOnClick>
      </div>
    </>
  );
}
