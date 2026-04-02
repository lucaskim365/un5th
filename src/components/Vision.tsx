import { motion } from "motion/react";
import {
  Globe,
  Heart,
  Wallet,
  Quote
} from "lucide-react";

const SECTION_SPACING = "py-24 md:py-32";
const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function Vision() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#FAF9F5] px-12 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="UN Flag and DMZ Sunset"
            className="w-full h-full object-cover opacity-80 grayscale-[20%] brightness-[40%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3A]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs tracking-[0.3em] text-white uppercase mb-8 block font-bold"
          >
            UN 5th Office Vision
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-12 font-black"
          >
            공백을 메우는<br />동양의 목소리
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed italic"
          >
            지속 가능한 세계 평화를 위해, 인류의 60%가 거주하는 아시아의 심장부에 새로운 평화의 기둥을 세웁니다.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Geopolitical Imbalance */}
      <section className="bg-[#F5F4F0] py-32 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1A3A] mb-12 leading-tight font-bold">지정학적 불균형</h2>
            <div className="space-y-8 font-sans text-lg text-[#45464E] leading-relaxed">
              <p>현재 UN의 4대 주요 사무국은 뉴욕(미주), 제네바·비엔나(유럽), 나이로비(아프리카)에 집중되어 있습니다.</p>
              <p className="font-bold text-[#0A1A3A] border-l-4 border-[#C8A44A] pl-6">전 세계 인구의 60%가 거주하며 역동적으로 성장하는 아시아 대륙은 국제 행정의 지형에서 여전히 거대한 '공백'으로 남아있습니다.</p>
              <p>이 공백을 메우는 일은 단순한 지역 안배를 넘어, 전 지구적 거버넌스의 정당성을 확보하는 필수적 과제입니다.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 bg-white shadow-sm border border-black/5"
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { region: "North America", city: "New York", color: "border-[#0A1A3A]" },
                { region: "Europe", city: "Geneva & Vienna", color: "border-[#0061A5]" },
                { region: "Africa", city: "Nairobi", color: "border-[#7583A9]" },
                { region: "ASIAN GAP", city: "Missing Piece", color: "border-[#C8A44A]", highlight: true },
              ].map((item, i) => (
                <div key={i} className={`p-6 border-l-4 ${item.color} ${item.highlight ? "bg-[#C8A44A]/5" : ""}`}>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-[#45464E] mb-2 font-bold">{item.region}</span>
                  <span className={`block font-serif text-2xl font-bold ${item.highlight ? "text-[#775A00]" : "text-[#0A1A3A]"}`}>{item.city}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                alt="World Map Silhouette"
                className="w-full h-auto grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: 3 Key Values */}
      <section className="bg-white py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1A3A] mb-6 font-bold">3대 핵심 가치</h2>
            <div className="w-24 h-1 bg-[#C8A44A] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-[#775A00]" size={48} />,
                title: "Asia Representation",
                desc: "아시아의 다양한 문화와 정치적 입장을 대변하며, UN의 보편적 가치를 지역 사회로 확산시킵니다.",
                val: "VALUE 01"
              },
              {
                icon: <Heart className="text-[#775A00]" size={48} />,
                title: "Peace in DMZ",
                desc: "한반도의 분단을 넘어 동북아의 긴장 완화를 도모하고, 항구적인 평화 프로세스의 중심지가 됩니다.",
                val: "VALUE 02"
              },
              {
                icon: <Wallet className="text-[#775A00]" size={48} />,
                title: "Economic Impact",
                desc: "국제기구 유치를 통한 고용 창출과 MICE 산업의 활성화로 지역과 국가의 동반 성장을 견인합니다.",
                val: "VALUE 03"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-[#F5F4F0] transition-all border-b-2 border-transparent hover:border-[#C8A44A]"
              >
                <div className="mb-8">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-6 text-[#0A1A3A] font-bold">{item.title}</h3>
                <p className="font-sans text-[#45464E] leading-relaxed mb-8 text-sm">
                  {item.desc}
                </p>
                <span className="font-sans text-[10px] tracking-widest text-[#0A1A3A]/40 font-bold">{item.val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Global Solidarity */}
      <section className="bg-[#0A1A3A] text-white py-32 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-24 text-center font-bold">글로벌 연대</h2>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              {[
                {
                  quote: "아시아 제5사무국 유치는 인류 평화를 향한 한국의 의지를 증명하는 역사적 이정표가 될 것입니다.",
                  cite: "International Diplomacy Council Chair"
                },
                {
                  quote: "동북아의 평화는 세계 평화의 핵심 축입니다. DMZ 인근의 UN 기구 설치는 그 상징성만으로도 거대한 억지력이 됩니다.",
                  cite: "Peace Studies Scholar, Stockholm"
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <Quote className="absolute -top-12 -left-8 text-6xl opacity-10 text-[#C8A44A]" size={64} />
                  <blockquote className="font-serif text-3xl leading-snug italic mb-6">
                    "{item.quote}"
                  </blockquote>
                  <cite className="font-sans text-xs tracking-widest text-[#C8A44A] not-italic font-bold uppercase">— {item.cite}</cite>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-12 backdrop-blur-md border border-white/10">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60 font-bold">Global Support</span>
                <span className="block font-serif text-6xl text-[#C8A44A] font-bold mb-2">124</span>
                <span className="block font-sans text-xs opacity-80">Countries in Consensus</span>
              </div>
              <div className="bg-white/5 p-12 backdrop-blur-md border border-white/10">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60 font-bold">Citizen Support</span>
                <span className="block font-serif text-6xl text-[#C8A44A] font-bold mb-2">82%</span>
                <span className="block font-sans text-xs opacity-80">Public Approval Rating</span>
              </div>
              <div className="bg-white/5 p-12 backdrop-blur-md border border-white/10 col-span-2">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] mb-4 opacity-60 font-bold">Impact Estimation</span>
                <span className="block font-serif text-4xl text-[#C8A44A] font-bold mb-2">3.2 Trillion KRW</span>
                <span className="block font-sans text-xs opacity-80">Annual Economic Value Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-12 text-center bg-[#F5F4F0]">
        <h2 className="font-serif text-4xl md:text-5xl mb-12 font-bold text-[#0A1A3A]">평화의 역사를 함께 만드시겠습니까?</h2>
        <button className="bg-[#0A1A3A] text-white px-16 py-5 font-serif text-lg tracking-tight hover:scale-105 active:scale-95 duration-200 transition-all shadow-xl">
          유치 추진 지지 서명하기
        </button>
      </section>
    </>
  );
}
