import { useState } from "react";
import { Trophy, Users, MessageSquare, ClipboardCheck, BedDouble, Database, Settings } from "lucide-react";
import growth from "@/assets/screen-growth.png";
import students from "@/assets/screen-students.png";
import talks from "@/assets/screen-talks.png";
import talkNew from "@/assets/screen-talk-new.png";
import attendance from "@/assets/screen-attendance.png";
import dorm from "@/assets/screen-dorm.png";
import importScreen from "@/assets/screen-import.png";
import settings from "@/assets/screen-settings.png";

type Tab = {
  key: string;
  icon: typeof Trophy;
  label: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

const tabs: Tab[] = [
  {
    key: "growth",
    icon: Trophy,
    label: "成长轨迹",
    title: "九大职能雷达图,述职材料一键成型",
    desc: "按思想理论教育、党团建设、学风建设、心理健康等九大职能维度,自动绘制发力分布雷达,沉淀工作纪实、项目突破与个人成就。",
    image: growth,
    alt: "成长轨迹页面 · 九大职能发力分布雷达图与工作记录时间轴",
  },
  {
    key: "students",
    icon: Users,
    label: "学生档案",
    title: "390 名学生 · 一屏卡片式档案",
    desc: "支持按班级、专业筛选与姓名/学号检索,卡片化呈现政治面貌、宿舍、电话等关键信息,新增、编辑、删除即时生效。",
    image: students,
    alt: "学生档案页面 · 卡片式学生信息列表与筛选搜索",
  },
  {
    key: "talks",
    icon: MessageSquare,
    label: "谈心谈话",
    title: "关注级别可视化 · TOP3 高频学生一目了然",
    desc: "饼图展示持续关注、危机干预、常规交流的占比,折线图呈现谈话频次趋势,自动统计本月谈话人次与谈话最多的学生。",
    image: talks,
    alt: "谈心谈话页面 · 关注级别饼图、谈话趋势折线与 TOP3 学生统计",
  },
  {
    key: "talk-new",
    icon: MessageSquare,
    label: "AI 谈心录入",
    title: "上传录音 → AI 三分钟整理谈话要点",
    desc: "学号一键带出学生档案,选择谈话主题、关注级别与发起方,上传本地录音后,AI 自动按五步法生成结构化要点,Beta 版已可用。",
    image: talkNew,
    alt: "新建谈心记录页面 · 学生信息匹配与 AI 语音智能分析",
  },
  {
    key: "attendance",
    icon: ClipboardCheck,
    label: "查课记录",
    title: "缺课旷课统计 · 14 天趋势随时回看",
    desc: "本月查课人次、旷课人次实时计数,自动列出重点关注学生与重点关注课程,14 天趋势曲线辅助识别异常波动。",
    image: attendance,
    alt: "查课记录页面 · 缺课统计、重点关注课程与 14 天趋势图",
  },
  {
    key: "dorm",
    icon: BedDouble,
    label: "查寝留痕",
    title: "宿舍走访状态分布,问题闭环可追溯",
    desc: "记录每次查寝时间、宿舍区域、状态(正常/卫生/纪律等)与现场手记,支持搜索区域与手记内容,异常情况持续跟进直至闭合。",
    image: dorm,
    alt: "查寝留痕页面 · 查寝状态分布与历史记录时间轴",
  },
  {
    key: "import",
    icon: Database,
    label: "数据管理",
    title: "Excel / CSV 字段映射 · 批量导入零门槛",
    desc: "下载标准模板,上传名单文件后自动预览前 5 条记录,字段映射可手动微调,确认无误再执行整批导入,谈心/查课/查寝亦支持导出 Excel。",
    image: importScreen,
    alt: "数据管理页面 · CSV/Excel 字段映射与导入预览",
  },
  {
    key: "settings",
    icon: Settings,
    label: "系统设置",
    title: "校徽 · 称呼 · API · 备份,一处统一配置",
    desc: "上传校徽自定义侧边栏,配置讯飞星火 API 解锁录音转写,选择本地备份目录定时自动保存,支持账号密码修改与一键数据恢复,内置版本检测。",
    image: settings,
    alt: "系统设置页面 · 校徽 Logo、API 配置、本地备份与账号管理",
  },
];

export const ScreenshotShowcase = () => {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section id="screenshots" className="section-y bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">软件实拍</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            不止是 PPT,每一个模块都已落地
          </h2>
          <p className="mt-4 text-muted-foreground">
            点击下方标签切换查看真实软件截图,所有界面均已在 V1.8.0 中上线运行。
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-foreground sm:text-[1.65rem] leading-snug">
              {current.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {current.desc}
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">提示:</span> 截图中涉及的姓名、学号均为
              开发期间的脱敏演示数据,正式版本中由您本机数据填充。
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mockup-frame">
              <div className="mockup-bar">
                <span className="mockup-dot bg-[hsl(0_72%_60%)]" />
                <span className="mockup-dot bg-[hsl(45_95%_55%)]" />
                <span className="mockup-dot bg-[hsl(140_55%_50%)]" />
                <span className="ml-3 truncate text-xs text-muted-foreground">
                  Counselor Connect · {current.label}
                </span>
              </div>
              <img
                key={current.key}
                src={current.image}
                alt={current.alt}
                width={1920}
                height={1080}
                loading="lazy"
                className="block w-full animate-in fade-in duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
