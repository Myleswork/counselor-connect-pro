import { Settings2, Upload, MessageCircle, ClipboardList, BedDouble, FileBarChart } from "lucide-react";

const steps = [
  { icon: Settings2, title: "初始化配置", desc: "设置校徽 / 系统名称、配置讯飞 API、选择本地备份目录。" },
  { icon: Upload, title: "导入名单", desc: "下载模板,Excel / CSV 字段映射后批量导入学生档案。" },
  { icon: MessageCircle, title: "记录谈心", desc: "手动录入或上传录音,选择主题、关注级别与发起方。" },
  { icon: ClipboardList, title: "查课查寝", desc: "录入考勤与宿舍走访,异常情况打标签持续跟进。" },
  { icon: BedDouble, title: "成长沉淀", desc: "工作纪实、项目突破自动归档,绘制九大职能雷达。" },
  { icon: FileBarChart, title: "述职导出", desc: "谈心 / 查课 / 查寝记录与成长数据一键导出 Excel。" },
];

export const Workflow = () => {
  return (
    <section id="workflow" className="section-y bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">工作流</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            六步覆盖一整年的学工事务
          </h2>
          <p className="mt-4 text-muted-foreground">
            把零散的工作动作串成一条清晰可追溯的主线,你只需要专注与学生的对话。
          </p>
        </div>

        <div className="relative mt-14">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ol className="relative grid grid-cols-6 gap-4">
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
