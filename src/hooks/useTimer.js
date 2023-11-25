import { useMemo } from "react";

function format(major, minor, metric) {
  const majorFormatted = major.toString().padStart(2, '0');
  const minorFormatted = minor.toString().padStart(2, '0');

  return {
    value: `${majorFormatted}:${minorFormatted}`,
    metric: metric,
  };
}

export function useTimer(time) {
  return useMemo(() => {
    const minutes = Math.floor(time / 60);

    if (minutes <= 60) {
      return format(minutes, time - minutes * 60, 'min');
    }
    
    const hours = Math.floor(time / 60 / 60);

    return format(hours, minutes - hours * 60, 'hr');
  }, [time]);
}