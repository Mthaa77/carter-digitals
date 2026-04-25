"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Send,
  ArrowRight,
  Sparkles,
  Heart,
  User,
  Building,
  Briefcase,
  Search,
  Rocket,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import TiltCard from "@/components/shared/TiltCard";
import CosmicDecorations from "@/components/shared/CosmicDecorations";

/* ──────────────────────── contact methods ──────────────────────── */
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "kabelokadiaka4@gmail.com",
    href: "mailto:kabelokadiaka4@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "072 402 6893",
    href: "tel:+27724026893",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/27724026893",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "1457 Block L, Soshanguve, Pretoria, Gauteng",
    href: null,
  },
];

/* ──────────────────────── service options ──────────────────────── */
const serviceOptions = [
  "Website Development",
  "Web Application",
  "Brand Identity",
  "AI Solutions",
  "Internal Tools",
  "Other",
];

/* ──────────────────────── budget options ───────────────────────── */
const budgetOptions = [
  "Under R5,000",
  "R5,000-R10,000",
  "R10,000-R20,000",
  "R20,000-R50,000",
  "R50,000+",
];

/* ──────────────────────── trust badges ─────────────────────────── */
const trustBadges = [
  { label: "B-BBEE Level 1", icon: Shield },
  { label: "100% Black-Owned", icon: CheckCircle },
  { label: "POPIA Compliant", icon: Shield },
  { label: "CSD Registered", icon: CheckCircle },
  { label: "CIPC: 2025/907839/07", icon: CheckCircle },
];

/* ──────────────────────── location info cards ──────────────────── */
const locationCards = [
  {
    icon: MapPin,
    title: "Physical Address",
    lines: ["1457 Block L, Soshanguve", "Pretoria, Gauteng, South Africa"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["kabelokadiaka4@gmail.com", "We reply within 2 hours"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["072 402 6893", "Mon–Fri, 08:00–18:00"],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: ["Mon–Fri: 08:00–18:00", "Sat: 09:00–14:00"],
  },
];

/* ──────────── "What Happens Next" step data ────────────────────── */
const nextSteps = [
  {
    step: 1,
    title: "We Review",
    description: "Our team reviews your enquiry and prepares a tailored response.",
    time: "Within 2 hours",
    icon: Search,
    accent: "#1E3A5F",
    accentBg: "rgba(30,58,95,0.12)",
    accentBorder: "rgba(30,58,95,0.25)",
    accentGlow: "rgba(30,58,95,0.15)",
    iconColor: "#5B8DB8",
  },
  {
    step: 2,
    title: "We Respond",
    description: "You receive a detailed response with initial recommendations.",
    time: "Same business day",
    icon: MessageCircle,
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.12)",
    accentBorder: "rgba(16,185,129,0.25)",
    accentGlow: "rgba(16,185,129,0.15)",
    iconColor: "#34D399",
  },
  {
    step: 3,
    title: "Discovery Call",
    description: "A free 30-minute consultation to understand your vision deeply.",
    time: "30-min free consultation",
    icon: Phone,
    accent: "#C41E3A",
    accentBg: "rgba(196,30,58,0.12)",
    accentBorder: "rgba(196,30,58,0.25)",
    accentGlow: "rgba(196,30,58,0.15)",
    iconColor: "#F06A83",
  },
  {
    step: 4,
    title: "Project Kickoff",
    description: "Design begins within 24 hours of agreement — fast and focused.",
    time: "Design in 24 hours",
    icon: Rocket,
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.12)",
    accentBorder: "rgba(139,92,246,0.25)",
    accentGlow: "rgba(139,92,246,0.15)",
    iconColor: "#A78BFA",
  },
];

/* ──────── Trust badge color map (by index) ─────────────────────── */
const trustBadgeColors = [
  { bg: "rgba(212,168,83,0.08)", border: "rgba(212,168,83,0.18)", text: "#D4A853", hoverBorder: "rgba(212,168,83,0.3)", glow: "rgba(212,168,83,0.08)" },
  { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.18)", text: "#10B981", hoverBorder: "rgba(16,185,129,0.3)", glow: "rgba(16,185,129,0.08)" },
  { bg: "rgba(30,58,95,0.08)", border: "rgba(30,58,95,0.18)", text: "#5B8DB8", hoverBorder: "rgba(30,58,95,0.3)", glow: "rgba(30,58,95,0.08)" },
  { bg: "rgba(196,30,58,0.08)", border: "rgba(196,30,58,0.18)", text: "#F06A83", hoverBorder: "rgba(196,30,58,0.3)", glow: "rgba(196,30,58,0.08)" },
  { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.18)", text: "#A78BFA", hoverBorder: "rgba(139,92,246,0.3)", glow: "rgba(139,92,246,0.08)" },
];

