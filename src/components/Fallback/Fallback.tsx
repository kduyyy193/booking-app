import { Spin } from "antd";

const Fallback = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <Spin />
    </div>
  );
};

export default Fallback;
