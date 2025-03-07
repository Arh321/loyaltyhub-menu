import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-50">
      <Spin size="large" />
    </div>
  );
};
export default Loading;
