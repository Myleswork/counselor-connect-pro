import { ShieldCheck, HardDrive, WifiOff, KeyRound } from "lucide-react";

const points = [
  { icon: HardDrive, title: "数据本地化", desc: "所有学生信息加密落盘到您的电脑,绝不上传服务器。" },
  { icon: WifiOff, title: "断网可用", desc: "核心管理功能完全离线运行,仅 AI 转写需短暂联网。" },
  { icon: KeyRound, title: "一机一码授权", desc: "机器码绑定离线激活,确保授权与数据双重安全。" },
];

export const Security = () => {
  return (
    <section id="security" className="section-y">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">数据安全</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              学生隐私 不离开 您的电脑
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              我们没有云端数据库,也不收集任何学生信息。Counselor Connect
              采用纯本地架构,所有数据均以加密形式存储于您本机硬盘,
              真正做到“数据归你所有,合规零负担”。
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{p.title}</div>
                    <p className="mt-0.5 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">安全承诺</div>
                  <div className="text-lg font-semibold text-foreground">零云端 · 零上传 · 零泄露</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "0", v: "云端数据库" },
                  { k: "AES", v: "本地加密" },
                  { k: "100%", v: "数据归属您" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-border bg-card p-4">
                    <div className="text-2xl font-bold text-primary">{s.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-xl bg-surface-muted p-4 text-xs leading-relaxed text-muted-foreground">
                我们的设计原则:不能上传的数据,就让它从未离开过这台电脑。
                任何技术升级都不会改变这一底线。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
