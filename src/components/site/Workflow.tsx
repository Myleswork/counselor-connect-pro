import { FolderPlus, CalendarClock, Sparkles, Repeat, FileBarChart } from "lucide-react";

const steps = [
  { icon: FolderPlus, title: "建档", desc: "导入或录入学生信息,自动建立成长档案。" },
  { icon: CalendarClock, title: "约谈", desc: "排定谈话计划,现场录音或手动记录关键事件。" },
  { icon: Sparkles, title: "AI 提炼", desc: "自动转写并按五步法结构化输出谈话要点。" },
  { icon: Repeat, title: "闭环跟进", desc: "异常事件打标签、设定跟进项,直至问题闭合。" },
  { icon: FileBarChart, title: "述职导出", desc: "九大职能数据自动汇总,一键生成述职材料。" },
];

export const Workflow = () => {
  return (
    <section id="workflow" className="section-y bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">工作流</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            五步走完一整年的学工事务
          </h2>
          <p className="mt-4 text-muted-foreground">
            把零散的工作动作串成一条清晰可追溯的主线,你只需要专注与学生的对话。
          </p>
        </div>

        <div className="relative mt-14">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ol className="relative grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-card shadow-card text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xs font-medium text-muted-foreground">第 {i + 1} 步</div>
                  <div className="mt-1 text-base font-semibold text-foreground">{s.title}</div>
                  <p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="lg:hidden relative space-y-6 border-l border-border pl-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[34px] flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card text-primary shadow-card">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="text-xs font-medium text-muted-foreground">第 {i + 1} 步</div>
                <div className="text-base font-semibold text-foreground">{s.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
