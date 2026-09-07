import { Button } from "@/components/Button";
import {
  ArrowRight,
  Atom,
  Boxes,
  Braces,
  Cloud,
  Container,
  ChevronDown,
  Database,
  Github,
  GitBranch,
  Linkedin,
  Palette,
  Server,
  TestTube2,
  Triangle,
  Twitter,
  Wind,
  Workflow,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "TypeScript", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "GraphQL", icon: Boxes },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: Database },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Vercel", icon: Triangle },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Prisma", icon: Database },
  { name: "Jest", icon: TestTube2 },
  { name: "Cypress", icon: TestTube2 },
  { name: "Figma", icon: Palette },
  { name: "Git", icon: GitBranch },
  { name: "GitHub Actions", icon: Workflow },
];

export const Hero = () => {
  const scrollToAbout = (event) => {
    event.preventDefault();

    const about = document.getElementById("about");
    if (!about) return;

    const headerOffset = 96;
    const top = about.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="projects/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-36 sm:pb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Bhavya Jaiswal — a software engineer specializing in
                React, Next.js, and javascript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
  <a href="#contact">
    <Button size="lg">
      Contact Me <ArrowRight className="w-5 h-5" />
    </Button>
  </a>
  <a href="/Resume.pdf" download="Bhavya_Jaiswal_Resume.pdf">
    <AnimatedBorderButton>
      <Download className="w-5 h-5" />
      Download CV
    </AnimatedBorderButton>
  </a>
   </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Bhavya-jaiswal-hub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bhavya-jaiswal-393044308/" },
                
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="projects/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="technology-marquee">
            <div className="technology-marquee-track">
              {[false, true].map((isDuplicate) => (
                <div
                  className="technology-marquee-set"
                  aria-hidden={isDuplicate}
                  key={isDuplicate ? "duplicate" : "primary"}
                >
                  {skills.map(({ name, icon: Icon }) => (
                    <div className="technology-card" key={name}>
                      <Icon className="technology-card-icon" aria-hidden="true" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
          <a
            href="#about"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
