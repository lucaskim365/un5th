import { motion } from "motion/react";
import { 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Signature,
  ArrowRight,
  Quote
} from "lucide-react";

const SECTION_SPACING = "py-24 md:py-32";
const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0A1A3A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2070&auto=format&fit=crop" 
            alt="UN Assembly Hall"
            className="w-full h-full object-cover grayscale-[20%] brightness-[35%]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className={`${CONTAINER_MAX_WIDTH} relative z-10 w-full pt-20`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[#C8A44A] text-sm tracking-[0.4em] uppercase mb-6 font-semibold">
              Global Campaign Dossier: 2024
            </span>
            <h1 className="font-serif text-white text-6xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
              공백을 메우는<br />동양의 목소리
            </h1>
            <div className="w-24 h-1 bg-[#C8A44A] mb-8"></div>
            <p className="text-slate-300 font-serif text-xl md:text-2xl max-w-2xl leading-relaxed opacity-90 border-l-2 border-[#C8A44A] pl-6 italic">
              한반도 DMZ에 인류의 60%를 대변할 유엔의 다섯 번째 기둥을 세웁니다.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <button className="bg-[#FFFFFF] text-[#0A1A3A] px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#C8A44A] transition-all flex items-center justify-center group">
                지금 서명하기 <Signature className="ml-3 group-hover:scale-110 transition-transform" size={18} />
              </button>
              <button className="border border-white/30 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all backdrop-blur-sm">
                비전 리포트 읽기
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F5F4F0] py-20 border-b border-black/5">
        <div className={`${CONTAINER_MAX_WIDTH} grid grid-cols-2 md:grid-cols-4 gap-12 text-center`}>
          {[
            { label: "UN 회원국", value: "193" },
            { label: "아시아 국가", value: "54" },
            { label: "아시아 사무국", value: "0", highlight: true },
            { label: "글로벌 서명", value: "2.5M+" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`font-serif text-5xl font-bold mb-2 ${stat.highlight ? "text-[#775A00]" : "text-[#0A1A3A]"}`}>
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#45464E] uppercase font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className={SECTION_SPACING}>
        <div className={`${CONTAINER_MAX_WIDTH} grid md:grid-cols-2 gap-20 items-center`}>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#E9E8E4] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop" 
                alt="Diplomatic Architecture"
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Wheat Stalk Watermark */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
              <Globe size={400} />
            </div>
          </div>
          
          <div>
            <span className="text-[#0061A5] text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Strategic Sovereignty</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#0A1A3A] font-black leading-tight mb-8 tracking-tighter">
              지정학적 불균형을<br />해소하는 열쇠
            </h2>
            <p className="text-[#45464E] text-lg leading-relaxed mb-10 opacity-90">
              현재 유엔의 주요 사무국은 뉴욕, 제네바, 빈, 나이로비에 위치해 있습니다. 세계 인구의 60%가 거주하는 아시아 대륙은 여전히 국제 행정의 지형에서 거대한 공백으로 남아있습니다.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "아시아 대표성 강화", desc: "54개 아시아 국가의 목소리를 글로벌 의사결정의 중심으로." },
                { title: "한반도 평화의 억지력", desc: "사무국의 존재 자체가 DMZ의 긴장을 완화하는 가장 강력한 평화의 상징." },
                { title: "글로벌 거버넌스 혁신", desc: "동양과 서양을 잇는 새로운 외교적 허브로서의 역할 수행." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-[#C8A44A] font-serif text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#0A1A3A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#45464E] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Bento Grid */}
      <section id="impact" className={`${SECTION_SPACING} bg-[#F5F4F0]`}>
        <div className={CONTAINER_MAX_WIDTH}>
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1A3A] font-bold mb-4">Economic & Social Impact</h2>
            <p className="text-[#0061A5] tracking-widest uppercase text-xs font-bold">유치에 따른 정량적 가치 분석</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-white p-12 md:p-16 flex flex-col justify-between shadow-2xl border border-black/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <TrendingUp size={128} />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A44A] font-black mb-8 block">Annual Value Proposition</span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mt-8 mb-6 overflow-hidden">
                  <span className="font-serif text-3xl md:text-4xl text-[#0A1A3A] font-light">₩</span>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0A1A3A] font-black tracking-tighter leading-none break-all">2,000,000,000,000<span className="text-[#C8A44A]">+</span></h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-[#C8A44A]"></div>
                  <p className="font-serif text-2xl text-[#45464E] font-medium tracking-tight">연간 2조 원 이상의 직접적 경제 효과</p>
                </div>
              </div>
              <div className="mt-16 border-t border-black/5 pt-10">
                <p className="text-[#45464E] leading-relaxed max-w-xl text-lg font-serif italic">
                  "국제회의 유치와 MICE 산업 활성화를 통해 대한민국의 경제 지형을 글로벌 허브로 재편합니다."
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-white p-8 flex-1 shadow-sm border border-black/5">
                <TrendingUp className="text-[#C8A44A] mb-6" size={32} />
                <h4 className="font-serif text-2xl font-bold mb-2 text-[#0A1A3A]">고용 창출</h4>
                <p className="text-4xl font-black text-[#0A1A3A] mb-4">20,000+</p>
                <p className="text-xs text-[#45464E] leading-relaxed">국제기구 전문 인력 및 지원 산업 일자리</p>
              </div>
              <div className="bg-[#0A1A3A] p-8 flex-1 text-white shadow-xl">
                <ShieldCheck className="text-[#C8A44A] mb-6" size={32} />
                <h4 className="font-serif text-2xl font-bold mb-2">국가 리스크 감소</h4>
                <p className="text-sm opacity-80 leading-relaxed">코리아 디스카운트 해소 및 국가 신용 등급 상향의 결정적 계기</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className={SECTION_SPACING}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl text-[#0A1A3A] font-bold mb-4">평화를 향한 여정</h2>
            <div className="w-12 h-0.5 bg-[#C8A44A] mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-black/5 hidden md:block"></div>
            
            {[
              { year: "2014", title: "유치 제안 시작", desc: "DMZ 평화 사무국에 대한 개념이 처음 공식화되었습니다." },
              { year: "2018", title: "국제 사회 공감대 형성", desc: "글로벌 평화 서밋에서 제5사무국 유치 지지 선언." },
              { year: "2024", title: "글로벌 서명 캠페인", desc: "250만 서명 돌파와 국제 NGO들의 공식 지지." },
              { year: "2026", title: "UN 총회 공식 제안", desc: "역사의 한 페이지를 완성하는 최종 결의안 상정 목표.", active: true }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <span className={`font-serif text-xl font-bold mb-2 block ${item.active ? "text-[#C8A44A]" : "text-[#0A1A3A]/40"}`}>{item.year}</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1A3A] mb-3">{item.title}</h3>
                  <p className="text-[#45464E] text-sm leading-relaxed">{item.desc}</p>
                </div>
                
                <div className={`w-10 h-10 rounded-full border-4 border-[#FAF9F5] z-10 flex items-center justify-center ${item.active ? "bg-[#C8A44A]" : "bg-[#0A1A3A]/10"}`}>
                  {item.active && <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>}
                </div>
                
                <div className="flex-1 md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="supporters" className={`${SECTION_SPACING} bg-[#F5F4F0]`}>
        <div className={CONTAINER_MAX_WIDTH}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-[#0A1A3A] font-bold mb-6">지지자들의 목소리</h2>
              <p className="text-[#45464E] leading-relaxed">전 세계 리더들과 시민들이 한반도의 새로운 미래를 위해 함께합니다.</p>
            </div>
            <button className="text-[#C8A44A] font-bold tracking-widest uppercase text-xs flex items-center group">
              View All Supporters <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "제임스 아리스 박사", 
                role: "국제관계 전문가", 
                quote: "DMZ는 동양과 서양을 잇는 유엔 제5사무국의 최적지입니다.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              },
              { 
                name: "박엘레나", 
                role: "평화 이니셔티브 NGO", 
                quote: "아시아의 지속 가능한 미래를 위해서는 한반도의 심장부에 상설 외교 허브가 필요합니다.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              },
              { 
                name: "이승훈", 
                role: "전 UN 사무차장", 
                quote: "제5사무국은 단순한 사무실이 아니라 인류의 회복 탄력성에 대한 증거입니다.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((person, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white overflow-hidden shadow-sm border border-black/5"
              >
                <div className="h-64 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <Quote className="text-[#C8A44A] mb-6 opacity-20" size={32} />
                  <p className="text-[#1B1C1A] font-serif italic mb-8 leading-relaxed">"{person.quote}"</p>
                  <div className="border-t border-black/5 pt-6">
                    <h5 className="font-serif font-bold text-[#0A1A3A]">{person.name}</h5>
                    <span className="text-[10px] tracking-widest uppercase text-[#45464E] font-bold">{person.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Mountain Landscape"
            className="w-full h-full object-cover brightness-[30%]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            역사의 한 페이지를<br />함께 써주세요
          </h2>
          <p className="text-xl text-slate-300 font-serif italic mb-16 opacity-80">
            귀하의 서명이 제5사무국 설립의 초석이 됩니다.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-slate-400 font-bold">성함</label>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A44A] focus:ring-0 text-white py-3 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-slate-400 font-bold">이메일</label>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A44A] focus:ring-0 text-white py-3 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-slate-400 font-bold">국가</label>
              <select className="w-full bg-transparent border-b border-white/20 focus:border-[#C8A44A] focus:ring-0 text-white py-3 transition-all appearance-none">
                <option className="bg-[#0A1A3A]">South Korea</option>
                <option className="bg-[#0A1A3A]">United States</option>
                <option className="bg-[#0A1A3A]">Japan</option>
                <option className="bg-[#0A1A3A]">Germany</option>
              </select>
            </div>
            <div className="md:col-span-3 pt-12 flex justify-center">
              <button className="bg-[#C8A44A] text-[#0A1A3A] px-16 py-6 text-sm font-black tracking-widest uppercase hover:scale-105 transition-transform shadow-2xl">
                서명 제출하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
