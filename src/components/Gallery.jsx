export default function Gallery() {
  const placeholders = Array(6).fill("/images/gallery-placeholder.jpg");

  return (
    <section className="py-20 px-6 bg-[#FFF0F4]">
      <h2 className="text-4xl text-center font-[GreatVibes] mb-10">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {placeholders.map((img, i) => (
          <div
            key={i}
            className="h-48 bg-gray-300 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
}
