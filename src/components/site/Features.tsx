import {
  Trophy,
  Users,
  Mic,
  ClipboardCheck,
  BedDouble,
  Database,
  Lock,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "成长轨迹与九大职能",
    desc: "按九大职能维度自动绘制雷达图,工作纪实、项目突破、个人成就一并沉淀。",
  },
  {
    icon: Users,
    title: "穿透式学生档案",
    desc: "卡片化展示班级、专业、政治面貌、宿舍、电话,支持新增、编辑、批量管理。",
  },
  {
    icon: Mic,
    title: "AI 智能谈心谈话",
    desc: "上传本地录音,AI 按五步法自动整理谈话要点,关注级别与谈话主题可视化。",
  },
  {
    icon: ClipboardCheck,
    title: "查课记录",
    desc: "缺课/旷课人次实时统计,重点关注学生与课程自动排序,14 天趋势随时回看。",
  },
  {
    icon: BedDouble,
    title: "查寝留痕",
    desc: "宿舍走访状态分布,卫生/纪律/异常情况打标签,持续跟进直至问题闭合。",
  },
  {
    icon: Database,
    title: "数据导入导出",
    desc: "Excel/CSV 字段映射批量导入,谈心、查课、查寝、档案一键导出 Excel。",
  },
  {
    icon: Lock,
    title: "本地加密存储",
    desc: "断网亦可运行,数据加密落盘,稳稳锁在个人电脑里,零云端零上传。",
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
