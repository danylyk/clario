import { useEffect, useState } from "react";

export function useTimer(duration) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (!duration) {
      return () => {};
    }

    const timer = setInterval(() => {
      setTime((time) => {
        if (time <= 1) {
          clearInterval(timer);
        }

        return time - 1;
      })
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [duration]);

  return time;
}