import { motion, useScroll, useTransform } from "motion/react";
import { Palette, GraduationCap, Briefcase } from "lucide-react";
import { useRef } from "react";

const skills = [
  { name: "PR", level: "精通" },
  { name: "AE", level: "精通" },
  { name: "PS", level: "精通" },
  { name: "剪映", level: "精通" },
  { name: "Au", level: "熟练" },
  { name: "Word", level: "掌握" },
];

const education = [
  {
    school: "电子科技大学",
    degree: "新闻与传播硕士",
    date: "2024.09 - 2027.07",
    location: "四川成都",
    details: "GPA: 3.9/4.0"
  },
  {
    school: "南京航空航天大学",
    degree: "广播电视学本科",
    date: "2020.09 - 2024.07",
    location: "江苏南京",
    details: "GPA: 4.1/5.0"
  }
];

const internships = [
  {
    company: "萌想科技（实习僧）",
    location: "成都",
    role: "内容运营",
    date: "2025.10 ~ 2026.1",
    points: [
      "公众号日常运营与增长优化：负责“实习僧”“留学僧求职”双公众号矩阵运营，通过每周数据分析优化内容，累计产出日常推文150+篇，带动双账号季度新增粉丝1w+，累计阅读量25w+，实现账号活跃度与粉丝基数的双重提升。",
      "原创内容策划与爆款传播：围绕目标用户求职痛点，独立完成20+篇原创推文策划与撰写，通过A/B测试标题及追踪转化路径优化传播效果，成功打造单篇阅读10万+爆款内容，有效提升账号影响力。"
    ]
  },
  {
    company: "西藏国际传播中心",
    location: "拉萨",
    role: "媒体运营",
    date: "2025.07 ~ 2025.09",
    points: [
      "双账号内容矩阵搭建与爆款打造：同时负责“直播西藏号”与“视界宝藏”两个账号的日常内容运营，针对其不同定位制定内容策略，完成内容创作与发布运营；共主导发布127部作品，实现全平台总播放量515.5w+，总互动6.4w+。",
      "重大事件借势传播与热点策划：在“西藏自治区成立六十周年”（8月21日）重大事件节点，深入拉萨现场进行内容策划；紧密围绕大庆氛围与建设成就，快速响应并产出10余部专题视频，累计播放量140w+，及时向全国传播了现场的喜悦与成就，实践了在热点事件中高效完成内容策划与传播的执行能力。"
    ]
  },
  {
    company: "后浪直播电商科技有限公司",
    location: "南京",
    role: "内容运营",
    date: "2023.06 ~ 2023.09",
    points: [
      "内容产出与运营：从0到1孵化账号，独立完成体育教学选题策划→实拍→剪辑全流程，周均稳定产出5条短视频（累计56条）；根据后台数据优化画面，提升平均播放量至12w+，最高单条播放量58w，3个月内粉丝从0增长至4.2万+，核心用户占比81%。",
      "内容变现：通过账号引流签订南京青少年上门体育私教3单，承接体育品牌推广2单（运动装备测评），视频带货转化 6800元。"
    ]
  },
  {
    company: "南京星次方智能科技有限公司",
    location: "南京",
    role: "内容运营",
    date: "2022.12 ~ 2024.06",
    points: [
      "航天科普平台建设与运营：负责微信公众号“航天星次方”运营，策划航天科普专题10期，阅读完成率85%+，季度增粉15%。",
      "数字产品开发与运营：主持小程序“航天星次方”上线（用户8k+）；统筹“星河与你，伴你成长”发布会直播（峰值1万人）；拍摄并剪辑10余部卫星教学视频，应用于南京三中等多所南京中小学教学，完课率92%。",
      "企业成就可视化：独立完成公司宣传册设计，共18页；所在项目获中国国际“互联网+”创新创业大赛铜奖。"
    ]
  },
  {
    company: "安徽趣图文化传媒有限公司",
    location: "南京",
    role: "内容运营",
    date: "2022.12.22 ~ 2023.2.12",
    points: [
      "文字撰写：独立撰写20+份BP，累计字数20w+，覆盖新消费/知识付费等领域，2份获天使轮融资380w。",
      "内容运营：策划企业服务类短视频50+条，小红书单条视频最高播放28w+，引流创业者社群600+人，转化付费课程89单。"
    ]
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="about-me" ref={containerRef} className="py-32 bg-black px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[400px_1fr] gap-20 items-start">
        
        {/* Left: Sticky Profile */}
        <div className="lg:sticky lg:top-32 space-y-12 pb-20 z-10">
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            {/* Organic Blob Shape Animation */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-white/10 overflow-hidden relative border-4 border-white/10"
            >
              <img 
                src="https://picui.ogmua.cn/s1/2026/04/06/69d35a9f745ee.webp" 
                alt="Eve Liu" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -inset-4 bg-white rounded-full blur-3xl opacity-10 -z-10" />
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-serif text-white">刘雅琪</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              学习能力、实践能力强，熟练运用AE、PR、PS等软件，在运营方面具有丰富经验。
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Palette className="w-3 h-3 text-white group-hover:text-black" />
                  <span className="text-[10px] tracking-widest uppercase font-bold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Experience Content */}
        <div className="space-y-24">
          {/* Education Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <GraduationCap className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-designer font-extrabold text-white uppercase tracking-tighter">Education 学历信息</h3>
            </div>
            <div className="grid gap-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h4 className="text-xl font-serif text-white">{edu.school} | {edu.degree}</h4>
                    <span className="text-xs font-mono text-gray-500">{edu.date}</span>
                  </div>
                  <div className="text-sm text-gray-400 flex justify-between">
                    <span>{edu.details}</span>
                    <span className="text-white/60">{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internship Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-designer font-extrabold text-white uppercase tracking-tighter">Internships 实习经历</h3>
            </div>
            <div className="relative pl-8 border-l border-white/5 space-y-16">
              {internships.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-gray-800 border-4 border-black group-hover:bg-white group-hover:scale-150 transition-all duration-500 z-10" />
                  
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.04]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
                      <div>
                        <h4 className="text-xl font-serif text-white group-hover:text-white transition-colors">
                          {item.company} | {item.location}
                        </h4>
                        <div className="text-sm text-white/60 mt-1 font-medium">{item.role}</div>
                      </div>
                      <span className="text-xs font-mono text-gray-500">{item.date}</span>
                    </div>
                    <ul className="space-y-4">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-sm text-gray-400 leading-relaxed flex gap-3">
                          <span className="text-white/40 mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
