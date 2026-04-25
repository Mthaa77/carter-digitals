"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  KeyRound,
  Target,
  Handshake,
  Briefcase,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  FileCheck,
  MapPin,
  Quote,
  ChevronRight,
  Shield,
  Recycle,
  Rocket,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  GraduationCap,
  Scale,
  HeartPulse,
  Building2,
  Landmark,
  BarChart3,
  TrendingUp,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { TiltCard } from "@/components/shared/TiltCard";
import { useNavigation } from "@/lib/navigation";
import CosmicDecorations from "@/components/shared/CosmicDecorations";

/* ──────────────── Multi-color accent palette ───────────────── */
const colorAccents = {
  gold: { bg: "rgba(212,168,83,0.X)", text: "#D4A853", border: "rgba(212,168,83,0.15)" },
  sapphire: { bg: "rgba(30,58,95,0.X)", text: "#1E3A5F", border: "rgba(30,58,95,0.15)" },
  coral: { bg: "rgba(196,30,58,0.X)", text: "#C41E3A", border: "rgba(196,30,58,0.15)" },
  emerald: { bg: "rgba(16,185,129,0.X)", text: "#10B981", border: "rgba(16,185,129,0.15)" },
  purple: { bg: "rgba(139,92,246,0.X)", text: "#8B5CF6", border: "rgba(139,92,246,0.15)" },
};

/* Value card color mapping */
const valueCardColors = [
  { iconBg: "rgba(16,185,129,0.1)", iconBorder: "rgba(16,185,129,0.15)", iconHoverBg: "rgba(16,185,129,0.15)", iconColor: "#10B981", badge: "emerald", hoverBorder: "rgba(16,185,129,0.25)" },
  { iconBg: "rgba(30,58,95,0.1)", iconBorder: "rgba(30,58,95,0.15)", iconHoverBg: "rgba(30,58,95,0.15)", iconColor: "#1E3A5F", badge: "sapphire", hoverBorder: "rgba(30,58,95,0.25)" },
  { iconBg: "rgba(196,30,58,0.1)", iconBorder: "rgba(196,30,58,0.15)", iconHoverBg: "rgba(196,30,58,0.15)", iconColor: "#C41E3A", badge: "coral", hoverBorder: "rgba(196,30,58,0.25)" },
  { iconBg: "rgba(139,92,246,0.1)", iconBorder: "rgba(139,92,246,0.15)", iconHoverBg: "rgba(139,92,246,0.15)", iconColor: "#8B5CF6", badge: "purple", hoverBorder: "rgba(139,92,246,0.25)" },
];

/* Team stat card colors */
const teamStatColors = [
  { iconBg: "rgba(16,185,129,0.1)", iconColor: "#10B981" },
  { iconBg: "rgba(30,58,95,0.1)", iconColor: "#1E3A5F" },
  { iconBg: "rgba(139,92,246,0.1)", iconColor: "#8B5CF6" },
];

/* Milestone year badge colors (cycling) */
const milestoneBadgeColors = [
  { bg: "rgba(212,168,83,0.1)", text: "#D4A853", dotBorder: "#D4A853", dotGlow: "rgba(212,168,83,0.3)", iconBg: "rgba(212,168,83,0.1)", iconBorder: "rgba(212,168,83,0.15)", iconColor: "#D4A853", iconHoverBg: "rgba(212,168,83,0.15)", hoverBorder: "rgba(212,168,83,0.25)" },
  { bg: "rgba(30,58,95,0.1)", text: "#1E3A5F", dotBorder: "#1E3A5F", dotGlow: "rgba(30,58,95,0.3)", iconBg: "rgba(30,58,95,0.1)", iconBorder: "rgba(30,58,95,0.15)", iconColor: "#1E3A5F", iconHoverBg: "rgba(30,58,95,0.15)", hoverBorder: "rgba(30,58,95,0.25)" },
  { bg: "rgba(16,185,129,0.1)", text: "#10B981", dotBorder: "#10B981", dotGlow: "rgba(16,185,129,0.3)", iconBg: "rgba(16,185,129,0.1)", iconBorder: "rgba(16,185,129,0.15)", iconColor: "#10B981", iconHoverBg: "rgba(16,185,129,0.15)", hoverBorder: "rgba(16,185,129,0.25)" },
  { bg: "rgba(196,30,58,0.1)", text: "#C41E3A", dotBorder: "#C41E3A", dotGlow: "rgba(196,30,58,0.3)", iconBg: "rgba(196,30,58,0.1)", iconBorder: "rgba(196,30,58,0.15)", iconColor: "#C41E3A", iconHoverBg: "rgba(196,30,58,0.15)", hoverBorder: "rgba(196,30,58,0.25)" },
  { bg: "rgba(139,92,246,0.1)", text: "#8B5CF6", dotBorder: "#8B5CF6", dotGlow: "rgba(139,92,246,0.3)", iconBg: "rgba(139,92,246,0.1)", iconBorder: "rgba(139,92,246,0.15)", iconColor: "#8B5CF6", iconHoverBg: "rgba(139,92,246,0.15)", hoverBorder: "rgba(139,92,246,0.25)" },
  { bg: "rgba(212,168,83,0.1)", text: "#D4A853", dotBorder: "#D4A853", dotGlow: "rgba(212,168,83,0.3)", iconBg: "rgba(212,168,83,0.1)", iconBorder: "rgba(212,168,83,0.15)", iconColor: "#D4A853", iconHoverBg: "rgba(212,168,83,0.15)", hoverBorder: "rgba(212,168,83,0.25)" },
];

