import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "核心功能" },
  { href: "#screenshots", label: "软件实拍" },
  { href: "#workflow", label: "工作流" },
  { href: "#security", label: "数据安全" },
  { href: "#pricing", label: "定价" },
  { href: "#faq", label: "常见问题" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Counselor Connect 标志" className="h-8 w-8 object-contain" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Counselor Connect
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="hero" size="default">
            <a href="https://gitee.com/zhaosw_myles/counselor_platform/releases" target="_blank" rel="noreferrer noopener">
              <Download className="h-4 w-4" />
              免费下载 Windows 版
            </a>
          </Button>
        </div>

        <button
          aria-label="切换菜单"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-primary-soft"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary-soft hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a
                href="https://gitee.com/zhaosw_myles/counselor_platform/releases"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
              >
                <Download className="h-4 w-4" />
                免费下载 Windows 版
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
