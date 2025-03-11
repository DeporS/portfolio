import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I'm Krzysztof Matyla 👋
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          Data Engineer | Python & Android Developer
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

      <div className="flex flex-col items-center gap-100">
        <AnimatedSection
          id="aboutMe"
          title="About Me"
          content={[
            "🎓 Computer Science Bachelor's student at Poznań University of Technology.",
            "💻 Proficient in Python, Data Engineering, and Android development.",
            "👩‍💻 Experienced with Oracle, Laravel, Hadoop, Jetpack Compose, and Docker.",
          ]}
        />
        <Projects />
      </div>
    </main>
  );
}
