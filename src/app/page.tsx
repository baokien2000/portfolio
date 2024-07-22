import About from "@/components/about";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
    return (
        <main className=" z-[1] relative text-white bg-transparent max-w-screen-laptop mx-auto">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
        </main>
    );
}
