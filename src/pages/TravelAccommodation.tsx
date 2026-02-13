import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import { Plane, TrainFront, Car, Hotel } from "lucide-react";

const travelOptions = [
  {
    icon: Plane,
    title: "By Air",
    details: [
      "Tirupati Airport (TIR) is the nearest airport, approximately 15 km from IIT Tirupati.",
      "Flights are available from major cities including Hyderabad, Bangalore, Chennai, and Delhi.",
      "Taxi and bus services are available from the airport to IIT Tirupati campus.",
    ],
  },
  {
    icon: TrainFront,
    title: "By Train",
    details: [
      "Tirupati Railway Station is a major junction well connected to all parts of India.",
      "Trains from Chennai (3 hrs), Bangalore (6 hrs), Hyderabad (12 hrs), and other cities.",
      "Auto-rickshaws and taxis are available from the station to IIT Tirupati.",
    ],
  },
  {
    icon: Car,
    title: "By Road",
    details: [
      "Tirupati is well connected by road from Chennai (~135 km) and Bangalore (~260 km).",
      "State transport buses (APSRTC, TNSTC) and private bus operators run frequent services.",
      "Cab services are available from Chennai and Bangalore airports/cities.",
    ],
  },
];

const TravelAccommodation = () => {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Travel & Accommodation"
            subtitle="Getting to IIT Tirupati"
          />

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {travelOptions.map((option, i) => (
              <div
                key={option.title}
                className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <option.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg green-underline inline-block mb-4">
                      {option.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {option.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-foreground text-sm">
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto section-beige rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Hotel className="text-primary shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-primary font-bold text-lg mb-3">Accommodation</h3>
                <p className="text-foreground leading-relaxed">
                  The conference will be held at the IIT Tirupati campus in offline mode only. Accommodation details including on-campus and nearby hotel options will be communicated to registered delegates closer to the conference dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TravelAccommodation;
