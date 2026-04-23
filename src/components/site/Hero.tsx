import { Button } from "@/components/ui/button";
import { Download, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import dashboard from "@/assets/screen-dashboard.png";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="container-page pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              专为高校辅导员打造 · V1.8.0 已发布
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-foreground sm:text-5xl lg:text-[3.4rem]">
              告别碎片化 Excel，
              <br />
              <span className="text-primary">让每一次谈心都有迹可循。</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Counselor Connect 是一款本地化 Windows 桌面工作台，集成
              <span className="text-foreground font-medium"> 学生档案、查寝查课、AI 谈心记录生成 </span>
              与<span className="text-foreground font-medium"> 述职数据看板 </span>
              ，把辅导员的日常变成一条清晰、可追溯、可量化的工作闭环。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="https://gitee.com/zhaosw_myles/counselor_platform/releases" target="_blank" rel="noreferrer noopener">
                  <Download className="h-5 w-5" />
                  下载 Windows 版
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#features">
                  查看详细功能
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                纯本地架构 · 数据不上云
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                一次买断 · 永久可用
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mockup-frame">
              <div className="mockup-bar">
                <span className="mockup-dot bg-[hsl(0_72%_60%)]" />
                <span className="mockup-dot bg-[hsl(45_95%_55%)]" />
                <span className="mockup-dot bg-[hsl(140_55%_50%)]" />
                <span className="ml-3 truncate text-xs text-muted-foreground">
                  Counselor Connect — 本地化学生支持管理系统
                </span>
              </div>
              <img
                src={dashboard}
                alt="Counselor Connect 软件总览：今日工作量、本月谈心人次、高危预警与查课查寝数据看板"
                width={1920}
                height={1080}
                className="block w-full"
              />
            </div>
            <div className="mt-3 text-center text-xs text-muted-foreground">
              软件总览 · 当日工作量、本月谈心人次、高危预警一屏掌握
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
