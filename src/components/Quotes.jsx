export default function Quotes() {
  const quotes = [
    "Together is our favourite place to be.",
    "Two hearts. One soul.",
    "Every love story is beautiful, but ours is my favourite."
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl text-center font-[GreatVibes] mb-12">
        Love Quotes
      </h2>

      <div className="max-w-3xl mx-auto grid gap-8">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 text-center"
          >
            <p className="text-xl italic text-gray-700">{q}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