/* Capability cards data */
const capabilities = [
  { icon: Code, title: "Full-Stack Development", description: "End-to-end web applications with modern frameworks and production-grade architecture.", color: { iconBg: "rgba(30,58,95,0.1)", iconBorder: "rgba(30,58,95,0.15)", iconColor: "#1E3A5F", hoverBorder: "rgba(30,58,95,0.25)" } },
  { icon: Cloud, title: "Cloud Architecture", description: "Scalable infrastructure on GCP with enterprise-grade reliability and performance.", color: { iconBg: "rgba(16,185,129,0.1)", iconBorder: "rgba(16,185,129,0.15)", iconColor: "#10B981", hoverBorder: "rgba(16,185,129,0.25)" } },
  { icon: Cpu, title: "AI Integration", description: "Intelligent automation, chatbots, and AI-powered analytics for modern businesses.", color: { iconBg: "rgba(139,92,246,0.1)", iconBorder: "rgba(139,92,246,0.15)", iconColor: "#8B5CF6", hoverBorder: "rgba(139,92,246,0.25)" } },
  { icon: Rocket, title: "Rapid Delivery", description: "5-7 day turnaround without sacrificing quality. Built fast, built right.", color: { iconBg: "rgba(196,30,58,0.1)", iconBorder: "rgba(196,30,58,0.15)", iconColor: "#C41E3A", hoverBorder: "rgba(196,30,58,0.25)" } },
];

/* ──────────────────────── value cards data ─────────────────────── */
const values = [
  {
    icon: Zap,
    title: "Speed Over Process",
    description: "5-7 day delivery. Not weeks. Not months.",
  },
  {
    icon: KeyRound,
    title: "Ownership Over Dependency",
    description: "Full handover. Zero lock-in. You own everything.",
  },
  {
    icon: Target,
    title: "Substance Over Style",
    description: "Results that compound. Not templates that expire.",
  },
  {
    icon: Handshake,
    title: "Partnership Over Transactions",
    description: "We build with you, not just for you.",
  },
];

/* ──────────────────────── tech stack ───────────────────────────── */
const techStack = [
  "Next.js",
  "React",
  "Python/FastAPI",
  "PostgreSQL",
  "GCP/Vertex AI",
  "Vercel",
  "Sanity CMS",
  "WhatsApp API",
  "Make.com",
];

/* ──────────────────── engagement models ────────────────────────── */
const engagementModels = [
  {
    icon: Briefcase,
    title: "Project-Based",
    description: "Fixed scope, fixed cost, milestone-driven delivery. You know exactly what you're getting, when you're getting it, and what it costs — before we start.",
    bestFor: "SMEs, startups, and organisations with clearly defined digital needs",
  },
  {
    icon: Recycle,
    title: "Retainer & Ongoing Support",
    description: "Continuous optimisation on a predictable monthly basis. We become an extension of your team — iterating, improving, and scaling your digital presence.",
    bestFor: "Growing businesses needing regular updates, new features, and strategic guidance",
  },

];

/* ──────────────────── credentials data ─────────────────────────── */
const credentials = [
  { label: "Registered Name", value: "Carter Digitals (Pty) Ltd" },
  { label: "CIPC Registration", value: "2025/907839/07" },
  { label: "SARS Tax Reference", value: "9382428234" },
  {
    label: "B-BBEE Status",
    value: "Level 1 Contributor (EME) — 135% Procurement Recognition",
  },
  { label: "Ownership", value: "100% Black-Owned | 100% Youth-Owned" },
  { label: "CSD Registration", value: "Registered & Active" },
  { label: "Compliance", value: "POPIA Compliant" },
  {
    label: "Location",
    value: "1457 Block L, Soshanguve, Pretoria, Gauteng",
  },
];

/* ──────────────────── trust logos data ────────────────────────── */
const trustLogos = [
  { name: "Rise & Shine Academy", sector: "Education", icon: GraduationCap },
  { name: "Mogale & Associates", sector: "Legal", icon: Scale },
  { name: "Family Clinic Group", sector: "Healthcare", icon: HeartPulse },
  { name: "Gateway Hospitality", sector: "Hospitality", icon: Building2 },
  { name: "Tshwane Municipality", sector: "Government", icon: Landmark },
  { name: "Nkosi Advisory", sector: "Finance", icon: BarChart3 },
];

