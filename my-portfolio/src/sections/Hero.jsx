export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="mt-4 text-xl">Frontend Developer | React Enthusiast</p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-lg">
        View My Work
      </button>
    </section>
  );
}
