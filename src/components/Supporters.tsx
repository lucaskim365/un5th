import { motion } from "motion/react";
import { 
  Users, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Quote,
  CheckCircle2,
  Link as LinkIcon
} from "lucide-react";

const SECTION_SPACING = "py-24 md:py-32";
const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function Supporters() {
  const categories = ["정치인", "시민단체", "국제기구"];
  
  const leaders = [
    {
      name: "Dr. Robert Sterling",
      role: "Former Under-Secretary-General for Political Affairs",
      category: "Political Leader",
      quote: "제5사무국은 아시아의 지정학적 긴장을 해소하고 전 세계 평화를 위한 새로운 허브가 될 것입니다.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Amb. Elena Vance",
      role: "Permanent Representative to the UN",
      category: "Diplomat",
      quote: "역사는 침묵하는 자들이 아닌, 행동하는 자들에 의해 쓰여집니다. 지금이 바로 그 행동의 시간입니다.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Hon. David Park",
      role: "International Security Commission Chair",
      category: "Policy Maker",
      quote: "평화는 거창한 담론이 아닌 실질적인 거점을 통해 실현됩니다. 한반도는 그 최적의 장소입니다.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-12 pt-24 pb-48 overflow-hidden bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
          <div className="md:w-3/5 z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#C8A44A]/10 text-[#775A00] px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-6"
            >
              Global Coalition
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-6xl md:text-8xl font-black text-[#0A1A3A] leading-none tracking-tighter mb-8"
            >
              역사를 만드는<br/>목소리
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-[#45464E] max-w-2xl leading-relaxed opacity-80"
            >
              전 세계 정치 지도자, 시민 단체, 그리고 국제기구들이 한반도의 평화와 인류의 번영을 위해 UN 제5사무국 유치 캠페인에 뜻을 함께하고 있습니다.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-2/5 relative"
          >
            <div className="w-full aspect-[4/5] bg-[#F5F4F0] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop" 
                alt="UN Architecture" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
        {/* Watermark */}
        <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
          <Globe size={600} className="text-[#0A1A3A]" />
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="bg-[#F5F4F0] py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="font-serif text-4xl text-[#0A1A3A] font-bold">지지의 힘</h2>
            <div className="flex gap-12 border-b border-black/5 w-full md:w-auto overflow-x-auto">
              {categories.map((cat, i) => (
                <button 
                  key={cat}
                  className={`pb-4 text-sm font-bold tracking-widest transition-all ${
                    i === 0 ? "border-b-2 border-[#0A1A3A] text-[#0A1A3A]" : "text-[#45464E]/60 hover:text-[#0A1A3A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Supporters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {leaders.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-white shadow-lg">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/40 to-transparent"></div>
                </div>
                <div className="border-l-4 border-[#C8A44A] pl-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#775A00] uppercase mb-2 block">{person.category}</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1A3A] mb-1">{person.name}</h3>
                  <p className="text-xs font-sans tracking-wide text-[#45464E]/70 mb-6 italic">{person.role}</p>
                  <p className="font-serif text-lg leading-relaxed text-[#1B1C1A]">"{person.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Section */}
      <section className="py-32 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <h2 className="font-serif text-4xl text-[#0A1A3A] font-bold mb-6">시민사회의 연대</h2>
            <p className="text-[#45464E] leading-relaxed">수천 개의 시민 단체들이 풀뿌리 운동을 통해 UN 제5사무국 유치의 정당성을 전파하고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-[#F5F4F0] p-12 hover:bg-[#E9E8E4] transition-colors">
              <div className="w-16 h-16 bg-[#0A1A3A] flex items-center justify-center mb-8">
                <Globe className="text-white" size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-4">Peace Global Network</h4>
              <p className="text-sm text-[#45464E] leading-relaxed">전 세계 50개국 지부를 통해 국제 서명 운동을 주도하며 글로벌 여론 형성에 기여하고 있습니다.</p>
            </div>
            <div className="bg-[#F5F4F0] p-12 hover:bg-[#E9E8E4] transition-colors flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-xl font-bold mb-4">Harmony Asia</h4>
                <p className="text-xs text-[#45464E] leading-relaxed">아시아 지역 내 평화 교육 프로그램 및 청년 리더십 포럼을 개최합니다.</p>
              </div>
              <LinkIcon className="text-[#C8A44A] mt-8" size={20} />
            </div>
            <div className="bg-[#F5F4F0] p-12 hover:bg-[#E9E8E4] transition-colors flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-xl font-bold mb-4">DPI Korea</h4>
                <p className="text-xs text-[#45464E] leading-relaxed">국내 유치 홍보 및 정부 정책 제안을 전문적으로 수행하는 핵심 파트너입니다.</p>
              </div>
              <CheckCircle2 className="text-[#C8A44A] mt-8" size={20} />
            </div>
            <div className="bg-[#0A1A3A] p-12 md:col-span-2 flex items-center justify-between group cursor-pointer">
              <div className="text-white">
                <h4 className="font-serif text-2xl font-bold mb-2">모든 협력 기구 보기</h4>
                <p className="text-xs opacity-70">현재 240여 개 단체가 캠페인에 함께하고 있습니다.</p>
              </div>
              <ArrowRight className="text-[#C8A44A] group-hover:translate-x-2 transition-transform" size={32} />
            </div>
            <div className="md:col-span-2 bg-[#F5F4F0] p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold mb-4">Global Security Watch</h4>
                <p className="text-sm text-[#45464E] leading-relaxed max-w-sm">정책 연구 및 데이터 분석을 통해 UN 제5사무국 유치의 경제적, 안보적 가치를 입증합니다.</p>
              </div>
              <ShieldCheck className="absolute -right-4 -bottom-4 text-9xl opacity-5 group-hover:scale-110 transition-transform" size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1A3A] py-32 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-[#C8A44A] font-bold tracking-[0.3em] uppercase text-xs mb-8">Take Action Now</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white font-black mb-12 leading-tight">당신의 지지가<br/>필요합니다</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-16 opacity-80 font-serif">
            우리의 목소리가 모일 때, 한반도의 미래는 바뀝니다. <br/>지금 서명에 참여하여 역사의 주인공이 되어주세요.
          </p>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-md">
            <button className="flex-1 bg-[#C8A44A] text-[#0A1A3A] py-5 text-sm font-black tracking-widest hover:brightness-110 transition-all">서명하기</button>
            <button className="flex-1 border border-white/20 text-white py-5 text-sm font-bold tracking-widest hover:bg-white/10 transition-all">후원하기</button>
          </div>
        </div>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A44A]/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
    </>
  );
}
