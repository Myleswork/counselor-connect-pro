import { AlertTriangle, CheckCircle2, FileSpreadsheet, Keyboard, Cloud, BarChart3, Sparkles, ShieldCheck } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "评优述职无数据支撑",
    desc: "年终述职翻遍十几个 Excel，依旧拼凑不出有说服力的工作量证据。",
  },
  {
    icon: Keyboard,
    title: "谈心记录靠手工敲键盘",
    desc: "一次谈话整理半小时，事后回看时缺要点、缺结构、缺跟进闭环。",
  },
  {
    icon: Cloud,
    title: "敏感数据放在云端易泄露",
    desc: "学生隐私分散在网盘、聊天工具、共享表格中，合规风险居高不下。",
  },
];

const wins = [
  {
    icon: BarChart3,
    title: "一键生成成长雷达图",
    desc: "九大职能维度自动汇总，述职 PPT 中的数据图直接导出。",
  },
  {
    icon: Sparkles,
    title: "AI 三分钟自动提取谈心五步法",
    desc: "上传录音即结构化输出谈话主题、问题、对策、结论与跟进项。",
  },
  {
    icon: ShieldCheck,
    title: "纯本地离线运行,绝对安全",
    desc: "数据加密落盘到您的电脑,无云数据库,从根源切断泄露可能。",
  },
];

export const PainSolution = () => {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">为什么需要它</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            从“疲于应付”到“游刃有余”
          </h2>
          <p className="mt-4 text-muted-foreground">
            我们重新梳理了一线辅导员的真实工作流,把那些消耗大量时间的环节,交给软件去做。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-danger">
              <AlertTriangle className="h-4 w-4" />
              传统工作模式
            </div>
            <ul className="space-y-4">
              {pains.map((p) => (
                <li key={p.title} className="flex gap-4 rounded-xl bg-surface-muted p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card text-muted-foreground">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{p.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Our solution */}
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-card p-6 sm:p-8 shadow-card">
            <div className="absolute right-6 top-6 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
              Counselor Connect
            </div>
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-primary">
              <CheckCircle2 className="h-4 w-4" />
              我们的方案
            </div>
            <ul className="space-y-4">
              {wins.map((w) => (
                <li key={w.title} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{w.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
