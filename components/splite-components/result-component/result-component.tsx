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
  return <div className="result-container">{resultComponents[activeKey]}</div>;
};

export default ResultComponent;
