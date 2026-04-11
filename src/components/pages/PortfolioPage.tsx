"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Building2,
  Briefcase,
  GraduationCap,
  Scale,
  HeartPulse,
  ShoppingCart,
  Landmark,
  BarChart3,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useNavigation } from "@/lib/navigation";

/* ──────────────────────── project data ─────────────────────────────── */
const featuredProject = {
  name: "Soshanguve School of Specialisation",
  category: "Government / Education",
  type: "Full school website",
  description:
    "A production-grade government-adjacent deployment serving the Soshanguve community. Built on Next.js with comprehensive school management features, parent communication tools, and an AI-powered admissions assistant.",
  features: [
    "Next.js",
    "Vercel",
    "AI Chatbot",
    "CMS",
    "Mobile-First",
    "SEO Optimised",
  ],
  url: "https://sosha-automotive.org",
};

const projectCards = [
  {
    name: "Mogale & Associates Attorneys",
    category: "Legal",
    categoryKey: "legal",
    description: "Corporate website with case tracking, consultation booking, and document management portal.",
    tech: ["Next.js", "Stripe", "CMS"],
    gradient: "from-[#1a1a2e] to-[#16213e]",
    icon: Scale,
  },
  {
    name: "Soshanguve Family Clinic",
    category: "Medical",
    categoryKey: "medical",
    description: "Patient portal with online booking, medical records access, and prescription refill requests.",
    tech: ["Next.js", "Auth", "Calendar"],
    gradient: "from-[#1a2e1a] to-[#162e21]",
    icon: HeartPulse,
  },
  {
    name: "Pretoria Gateway Guesthouse",
    category: "Business",
    categoryKey: "business",
    description: "Booking engine with real-time availability, payment integration, and guest management dashboard.",
    tech: ["Next.js", "PayFast", "Maps"],
    gradient: "from-[#2e1a1a] to-[#2e1616]",
    icon: Building2,
  },
  {
    name: "Kasi Kitchen Catering",
    category: "Business",
    categoryKey: "business",
    description: "E-commerce platform with menu management, delivery tracking, and customer loyalty programme.",
    tech: ["Next.js", "E-commerce", "SMS"],
    gradient: "from-[#2e2a1a] to-[#2e2516]",
    icon: ShoppingCart,
  },
  {
    name: "Thuto-Pele Secondary School",
    category: "Education",
    categoryKey: "education",
    description: "CMS-powered school website with news, events calendar, gallery, and parent communication tools.",
    tech: ["Next.js", "Sanity CMS", "SEO"],
    gradient: "from-[#1a1a2e] to-[#1c162e]",
    icon: GraduationCap,
  },
  {
    name: "Tshwane Youth Development",
    category: "Government",
    categoryKey: "business",
    description: "Community portal with event management, programme applications, and stakeholder dashboard.",
    tech: ["Next.js", "Auth", "Dashboard"],
    gradient: "from-[#1a2e2e] to-[#162e2e]",
    icon: Landmark,
  },
  {
    name: "Nkosi Financial Advisory",
    category: "Business",
    categoryKey: "business",
    description: "Lead generation website with CRM dashboard, appointment scheduling, and automated follow-ups.",
    tech: ["Next.js", "CRM", "Analytics"],
    gradient: "from-[#2e1a2e] to-[#2e162e]",
    icon: BarChart3,
  },
  {
    name: "Soweto Fresh Market",
    category: "Business",
    categoryKey: "business",
    description: "Multi-vendor marketplace platform with vendor onboarding, product listings, and order management.",
    tech: ["Next.js", "Multi-vendor", "Payments"],
    gradient: "from-[#2e2e1a] to-[#2e2e16]",
    icon: Store,
  },
];

/* ──────────────────────── stats data ───────────────────────────────── */
const stats = [
  { target: 50, suffix: "+", label: "Projects Delivered", prefix: "" },
  { target: 99.9, suffix: "%", label: "Uptime Record", prefix: "", decimal: true },
  { target: 40, suffix: "%", label: "Average Traffic Increase", prefix: "" },
  { target: 7, suffix: "", label: "Day Average Delivery", prefix: "5-" },
];

/* ──────────────────────── category filter tabs ─────────────────────── */
const categoryTabs = [
  { key: "all", label: "All" },
  { key: "education", label: "Education" },
  { key: "business", label: "Business" },
  { key: "legal", label: "Legal" },
  { key: "medical", label: "Medical" },
];

