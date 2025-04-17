import EqualSplitComponent from "../options-components/equalSplit/equalSplit";

interface ResultComponentProps {
  activeKey: "equal" | "split" | "mixed";
}

const resultComponents: Record<"equal" | "split" | "mixed", React.JSX.Element> =
  {
    equal: <EqualSplitComponent />,
    split: <div></div>,
    mixed: <div></div>,
  };

const ResultComponent: React.FC<ResultComponentProps> = ({ activeKey }) => {
  return (
    <div className="result-container w-full h-full">
      {resultComponents[activeKey] ? (
        resultComponents[activeKey]
      ) : (
        <div className="w-full h-full font-Yekan-Medium text-lg flex items-center justify-center text-light-secondary-text">
          هنوز تقسیم بندی ای انتخاب نکرده اید
        </div>
      )}
    </div>
  );
};

export default ResultComponent;
