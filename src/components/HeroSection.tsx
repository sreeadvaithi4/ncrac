import { useState, useEffect } from "react";
import { Download, CalendarDays, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/images/hero-bg.jpg";

const targetDate = new Date("2026-12-13T00:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, targetDate - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60) % 24),
    minutes: Math.floor(diff / (1000 * 60) % 60),
    seconds: Math.floor(diff / 1000 % 60)
  };
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

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
  { value: timeLeft.seconds, label: "Seconds" }];


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" />
      
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <p className="text-green-accent font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4 animate-fade-in-up">
          13 – 16 December 2026 · IIT Tirupati
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          9<sup>th</sup> National &amp; 3<sup>rd</sup> International Conference on<br />
          "Refrigeration &amp; Air Conditioning"
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          NCRAC 2026
        </p>
        <div className="inline-block section-beige rounded-lg px-6 py-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-primary font-semibold text-sm md:text-base">
            Theme: <span className="text-green-accent">Smart & Sustainable HVAC Systems for Viksit Bharat 2047</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-10 animate-fade-in-up flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.4s" }}>
          <a
            href="/ncrac-brochure.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-accent hover:text-primary transition-all duration-300 hover:shadow-lg">
            
            <Download size={18} />
            Download Brochure
          </a>
          <Link
            to="/important-dates"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg">
            
            <CalendarDays size={18} />
            Timeline & Guidelines
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe3jYpHYEfJlbujZS-LGnn_-t3ZdocJojStqGF-mD-EeprngA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-accent px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-accent transition-all duration-300 hover:shadow-lg text-primary-foreground">
            
            <FileText size={18} />
            Register Now
          </a>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-primary-foreground font-bold text-xl mb-6">
            Conference Starts In
          </h2>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            {blocks.map((block) =>
            <div
              key={block.label}
              className="bg-background/90 backdrop-blur-sm rounded-xl shadow-md px-5 py-4 md:px-8 md:py-6 text-center min-w-[80px] border border-border">
              
                <div className="text-3xl md:text-5xl font-bold text-green-accent animate-count-pulse tabular-nums">
                  {String(block.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-semibold text-primary mt-2 uppercase tracking-wider">
                  {block.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;