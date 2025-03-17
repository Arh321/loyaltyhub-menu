import { useState, useEffect } from "react";

const Timer = ({ onFinish }: { onFinish: () => void }) => {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      onFinish();
    }
  }, [timer]);

  return <div>{timer > 0 && `زمان باقی‌مانده: ${timer} ثانیه`}</div>;
};

export default Timer;
