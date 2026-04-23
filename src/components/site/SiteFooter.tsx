import { Mail, MessageCircle, Github } from "lucide-react";
import logo from "@/assets/logo.png";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Logo" className="h-8 w-8 object-contain" width={32} height={32} loading="lazy" />
              <span className="text-base font-semibold text-foreground">Counselor Connect</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              专为高校辅导员打造的本地化桌面工作台。让每一次谈心都有迹可循,
              让每一份述职都数据扎实。
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-foreground">产品</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary">核心功能</a></li>
              <li><a href="#workflow" className="hover:text-primary">工作流</a></li>
              <li><a href="#pricing" className="hover:text-primary">定价</a></li>
              <li><a href="#faq" className="hover:text-primary">常见问题</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-foreground">联系开发者</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> QQ 社群:counselor_connect
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> 邮箱:hello@counselor-connect.app
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" /> 基于 GitHub Pages 强力驱动
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Counselor Connect · 版权所有</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary">隐私政策</a>
            <a href="#" className="hover:text-primary">用户协议</a>
            <a href="#faq" className="hover:text-primary">技术支持</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
