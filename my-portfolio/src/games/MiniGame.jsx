import { useState } from "react";

export default function MiniGame() {
  const [score, setScore] = useState(0);

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Mini Game 🎮</h2>
      <button
        onClick={() => setScore(score + 1)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        Click Me!
      </button>
      <p className="mt-4 text-xl">Score: {score}</p>
    </section>
  );
}
