import { motion } from "motion/react";
import { 
  Edit3, 
  Heart, 
  Users, 
  Share2, 
  Globe, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Mail,
  MessageSquare
} from "lucide-react";

const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function SupportMission() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0A1A3A]">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover filter brightness-50 contrast-125" 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Peace Landscape"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3A]/40 to-[#FAF9F5]"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-white text-xs tracking-[0.4em] uppercase mb-6 block opacity-80"
          >
            Campaign for Peace
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-white font-black tracking-tighter leading-tight mb-8"
          >
            평화의 역사를 함께 만드세요
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic"
          >
            당신의 서명은 유엔 제5사무국 유치를 위한 강력한 토대가 됩니다.
          </motion.p>
        </div>
      </section>

      {/* Supporter Counter */}
      <section className="bg-[#FAF9F5] relative -mt-20 z-20 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-20 -bottom-20 opacity-[0.03] rotate-12 transition-transform duration-1000 group-hover:rotate-0">
              <Globe size={400} className="text-[#0A1A3A]" />
            </div>
            <h3 className="font-sans text-[#775A00] text-xs tracking-[0.5em] uppercase mb-4">실시간 캠페인 현황</h3>
            <div className="font-serif text-6xl md:text-9xl font-black text-[#0A1A3A] tracking-tighter mb-4">
              2,543,120
            </div>
            <p className="font-serif text-xl text-[#45464E] italic">전 세계 참여 지지자 수</p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#0061A5]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0061A5]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#0061A5]/30"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participation Bento Grid */}
      <section className="bg-[#F5F4F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Signature Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-white p-12 shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-12">
                <Edit3 className="text-[#0A1A3A]" size={32} />
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0A1A3A]">디지털 서명 (The Digital Seal)</h2>
              </div>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-[#45464E] block mb-2">성함</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-[#0A1A3A] p-0 pb-2 transition-all placeholder:text-black/20" 
                      placeholder="성함을 입력해 주세요" 
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-[#45464E] block mb-2">이메일 주소</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-[#0A1A3A] p-0 pb-2 transition-all placeholder:text-black/20" 
                      placeholder="example@email.org" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-[#45464E] block mb-2">거주 국가</label>
                  <select className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-[#0A1A3A] p-0 pb-2 transition-all">
                    <option>대한민국 (Republic of Korea)</option>
                    <option>미국 (United States)</option>
                    <option>스위스 (Switzerland)</option>
                    <option>프랑스 (France)</option>
                    <option>기타 (Other)</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-[#45464E] block mb-2">지지 메시지</label>
                  <textarea 
                    className="w-full bg-transparent border-0 border-b border-black/10 focus:ring-0 focus:border-[#0A1A3A] p-0 pb-2 transition-all resize-none placeholder:text-black/20" 
                    placeholder="제5사무국 유치를 지지하는 이유를 남겨주세요." 
                    rows={4}
                  ></textarea>
                </div>
                <button className="bg-[#0A1A3A] text-white w-full py-6 font-serif font-bold uppercase tracking-widest hover:bg-[#0061A5] transition-colors shadow-xl">
                  공식 서명 제출하기
                </button>
              </form>
            </motion.div>

            {/* Secondary Options */}
            <div className="md:col-span-5 space-y-8">
              {/* Donation */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0A1A3A] text-white p-10 group cursor-pointer hover:bg-[#0061A5] transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <Heart className="text-[#C8A44A]" size={40} />
                  <ArrowRight className="text-white/30 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
                <h3 className="font-serif text-2xl mb-4">직접 후원하기</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">캠페인의 글로벌 홍보와 운영을 위한 투명한 후원. 모든 기부금은 투명하게 감사됩니다.</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-sans uppercase tracking-widest transition-colors">지금 후원하기</button>
                </div>
              </motion.div>

              {/* Volunteer */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 border-l-4 border-[#775A00] shadow-sm"
              >
                <h3 className="font-serif text-2xl mb-4 text-[#0A1A3A]">청년 리더십 프로그램</h3>
                <p className="font-sans text-sm text-[#45464E] leading-relaxed mb-6">지역 사회의 변화를 이끌어갈 청년 및 시민 활동가 지원을 위한 글로벌 리더십 프로그램에 참여하세요.</p>
                <a className="font-sans text-xs uppercase tracking-widest text-[#775A00] font-bold flex items-center hover:underline" href="#">
                  지원서 작성하기 <ExternalLink className="ml-2" size={14} />
                </a>
              </motion.div>

              {/* Social Share */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 bg-[#FAF9F5] border border-black/5"
              >
                <h3 className="font-sans text-[10px] uppercase tracking-widest text-[#45464E] mb-6 text-center">메시지 공유하기</h3>
                <div className="flex justify-between">
                  {[Globe, MessageSquare, Share2, Mail].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 flex items-center justify-center bg-white shadow-sm hover:bg-[#0061A5] hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                className="w-full h-[600px] object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Unity"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="md:w-1/2">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-sans text-[#775A00] text-xs tracking-[0.5em] uppercase mb-8 block"
              >
                결속의 결과물 (The Outcome of Unity)
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-6xl font-black mb-10 leading-tight text-[#0A1A3A]"
              >
                당신의 참여가 만드는 변화
              </motion.h2>
              <div className="space-y-12">
                {[
                  { title: "외교적 영향력", desc: "유엔 총회에서 제5사무국 유치 목소리를 높이는 실질적인 근거가 됩니다." },
                  { title: "지역 안정", desc: "동북아시아의 평화 허브로서 대한민국이 중추적인 역할을 수행하게 합니다." },
                  { title: "시민의 힘", desc: "모든 서명은 인류 역사상 가장 거대한 평화 운동의 소중한 데이터가 됩니다." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="text-4xl font-serif font-bold text-[#775A00]/20">0{i+1}</div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-2 text-[#0A1A3A]">{item.title}</h4>
                      <p className="text-[#45464E] font-sans">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A1A3A] relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe size={800} className="text-white absolute -right-1/4 -bottom-1/4" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl text-white font-black tracking-tighter mb-12"
          >
            글로벌 미션의 주인공이 되어주세요
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-[#C8A44A] text-[#0A1A3A] font-serif font-bold uppercase tracking-widest px-12 py-6 text-lg hover:bg-[#775A00] transition-all shadow-xl">
              서명 시작하기
            </button>
            <button className="border border-white/30 text-white font-serif font-bold uppercase tracking-widest px-12 py-6 text-lg hover:bg-white/10 transition-all">
              캠페인 역사 보기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
