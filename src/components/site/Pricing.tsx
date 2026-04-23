import { Button } from "@/components/ui/button";
import { Check, Download } from "lucide-react";

const items = [
  "1 台设备永久授权",
  "免费版本更新(含大版本)",
  "微信社群技术支持",
  "本地加密数据存储",
  "AI 谈心记录生成",
  "述职数据看板导出",
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-y bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">定价与授权</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            一次买断,永久可用
          </h2>
          <p className="mt-4 text-muted-foreground">
            没有订阅,没有套路。你为软件付费一次,后续所有功能升级我们继续送上。
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-elevated">
            <div className="bg-gradient-cta px-8 py-7 text-primary-foreground">
              <div className="text-sm/6 opacity-80">个人永久版 · Personal Lifetime</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">¥299</span>
                <span className="text-sm opacity-80">/ 永久买断</span>
              </div>
              <p className="mt-3 text-sm opacity-90">
                一次付费 · 永久可用 · 免费版本更新
              </p>
            </div>

            <div className="px-8 py-7">
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <Button asChild variant="hero" size="lg" className="mt-7 w-full">
                <a
                  href="https://gitee.com/zhaosw_myles/counselor_platform/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Download className="h-5 w-5" />
                  前往 Gitee 下载 Windows 版
                </a>
              </Button>

              <p className="mt-5 rounded-lg bg-surface-muted p-3 text-center text-xs text-muted-foreground">
                软件采用机器码一机一码离线激活,确保您的权益与数据安全。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