/* ═══════════════════════════════════════════════════════════════════════
   PORTFOLIO PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function PortfolioPage() {
  const { navigate } = useNavigation();

  const handleNavClick = (page: "contact" | "packages") => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden">
      {/* ───────────────────── 1. PAGE HERO ───────────────────── */}
      <section className="relative py-28 md:py-40 bg-[#0A0A0B]">
        {/* Background */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,168,83,0.03)] via-transparent to-[rgba(212,168,83,0.02)]" />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.15)] mb-8">
              <Sparkles className="w-4 h-4 text-[#D4A853]" />
              <span className="text-sm font-medium text-[#D4A853]">
                Case Studies & Work
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-gradient-gold">Our Work</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.35} direction="up">
            <p
              className="mt-4 text-xl md:text-2xl text-[rgba(245,245,245,0.5)] font-medium"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Results That Speak Louder Than Pitches
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} direction="up">
            <p className="mt-6 text-base md:text-lg text-[rgba(245,245,245,0.6)] max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just talk about what we can do — we show you. Browse our portfolio of real-world 
              projects built for South African schools, businesses, and organisations that needed 
              digital infrastructure that actually works.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />

      {/* ────────────────── 2. FEATURED PROJECT ─────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative overflow-hidden rounded-3xl border-gradient-gold">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,168,83,0.08)] via-[#131316] to-[rgba(212,168,83,0.04)]" />
              <div className="absolute inset-0 bg-dots opacity-30" />

              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[rgba(212,168,83,0.06)] rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 p-6 md:p-10 lg:p-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left: Info */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      <Badge className="bg-[rgba(212,168,83,0.15)] text-[#D4A853] border-[rgba(212,168,83,0.25)] text-xs font-medium px-3 py-1">
                        <Building2 className="w-3 h-3 mr-1.5" />
                        {featuredProject.category}
                      </Badge>
                      <Badge className="bg-[rgba(255,255,255,0.06)] text-[rgba(245,245,245,0.7)] border-[rgba(255,255,255,0.08)] text-xs font-medium px-3 py-1">
                        {featuredProject.type}
                      </Badge>
                    </div>

                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {featuredProject.name}
                    </h2>

                    <p className="text-base md:text-lg text-[rgba(245,245,245,0.6)] leading-relaxed mb-8">
                      {featuredProject.description}
                    </p>

                    {/* Tech features as badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-[rgba(212,168,83,0.1)] text-[#E8C97A] border border-[rgba(212,168,83,0.15)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold px-8 py-5 text-base rounded-xl shadow-lg shadow-[rgba(212,168,83,0.25)] hover:shadow-[rgba(212,168,83,0.35)] transition-all duration-300 group"
                    >
                      <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                        View Live Site
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>

                  {/* Right: Preview placeholder */}
                  <div className="relative">
                    <div className="rounded-2xl bg-gradient-to-br from-[#1A1A1F] to-[#131316] border border-[rgba(255,255,255,0.06)] p-4">
                      <div className="rounded-xl bg-gradient-to-br from-[rgba(212,168,83,0.1)] via-[#131316] to-[rgba(212,168,83,0.05)] aspect-video flex flex-col items-center justify-center gap-4 overflow-hidden">
                        {/* Mock browser bar */}
                        <div className="w-full px-4 pt-3">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                            </div>
                            <div className="flex-1 h-6 rounded-md bg-[rgba(255,255,255,0.04)] flex items-center px-3">
                              <span className="text-[10px] text-[rgba(245,245,245,0.25)] font-mono">
                                sosha-automotive.org
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Mock content */}
                        <div className="flex-1 w-full px-8 flex flex-col gap-3">
                          <div className="h-6 w-3/4 rounded bg-[rgba(212,168,83,0.12)]" />
                          <div className="h-3 w-full rounded bg-[rgba(255,255,255,0.04)]" />
                          <div className="h-3 w-5/6 rounded bg-[rgba(255,255,255,0.04)]" />
                          <div className="h-3 w-2/3 rounded bg-[rgba(255,255,255,0.04)]" />
                          <div className="mt-4 grid grid-cols-3 gap-3">
                            <div className="h-16 rounded-lg bg-[rgba(212,168,83,0.08)]" />
                            <div className="h-16 rounded-lg bg-[rgba(212,168,83,0.08)]" />
                            <div className="h-16 rounded-lg bg-[rgba(212,168,83,0.08)]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 md:-top-6 md:-right-6"
                    >
                      <div className="px-3 py-2 rounded-xl bg-[#131316] border border-[rgba(212,168,83,0.2)] shadow-lg shadow-[rgba(0,0,0,0.3)]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs font-semibold text-[#D4A853]">Live</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />

      {/* ──────────────────── 3. PROJECT GRID ───────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#0A0A0B]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.02)] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Recent"
            titleHighlight="Projects"
            description="From law firms to schools, medical practices to marketplaces — see how we've helped South African organisations level up their digital presence."
            align="center"
          />

          {/* Filter tabs */}
          <AnimatedSection delay={0.2} direction="up">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-xl p-1 h-auto">
                  {categoryTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.key}
                      value={tab.key}
                      className="data-[state=active]:bg-[rgba(212,168,83,0.15)] data-[state=active]:text-[#D4A853] text-[rgba(245,245,245,0.5)] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab contents */}
              {categoryTabs.map((tab) => (
                <TabsContent key={tab.key} value={tab.key} className="mt-0">
                  <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    staggerDelay={0.08}
                    once={false}
                  >
                    {projectCards
                      .filter(
                        (p) =>
                          tab.key === "all" || p.categoryKey === tab.key
                      )
                      .map((project) => (
                        <StaggerItem key={project.name}>
                          <div className="group relative h-full rounded-2xl bg-[#131316] border border-[rgba(255,255,255,0.06)] overflow-hidden card-hover">
                            {/* Gradient placeholder header */}
                            <div
                              className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                            >
                              <project.icon className="w-12 h-12 text-[rgba(212,168,83,0.25)] group-hover:text-[rgba(212,168,83,0.4)] transition-colors duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent" />
                              {/* Category badge */}
                              <div className="absolute top-3 right-3">
                                <Badge className="bg-[rgba(10,10,11,0.7)] backdrop-blur-sm text-[rgba(245,245,245,0.7)] border-[rgba(255,255,255,0.1)] text-[10px] font-medium px-2.5 py-0.5">
                                  {project.category}
                                </Badge>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                              <h3
                                className="text-base font-semibold text-white mb-2 group-hover:text-[#E8C97A] transition-colors duration-300"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                              >
                                {project.name}
                              </h3>
                              <p className="text-sm text-[rgba(245,245,245,0.5)] leading-relaxed mb-4">
                                {project.description}
                              </p>
                              {/* Tech badges */}
                              <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[10px] font-medium px-2 py-1 rounded-md bg-[rgba(255,255,255,0.04)] text-[rgba(245,245,245,0.4)] border border-[rgba(255,255,255,0.05)]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Hover gold top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </StaggerItem>
                      ))}
                  </StaggerContainer>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />

      {/* ───────────────────── 4. RESULTS SECTION ───────────────── */}
      <section className="relative py-20 md:py-28 bg-[#0A0A0B] bg-dots">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Impact"
            title="The Numbers"
            titleHighlight="Don't Lie"
            description="Hard metrics from real projects. No fluff, no vanity stats — just the numbers that matter."
            align="center"
          />

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.15}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center p-6 rounded-2xl bg-[#131316] border border-[rgba(255,255,255,0.06)] card-hover">
                  <div
                    className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.prefix}
                    <AnimatedCounter
                      target={stat.decimal ? Math.round(stat.target * 10) : stat.target}
                      suffix={stat.suffix}
                      duration={stat.decimal ? 2500 : 2000}
                    />
                  </div>
                  <p className="text-sm md:text-base text-[rgba(245,245,245,0.5)] font-medium">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.15)] to-transparent" />

      {/* ──────────────────── 5. CTA SECTION ───────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative overflow-hidden rounded-3xl border-gradient-gold">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,168,83,0.08)] via-[rgba(19,19,22,0.95)] to-[rgba(212,168,83,0.04)]" />
              <div className="absolute inset-0 bg-dots opacity-40" />

              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[rgba(212,168,83,0.06)] rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 px-6 py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 text-center">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Have a Project in Mind?
                </h2>

                <p className="text-base md:text-lg text-[rgba(245,245,245,0.55)] max-w-2xl mx-auto leading-relaxed mb-10">
                  Let&apos;s discuss how we can bring your vision to life. From a simple landing page 
                  to a full-scale digital platform — we&apos;ve got you covered.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={() => handleNavClick("contact")}
                    size="lg"
                    className="bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold px-10 py-6 text-base rounded-xl shadow-lg shadow-[rgba(212,168,83,0.25)] hover:shadow-[rgba(212,168,83,0.35)] transition-all duration-300 group"
                  >
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => handleNavClick("packages")}
                    size="lg"
                    variant="outline"
                    className="border-[rgba(255,255,255,0.15)] bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-6 text-base rounded-xl transition-all duration-300 group"
                  >
                    View Packages
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="mt-6 text-xs text-[rgba(245,245,245,0.3)]">
                  Free 30-minute discovery call · No obligation · Response within 2 hours
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
