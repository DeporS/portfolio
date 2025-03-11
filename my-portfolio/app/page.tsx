import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I'm Krzysztof Matyla 👋
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          Python & Android Developer | Data Engineer
        </p>
        <div className="mt-6 flex gap-4">
          <a className="px-6 py-2 bg-blue-500 rounded-lg">CV</a>
          <a
            href="https://github.com/DeporS"
            className="px-6 py-2 border border-white rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>

      <div>
        <About />
      </div>
    </main>
  );
}
