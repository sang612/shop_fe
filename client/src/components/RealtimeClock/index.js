"use client";
import { useEffect, useState } from "react";

export const RealtimeClock = ({ city }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!time) {
    return null;
  }

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: city.timezone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return <span>{formattedTime}</span>;
};
