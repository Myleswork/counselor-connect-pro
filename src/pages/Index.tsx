import { useEffect } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { PainSolution } from "@/components/site/PainSolution";
import { Features } from "@/components/site/Features";
import { Workflow } from "@/components/site/Workflow";
import { Security } from "@/components/site/Security";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  useEffect(() => {
    document.title = "Counselor Connect | 高校辅导员智能工作台 · Windows 桌面软件";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Counselor Connect 是为高校辅导员打造的本地化 Windows 桌面工作台,集成学生档案、查寝查课、AI 谈心记录与述职数据看板,数据本地加密,一次买断永久可用。"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PainSolution />
        <Features />
        <Workflow />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
