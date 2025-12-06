import React, { useState, useRef, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";

export default function ForHer() {
  const [step, setStep] = useState(8);
  const [yesText, setYesText] = useState("");
  const [error, setError] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  // swipe state for compatibility questions
  const [swipeX, setSwipeX] = useState(0);
  const swipeStartXRef = useRef(null);

  // sliding puzzle: 0..7 = tiles, 8 = empty
  // little scrambled like earlier (not just 1 move)
  const initialPuzzle = [0, 1, 2, 4, 5, 3, 6, 8, 7]; // solvable, mildly tricky
  const [puzzle, setPuzzle] = useState(initialPuzzle);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showPuzzleHelp, setShowPuzzleHelp] = useState(false); // show help button after 1 min

  const compatibilityQuestions = [
    "Will you let me be your official chai / coffee partner for life? ☕️",
    "Will you still hold my hand even when we’re 80 and walking slowly? 🧓❤️",
    "Will you watch silly reels with me and laugh for no reason? 😂",
    "Will you be my favourite person on good days, bad days… every day? 🌙",
  ];

  const handleNext = () => setStep((s) => s + 1);

  // YES text gate
  const handleYesTask = () => {
    if (yesText.trim().toLowerCase() === "yes") {
      setError("");
      setYesText("");
      setStep(3); // go to swipe game
    } else {
      setError("Cheating allowed nahi hai 😄  Type YES properly, madam!");
    }
  };

  // swipe card handlers
  const handleSwipeStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    swipeStartXRef.current = clientX;
  };

  const handleSwipeMove = (e) => {
    if (swipeStartXRef.current == null) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = clientX - swipeStartXRef.current;
    setSwipeX(delta);
  };

  const handleSwipeEnd = () => {
    if (swipeStartXRef.current == null) return;
    const threshold = 80; // px to count as swipe right
    if (swipeX > threshold) {
      handleAcceptQuestion();
    }
    swipeStartXRef.current = null;
    setSwipeX(0);
  };

  const handleAcceptQuestion = () => {
    if (questionIndex < compatibilityQuestions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      setQuestionIndex(0);
      setStep(4); // celebration after all “yes”
    }
  };

  // puzzle helpers
  const emptyIndex = puzzle.indexOf(8); // 8 = empty tile

  const isNeighbor = (i, j) => {
    const r1 = Math.floor(i / 3);
    const c1 = i % 3;
    const r2 = Math.floor(j / 3);
    const c2 = j % 3;
    return (
      (r1 === r2 && Math.abs(c1 - c2) === 1) || // same row
      (c1 === c2 && Math.abs(r1 - r2) === 1) // same column
    );
  };

  const handleTileClick = (index) => {
    if (!isNeighbor(index, emptyIndex) || puzzleSolved) return;

    const newPuzzle = [...puzzle];
    [newPuzzle[index], newPuzzle[emptyIndex]] = [
      newPuzzle[emptyIndex],
      newPuzzle[index],
    ];
    setPuzzle(newPuzzle);

    if (newPuzzle.every((val, i) => val === i)) {
      setPuzzleSolved(true);
    }
  };

  const autoSolvePuzzle = () => {
    setPuzzle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setPuzzleSolved(true);
  };

  // show "mujhe puzzle samajh nahi aa raha" button after 1 minute on puzzle step
  useEffect(() => {
    if (step !== 6) {
      setShowPuzzleHelp(false);
      return;
    }
    setShowPuzzleHelp(false);
    const timer = setTimeout(() => {
      setShowPuzzleHelp(true);
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff9f5] via-[#fefaf1] to-[#fff9f5]">
      {/* floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl md:text-3xl opacity-70 animate-floatHeart"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      <SectionWrapper>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* STEP 0 – intro */}
          {step === 0 && (
            <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <p className="font-serif text-sm tracking-[0.25em] uppercase text-gray-500">
                Secret Page
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-gray-900 mt-3">
                Hi, Hrushika 💫
              </h1>
              <p className="mt-4 text-gray-700 font-serif leading-relaxed">
                Agar tum ye page dekh rahi ho, iska matlab hai maine tumhare liye
                ek chhota sa secret corner banaya hai.  
                Ready for a tiny surprise that comes straight from my heart? 🥹
              </p>

              <button
                onClick={handleNext}
                className="mt-8 px-8 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
              >
                Yes, show me 💛
              </button>
            </div>
          )}

          {/* STEP 1 – promise */}
          {step === 1 && (
            <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <h2 className="font-script text-4xl md:text-5xl text-gray-900">
                First, a tiny promise 🤍
              </h2>
              <p className="mt-4 text-gray-700 font-serif leading-relaxed">
                Jo bhi aage dikhne wala hai,  
                usko dekhte waqt tum thoda sa smile karogi…  
                aur dil se sochogi,
                <span className="italic"> “haan, ye mere liye hi banaya hai.”</span>
              </p>

              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
                >
                  Promise, I’ll smile 😌
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-full bg-white/70 text-gray-700 font-serif text-sm border border-[#c1a875]/40 hover:bg-[#fff3df] transition-all hover:-translate-y-0.5"
                >
                  I’m already smiling 😄
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 – type YES */}
          {step === 2 && (
            <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <h2 className="font-script text-4xl md:text-5xl text-gray-900">
                A small task for you ✨
              </h2>
              <p className="mt-4 text-gray-700 font-serif leading-relaxed">
                Dil se ek simple sa answer chahiye…  
                <span className="font-semibold">
                  Agar tumhe lagta hai hum dono ek dusre ke liye bane hain,
                </span>{" "}
                then type{" "}
                <span className="font-semibold uppercase tracking-wide">
                  YES
                </span>{" "}
                below and unlock the next part.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <input
                  value={yesText}
                  onChange={(e) => setYesText(e.target.value)}
                  placeholder='Type "YES" here'
                  className="w-full md:w-64 px-4 py-2 rounded-full border border-[#c1a875]/60 bg-white/70 font-serif text-center focus:outline-none focus:ring-2 focus:ring-[#c1a875]"
                />
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

                <button
                  onClick={handleYesTask}
                  className="mt-2 px-8 py-2.5 rounded-full bg-[#c1a875] text-white font-serif text-base shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
                >
                  Unlock ❤️
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 – swipe-right compatibility game */}
          {step === 3 && (
            <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <h2 className="font-script text-4xl md:text-5xl text-gray-900">
                Swipe right on us 😌
              </h2>
              <p className="mt-3 text-gray-700 font-serif leading-relaxed">
                Thodi si compatibility test karein?  
                Har card pe ek chhota sa sawaal hai.  
                Agar tumko lagta hai answer “haan” hai, toh  
                <span className="font-semibold"> card ko right ki taraf drag karo.</span>
              </p>

              <div
                className="mt-7 bg-transparent rounded-3xl"
                onMouseDown={handleSwipeStart}
                onMouseMove={handleSwipeMove}
                onMouseUp={handleSwipeEnd}
                onMouseLeave={handleSwipeEnd}
                onTouchStart={handleSwipeStart}
                onTouchMove={handleSwipeMove}
                onTouchEnd={handleSwipeEnd}
              >
                <div
                  className="bg-white/70 rounded-3xl border border-[#f2e0c7] shadow-inner px-6 py-8 cursor-grab active:cursor-grabbing transition-transform"
                  style={{
                    transform: `translateX(${swipeX}px) rotate(${swipeX / 25}deg)`,
                  }}
                >
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                    Question {questionIndex + 1} / {compatibilityQuestions.length}
                  </p>
                  <p className="text-lg md:text-xl font-serif text-gray-800">
                    {compatibilityQuestions[questionIndex]}
                  </p>
                  <p className="mt-5 text-xs text-gray-400">
                    (Hint: card ko right drag karo to say YES ✅)
                  </p>
                </div>

                {/* fallback button */}
                <button
                  onClick={handleAcceptQuestion}
                  className="mt-5 px-7 py-2 rounded-full bg-[#c1a875] text-white text-sm font-serif shadow hover:bg-[#b29660] transition"
                >
                  Tap here if swipe nahi ho raha but answer is YES 😄
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 – after all swipes */}
          {step === 4 && (
            <div className="relative bg-gradient-to-b from-[#ffe3cf] via-white to-[#fff9f5] backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl px-8 py-12 animate-fadeIn overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute text-2xl md:text-3xl animate-confettiHeart"
                    style={{
                      left: `${(i * 11) % 100}%`,
                      top: `${(i * 7) % 100}%`,
                      animationDelay: `${i * 0.12}s`,
                    }}
                  >
                    💖
                  </span>
                ))}
              </div>

              <div className="relative z-10">
                <h2 className="font-script text-5xl md:text-6xl text-gray-900 drop-shadow mb-4 animate-popIn">
                  You chose us again & again 💛
                </h2>
                <p className="mt-4 text-gray-700 font-serif leading-relaxed">
                  Har question pe tumne swipe right kiya,  
                  mere liye yeh sirf answers nahi the —  
                  yeh{" "}
                  <span className="font-semibold">
                    future ki chhoti-chhoti glimpses
                  </span>{" "}
                  the.
                </p>
                <p className="mt-3 text-gray-700 font-serif leading-relaxed">
                  Ab ek last emotional detour hai…  
                  phir aata hai main jo actual sawaal puchna chahta hoon.
                </p>

                <button
                  onClick={handleNext}
                  className="mt-8 px-10 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-xl hover:bg-[#b29660] transition-transform hover:scale-110"
                >
                  Take me ahead 💫
                </button>
              </div>
            </div>
          )}

          {/* STEP 5 – emotional build */}
          {step === 5 && (
            <div className="bg-white/45 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <p className="font-serif text-sm tracking-[0.2em] uppercase text-gray-500">
                From My Heart
              </p>
              <h2 className="font-script text-4xl md:text-5xl text-gray-900 mt-3">
                One last thing to tell you…
              </h2>

              <p className="mt-5 text-gray-700 font-serif leading-relaxed">
                Har din, tumhare saath bitaye hue chhote-chhote moments,  
                tumhari hasi, tumhari baatein, tumhara care…  
                sab milke ek hi baat bolte hain —
                <span className="font-semibold">
                  {" "}meri zindagi tumhare saath hi complete lagti hai.
                </span>
              </p>

              <p className="mt-4 text-gray-700 font-serif leading-relaxed">
                Main perfect nahi ho sakta,  
                but ek cheez sure hai —
                <span className="italic">
                  {" "}I’ll always choose you, in every version of my life.
                </span>
              </p>

              <button
                onClick={() => {
                  setPuzzle(initialPuzzle);
                  setPuzzleSolved(false);
                  setStep(6);
                }}
                className="mt-8 px-10 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
              >
                Unlock one last surprise 💭
              </button>
            </div>
          )}

          {/* STEP 6 – sliding puzzle (medium difficulty, help after 1 min) */}
          {step === 6 && (
            <div className="bg-white/45 backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl px-8 py-10 animate-fadeIn">
              <h2 className="font-script text-4xl md:text-5xl text-gray-900">
                Solve us like a puzzle ❤️
              </h2>
              <p className="mt-3 text-gray-700 font-serif leading-relaxed">
                Ye hum dono ki photo hai.  
                Pieces thode mixed hain, bilkul life ki tarah —  
                but jab sab apni sahi jagah par aa jaate hain,  
                <span className="font-semibold"> sab kuch perfect lagne lagta hai. 💫</span>
              </p>

              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-white/70 shadow-xl bg-gray-200">
                  {/* full background image */}
                  <img
                    src="/images/12 days.jpg"  // 🔁 use a different image from your folder
                    alt="Us"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* sliding puzzle overlay */}
                  <div className="relative grid grid-cols-3 grid-rows-3 w-full h-full">
                    {puzzle.map((val, idx) => {
                      const isEmpty = val === 8;
                      const canMove = isNeighbor(idx, emptyIndex);
                      const row = Math.floor(val / 3);
                      const col = val % 3;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTileClick(idx)}
                          disabled={isEmpty || !canMove || puzzleSolved}
                          className="relative w-full h-full border border-white/60 overflow-hidden"
                        >
                          {!isEmpty && (
                            <div
                              className={`
                                absolute inset-0 transition-all duration-200
                                ${canMove ? "hover:scale-[1.03]" : ""}
                              `}
                              style={{
                                backgroundImage: "url('/images/12 days.jpg')", // same new image
                                backgroundSize: "300% 300%",
                                backgroundPosition: `${(col / 2) * 100}% ${(row / 2) * 100}%`,
                              }}
                            >
                              <span className="absolute bottom-1 right-2 text-[10px] bg-black/40 text-white px-1.5 py-0.5 rounded-full">
                                {val + 1}
                              </span>
                            </div>
                          )}

                          {isEmpty && (
                            <div className="absolute inset-0 bg-[#fff9f5]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {!puzzleSolved && (
                <>
                  <p className="mt-4 text-xs text-gray-500">
                    Sirf woh tiles move kar sakti ho jo white (empty) block ke bagal mein hain.  
                    Thoda game hai, but I know tum kar logi 😊
                  </p>

                  {showPuzzleHelp && (
                    <button
                      onClick={autoSolvePuzzle}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#c1a875] text-white text-sm font-serif shadow hover:bg-[#b29660] transition"
                    >
                      Mujhe puzzle samajh nahi aa raha, full photo dikha do 😜
                    </button>
                  )}
                </>
              )}

              {puzzleSolved && (
                <div className="mt-6 animate-fadeIn">
                  <p className="text-gray-700 font-serif">
                    This is us, perfectly in place.  
                    <span className="font-semibold">
                      {" "}Ab sirf ek last sawaal baaki hai…
                    </span>
                  </p>
                  <button
                    onClick={handleNext}
                    className="mt-4 px-9 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
                  >
                    Ask me that question 🥺
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 7 – final proposal */}
          {step === 7 && (
            <div className="relative bg-white/50 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl px-8 py-12 animate-fadeIn overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#ffe9d6]/60 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <h2 className="font-script text-5xl md:text-6xl text-gray-900 drop-shadow">
                  Will you marry me? 🥹
                </h2>

                <p className="mt-5 text-gray-700 font-serif leading-relaxed">
                  Sirf ek shaadi ka din nahi…  
                  main tumhare saath har subah, har raat,  
                  har normal-sa Monday, har special Sunday  
                  share karna chahta hoon.  
                  <br />
                  <span className="font-semibold">
                    Zindagi thodi si simple, thodi si crazy,  
                    but poori ki poori tumhare saath.
                  </span>
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                  <button
                    className="px-10 py-3 rounded-full bg-[#c1a875] text-white font-serif text-lg shadow-xl hover:bg-[#b29660] transition-transform hover:scale-110"
                    onClick={() => setStep(8)}
                  >
                    Yes 💖
                  </button>
                  <button
                    className="px-8 py-3 rounded-full bg-white/80 text-gray-800 font-serif text-base border border-[#c1a875]/60 hover:bg-[#fff3df] transition-transform hover:-translate-y-0.5"
                    onClick={() => setStep(8)}
                  >
                    Of course yes, babe 😄
                  </button>
                </div>

                <p className="mt-6 text-xs text-gray-500 font-serif">
                  (Hint: there’s no “No” button, because kahin na kahin tumhara dil
                  pehle hi haan bol chuka hai.) 💛
                </p>
              </div>
            </div>
          )}

          {/* STEP 8 – final celebration */}
{step === 8 && (
  <div className="relative bg-gradient-to-br from-[#ffefe3] via-[#fff9f5] to-[#ffe5f0] backdrop-blur-xl border border-white/70 rounded-3xl shadow-2xl px-6 md:px-10 py-12 animate-fadeIn overflow-hidden">
    {/* Falling hearts (keep this, you liked it) */}
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-3xl md:text-4xl animate-bigHearts"
          style={{
            left: `${(i * 9) % 100}%`,
            top: `${(i * 5) % 100}%`,
            animationDelay: `${i * 0.18}s`,
          }}
        >
          {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💞" : "💘"}
        </span>
      ))}
    </div>

    <div className="relative z-10 flex flex-col items-center text-center gap-8">
      {/* Top title */}
      <div className="max-w-xl">
        <p className="font-serif text-xs uppercase tracking-[0.35em] text-gray-600">
          Secret Level Unlocked
        </p>
        <h2 className="font-script text-5xl md:text-6xl text-gray-900 drop-shadow mt-1 animate-popIn">
          Forever starts now ✨
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-700 font-serif">
          Iss page ke end tak tum pahuncha gayi ho…  
          iska matlab ek simple si baat hai:
          <span className="font-semibold"> tumne mujhe choose kar liya. 🥹</span>
        </p>
      </div>

      {/* Main glass card with new image */}
      <div className="w-full max-w-3xl">
        <div className="bg-white/55 backdrop-blur-xl border border-white/70 rounded-3xl shadow-2xl px-4 md:px-8 py-7 md:py-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl border-[5px] border-white/80">
              {/* 👉 change this image if you want another one */}
              <img
                src="/images/engagement/eng1.jpg"
                alt="Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-serif">
              Official Announcement
            </p>
            <p className="mt-2 text-lg md:text-xl font-script text-gray-900">
              Tum + Main = Hum, officially. 💑
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-700 font-serif leading-relaxed">
              Ab se har plan, har trip, har random “chalo kahin nikalte hain”
              moment mein
              <span className="font-semibold"> tum automatically included ho.</span>  
              Normal din bhi special lagenge, kyunki
              <span className="italic"> “meri favourite human”</span> mere saath hogi.
            </p>

            {/* Little “equation” chips */}
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
              <span className="px-3 py-1 rounded-full bg-[#fff3df] text-[11px] md:text-xs font-serif text-gray-800">
                Late night talks 🌙
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffe7f0] text-[11px] md:text-xs font-serif text-gray-800">
                Silly fights + quick patchups 😅
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e8f7ff] text-[11px] md:text-xs font-serif text-gray-800">
                Long drives + long life 🚗
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bold forever line */}
      <div className="mt-2 max-w-xl">
        <p className="text-sm md:text-base font-serif text-gray-800">
          Bas ek line yaad rakhna:
          <span className="font-semibold">
            {" "}jo bhi ho, jahan bhi hoon, mera ghar tum ho. 🤍
          </span>
        </p>
      </div>

      {/* Small action at bottom */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <button
          onClick={() => setStep(0)}
          className="px-8 py-2.5 rounded-full bg-[#c1a875] text-white font-serif text-sm md:text-base shadow-lg hover:bg-[#b29660] transition-transform hover:scale-105"
        >
          Kabhi hum dono saath baith ke ye page phir se dekhenge 🔁
        </button>
        <p className="text-[11px] text-gray-500 font-serif">
          (Aur us din main phir se tumse bolunga: thank you for saying yes. 🥹)
        </p>
      </div>
    </div>
  </div>
)}


        </div>
      </SectionWrapper>

      {/* animations */}
      <style>{`
        @keyframes floatHeart {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }
        .animate-floatHeart {
          animation: floatHeart 12s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes confettiHeart {
          0% { transform: translateY(-20px) scale(0.6) rotate(0deg); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(60px) scale(1.1) rotate(18deg); opacity: 0; }
        }
        .animate-confettiHeart {
          animation: confettiHeart 2.2s ease-in-out infinite;
        }

        @keyframes popIn {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popIn {
          animation: popIn 0.5s ease-out;
        }

        @keyframes bigHearts {
          0% { transform: translateY(-30px) scale(0.7); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(80px) scale(1.2); opacity: 0; }
        }
        .animate-bigHearts {
          animation: bigHearts 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
