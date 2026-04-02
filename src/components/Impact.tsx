import { motion } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  ShieldCheck, 
  Briefcase,
  FileText,
  ArrowRight
} from "lucide-react";

const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function Impact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#0A1A3A]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]" 
          src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2070&auto=format&fit=crop" 
          alt="UN General Assembly"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-12 w-full">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-[#C8A44A] text-sm tracking-[0.3em] uppercase mb-6 block font-semibold"
            >
              Campaign Dossier: Impact 001
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-white text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tighter"
            >
              미래를 바꾸는 거대한<br/>발걸음, 기대효과
            </motion.h1>
            <div className="w-24 h-1 bg-[#C8A44A] mb-8"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-200 font-serif text-xl max-w-2xl leading-relaxed opacity-90"
            >
              유엔 제5사무국 유치는 단순한 기구의 설치를 넘어, 대한민국의 국격과 경제의 지형을 근본적으로 재편하는 역사적 전환점이 될 것입니다.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Economic Impact Section (Bento Style) */}
      <section className="bg-white py-32 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-[#0A1A3A] font-bold mb-4">Economic Impact</h2>
            <p className="font-sans text-[#0061A5] tracking-widest uppercase font-semibold text-xs">경제적 파급 효과의 정량적 가치</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Stat Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-[#F5F4F0] p-12 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-sans text-[#45464E] text-xs tracking-widest uppercase font-bold">Annual Value Proposition</span>
                <h3 className="font-serif text-5xl md:text-7xl text-[#0A1A3A] font-black mt-8 mb-4">₩2,000,000,000,000+</h3>
                <p className="font-serif text-2xl text-[#45464E] font-medium">연간 2조 원 이상의 직접적 경제 효과</p>
              </div>
              <div className="mt-16 border-t border-black/5 pt-8">
                <p className="text-[#45464E] leading-relaxed max-w-xl">
                  사무국 유치에 따른 국제회의 유치, 외교관 및 국제기구 종사자 거주, 관광 수요 증대는 국내 GDP 성장의 핵심 동력이 됩니다.
                </p>
              </div>
            </motion.div>

            {/* Side Stats */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 flex-1 shadow-sm border border-black/5"
              >
                <Users className="text-[#C8A44A] mb-6" size={40} />
                <h4 className="font-serif text-2xl font-bold mb-2 text-[#0A1A3A]">고용 창출 효과</h4>
                <p className="text-4xl font-black text-[#0A1A3A] mb-4">20,000+</p>
                <p className="text-sm text-[#45464E] leading-relaxed">국제기구 전문 인력 및 관련 MICE 산업 지원을 통한 고부가가치 일자리 창출</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0A1A3A] p-8 flex-1 text-white shadow-xl"
              >
                <Briefcase className="text-[#C8A44A] mb-6" size={40} />
                <h4 className="font-serif text-2xl font-bold mb-2">MICE 산업 도약</h4>
                <p className="text-lg opacity-80 leading-relaxed">세계 최대 규모의 국제 컨퍼런스 정례화 및 마이스 산업 인프라의 글로벌 표준화</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Impact */}
      <section className="bg-[#F5F4F0] py-32 px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[#0061A5] text-sm tracking-[0.3em] uppercase mb-4 block font-bold"
            >
              Strategic Sovereignty
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#0A1A3A] font-bold leading-tight mb-12"
            >
              아시아를 넘어 세계의 중심으로,<br/>외교적 위상 제고
            </motion.h2>
            <div className="space-y-12">
              {[
                { 
                  num: "01", 
                  title: "글로벌 거버넌스의 아시아 축 형성", 
                  desc: "뉴욕, 제네바, 빈, 나이로비를 잇는 다섯 번째 글로벌 허브로서 아시아의 목소리를 대변하는 주도적 역할을 수행합니다." 
                },
                { 
                  num: "02", 
                  title: "K-디플로머시의 완성", 
                  desc: "한국이 단순히 국제 규범을 따르는 국가를 넘어, 규범을 제정하고 분쟁을 중재하는 핵심 의사결정 국가로 도약합니다." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-[#C8A44A] text-3xl font-serif font-bold">{item.num}</div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-[#0A1A3A]">{item.title}</h4>
                    <p className="text-[#45464E] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-white shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Diplomatic Architecture" 
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Peace & Security */}
      <section className="bg-white py-32 px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1A3A] text-white p-12 md:p-24 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0061A5] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-[#C8A44A] text-xs tracking-widest uppercase mb-6 block font-bold">Geopolitical Stability</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">DMZ, 긴장의 공간에서<br/>평화의 복도로</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12 opacity-90 font-serif italic">
                유엔 사무국의 존재 자체가 가장 강력한 억지력이 됩니다. 한반도의 지정학적 리스크(Korea Discount)를 근본적으로 해소하고 국제 사회의 안전 보장을 직접적으로 이끌어냅니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
                <div>
                  <h5 className="font-sans text-[#C8A44A] text-sm font-bold uppercase mb-2">Risk Mitigation</h5>
                  <p className="text-sm opacity-70">국가 신용 등급 상향 조정 및 외국인 투자 환경의 질적 개선</p>
                </div>
                <div>
                  <h5 className="font-sans text-[#C8A44A] text-sm font-bold uppercase mb-2">Symbolic Peace</h5>
                  <p className="text-sm opacity-70">분쟁의 상징이었던 접경 지역의 세계 평화 성지화</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAF9F5] py-32 px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 flex justify-center">
            <FileText className="text-[#C8A44A]" size={64} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0A1A3A] font-black mb-6 leading-tight">이 역사적 변화에 함께해 주세요</h2>
          <p className="text-[#45464E] text-lg mb-12 leading-relaxed">
            우리의 목소리가 모여 세계의 지도를 바꿉니다.<br/>UN 제5사무국 유치를 위한 지지 서명에 동참하여 힘을 보태주십시오.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#0A1A3A] text-white px-12 py-5 text-sm tracking-widest uppercase font-bold hover:bg-[#0061A5] transition-all flex items-center justify-center group shadow-xl">
              온라인 지지 서명하기 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="border border-black/10 text-[#0A1A3A] px-12 py-5 text-sm tracking-widest uppercase font-bold hover:bg-black/5 transition-all">
              상세 제안서 다운로드
            </button>
          </div>
        </div>
        {/* Watermark */}
        <div className="absolute -bottom-20 -left-20 opacity-[0.02] pointer-events-none select-none">
          <TrendingUp size={400} className="text-[#0A1A3A]" />
        </div>
      </section>
    </>
  );
}
