import VerticalScrollableContainer from "./VerticalScrollableContainer";

const GetStartedSection = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="text-h2-desktop text-primary font-bold text-center">
        How to get started?
      </div>

      <VerticalScrollableContainer />
    </div>
  );
};

export default GetStartedSection;
