import { useState, useEffect } from "react";

const targetDate = new Date("2026-12-13T00:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="section-beige py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary font-bold text-2xl mb-8">
          Conference Starts In
        </h2>
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {blocks.map((block) => (
            <div
              key={block.label}
              className="bg-background rounded-xl shadow-md px-5 py-4 md:px-8 md:py-6 text-center min-w-[80px] border border-border"
            >
              <div className="text-3xl md:text-5xl font-bold text-green-accent animate-count-pulse tabular-nums">
                {String(block.value).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm font-semibold text-primary mt-2 uppercase tracking-wider">
                {block.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
