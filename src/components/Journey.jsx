import { journeyData } from "../data/journeyData";

export default function Journey() {
  return (
    <section className="py-20 px-6 bg-[#FFF0F7]">
      <h2 className="text-4xl text-center font-[GreatVibes] mb-10">
        Our Journey
      </h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className="w-full md:w-1/2 h-64 rounded-xl bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
