import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Krzysztof Matyla 👋</h1>
        <p className="text-xl mt-4">
          Python Developer | Data Engineer | Android Dev
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
