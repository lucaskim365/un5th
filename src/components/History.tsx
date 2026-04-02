import { motion } from "motion/react";
import { 
  History as HistoryIcon, 
  Award, 
  Handshake, 
  Flag,
  Signature,
  Quote
} from "lucide-react";

const SECTION_SPACING = "py-24 md:py-32";
const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function History() {
  const milestones = [
    {
      year: "2014. 05",
      title: "Proposal Initiation",
      desc: "UN 제5사무국 한국 유치를 위한 최초 제안 및 추진위원회 발족. 한반도 평화 체제 구축을 위한 국제적 논의의 시작점이 되었습니다.",
      icon: <HistoryIcon size={24} />,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
    },
    {
      year: "2018. 10",
      title: "Peace Summit Support",
      desc: "글로벌 평화 서밋에서 제5사무국 유치 지명 및 국제 사회의 폭넓은 공감대를 형성했습니다. 100개국 이상의 NGO 파트너십이 체결되었습니다.",
      icon: <Handshake size={24} />,
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop"
    },
    {
      year: "2024. 01",
      title: "Global Signature Milestone",
      desc: "전 세계 100만 명 서명 달성. 단순한 운동을 넘어 시민이 주도하는 거대한 국제적 물결로 성장하며 공식 청원을 준비하고 있습니다.",
      icon: <Award size={24} />,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      year: "2026. Future",
      title: "The Final Resolution",
      desc: "UN 총회 상정 및 제5사무국 최종 확정을 목표로 나아갑니다. 역사의 한 페이지를 완성하는 가장 중요한 시기가 될 것입니다.",
      icon: <Flag size={24} />,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#FAF9F5] px-12 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Archival Landscape" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/0 via-[#FAF9F5]/20 to-[#FAF9F5]"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs tracking-[0.3em] text-[#0061A5] uppercase mb-6 block font-bold"
          >
            Our Legacy & Future
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-[#0A1A3A] leading-tight tracking-tighter mb-8 font-black"
          >
            평화를 향한<br/>11년의 여정
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-lg text-[#45464E] max-w-2xl mx-auto leading-relaxed"
          >
            2014년부터 시작된 UN 제5사무국 유치 운동은 한반도를 넘어 전 세계의 평화 거점을 구축하기 위한 역사적 발걸음입니다.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#F5F4F0] py-32 px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="font-serif text-4xl text-[#0A1A3A] mb-4 font-bold">연혁 및 이정표</h2>
            <div className="w-12 h-0.5 bg-[#C8A44A] mx-auto"></div>
          </div>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#0A1A3A]/10 hidden md:block"></div>

            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-32 last:mb-0 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} mt-8 md:mt-0 order-2 md:order-1`}>
                  <span className="font-sans text-[#775A00] font-bold text-xl mb-2 block">{item.year}</span>
                  <h3 className="font-serif text-2xl mb-4 text-[#0A1A3A] font-bold">{item.title}</h3>
                  <p className="text-[#45464E] leading-relaxed text-sm">{item.desc}</p>
                </div>

                <div className="relative z-10 w-12 h-12 bg-[#0A1A3A] text-white flex items-center justify-center rounded-sm order-1 md:order-2 shadow-xl">
                  {item.icon}
                </div>

                <div className="flex-1 md:w-1/2 md:pl-16 order-3 hidden md:block">
                  <div className="aspect-video bg-white overflow-hidden shadow-sm border border-black/5">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-[#0A1A3A] font-bold mb-6">주요 성과</h2>
              <p className="text-[#45464E] leading-relaxed">지난 11년 동안 쌓아온 지표들은 UN 제5사무국 유치의 당위성을 증명합니다. 단순한 숫자를 넘어선 평화에 대한 갈망의 기록입니다.</p>
            </div>
            <div className="pb-1">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#45464E]/60 font-bold">Current as of 2024 Q4</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
            {[
              { 
                icon: <Signature className="text-[#0061A5]" size={40} />, 
                value: "1.2M+", 
                label: "Global Signatures",
                desc: "전 세계 시민들의 자발적인 참여로 모인 평화의 목소리입니다."
              },
              { 
                icon: <Handshake className="text-[#0061A5]" size={40} />, 
                value: "120+", 
                label: "NGO Partnerships",
                desc: "글로벌 평화 기구들과의 견고한 협력 네트워크를 구축했습니다."
              },
              { 
                icon: <Award className="text-[#0061A5]" size={40} />, 
                value: "45+", 
                label: "Legislative Support",
                desc: "국내외 입법부의 공식적인 지지 결의안과 정책적 뒷받침을 확보했습니다."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 transition-all duration-300 hover:bg-[#F5F4F0]">
                <div className="mb-8">{item.icon}</div>
                <div className="font-serif text-5xl text-[#0A1A3A] font-bold mb-4">{item.value}</div>
                <div className="font-sans text-xs font-bold text-[#775A00] mb-4 tracking-widest uppercase">{item.label}</div>
                <p className="text-[#45464E] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-12 bg-[#F5F4F0]">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-2xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0A1A3A] font-bold mb-4">역사의 한 페이지가 되어주세요</h2>
            <p className="text-[#45464E]">여러분의 서명 한 줄이 UN 제5사무국 유치의 결실이 됩니다.</p>
          </div>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block font-sans text-[10px] uppercase tracking-widest text-[#45464E]/60 mb-2 font-bold">이름 (Name)</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-0 border-b border-black/10 focus:border-[#0A1A3A] focus:ring-0 px-0 py-3 text-lg font-light placeholder:text-black/20"
                  placeholder="실명을 입력해 주세요"
                />
              </div>
              <div className="relative">
                <label className="block font-sans text-[10px] uppercase tracking-widest text-[#45464E]/60 mb-2 font-bold">이메일 (Email)</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-0 border-b border-black/10 focus:border-[#0A1A3A] focus:ring-0 px-0 py-3 text-lg font-light placeholder:text-black/20"
                  placeholder="example@peace.org"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block font-sans text-[10px] uppercase tracking-widest text-[#45464E]/60 mb-2 font-bold">거주 국가 (Country)</label>
              <select className="w-full bg-transparent border-0 border-b border-black/10 focus:border-[#0A1A3A] focus:ring-0 px-0 py-3 text-lg font-light appearance-none cursor-pointer">
                <option>대한민국</option>
                <option>United States</option>
                <option>Japan</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pt-8">
              <button className="w-full bg-[#0A1A3A] text-white py-6 font-bold text-lg tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3">
                지금 서명하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
