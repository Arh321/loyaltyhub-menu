import { useState, useEffect } from "react";

const Timer = ({ onFinish }: { onFinish: () => void }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      onFinish();
    }
  }, [timer, onFinish]);

  return <span>{timer > 0 && ` ${timer} ثانیه تا ارسال مجدد کد`}</span>;
};

export default Timer;