/* ──────────────────── milestones data ───────────────────────────── */
const milestones = [
  { year: "2023", title: "Founded", description: "Carter Digitals established in Soshanguve, Pretoria — born from a friendship and a vision to build real digital infrastructure for South African institutions.", icon: Rocket },
  { year: "2024", title: "First Major Client", description: "Delivered the Soshanguve School of Specialisation website — our first government-adjacent deployment, proving our capability at scale.", icon: Building2 },
  { year: "2024", title: "B-BBEE Level 1", description: "Achieved B-BBEE Level 1 certification with 135% procurement recognition — opening doors to government procurement.", icon: Shield },
  { year: "2025", title: "50+ Projects", description: "Crossed 50 projects delivered across education, legal, medical, hospitality, and government sectors.", icon: TrendingUp },
  { year: "2025", title: "AI Integration", description: "Launched AI-powered business tools — chatbots, automated workflows, and intelligent analytics for our clients.", icon: Bot },
  { year: "2026", title: "National AI Policy", description: "Positioned as a key implementation partner for South Africa's Draft National AI Policy — targeting funded contracts.", icon: Globe },
];

/* ──────────────────── company stats data ────────────────────────── */
const companyStats = [
  { value: "50+", label: "Projects Delivered", numericValue: 50, suffix: "+" },
  { value: "30+", label: "Happy Clients", numericValue: 30, suffix: "+" },
  { value: "99.9%", label: "Uptime Guaranteed", numericValue: 99, suffix: ".9%" },
  { value: "5-7", label: "Day Delivery", numericValue: 5, suffix: "-7" },
];

