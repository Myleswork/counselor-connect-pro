import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "学校断网或者在宿舍能用吗?",
    a: "完全可以。本软件采用纯本地架构,无需联网即可使用所有基础管理功能(仅 AI 转写需要短暂联网)。在宿舍、教室、出差途中都能继续工作。",
  },
  {
    q: "学生数据会泄露吗?",
    a: "不会。您的数据以加密形式仅存在您的个人电脑硬盘中,我们没有任何云端数据库,从根源切断泄露可能。即使我们想看也看不到。",
  },
  {
    q: "更换电脑怎么办?",
    a: "软件内置一键备份功能,导出加密备份文件后,在新电脑导入即可无缝衔接历史数据,授权可申请迁移。",
  },
  {
    q: "支持哪些 Windows 版本?",
    a: "兼容 Windows 10 / 11 (64 位)。建议运行内存 4GB 以上,硬盘剩余空间 500MB 以上。",
  },
  {
    q: "AI 转写的录音会被上传吗?",
    a: "AI 转写时仅上传当次音频片段用于识别,识别结果回传后即从服务端清除,不存档、不二次利用。如有顾虑也可手动录入文字。",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">常见问题</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            你关心的,我们都已准备好答案
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
