import {
  Users,
  Mic,
  ClipboardCheck,
  PieChart,
  Lock,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "穿透式学生档案",
    desc: "统一维护基本信息与跟进轨迹,一处更新,全局可查。",
  },
  {
    icon: Mic,
    title: "AI 智能谈心谈话",
    desc: "自动提炼录音内容,按谈话五步法结构化生成谈话要点。",
  },
  {
    icon: ClipboardCheck,
    title: "查课查寝留痕",
    desc: "异常情况标签化,自动形成持续跟进的工作闭环。",
  },
  {
    icon: PieChart,
    title: "述职数据看板",
    desc: "直观展示辅导员九大职能的发力分布与时间投入。",
  },
  {
    icon: Lock,
    title: "本地加密存储",
    desc: "断网亦可运行,数据加密落盘,稳稳锁在个人电脑里。",
  },
  {
    icon: RefreshCw,
    title: "自动化热更新",
    desc: "内置版本检测,无需重装,持续享受最新功能与修复。",
  },
];

export const Features = () => {
  return (
    <section id="features" className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">核心功能</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            一个工作台,覆盖学工日常
          </h2>
          <p className="mt-4 text-muted-foreground">
            围绕“识、谈、跟、述”四个关键动作设计,让每一个环节都被记录、被结构化、被沉淀。
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
