import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Whatsapp",
    href: "https://wa.me/2347084350298",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/devolaitan?s=21",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/olaitan.dev",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/olaitan-michael",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-8 py-6 text-sm border-t md:justify-between md:flex-row border-white/15">
          {/* get the current year */}
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row ">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
