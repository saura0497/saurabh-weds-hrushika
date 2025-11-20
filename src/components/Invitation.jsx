export default function Invitation() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl text-center font-[GreatVibes] mb-10">
        Wedding Invitation
      </h2>

      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-pink-200 text-center">
        <p className="leading-relaxed text-lg">
          With the blessings of our families, <br /><br />
          We, <b>Saurabh</b> & <b>Hrushika</b>, <br />
          joyfully invite you to celebrate our wedding. <br /><br />
          <span className="font-[GreatVibes] text-3xl text-pink-500">
            You are warmly invited
          </span>
          <br /><br />

          <div className="text-left mt-4">
            <p>📍 <b>Venue:</b> Add venue here</p>
            <p>📅 <b>Date:</b> Add date here</p>
            <p>🕒 <b>Time:</b> Add time here</p>
          </div>
        </p>
      </div>
    </section>
  );
}