/* ═══════════════════════════════════════════════════════════════════════
   ABOUT PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const { navigate } = useNavigation();

  const handleNavClick = (page: "contact" | "services" | "packages") => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden">
      {/* ───────────────────── 1. PAGE HERO ───────────────────── */}
      <section className="relative py-24 md:py-36 bg-background">
        {/* Aurora mesh background layer */}
        <div className="absolute inset-0 bg-aurora-mesh opacity-[0.4]" />

        {/* Background grid */}
        <div className="absolute inset-0 bg-grid pattern-grid-animated" />

        {/* ── Multi-color animated gradient orbs ── */}
        <ParallaxSection speed={0.12} direction="up" className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[8%] w-[400px] h-[400px] bg-[rgba(30,58,95,0.05)] rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[rgba(196,30,58,0.04)] rounded-full blur-[90px]"
          />
          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] left-[20%] w-[300px] h-[300px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ y: [0, 18, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[15%] right-[15%] w-[320px] h-[320px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[85px]"
          />
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[70px]"
          />
        </ParallaxSection>

        {/* ── Parallax background layers ── */}
        {/* Large gold glow orb — speed 0.15 */}
        <ParallaxSection speed={0.15} direction="up" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[rgba(212,168,83,0.06)] rounded-full blur-[120px]" />
        </ParallaxSection>

        {/* Multi-color radial glow behind content (gold + coral) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(212,168,83,0.06) 0%, rgba(196,30,58,0.03) 40%, transparent 70%)" }} />

        {/* Small floating geometric shapes — speed 0.08 */}
        <ParallaxSection speed={0.08} direction="up" className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 45 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[10%] w-8 h-8 rounded-lg border border-[rgba(212,168,83,0.1)] bg-[rgba(212,168,83,0.03)]"
          />
          <motion.div
            animate={{ rotate: -30 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] right-[15%] w-6 h-6 rounded-full border border-[rgba(30,58,95,0.1)] bg-[rgba(30,58,95,0.03)]"
          />
          <motion.div
            animate={{ rotate: 60 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[25%] left-[20%] w-10 h-10 rounded-sm border border-[rgba(196,30,58,0.08)] bg-[rgba(196,30,58,0.02)]"
          />
          <motion.div
            animate={{ rotate: -45 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[10%] w-5 h-5 rounded border border-[rgba(139,92,246,0.1)] bg-[rgba(139,92,246,0.03)]"
          />
        </ParallaxSection>

        {/* Grid/dot pattern overlay — speed 0.05 */}
        <ParallaxSection speed={0.05} direction="up" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-dots opacity-20" />
        </ParallaxSection>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,168,83,0.03)] via-transparent to-[rgba(212,168,83,0.02)]" />

        {/* Content with subtle parallax — speed 0.03 */}
        <ParallaxSection speed={0.03} direction="up">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.15)] mb-8">
                <Sparkles className="w-4 h-4 text-[#D4A853]" />
                <span className="text-sm font-medium text-[#D4A853]">
                  Our Story
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight font-display text-shadow-hero"
              >
                <span className="text-foreground">About Carter </span>
                <span className="text-gradient-hero">Digitals</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.35} direction="up">
              <p
                className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground tracking-wide font-display text-shadow-premium"
              >
                Built Different. Built African. Built to Win.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="up">
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Carter Digitals (Pty) Ltd is a Pretoria-based digital services
                studio operating out of Soshanguve — building production-ready
                digital infrastructure for South Africa&apos;s schools, SMEs, law
                firms, medical practices, and government institutions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.65} direction="up">
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => handleNavClick("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-[rgba(212,168,83,0.25)] hover:shadow-[rgba(212,168,83,0.35)] transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => handleNavClick("services")}
                  size="lg"
                  variant="outline"
                  className="border-[rgba(255,255,255,0.15)] bg-transparent hover:bg-white/5 text-foreground font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 group"
                >
                  View Our Services
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </ParallaxSection>

        {/* Gold gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0B] via-[rgba(10,10,11,0.6)] to-transparent pointer-events-none" />
      </section>

      <div className="h-px section-divider-rainbow" />

      {/* ────────────────── 2. OUR STORY SECTION ───────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint">
        {/* Subtle digital transformation background image */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]">
          <Image src="/images/digital-transformation.png" alt="" fill className="object-cover object-center" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <CosmicDecorations variant="stardust" intensity="subtle" />
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />

        {/* Multi-color ambient orbs: emerald (top-left), coral (bottom-right), purple (right-center) */}
        <div className="absolute top-[10%] left-[-3%] w-[350px] h-[350px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-3%] w-[300px] h-[300px] bg-[rgba(196,30,58,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[40%] right-[5%] w-[250px] h-[250px] bg-[rgba(139,92,246,0.03)] rounded-full blur-[90px] pointer-events-none" />

        {/* Ambient floating orbs */}
        <div className="ambient-orb ambient-orb-float w-[300px] h-[300px] bg-[rgba(212,168,83,0.03)] top-[10%] right-[-5%]" style={{animationDelay: '0s'}} />
        <div className="ambient-orb ambient-orb-float w-[200px] h-[200px] bg-[rgba(212,168,83,0.04)] bottom-[10%] left-[-3%]" style={{animationDelay: '7s'}} />
        {/* Gold radial glow orb behind two-column layout */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[rgba(212,168,83,0.07)] rounded-full blur-[160px] pointer-events-none" />
        {/* Secondary gold accent glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text column */}
            <AnimatedSection direction="right" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(212,168,83,0.1)] text-[#D4A853] border border-[rgba(212,168,83,0.2)] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                Our Story
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 font-display text-shadow-section"
              >
                A Studio Born from{" "}
                <span className="text-gradient-hero">Purpose</span>
              </h2>

              <div className="space-y-5 text-foreground/60 leading-[1.8]">
                <p className="first-letter:text-[#D4A853] first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  Carter Digitals was never meant to be just another digital
                  agency. Founded in 2023, this studio was named in tribute to a
                  close friend who passed away in April 2021. Every project we
                  deliver, every client we serve, and every line of code we write
                  exists as a living monument to that friendship.
                </p>
                <p>
                  That sense of purpose drives everything. We don&apos;t build
                  websites to fill a portfolio — we build them because South
                  Africa&apos;s institutions deserve digital infrastructure that
                  actually works. Schools that enroll students online. Law firms
                  that field client inquiries 24/7. Medical practices that manage
                  bookings without chaos. SMEs that compete on the same digital
                  playing field as the multinationals.
                </p>
                <p>
                  We&apos;re based in Soshanguve, Pretoria — and we&apos;re
                  proud of it. Our roots are firmly African, our standards are
                  global, and our turnaround times are unmatched.
                </p>
              </div>
            </AnimatedSection>

            {/* Visual column — Digital Transformation image */}
            <ParallaxSection speed={0.15} direction="up">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden chrome-image-frame h-[400px] md:h-[480px]">
                    <Image src="/images/digital-transform.png" alt="Digital transformation concept — Carter Digitals building modern web infrastructure" fill className="object-cover object-center" unoptimized />
                    {/* Subtle dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[rgba(10,10,11,0.3)] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.15)] to-transparent" />
                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                      <p className="text-sm font-medium text-[#D4A853] mb-1 tracking-wide uppercase" style={{ fontSize: '11px' }}>
                        Carter Digitals
                      </p>
                      <p className="text-lg md:text-xl font-bold text-foreground leading-tight font-display">
                        Building Digital Futures Since 2023
                      </p>
                    </div>
                  </div>

                  {/* Floating accent element */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[rgba(16,185,129,0.15)] to-[rgba(16,185,129,0.03)] border border-[rgba(16,185,129,0.15)]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-[rgba(139,92,246,0.12)] to-[rgba(139,92,246,0.03)] border border-[rgba(139,92,246,0.1)]"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </AnimatedSection>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* ────────────────── 3. MISSION & VALUES ─────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div className="gold-glow-line mx-auto max-w-xs rounded-full" /></div>
      <section className="relative py-20 md:py-28 bg-background section-gold-tint">
        <CosmicDecorations variant="aurora" intensity="subtle" />
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />

        {/* Multi-color ambient orbs: sapphire (top-right), emerald (bottom-left) */}
        <div className="absolute top-[5%] right-[-3%] w-[350px] h-[350px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-3%] w-[300px] h-[300px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[100px] pointer-events-none" />

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            title="What Drives Us"
            titleHighlight="Forward"
            description="Four principles that shape every decision, every line of code, and every client relationship we build."
            align="center"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {values.map((value, idx) => {
              const colors = valueCardColors[idx];
              return (
                <StaggerItem key={value.title}>
                  <TiltCard className="h-full" tiltStrength={4}>
                    <div className="group relative h-full rounded-2xl bg-card border border-border p-6 card-hover-gold card-shine-sweep overflow-hidden hover:border-[rgba(212,168,83,0.2)] transition-colors duration-300">
                      {/* Gold top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent opacity-60" />

                      {/* Numbered badge */}
                      <span className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-[rgba(212,168,83,0.15)] to-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.2)] flex items-center justify-center text-xs font-bold text-[#D4A853] font-display select-none shadow-sm shadow-[rgba(212,168,83,0.1)]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-300" style={{ backgroundColor: colors.iconBg, borderColor: colors.iconBorder }}>
                        <div className="group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: colors.iconHoverBg }}>
                          <value.icon className="w-6 h-6" style={{ color: colors.iconColor }} />
                        </div>
                      </div>
                      <h3
                        className="text-lg font-semibold text-foreground mb-3 font-display"
                      >
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────────── 3b. TEAM AT WORK ──────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div className="gold-glow-line mx-auto max-w-xs rounded-full" /></div>
      <AnimatedSection direction="up">
        <section className="relative py-20 md:py-28 bg-background section-gold-tint">
          <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />

          {/* Multi-color ambient orbs: purple (center-top), coral (right), gold (left) */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[rgba(139,92,246,0.03)] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[40%] right-[-3%] w-[280px] h-[280px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-3%] w-[260px] h-[260px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[80px] pointer-events-none" />

          {/* Gold glow orbs */}
          <div className="absolute top-1/3 left-[15%] w-[400px] h-[300px] bg-[rgba(212,168,83,0.05)] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-[15%] w-[350px] h-[250px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Team"
              title="The People Behind"
              titleHighlight="Your Success"
              description="Every great project starts with a great team. Here's the crew that turns your vision into production-ready digital infrastructure."
              align="center"
            />

            {/* Large team collaboration image */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden chrome-image-frame">
                <Image src="/images/team-collaboration.png" alt="The Carter Digitals team collaborating on digital projects" fill className="object-cover object-center" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,11,0.2)] to-transparent" />
              </div>
            </div>

            {/* Stats below the image */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto" staggerDelay={0.1}>
              {teamStatColors.map((color, idx) => {
                const items = [
                  { icon: Users, value: "15+", label: "Team Members" },
                  { icon: Clock, value: "5+", label: "Years Combined Experience" },
                  { icon: Sparkles, value: "100%", label: "Passion" },
                ];
                const item = items[idx];
                return (
                  <StaggerItem key={item.label}>
                    <div className="text-center p-6 rounded-2xl bg-card border border-border card-hover-gold card-shine-sweep">
                      <item.icon className="w-8 h-8 mx-auto mb-3" style={{ color: color.iconColor }} />
                      <p className="text-3xl font-bold text-gradient-gold font-display mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* ────────────────── 4. FOUNDER SECTION ──────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div className="gold-glow-line mx-auto max-w-xs rounded-full" /></div>
      <section className="relative py-20 md:py-28 bg-background section-gold-tint grain-texture">
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />

        {/* Multi-color ambient orbs: emerald (left), purple (right), sapphire (center) */}
        <div className="absolute top-[30%] left-[-3%] w-[300px] h-[300px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-3%] w-[280px] h-[280px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[rgba(30,58,95,0.03)] rounded-full blur-[110px] pointer-events-none" />

        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,168,83,0.03)] via-[rgba(212,168,83,0.01)] to-transparent pointer-events-none" />
        {/* Gold glow orbs */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-[rgba(212,168,83,0.05)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[250px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image/visual column */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative">
                <div className="relative rounded-3xl bg-gradient-to-br from-[#131316] via-[rgba(212,168,83,0.03)] to-[#131316] border-2 border-[rgba(212,168,83,0.2)] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:max-w-none glass-gold glow-gold">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,168,83,0.05)] via-transparent to-transparent" />

                  {/* Founder visual representation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Initials avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[rgba(212,168,83,0.2)] to-[rgba(212,168,83,0.05)] border-2 border-[rgba(212,168,83,0.25)] flex items-center justify-center">
                        <span
                          className="text-4xl font-bold text-gradient-hero font-display"
                        >
                          KK
                        </span>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border-2 border-[rgba(212,168,83,0.3)] flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-[#D4A853]" />
                      </div>
                    </div>

                    <h3
                      className="text-2xl font-bold text-foreground text-center font-display"
                    >
                      Kabelo Kadiaka
                    </h3>
                    <p className="text-sm text-[#D4A853] text-center mt-1">
                      Founder & Director
                    </p>

                    <Separator className="bg-[rgba(212,168,83,0.15)] my-6 w-2/3" />

                    {/* Tech icons grid */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-[240px]">
                      {[
                        { icon: Globe, label: "Next.js" },
                        { icon: Code, label: "React" },
                        { icon: Database, label: "PostgreSQL" },
                        { icon: Cloud, label: "GCP" },
                        { icon: Cpu, label: "AI/ML" },
                        { icon: Rocket, label: "Vercel" },
                      ].map((tech) => (
                        <div
                          key={tech.label}
                          className="flex flex-col items-center gap-1.5 py-2"
                        >
                          <tech.icon className="w-5 h-5 text-muted-foreground/60" />
                          <span className="text-[10px] text-muted-foreground/50">
                            {tech.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-[rgba(212,168,83,0.12)] to-[rgba(212,168,83,0.03)] border border-[rgba(212,168,83,0.12)]"
                  animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </AnimatedSection>

            {/* Content column */}
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(212,168,83,0.1)] text-[#D4A853] border border-[rgba(212,168,83,0.2)] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                  Leadership
                </span>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3 font-display text-shadow-section"
                >
                  Meet <span className="text-gradient-hero">Kabelo Kadiaka</span>
                </h2>
                <p className="text-base text-[#D4A853] font-medium mb-6">
                  Founder & Director, Carter Digitals (Pty) Ltd
                </p>

                {/* Badge strip */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "B-BBEE Level 1",
                    "135% Procurement",
                    "5-7 Day Delivery",
                    "Founded 2023",
                  ].map((badge) => (
                    <Badge
                      key={badge}
                      className="bg-[rgba(212,168,83,0.08)] text-[#D4A853] border border-[rgba(212,168,83,0.15)] font-medium text-xs px-3 py-1"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-4 text-foreground/60 leading-[1.8] mb-8">
                  <p>
                    Kabelo Kadiaka is the founder and director of Carter Digitals
                    — a digital services studio rooted in Pretoria&apos;s
                    Soshanguve and built to serve South Africa&apos;s
                    forward-thinking institutions. With deep expertise spanning
                    full-stack web development, enterprise cloud architecture on
                    GCP, and AI-augmented systems engineering, Kabelo delivers
                    enterprise-grade output at startup speed.
                  </p>
                  <p>
                    Carter Digitals is named in tribute to a close friend who
                    passed away in April 2021. The company exists as a living
                    monument to that friendship — and every project delivered,
                    every client served, and every line of code written honours
                    that bond.
                  </p>
                  <p>
                    With hands-on experience in Next.js, React, Python/FastAPI,
                    PostgreSQL, and Vertex AI, Kabelo doesn&apos;t just follow
                    trends — he architects solutions that are built to scale,
                    built to last, and built to deliver measurable business
                    outcomes.
                  </p>
                  <p>
                    His approach is simple: capability over credentials, outcomes
                    over promises, and speed without sacrificing quality.
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="mb-8">
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-semibold mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-foreground/60 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Capabilities Mini-Grid ── */}
                <div className="mb-8">
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-semibold mb-3">
                    Core Capabilities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {capabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="group relative rounded-xl bg-card border border-border p-4 card-shine-sweep hover:border-l-2 transition-colors duration-300 cursor-default"
                        style={{ '--hover-border-color': cap.color.hoverBorder } as React.CSSProperties}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0" style={{ backgroundColor: cap.color.iconBg, borderColor: cap.color.iconBorder }}>
                            <cap.icon className="w-4 h-4" style={{ color: cap.color.iconColor }} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-foreground font-display mb-0.5">{cap.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-muted/60 mb-6" />

                {/* Quote */}
                <div>
                  <p
                    className="text-lg md:text-xl font-semibold text-foreground/80 leading-relaxed mb-2 font-display"
                  >
                    &ldquo;AI-Augmented. Human-Driven. Built to Deliver.&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground/60 italic">
                    Capability over credentials. Outcomes over promises.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ──────────── 5a. COMPANY STATS BAR ───────────────────── */}
      <AnimatedSection direction="up">
        <section className="relative py-16 md:py-20 bg-background section-gold-tint">
          <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[120px] pointer-events-none" />

          {/* Multi-color ambient orbs: sapphire, emerald, coral (3 across) */}
          <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-[rgba(196,30,58,0.04)] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" staggerDelay={0.1}>
              {companyStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center">
                    <div
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2 font-display"
                    >
                      <AnimatedCounter
                        target={stat.numericValue}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground/50 font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* ──────────── 5b. COMPANY MILESTONES TIMELINE ─────────────── */}
      <AnimatedSection direction="up">
        <section className="relative py-20 md:py-28 bg-background section-gold-tint">
          <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[120px] pointer-events-none" />

          {/* Multi-color ambient orbs: gold, coral, purple */}
          <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[15%] right-[10%] w-[280px] h-[280px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-[50%] right-[20%] w-[220px] h-[220px] bg-[rgba(139,92,246,0.03)] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Journey"
              title="Building Milestone by"
              titleHighlight="Milestone"
              description="From a bold idea in Soshanguve to becoming a trusted digital partner for South Africa's institutions."
              align="center"
            />

            <div className="relative mt-12">
              {/* Vertical multi-color gradient line — centered on desktop, left on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-b from-[#D4A853] via-[#1E3A5F] via-[#10B981] via-[#C41E3A] to-[#8B5CF6]" />
              </div>
              <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px">
                <div className="w-full h-full bg-gradient-to-b from-[#D4A853] via-[#1E3A5F] via-[#10B981] via-[#C41E3A] to-[#8B5CF6]" />
              </div>

              <div className="space-y-12 md:space-y-16">
                {milestones.map((milestone, idx) => {
                  const isLeft = idx % 2 === 0;
                  const colors = milestoneBadgeColors[idx % milestoneBadgeColors.length];
                  return (
                    <StaggerContainer key={milestone.title + milestone.year} className="relative" staggerDelay={0.08}>
                      <div className={`flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        {/* Content card */}
                        <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                          <StaggerItem>
                            <div className="group rounded-2xl bg-card border border-border p-6 card-hover-gold card-shine-sweep transition-colors duration-300 hover-lift" style={{ '--hover-border-color': colors.hoverBorder } as React.CSSProperties}>
                              <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                                <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors duration-300" style={{ backgroundColor: colors.iconBg, borderColor: colors.iconBorder }}>
                                  <milestone.icon className="w-5 h-5" style={{ color: colors.iconColor }} />
                                </div>
                                <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wider font-display" style={{ backgroundColor: colors.bg, color: colors.text }}>
                                    {milestone.year}
                                  </span>
                                  <h3
                                    className="text-lg font-bold text-foreground font-display"
                                  >
                                    {milestone.title}
                                  </h3>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {milestone.description}
                              </p>
                            </div>
                          </StaggerItem>
                        </div>

                        {/* Center dot — desktop only with colored glow */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-background border-2 items-center justify-center z-10 shadow-lg transition-shadow duration-300" style={{ borderColor: colors.dotBorder, boxShadow: `0 10px 15px -3px ${colors.dotGlow}` }}>
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.dotBorder }} />
                        </div>

                        {/* Mobile dot */}
                        <div className="md:hidden absolute left-[5px] top-6 w-5 h-5 rounded-full border-2 border-background z-10 shadow-md" style={{ backgroundColor: colors.dotBorder, boxShadow: `0 4px 6px -1px ${colors.dotGlow}` }} />

                        {/* Spacer for alternating layout — desktop only */}
                        <div className="hidden md:block flex-1" />
                      </div>
                    </StaggerContainer>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ────────────────── 5c. MEET THE TEAM ──────────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint">
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />
        {/* Gold glow orbs behind the section */}
        <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-[rgba(212,168,83,0.05)] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR TEAM"
            title="The People"
            titleHighlight="Behind"
            description="A tight-knit crew of specialists — each hand-picked for their craft, their drive, and their commitment to building digital infrastructure that actually matters."
            align="center"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                name: "Kabelo Kadiaka",
                initials: "KK",
                role: "Founder & Director",
                description: "Full-stack developer and digital strategist with 5+ years of experience building production-grade web applications.",
                tech: ["Next.js", "React", "TypeScript", "Python"],
              },
              {
                name: "Thabo Molefe",
                initials: "TM",
                role: "Lead Designer",
                description: "UI/UX specialist focused on creating premium, conversion-optimised digital experiences that command trust.",
                tech: ["Figma", "Framer Motion", "Tailwind"],
              },
              {
                name: "Lerato Nkosi",
                initials: "LN",
                role: "AI Engineer",
                description: "Builds intelligent chatbots and automation systems that give businesses a decisive competitive edge.",
                tech: ["Python", "FastAPI", "LangChain", "OpenAI"],
              },
              {
                name: "Sipho Dlamini",
                initials: "SD",
                role: "Backend Architect",
                description: "Designs robust, scalable backend systems and API architectures for mission-critical applications.",
                tech: ["PostgreSQL", "Node.js", "Docker", "AWS"],
              },
            ].map((member) => (
              <StaggerItem key={member.name}>
                <div className="group relative h-full rounded-2xl bg-card border border-border p-6 card-hover-gold card-shine-sweep hover-lift card-idle-pulse overflow-hidden">
                  {/* Gold top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent opacity-60" />

                  {/* Gradient gold initials avatar */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A853] to-[#B8922F] flex items-center justify-center shadow-lg shadow-[rgba(212,168,83,0.25)] group-hover:shadow-[rgba(212,168,83,0.4)] transition-shadow duration-300">
                      <span className="text-xl font-bold text-[#0A0A0B] font-display">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-foreground text-center font-display mb-1">
                    {member.name}
                  </h3>

                  {/* Role in gold italic */}
                  <p className="text-sm text-[#D4A853] italic font-medium text-center mb-3">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-center mb-4">
                    {member.description}
                  </p>

                  {/* Tech stack pill badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {member.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium text-[#D4A853] bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.15)] backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ────────────────── 5. CREDENTIALS SECTION ──────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint">
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.02)] rounded-full blur-[120px] pointer-events-none" />

        {/* Multi-color ambient orbs: emerald, sapphire */}
        <div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] bg-[rgba(16,185,129,0.03)] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[280px] h-[280px] bg-[rgba(30,58,95,0.03)] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Company Details"
            title="Verified &"
            titleHighlight="Credentialled"
            description="Every registration verified. Every compliance standard met. Full transparency — no fine print."
            align="center"
          />

          <AnimatedSection direction="up" delay={0.15}>
            <div className="relative max-w-3xl mx-auto">
              {/* Credentials card */}
              <div className="rounded-3xl bg-card border border-[rgba(212,168,83,0.15)] overflow-hidden glow-gold card-shine-sweep">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: "rgba(19,19,22,0.7)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }} />
                <div className="absolute inset-0 bg-dots opacity-20 rounded-3xl" />

                <div className="relative z-10 p-6 md:p-10">
                  {/* Header with shield icon */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[rgba(212,168,83,0.12)]">
                    <div className="w-14 h-14 rounded-2xl bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.15)] flex items-center justify-center">
                      <FileCheck className="w-7 h-7 text-[#D4A853]" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground font-display"
                      >
                        Company Credentials
                      </h3>
                      <p className="text-sm text-muted-foreground/60">
                        Carter Digitals (Pty) Ltd — Official Records
                      </p>
                    </div>
                  </div>

                  {/* Key-value list */}
                  <div className="space-y-0">
                    {credentials.map((item, idx) => (
                      <div key={item.label}>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-4">
                          <div className="flex items-start gap-3 sm:w-[200px] shrink-0">
                            <CheckCircle className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-sm text-foreground font-medium leading-relaxed">
                            {item.value}
                          </span>
                        </div>
                        {idx < credentials.length - 1 && (
                          <div className="h-px bg-gradient-to-r from-[rgba(212,168,83,0.08)] via-[rgba(212,168,83,0.12)] to-[rgba(212,168,83,0.08)]" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Location badge */}
                  <div className="mt-8 pt-6 border-t border-[rgba(212,168,83,0.12)]">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#D4A853]" />
                      <div>
                        <p className="text-sm text-foreground font-medium">
                          Soshanguve, Pretoria, Gauteng
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          Serving clients across South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────── TRUSTED BY / CLIENT LOGOS ──────────────── */}
      <AnimatedSection direction="up">
        <div className="py-16 md:py-20 relative">
          {/* Multi-color ambient orbs: coral, purple, gold */}
          <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[15%] w-[280px] h-[280px] bg-[rgba(139,92,246,0.03)] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[70px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(212,168,83,0.1)] text-[#D4A853] border border-[rgba(212,168,83,0.2)]">
                Trusted Across Sectors
              </span>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-foreground font-display text-shadow-section">
                Institutions That <span className="text-gradient-hero">Believe In Us</span>
              </h2>
            </div>

            {/* Logo grid - styled text logos since we don't have actual images */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.05}>
              {trustLogos.map((logo) => (
                <StaggerItem key={logo.name}>
                  <div className="group flex flex-col items-center justify-center p-6 rounded-2xl glass-gold hover:border-[rgba(212,168,83,0.2)] transition-all duration-300 hover-lift card-shine-sweep">
                    <logo.icon className="w-8 h-8 text-[rgba(245,245,245,0.2)] group-hover:text-[rgba(212,168,83,0.5)] transition-colors duration-300 mb-3" />
                    <span className="text-xs font-semibold text-[rgba(245,245,245,0.3)] group-hover:text-foreground/60 transition-colors text-center leading-tight">{logo.name}</span>
                    <span className="text-[10px] text-[rgba(245,245,245,0.15)] mt-1">{logo.sector}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </AnimatedSection>

      <div className="h-px section-divider-rainbow" />

      {/* ────────────── 6. ENGAGEMENT MODELS SECTION ────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint">
        <div className="absolute top-0 left-0 right-0 h-px section-divider-rainbow" />

        {/* Multi-color ambient orbs: sapphire, emerald, coral */}
        <div className="absolute top-[10%] right-[15%] w-[280px] h-[280px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[80px] pointer-events-none" />

        {/* Gold glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How We Work Together"
            title="Engagement Models"
            titleHighlight="for Every Reality"
            description="Whether you need a single project, ongoing support, or a full-scale digital transformation — we have a model that fits."
            align="center"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            staggerDelay={0.12}
          >
            {engagementModels.map((model, idx) => (
              <StaggerItem key={model.title}>
                <div className="group relative h-full rounded-2xl bg-card border border-border p-6 md:p-8 card-hover-gold card-shine-sweep hover-lift overflow-hidden flex flex-col card-idle-pulse">
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Gold number badge */}
                  <span className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(212,168,83,0.15)] to-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.2)] flex items-center justify-center text-sm font-bold text-[#D4A853] font-display select-none shadow-sm shadow-[rgba(212,168,83,0.1)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(212,168,83,0.15)] to-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.12)] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[rgba(212,168,83,0.1)] transition-shadow duration-300">
                    <model.icon className="w-7 h-7 text-[#D4A853]" />
                  </div>

                  <h3
                    className="text-xl font-bold text-foreground mb-3 font-display"
                  >
                    {model.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {model.description}
                  </p>

                  {/* Best for tag */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground/60 leading-relaxed">
                        <span className="font-semibold text-foreground/60">
                          Best for:
                        </span>{" "}
                        {model.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Button
                onClick={() => handleNavClick("contact")}
                size="lg"
                className="bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-[rgba(212,168,83,0.25)] hover:shadow-[rgba(212,168,83,0.35)] transition-all duration-300 group"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
