import AccordionComponent from "./AccordionComponent";

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9">
      <div className="text-center md:text-left flex flex-col justify-center gap-4">
        <div className="font-bold text-h1-mobile md:text-h2-desktop text-[#00DC82]">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="font-medium md:font-bold text-body1-mobile md:text-body1-desktop text-white">
          <div>
            Quick answers to questions you may have. Can&#39;t find what
            you&#39;re looking for?
          </div>
          <div className="hidden md:block">
            Check out our full documentation
          </div>
        </div>
      </div>

      <div className="bg-blue-600">
        <AccordionComponent />
      </div>
    </div>
  );
};

export default FAQ;
