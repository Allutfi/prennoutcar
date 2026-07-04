"use client";

import RemoteImage from "@/components/RemoteImage";
import { useInView } from "@/hooks/useInView";

const teamMembers = [
  {
    name: "Julian Sterling",
    role: "Chief Executive Officer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBivv-jJidHW0A6qZVSHXKzPAkvkuIRBDgz_04PkvAxfuCCyzy-MLJyn6OiuLNPufoxuSoZOtn9NBWxWYRsnEv2xDKxPZf9XK5hdU6ij2fF9ZFGVrQ02U_C0krMiAfhnEXl7woVpYGI8Xh7qVfcwm_UGubSSsTuHJtvqE3zpHh0SycELJtyvnwznVOfepbjum-qC4ptp-VkQNUHLOIt3-qegtSQuJy6i_4sXtBVlMPv8ESgrpmji5ArPg",
  },
  {
    name: "Elena Vaught",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ty7NpWOjICvBGB7lW-6fjVYWoSxzpIuT-tO-Oqx7vKKD5F-VFT7DRX5aBZ9s93WNfRBwm7r0PtWbdLlIjXON5_lCP3jKx4Ua-B2H96nMZv3jkIgDp3bHNAmrHkrTXp1QjSsFkh1KnlR1dG-ha1W8v3F-6FzBicfSgrw1EKma-OiabJ3UoHX-5zUdjdRw0_AzVPGk0sDOCEVJz1nHOidHLrr0bh7dGJJr_PFSmO00bn2JIE0_pzuKFA",
  },
  {
    name: "Marcus Thorne",
    role: "Global Sales Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvtfnecu7xICzsVLgHngeL6YQOOFO9oQsuJRK-eFQmFC4xQnyMOOQfD9a7g5H0U8G9wME1rRqHNVqEnVb5pOrYQUjDO8ndcv2dNFSiNkuxajfGyjRx-HD78dRSw6Mbxktje158EjZ68vVTdFh2fVEA8PYJiDsSHHs9SkdugFwMPvTpwMlZ9WxTG_MUEJdxQlxHYvUjrmA291XmzHkRp3bQHzyzVNXOnQEN2c0nz0V-Ud97Wo23CR0x2Q",
  },
  {
    name: "Robert Chen",
    role: "Chief Curator",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU6GlNwNt4eDBy-_tNx6XxHB0SHQm44P75Gw9V81I8ZhZinUebCvO-RxCN9xVuQrGLC3n0mY9RsHIJ1hKA-XK89jzydbA_6EpigxWYuZVi0oCZMenKdloREd4Npo06wGBUfzrT3CCz5f7ryf7fgiuS78rNDDT1z-NFj7VVw1g7398s_5yPLlX_UynKlfnPvUWuFNL3ohyjWHmuaYQGVyX2_AN0Hk9RI1qA9gqxOBWR1yWUUCmLN7DXOw",
  },
];

const delays = ["delay-0", "delay-150", "delay-300", "delay-500"] as const;

export default function TeamGrid() {
  const [ref, visible] = useInView(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {teamMembers.map((member, i) => (
        <div
          key={member.name}
          className={`group ${visible ? `animate-fade-up ${delays[i]}` : "opacity-0"}`}
        >
          <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
            <RemoteImage
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <h4
            className="text-[#00356a] font-bold text-lg"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {member.name}
          </h4>
          <p
            className="text-[#19619f] text-[10px] tracking-widest uppercase font-semibold mt-1"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {member.role}
          </p>
        </div>
      ))}
    </div>
  );
}
