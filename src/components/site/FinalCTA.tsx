import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="download" className="section-y bg-gradient-cta">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-[2.6rem] leading-tight">
          准备好提升您的学工效率了吗?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
          下载只需要 1 分钟,而它能为你省下今后每一年数十个小时的重复工作。
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="xl"
            className="bg-card text-primary hover:bg-card/90 shadow-mockup"
          >
            <a href="#">
              <Download className="h-5 w-5" />
              立即下载 Counselor Connect V1.8.0
            </a>
          </Button>
        </div>
        <div className="mt-5 text-sm text-primary-foreground/70">
          Windows 10 / 11 (64 位) · 安装包约 86 MB · 永久免费试用
        </div>
      </div>
    </section>
  );
};
