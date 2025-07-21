import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "SEMANGATTT SEMANGTAZZZ 🔥🔥🔥",
    "Selamat datang di medan perang",
  ]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("Agustus 6, 2025 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-2xl  md:text-4xl font-bold z-50 px-4">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat Hari Kebebasan",
                "Sukses Selalu🙏",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