/* ──── Contact method card color map (by index) ────────────────── */
const contactMethodColors = [
  { bg: "rgba(30,58,95,0.1)", border: "rgba(30,58,95,0.15)", hoverBg: "rgba(30,58,95,0.18)", glow: "rgba(30,58,95,0.2)", icon: "#5B8DB8", hoverIcon: "#7EB5E0", leftBorder: "#1E3A5F" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.15)", hoverBg: "rgba(16,185,129,0.18)", glow: "rgba(16,185,129,0.2)", icon: "#10B981", hoverIcon: "#34D399", leftBorder: "#10B981" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.15)", hoverBg: "rgba(16,185,129,0.18)", glow: "rgba(16,185,129,0.2)", icon: "#10B981", hoverIcon: "#34D399", leftBorder: "#10B981" },
  { bg: "rgba(196,30,58,0.1)", border: "rgba(196,30,58,0.15)", hoverBg: "rgba(196,30,58,0.18)", glow: "rgba(196,30,58,0.2)", icon: "#F06A83", hoverIcon: "#F89BAA", leftBorder: "#C41E3A" },
];

/* ═══════════════════════════════════════════════════════════════════════
   CONTACT PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "whatsapp">("email");

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const filledFields = useMemo(() => {
    const fields = [formData.name, formData.email, formData.phone, formData.company, formData.service, formData.budget, formData.message];
    return fields.filter(Boolean).length;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, preferredContact }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 2 business hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setPreferredContact("email");
      } else {
        toast.error("Submission failed", {
          description: "Please check your inputs and try again.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Could not reach the server. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative overflow-hidden">
      {/* ───────────────────── 1. PAGE HERO ───────────────────── */}
      <section className="relative py-28 md:py-40 bg-background">
        {/* Aurora mesh background */}
        <div className="absolute inset-0 bg-aurora-mesh opacity-[0.4] pointer-events-none" />

        {/* Background */}
        <div className="absolute inset-0 bg-grid pattern-grid-animated" />

        {/* Multi-color animated gradient orbs */}
        <ParallaxSection speed={0.15} direction="up" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.06)] rounded-full blur-[120px]" />
          <div className="absolute top-[60%] right-[18%] w-[250px] h-[250px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[80px]" />
          {/* Sapphire orb */}
          <div className="absolute top-[20%] left-[8%] w-[300px] h-[300px] bg-[rgba(30,58,95,0.05)] rounded-full blur-[100px]" />
          {/* Coral orb */}
          <div className="absolute top-[15%] right-[10%] w-[200px] h-[200px] bg-[rgba(196,30,58,0.04)] rounded-full blur-[80px]" />
          {/* Emerald orb */}
          <div className="absolute bottom-[25%] left-[15%] w-[220px] h-[220px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[90px]" />
          {/* Purple orb */}
          <div className="absolute bottom-[20%] right-[15%] w-[280px] h-[280px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[100px]" />
        </ParallaxSection>

        {/* Small floating geometric shapes — speed 0.08 */}
        <ParallaxSection speed={0.08} direction="up" className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 45 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[22%] left-[10%] w-8 h-8 rounded-lg border border-[rgba(30,58,95,0.15)] bg-[rgba(30,58,95,0.03)]"
          />
          <motion.div
            animate={{ rotate: -30 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[18%] right-[12%] w-6 h-6 rounded-full border border-[rgba(196,30,58,0.12)] bg-[rgba(196,30,58,0.02)]"
          />
          <motion.div
            animate={{ rotate: 60 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[28%] left-[20%] w-10 h-10 rounded-sm border border-[rgba(16,185,129,0.1)] bg-[rgba(16,185,129,0.02)]"
          />
          <motion.div
            animate={{ rotate: -45 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[22%] right-[10%] w-5 h-5 rounded border border-[rgba(139,92,246,0.15)] bg-[rgba(139,92,246,0.03)]"
          />
        </ParallaxSection>

        {/* Grid/dot pattern overlay — speed 0.05 */}
        <ParallaxSection speed={0.05} direction="up" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-dots opacity-20" />
        </ParallaxSection>

        {/* Multi-color radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,rgba(30,58,95,0.03)_30%,rgba(139,92,246,0.02)_50%,transparent_70%)] rounded-full blur-[60px] pointer-events-none" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,58,95,0.03)] via-transparent to-[rgba(139,92,246,0.02)]" />

        {/* Content with subtle parallax — speed 0.03 */}
        <ParallaxSection speed={0.03} direction="up">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.15)] mb-8 label-badge">
                <MessageCircle className="w-4 h-4 text-[#D4A853]" />
                <span className="text-sm font-medium text-[#D4A853]">
                  Get in Touch
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight font-display text-shadow-hero">
                <span className="text-gradient-hero">Let&apos;s Talk</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.35} direction="up">
              <p className="mt-4 text-xl md:text-2xl text-[rgba(245,245,245,0.65)] font-medium font-display text-shadow-premium">
                Ready When You Are
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="up">
              <p className="mt-6 text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Book a free 30-minute discovery call with no pressure and no obligation. 
                We&apos;ll learn about your vision, answer your questions, and outline a 
                clear path forward — whether you work with us or not.
              </p>
            </AnimatedSection>
          </div>
        </ParallaxSection>

        {/* Gold gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0B] via-[rgba(10,10,11,0.6)] to-transparent pointer-events-none" />
      </section>

      <div className="section-divider-rainbow" />

      {/* ────────────────── 2. CONTACT GRID ─────────────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint grain-texture">
        <CosmicDecorations variant="constellation" intensity="subtle" />
        {/* Multi-color glow orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[100px] pointer-events-none" />
        {/* Sapphire orb left */}
        <div className="absolute top-1/4 left-[5%] w-[250px] h-[250px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[100px] pointer-events-none" />
        {/* Purple orb right */}
        <div className="absolute bottom-1/4 right-[5%] w-[250px] h-[250px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left column - Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1} direction="left">
                {/* Multi-color ambient orbs behind form */}
                <div className="absolute -inset-4 pointer-events-none hidden lg:block">
                  <div className="absolute top-0 left-0 w-[200px] h-[300px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[80px]" />
                  <div className="absolute bottom-0 right-0 w-[200px] h-[300px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[80px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gold-gradient-radial opacity-40" />
                </div>
                {/* Gold-border-animated wrapper */}
                <div className="gold-border-animated rounded-2xl">
                  <div className="relative rounded-2xl glass-gold border-l-[3px] border-l-[#D4A853] p-6 md:p-8 shadow-[0_0_40px_rgba(212,168,83,0.08)] card-shine-sweep">
                    {/* Heading */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[rgba(212,168,83,0.2)] to-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.15)] flex items-center justify-center">
                        <Send className="w-5 h-5 text-[#D4A853]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display text-shadow-section">
                        Send Us a Message
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Fill out the form below and we&apos;ll get back to you within 2 business hours.
                    </p>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-3 mb-6 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex-1 h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#1E3A5F] via-[#10B981] to-[#D4A853]"
                          initial={{ width: 0 }}
                          animate={{ width: `${(filledFields / 7) * 100}%` }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {filledFields}/7 complete
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Email row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Name — Sapphire focus */}
                        <div className="space-y-2 group">
                          <Label htmlFor="name" className="text-sm font-medium text-[rgba(245,245,245,0.7)] transition-all duration-200">
                            Full Name <span className="text-[#5B8DB8]">*</span>
                          </Label>
                          <div className="relative focus-within:ring-1 focus-within:ring-[rgba(30,58,95,0.3)] rounded-xl transition-all duration-200">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none group-focus-within:text-[#5B8DB8] transition-colors duration-200" />
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              placeholder="Your full name"
                              className="pl-10 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground placeholder:text-[rgba(245,245,245,0.25)] rounded-xl h-11 input-gold focus-visible:ring-[rgba(30,58,95,0.3)]"
                            />
                          </div>
                        </div>
                        {/* Email — Emerald focus */}
                        <div className="space-y-2 group">
                          <Label htmlFor="email" className="text-sm font-medium text-[rgba(245,245,245,0.7)] transition-all duration-200">
                            Email Address <span className="text-[#10B981]">*</span>
                          </Label>
                          <div className="relative focus-within:ring-1 focus-within:ring-[rgba(16,185,129,0.3)] rounded-xl transition-all duration-200">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none group-focus-within:text-[#10B981] transition-colors duration-200" />
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              placeholder="you@company.co.za"
                              className="pl-10 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground placeholder:text-[rgba(245,245,245,0.25)] rounded-xl h-11 input-gold focus-visible:ring-[rgba(16,185,129,0.3)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone & Company row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div className="space-y-2 group">
                          <Label htmlFor="phone" className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                            Phone Number
                          </Label>
                          <div className="relative focus-within:ring-1 focus-within:ring-[rgba(16,185,129,0.3)] rounded-xl transition-all duration-200">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none group-focus-within:text-[#10B981] transition-colors duration-200" />
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                              placeholder="072 402 6893"
                              className="pl-10 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground placeholder:text-[rgba(245,245,245,0.25)] rounded-xl h-11 input-gold focus-visible:ring-[rgba(16,185,129,0.3)]"
                            />
                          </div>
                        </div>
                        {/* Company — Purple focus */}
                        <div className="space-y-2 group">
                          <Label htmlFor="company" className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                            Company / Organisation
                          </Label>
                          <div className="relative focus-within:ring-1 focus-within:ring-[rgba(139,92,246,0.3)] rounded-xl transition-all duration-200">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none group-focus-within:text-[#8B5CF6] transition-colors duration-200" />
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleChange("company", e.target.value)}
                              placeholder="Your company name"
                              className="pl-10 bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground placeholder:text-[rgba(245,245,245,0.25)] rounded-xl h-11 input-gold focus-visible:ring-[rgba(139,92,246,0.3)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service & Budget row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Service — Coral focus */}
                        <div className="space-y-2 group">
                          <Label className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                            Service Interest
                          </Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleChange("service", value)}
                          >
                            <SelectTrigger className="bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground rounded-xl h-11 input-gold focus:ring-[rgba(196,30,58,0.3)]">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1A1A1F] border-[rgba(255,255,255,0.08)]">
                              {serviceOptions.map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option}
                                  className="text-[rgba(245,245,245,0.7)] focus:bg-[rgba(196,30,58,0.1)] focus:text-foreground"
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {/* Budget */}
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                            Budget Range
                          </Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => handleChange("budget", value)}
                          >
                            <SelectTrigger className="bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground rounded-xl h-11 input-gold">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1A1A1F] border-[rgba(255,255,255,0.08)]">
                              {budgetOptions.map((option) => (
                                <SelectItem
                                  key={option}
                                  value={option}
                                  className="text-[rgba(245,245,245,0.7)] focus:bg-[rgba(212,168,83,0.1)] focus:text-foreground"
                                >
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Message — Gold focus */}
                      <div className="space-y-2 group">
                        <Label htmlFor="message" className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                          Your Message <span className="text-[#D4A853]">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={5}
                          className="bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-foreground placeholder:text-[rgba(245,245,245,0.25)] rounded-xl resize-none input-gold focus-visible:ring-[rgba(212,168,83,0.3)]"
                        />
                      </div>

                      {/* Preferred Contact Method toggle */}
                      <div className="space-y-2.5">
                        <Label className="text-sm font-medium text-[rgba(245,245,245,0.7)]">
                          Preferred Contact Method
                        </Label>
                        <div className="flex gap-2">
                          {[
                            { key: "email" as const, label: "Email", icon: Mail, color: "#5B8DB8", activeBg: "rgba(30,58,95,0.15)", activeBorder: "rgba(30,58,95,0.3)" },
                            { key: "phone" as const, label: "Phone", icon: Phone, color: "#10B981", activeBg: "rgba(16,185,129,0.15)", activeBorder: "rgba(16,185,129,0.3)" },
                            { key: "whatsapp" as const, label: "WhatsApp", icon: MessageCircle, color: "#25D366", activeBg: "rgba(37,211,102,0.15)", activeBorder: "rgba(37,211,102,0.3)" },
                          ].map((method) => (
                            <button
                              key={method.key}
                              type="button"
                              onClick={() => setPreferredContact(method.key)}
                              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                                preferredContact === method.key
                                  ? "border shadow-lg"
                                  : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-muted-foreground hover:border-[rgba(255,255,255,0.15)]"
                              }`}
                              style={preferredContact === method.key ? {
                                backgroundColor: method.activeBg,
                                borderColor: method.activeBorder,
                                color: method.color,
                                boxShadow: `0 0 20px ${method.activeBorder}`,
                              } : undefined}
                            >
                              <method.icon className="w-4 h-4" />
                              {method.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit button - enhanced with glow */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853] hover:from-[#E8C97A] hover:via-[#D4A853] hover:to-[#B8922F] text-[#0A0A0B] font-semibold py-5 text-base rounded-xl shadow-[0_0_30px_rgba(212,168,83,0.3),0_0_60px_rgba(212,168,83,0.1)] hover:shadow-[0_0_40px_rgba(212,168,83,0.45),0_0_80px_rgba(212,168,83,0.15)] transition-all duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Send className="w-5 h-5" />
                            </motion.div>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - Contact Info (2 cols) */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} direction="right">
                <div className="space-y-6">
                  {/* Get in Touch heading */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display text-shadow-section">
                      Get in Touch
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Reach out directly through any of these channels.
                    </p>
                  </div>

                  {/* Contact method cards - color-coded */}
                  <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                    {contactMethods.map((method, index) => {
                      const colors = contactMethodColors[index];
                      return (
                        <StaggerItem key={method.label}>
                          {method.href ? (
                            <a
                              href={method.href}
                              target={method.href.startsWith("http") ? "_blank" : undefined}
                              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              <div
                                className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover-gold cursor-pointer card-idle-pulse card-shine-sweep hover:border-l-2 transition-all duration-300"
                                style={{
                                  transitionDelay: `${index * 50}ms`,
                                  ["--hover-border-color" as string]: colors.leftBorder,
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = colors.leftBorder;
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                                }}
                              >
                                <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300"
                                  style={{
                                    backgroundColor: colors.bg,
                                    border: `1px solid ${colors.border}`,
                                  }}
                                >
                                  <method.icon className="w-5 h-5 transition-colors duration-300" style={{ color: colors.icon }} />
                                  {/* Pulsing indicator for Phone card */}
                                  {method.label === "Phone" && (
                                    <>
                                      <motion.div
                                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute w-2.5 h-2.5 rounded-full bg-[#10B981]"
                                        style={{ top: "-2px", right: "-2px" }}
                                      />
                                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#10B981]" style={{ top: "-2px", right: "-2px" }} />
                                    </>
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-medium text-muted-foreground/60 mb-0.5">
                                    {method.label}
                                  </p>
                                  <p className="text-sm font-medium text-foreground transition-colors duration-200 break-all"
                                    style={{ ["--hover-text-color" as string]: colors.hoverIcon }}
                                  >
                                    {method.value}
                                  </p>
                                  {/* Available Now badge for Phone */}
                                  {method.label === "Phone" && (
                                    <p className="text-xs mt-1 flex items-center gap-1.5">
                                      <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                                      </span>
                                      <span className="text-[#10B981]">Available Now</span>
                                    </p>
                                  )}
                                </div>
                                <ArrowRight className="w-4 h-4 text-[rgba(245,245,245,0.2)] shrink-0 mt-1 ml-auto transition-all duration-300" style={{ ["--hover-arrow-color" as string]: colors.icon }} />
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-idle-pulse card-shine-sweep">
                              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                                style={{
                                  backgroundColor: colors.bg,
                                  border: `1px solid ${colors.border}`,
                                }}
                              >
                                <method.icon className="w-5 h-5" style={{ color: colors.icon }} />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-medium text-muted-foreground/60 mb-0.5">
                                  {method.label}
                                </p>
                                <p className="text-sm font-medium text-foreground break-all">
                                  {method.value}
                                </p>
                              </div>
                            </div>
                          )}
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>

                  {/* Business hours card - Purple accent */}
                  <AnimatedSection delay={0.4} direction="right">
                    <div className="rounded-xl glass-gold p-5 shadow-[0_0_20px_rgba(139,92,246,0.06)] card-shine-sweep">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.15)] flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#A78BFA]" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground font-display">
                          Business Hours
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Monday – Friday</span>
                          <span className="text-foreground font-medium">08:00 – 18:00</span>
                        </div>
                        <Separator className="bg-[rgba(255,255,255,0.06)]" />
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground font-medium">09:00 – 14:00</span>
                        </div>
                        <Separator className="bg-[rgba(255,255,255,0.06)]" />
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="text-muted-foreground/40 font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Social Media Links */}
                  <AnimatedSection delay={0.5} direction="right">
                    <div className="rounded-xl glass-gold p-5 shadow-[0_0_20px_rgba(212,168,83,0.04)] card-shine-sweep">
                      <h3 className="text-base font-semibold text-foreground mb-4 font-display">
                        Connect With Us
                      </h3>
                      <div className="flex gap-3">
                        {[
                          { name: "LinkedIn", href: "https://linkedin.com/company/carterdigitals", color: "#5B8DB8", hoverGlow: "rgba(30,58,95,0.2)", icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          )},
                          { name: "Instagram", href: "https://instagram.com/carterdigitals", color: "#C41E3A", hoverGlow: "rgba(196,30,58,0.2)", icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                          )},
                          { name: "X / Twitter", href: "https://x.com/carterdigitals", color: "#10B981", hoverGlow: "rgba(16,185,129,0.2)", icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                          )},
                          { name: "WhatsApp", href: "https://wa.me/27724026893", color: "#25D366", hoverGlow: "rgba(37,211,102,0.2)", icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          )},
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] flex items-center justify-center transition-all duration-300 hover:border-[rgba(255,255,255,0.2)]"
                            style={{ color: "rgba(245,245,245,0.5)" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.color = social.color;
                              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${social.hoverGlow}`;
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = social.color;
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${social.hoverGlow}`;
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,245,245,0.5)";
                              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                            }}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-rainbow" />

      {/* ───────────────── 3. MAP / LOCATION SECTION ─────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint grain-texture">
        {/* Multi-color ambient orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[10%] right-[8%] w-[250px] h-[250px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Location"
            title="Find Us in"
            titleHighlight="Soshanguve"
            description="Based in Pretoria, serving clients nationwide across South Africa."
            align="center"
          />

          <AnimatedSection delay={0.2} direction="up">
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              {/* Stylized Map Area - spans 3 cols */}
              <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-[440px] border border-[rgba(212,168,83,0.12)] shadow-[0_0_40px_rgba(212,168,83,0.06)] card-shine-sweep">
                {/* Dark base */}
                <div className="absolute inset-0 bg-background" />
                {/* Grid pattern background */}
                <div className="absolute inset-0 bg-grid" />
                {/* Multi-color gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,58,95,0.06)] via-[rgba(10,10,11,0.95)] to-[rgba(139,92,246,0.04)]" />
                {/* Dot pattern */}
                <div className="absolute inset-0 bg-dots opacity-30" />

                {/* Decorative grid lines - roads */}
                <div className="absolute inset-0 opacity-[0.05]">
                  {/* Vertical roads */}
                  <div className="absolute left-[15%] top-0 bottom-0 w-[2px] bg-white" />
                  <div className="absolute left-[35%] top-0 bottom-0 w-[2px] bg-white" />
                  <div className="absolute left-[50%] top-0 bottom-0 w-[3px] bg-[#D4A853] opacity-80" />
                  <div className="absolute left-[65%] top-0 bottom-0 w-[2px] bg-white" />
                  <div className="absolute left-[85%] top-0 bottom-0 w-[2px] bg-white" />
                  {/* Horizontal roads */}
                  <div className="absolute top-[15%] left-0 right-0 h-[2px] bg-white" />
                  <div className="absolute top-[35%] left-0 right-0 h-[2px] bg-white" />
                  <div className="absolute top-[55%] left-0 right-0 h-[3px] bg-[#D4A853] opacity-80" />
                  <div className="absolute top-[75%] left-0 right-0 h-[2px] bg-white" />
                  <div className="absolute top-[90%] left-0 right-0 h-[2px] bg-white" />
                  {/* Diagonal road */}
                  <div className="absolute top-[20%] left-[10%] w-[60%] h-[2px] bg-white rotate-[25deg] origin-left" />
                  {/* Block shapes */}
                  <div className="absolute top-[18%] left-[18%] w-[14%] h-[14%] border border-white/40 rounded-sm" />
                  <div className="absolute top-[40%] left-[55%] w-[8%] h-[12%] border border-white/30 rounded-sm" />
                  <div className="absolute top-[60%] left-[20%] w-[12%] h-[10%] border border-white/30 rounded-sm" />
                  <div className="absolute top-[25%] left-[68%] w-[10%] h-[16%] border border-white/25 rounded-sm" />
                </div>

                {/* Colored road lines */}
                <div className="absolute inset-0 opacity-[0.06]">
                  <div className="absolute top-[55%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
                  <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-gradient-to-b from-transparent via-[#D4A853] to-transparent" />
                  <div className="absolute top-[35%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E3A5F] to-transparent" />
                  <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-gradient-to-b from-transparent via-[#C41E3A] to-transparent" />
                </div>

                {/* Colored location pins */}
                <div className="absolute top-[25%] left-[30%] pointer-events-none">
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="w-3 h-3 rounded-full bg-[rgba(30,58,95,0.4)] border border-[rgba(30,58,95,0.3)] shadow-[0_0_8px_rgba(30,58,95,0.3)]" />
                  </motion.div>
                </div>
                <div className="absolute top-[40%] right-[25%] pointer-events-none">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(196,30,58,0.4)] border border-[rgba(196,30,58,0.3)] shadow-[0_0_8px_rgba(196,30,58,0.3)]" />
                  </motion.div>
                </div>
                <div className="absolute bottom-[30%] left-[45%] pointer-events-none">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                    <div className="w-2 h-2 rounded-full bg-[rgba(16,185,129,0.4)] border border-[rgba(16,185,129,0.3)] shadow-[0_0_6px_rgba(16,185,129,0.3)]" />
                  </motion.div>
                </div>

                {/* SVG Map Pin Marker - centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Outer pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 2.2], opacity: [0.35, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      className="absolute -inset-4 rounded-full border-2 border-[rgba(212,168,83,0.3)]"
                    />
                    {/* Mid pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.6], opacity: [0.25, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                      className="absolute -inset-2 rounded-full border border-[rgba(212,168,83,0.2)]"
                    />
                    {/* Pin glow background */}
                    <div className="absolute -inset-6 bg-[rgba(212,168,83,0.08)] rounded-full blur-[20px]" />
                    {/* SVG Pin Icon */}
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative z-10 drop-shadow-[0_0_12px_rgba(212,168,83,0.5)]"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="rgba(212,168,83,0.2)"
                        stroke="#D4A853"
                        strokeWidth="1.5"
                      />
                      <circle cx="12" cy="9" r="3" fill="#D4A853" />
                    </svg>
                  </motion.div>
                </div>

                {/* Label overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(10,10,11,0.9)] via-[rgba(10,10,11,0.5)] to-transparent pt-12 pb-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A853] to-[#B8922F] flex items-center justify-center shadow-[0_0_15px_rgba(212,168,83,0.3)]">
                      <MapPin className="w-4 h-4 text-[#0A0A0B]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground font-display tracking-wide">
                        Carter Digitals (Pty) Ltd
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        1457 Block L, Soshanguve, Pretoria, Gauteng
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner gold accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[rgba(212,168,83,0.3)] rounded-tl-sm" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[rgba(212,168,83,0.3)] rounded-tr-sm" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[rgba(212,168,83,0.3)] rounded-bl-sm" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[rgba(212,168,83,0.3)] rounded-br-sm" />
              </div>

              {/* Location Info Cards - spans 2 cols */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4" staggerDelay={0.1}>
                  {locationCards.map((card, idx) => {
                    const cardColors = [
                      { bg: "rgba(196,30,58,0.12)", border: "rgba(196,30,58,0.18)", icon: "#F06A83", hoverIcon: "#F89BAA", glow: "rgba(196,30,58,0.15)", leftBorder: "#C41E3A" },
                      { bg: "rgba(30,58,95,0.12)", border: "rgba(30,58,95,0.18)", icon: "#5B8DB8", hoverIcon: "#7EB5E0", glow: "rgba(30,58,95,0.15)", leftBorder: "#1E3A5F" },
                      { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.18)", icon: "#10B981", hoverIcon: "#34D399", glow: "rgba(16,185,129,0.15)", leftBorder: "#10B981" },
                      { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.18)", icon: "#A78BFA", hoverIcon: "#C4B5FD", glow: "rgba(139,92,246,0.15)", leftBorder: "#8B5CF6" },
                    ][idx];
                    return (
                      <StaggerItem key={card.title}>
                        <div className="glass-gold rounded-xl p-5 hover-lift group cursor-default card-shine-sweep hover:border-l-2 transition-all duration-300"
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLDivElement).style.borderLeftColor = cardColors.leftBorder;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                              style={{
                                backgroundColor: cardColors.bg,
                                border: `1px solid ${cardColors.border}`,
                              }}
                            >
                              <card.icon className="w-5 h-5 transition-colors duration-300" style={{ color: cardColors.icon }} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground mb-1.5 font-display">
                                {card.title}
                              </p>
                              {card.lines.map((line, i) => (
                                <p
                                  key={i}
                                  className={`text-xs leading-relaxed ${
                                    i === 0
                                      ? "text-foreground/60"
                                      : "text-muted-foreground/60"
                                  }`}
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                {/* Nationwide coverage note */}
                <AnimatedSection delay={0.5} direction="up">
                  <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-[rgba(212,168,83,0.08)] to-[rgba(212,168,83,0.03)] border border-[rgba(212,168,83,0.15)] shadow-[0_0_20px_rgba(212,168,83,0.04)]">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.12)] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#D4A853]" />
                    </div>
                    <p className="text-sm text-foreground/60">
                      <span className="text-foreground font-medium">Nationwide coverage.</span>{" "}
                      We serve clients across South Africa — fully remote-friendly.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider-rainbow" />

      {/* ───────────── 4. "WHAT HAPPENS NEXT" SECTION ─────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint grain-texture overflow-hidden">
        <CosmicDecorations variant="constellation" intensity="subtle" />
        {/* Multi-color ambient orbs */}
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] bg-[rgba(30,58,95,0.04)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[10%] right-[15%] w-[250px] h-[250px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[30%] w-[200px] h-[200px] bg-[rgba(196,30,58,0.03)] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[280px] h-[280px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <SectionHeading
              label="What Happens Next"
              title="From Enquiry to"
              titleHighlight="Kickoff"
              description="A clear, transparent process — you'll always know what comes next."
              align="center"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <div className="mt-14 relative">
              {/* Connecting gradient line (desktop) */}
              <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#1E3A5F] via-[#10B981] and via-40% via-[#C41E3A] via-60% to-[#8B5CF6] opacity-30" />

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5" staggerDelay={0.12}>
                {nextSteps.map((step) => (
                  <StaggerItem key={step.step}>
                    <TiltCard tiltAngle={4}>
                      <div className="relative group card-shine-sweep rounded-xl bg-card border border-border p-6 hover:border-transparent transition-all duration-500 h-full"
                        style={{ boxShadow: `0 0 0 1px transparent` }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${step.accentGlow}`;
                          (e.currentTarget as HTMLDivElement).style.borderColor = step.accentBorder;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px transparent`;
                          (e.currentTarget as HTMLDivElement).style.borderColor = "";
                        }}
                      >
                        {/* Step number */}
                        <div className="absolute top-4 right-4 text-xs font-bold tracking-wider" style={{ color: step.accent }}>
                          STEP {step.step}
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: step.accentBg,
                            border: `1px solid ${step.accentBorder}`,
                          }}
                        >
                          <step.icon className="w-6 h-6" style={{ color: step.iconColor }} />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-foreground font-display mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-foreground/50 leading-relaxed mb-3">
                          {step.description}
                        </p>

                        {/* Time badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: step.accentBg,
                            color: step.iconColor,
                            border: `1px solid ${step.accentBorder}`,
                          }}
                        >
                          <Clock className="w-3 h-3" />
                          {step.time}
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: `linear-gradient(to right, transparent, ${step.accent}, transparent)` }}
                        />
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider-rainbow" />

      {/* ──────────────────── 5. TRUST SECTION ──────────────────── */}
      <section className="relative py-14 md:py-18 bg-background section-gold-tint">
        {/* Multi-color glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[rgba(212,168,83,0.03)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-[rgba(16,185,129,0.02)] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] bg-[rgba(30,58,95,0.02)] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-5">
                {trustBadges.map((badge, index) => {
                  const colors = trustBadgeColors[index];
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="card-shine-sweep flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: colors.bg,
                          border: `1px solid ${colors.border}`,
                          boxShadow: `0 0 20px ${colors.glow}`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = colors.hoverBorder;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${colors.hoverBorder}`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = colors.border;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${colors.glow}`;
                        }}
                      >
                        <badge.icon className="w-4 h-4 shrink-0" style={{ color: colors.text }} />
                        <span className="text-xs md:text-sm font-medium text-[rgba(245,245,245,0.75)] whitespace-nowrap">
                          {badge.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground/60">
                Registered, compliant, and ready to serve
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider-rainbow" />

      {/* ─────────────── 6. RESPONSE PROMISE SECTION ─────────────── */}
      <section className="relative py-20 md:py-28 bg-background section-gold-tint grain-texture">
        {/* Aurora mesh background */}
        <div className="absolute inset-0 bg-aurora-mesh opacity-[0.3] pointer-events-none" />
        <CosmicDecorations variant="stardust" intensity="subtle" />
        {/* Multi-color background glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[rgba(212,168,83,0.04)] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[rgba(184,146,47,0.03)] rounded-full blur-[100px] pointer-events-none" />
        {/* Additional color orbs */}
        <div className="absolute top-[20%] left-[8%] w-[200px] h-[200px] bg-[rgba(16,185,129,0.03)] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-[rgba(139,92,246,0.03)] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative overflow-hidden rounded-2xl glass-gold-premium border-l-[3px] border-l-[#D4A853] p-8 md:p-10 shadow-[0_0_50px_rgba(212,168,83,0.08)]">
              {/* Multi-color background accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(30,58,95,0.04)] rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-[rgba(139,92,246,0.04)] rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[rgba(16,185,129,0.03)] rounded-full blur-[50px] pointer-events-none" />

              {/* Multi-color floating decorative dots */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-2 h-2 rounded-full opacity-40"
                style={{ backgroundColor: "#D4A853" }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 right-20 w-1.5 h-1.5 rounded-full opacity-30"
                style={{ backgroundColor: "#1E3A5F" }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-12 w-2 h-2 rounded-full opacity-35"
                style={{ backgroundColor: "#10B981" }}
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-20 right-16 w-1 h-1 rounded-full opacity-25"
                style={{ backgroundColor: "#C41E3A" }}
              />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-1/2 right-6 w-1.5 h-1.5 rounded-full opacity-20"
                style={{ backgroundColor: "#8B5CF6" }}
              />
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[70%] left-[15%] w-1 h-1 rounded-full opacity-20"
                style={{ backgroundColor: "#D4A853" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(212,168,83,0.2)] to-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.18)] flex items-center justify-center shadow-[0_0_16px_rgba(212,168,83,0.1)]">
                    <Heart className="w-6 h-6 text-[#D4A853]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display text-shadow-section">
                    Our Response Promise
                  </h2>
                </div>

                {/* Prominent response time with colored accents */}
                <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-[rgba(212,168,83,0.05)] border border-[rgba(212,168,83,0.1)]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 shrink-0 rounded-full border-2 border-[rgba(212,168,83,0.2)] border-t-[#D4A853] flex items-center justify-center"
                  >
                    <Clock className="w-6 h-6 text-[#D4A853]" />
                  </motion.div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold font-display">
                      <span className="text-gradient-hero">2 Hours</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Average response time during business hours</p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-4">
                  We respond to all enquiries within <span className="text-[#D4A853] font-semibold text-glow-gold">2 business hours</span> during 
                  operating days. For urgent requests, reach us directly on WhatsApp.
                </p>

                <Separator className="bg-[rgba(212,168,83,0.1)] my-5" />

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.12)] flex items-center justify-center mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#D4A853]" />
                  </div>
                  <p className="text-base text-[rgba(245,245,245,0.55)] leading-relaxed italic">
                    No bots. No auto-replies. A real person who cares about your project.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/27724026893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[rgba(37,211,102,0.1)] border border-[rgba(37,211,102,0.2)] text-[#25D366] font-medium text-sm hover:bg-[rgba(37,211,102,0.15)] hover:shadow-[0_0_20px_rgba(37,211,102,0.1)] transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us Now
                  </a>
                  <a
                    href="mailto:kabelokadiaka4@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-gold text-[rgba(245,245,245,0.7)] font-medium text-sm hover:text-foreground hover:border-[rgba(212,168,83,0.25)] hover:shadow-[0_0_20px_rgba(212,168,83,0.08)] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Send an Email
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
