export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  detailDescription?: string;
  tags: string[];
  image: string;
  awards?: string[];
  roles?: string[];
  tools?: string[];
  videoUrl?: string;
  gallery?: { id: number; title: string; sub: string; image: string; offset: string; scale?: number }[];
}

export const CATEGORIES = ["ALL", "PRODUCT DESIGN", "ACCOUNTS", "VIDEOS", "GRAPHIC DESIGN", "PHOTOGRAPHY", "PROPOSAL"];

export const ALL_PROJECTS: Project[] = [
  {
    id: "space-app",
    title: "航天星次方小程序",
    category: "PRODUCT DESIGN",
    year: "2023/03",
    description: "解决科普枯燥、资源分散、体验不足、家校脱节四大问题，打造适龄、趣味、权威、轻量化的中小学航天科普工具，兼顾学习、互动、实践。",
    detailDescription: "目标用户|南京中小学生（核心）、家长及教师；\n用户痛点|学生端：航天相关优质资源难获取，缺乏实践机会；\n家长端：自身航天专业知识不足无法辅导孩子；\n教师端：缺少适配中小学课堂的航天备课素材与趣味互动形式；\n产品设计|含精选推荐、科普视频、热门活动、航天商城四大模块；\n商业变现|“热门活动”为航天科普研学营，学生付费参与线下研学；“航天商城”含团队研发的桌面教育卫星等产品；\n相关指标|小程序访问量10w+，粉丝8k+",
    tags: ["小程序", "产品设计", "航天科普"],
    image: "https://gips3.baidu.com/it/u=1198556962,3012656426&fm=3074&app=3074&f=PNG?w=2560&h=1440",
    roles: ["产品设计"],
    awards: ["第九届中国国际“互联网+”大学生创新创业大赛省级一等奖", "第九届中国国际“互联网+”大学生创新创业大赛国家级铜奖"],
    gallery: [
      { id: 1, title: "首页", sub: "精选推荐", image: "https://free.picui.cn/free/2026/04/16/69e0d67fb97d6.png", offset: "-60px" },
      { id: 2, title: "航天商城", sub: "商业化变现", image: "https://free.picui.cn/free/2026/04/16/69e0d67fb378e.png", offset: "60px" },
      { id: 3, title: "科普视频", sub: "解决科普枯燥问题", image: "https://free.picui.cn/free/2026/04/16/69e0d67fa12d7.png", offset: "-30px" },
      { id: 4, title: "热门活动", sub: "线下研学营活动带动付费变现", image: "https://free.picui.cn/free/2026/04/16/69e0d67f9d377.png", offset: "90px" },
    ]
  },
  {
    id: "wechat-ops",
    title: "微信公众号运营",
    category: "ACCOUNTS",
    year: "2025/10-2026/01",
    description: "累计产出日常推文150+篇，季度新增粉丝1w+，累计阅读量25w+，成功打造单篇10万+爆款内容。",
    tags: ["内容策划", "日常运营", "增长优化"],
    image: "https://ask.qcloudimg.com/http-save/developer-news/x9d8qtk6xv.jpeg?",
    roles: ["内容策划", "日常运营", "增长优化"],
    gallery: [
      { id: 1, title: "", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0d6e6ac8af.png", offset: "-60px" },
      { id: 2, title: "", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0d6e67fa57.png", offset: "60px" },
      { id: 3, title: "", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0d6e6b9b6f.png", offset: "-30px" },
      { id: 4, title: "", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0d6e6cfaa7.png", offset: "90px" },
    ]
  },
  {
    id: "social-media",
    title: "自媒体运营 ",
    category: "ACCOUNTS",
    year: "2024/01-至今",
    description: "独立完成选题创作、拍摄、剪辑等工作,三个月实现全域粉丝18w+（30日净增4.2w）；产出多条100w+点赞作品，单条最高280w+，目前累计点赞量1000w+，全网粉丝量18w+；承接品牌合作10单，ToB业务纯利4k+；视频引流私域1w+人，转化产品销售营业额30w+，ToC业务纯利10w+。",
    tags: ["短视频", "内容策划", "增长优化", "私域变现", "抖音/快手/视频号/小红书"],
    image: "http://5b0988e595225.cdn.sohucs.com/images/20180517/5ff31706e4994c1aa045a202c34a61ab.jpeg",
    roles: ["选题创作", "拍摄", "剪辑"],
    gallery: [
      { id: 1, title: "快手", sub: "多条作品播放量1000w+，点赞量100w+", image: "https://free.picui.cn/free/2026/04/16/69e0d745ec036.png", offset: "-72px" },
      { id: 2, title: "抖音", sub: "爆款传播", image: "https://free.picui.cn/free/2026/04/16/69e0d7466ec7f.png", offset: "48px" },
      { id: 3, title: "视频号", sub: "流量转化", image: "https://free.picui.cn/free/2026/04/16/69e0d746a91d9.png", offset: "-24px" },
      { id: 4, title: "小红书", sub: "引流变现", image: "https://free.picui.cn/free/2026/04/16/69e0d746acfd6.png", offset: "84px" },
      { id: 5, title: "视频号", sub: "持续的内容迭代", image: "https://free.picui.cn/free/2026/04/16/69e0d746d7982.png", offset: "6px" },
      { id: 6, title: "快手消息界面", sub: "粉丝活跃度高", image: "https://free.picui.cn/free/2026/04/16/69e0d749bb1f6.png", offset: "54px" },
    ]
  },
  {
    id: "video-short",
    title: "幕起幂生",
    category: "VIDEOS",
    year: "2024/10",
    description: "原创短片 | 自我探索 | 虚拟人设 | 意识流 | 14min",
    tags: ["脚本策划", "导演", "剪辑", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd730b900.png",
    tools: ["PR", "AE"],
    videoUrl: "https://pan.baidu.com/s/1MAYn3j3nn6bSNg2hQZR3DQ?pwd=zice",
    gallery: []
  },
  {
    id: "video-anniversary",
    title: "南航艺术学院二十周年院庆宣传片",
    category: "VIDEOS",
    year: "2022/11",
    description: "南京航空航天大学艺术学院二十周年院庆官方宣传片，展现学院二十载芳华，薪火相传。",
    tags: ["视频主剪", "内容策划", "宣传片"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd731f651.png",
    tools: ["PR"],
    videoUrl: "https://go.plvideo.cn/front/video/preview?vid=r0b6a851fa47cc26c6d22e4052b2a765_r",
    gallery: []
  },
  {
    id: "video-ad",
    title: "敢问“渍”在何方",
    category: "VIDEOS",
    year: "2023/05",
    description: "影视广告 | 雕牌洗衣液 | 60s | 全国高校数字艺术设计大赛国家级二等奖、省级一等奖",
    tags: ["脚本策划", "视频剪辑", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd72ed90d.png",
    tools: ["AE"],
    videoUrl: "https://pan.baidu.com/s/1R3Y3lxZOqdv-MX4yheNglQ?pwd=px5q",
    awards: ["第十一届NCDA未来设计师·全国高校数字艺术设计大赛国家级二等奖", "第十五届全国大学生广告艺术大赛省级三等奖"],
    gallery: []
  },
  {
    id: "video-doc-baiju",
    title: "局韵·撇捺",
    category: "VIDEOS",
    year: "2022/05",
    description: "作品简介 | 讲述南京本土方言说唱艺术——白局 | 9min40s | 第15届中国大学生计算机设计大赛国家级三等奖、省级一等奖",
    tags: ["脚本策划", "文案撰写", "视频剪辑", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd72bcceb.png",
    tools: ["PR", "AE"],
    videoUrl: "https://go.plvideo.cn/front/video/preview?vid=r0b6a851fab77479466884516a93731a_r",
    awards: ["第15届中国大学生计算机设计大赛国家级三等奖", "第15届中国大学生计算机设计大赛省级一等奖"],
    gallery: []
  },
  {
    id: "video-edu-moon",
    title: "玄兔揽月影——天文科普微课堂",
    category: "VIDEOS",
    year: "2023/05",
    description: "作品简介 | 以动画形式创新性地将课程知识融入到探险过程中的科普微课 | 6min | 第16届中国大学生计算机设计大赛国家级三等奖",
    tags: ["脚本策划", "文案撰写", "动画制作", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd72a4634.png",
    tools: ["AE"],
    videoUrl: "https://pan.baidu.com/s/1vrcllCQMHQz9ZO_ZNUCeiw?pwd=1bgy",
    awards: ["第16届中国大学生计算机设计大赛国家级三等奖", "第16届中国大学生计算机设计大赛省级三等奖"],
    gallery: []
  },
  {
    id: "video-variety",
    title: "今天星期八",
    category: "VIDEOS",
    year: "2023/06",
    description: "原创综艺 | 心灵故乡 | 25min22s",
    tags: ["脚本策划", "后期导演", "视频剪辑", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd77268dd.png",
    tools: ["PR", "AE"],
    videoUrl: "https://pan.baidu.com/s/1h_IEZCSoeA3nkMX4ayC6kw?pwd=i57d",
    gallery: []
  },
  {
    id: "video-doc-hohxil",
    title: "爱的契约年",
    category: "VIDEOS",
    year: "2022/07",
    description: "爱在可可西里社会实践纪录片 | 人民日报发布获100w播放量",
    tags: ["脚本策划", "摄影摄像", "特效设计"],
    image: "https://free.picui.cn/free/2026/04/16/69e0dd76ecc7e.png",
    tools: ["AE"],
    videoUrl: "https://pan.baidu.com/s/1jitjgECgEH0tVPskFm0HSA?pwd=5xei",
    gallery: []
  },
  {
    id: "marine-litter",
    title: "Marine Litter: 危海",
    category: "GRAPHIC DESIGN",
    year: "2022/07",
    description: "海洋环保公益作品 | 第八届江苏省科普公益作品大赛三等奖。",
    detailDescription: "本作品以海洋环保为主题，采用分割式的平面设计将画面分成了左右两个海洋生态。右侧是被污染前的正常海洋环境；而左侧则是被垃圾污染后的海洋。左侧的色调采用了暗灰调，展现出天空和海洋的水质已经被污染破坏，生存在其间的鱼的身体也是由各种海洋垃圾构成的，一根根烟架出了鱼骨，毫无生气。值得一提的是，画面并非是五五分，而是左侧的画面大于右侧，暗指目前海洋的生态问题极为严重，呼吁大家要保护海洋，保护我们的生态家园。",
    tags: ["创意策划", "平面设计", "PS"],
    image: "https://picui.ogmua.cn/s1/2026/04/06/69d39c2715050.webp",
    awards: ["第八届江苏省科普公益作品大赛省级三等奖"],
    gallery: [
      { id: 1, title: "", sub: "", image: "https://picui.ogmua.cn/s1/2026/04/06/69d39c2715050.webp", offset: "0px" },
    ]
  },
  {
    id: "photography-works",
    title: "摄影作品",
    category: "PHOTOGRAPHY",
    year: "2024/12",
    description: "记录生活瞬间，捕捉光影艺术。",
    tags: ["摄影", "后期", "光影"],
    image: "https://free.picui.cn/free/2026/04/16/69e0de6d901f2.jpg",
    roles: ["摄影师", "后期修图"],
    gallery: [
      { id: 1, title: "劳动人民", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0de71c1ff6.jpg", offset: "-72px" },
      { id: 2, title: "公园小憩", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0de73157de.jpg", offset: "48px" },
      { id: 3, title: "喜马拉雅山脉", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0de6d901f2.jpg", offset: "-24px", scale: 1.5 },
      { id: 4, title: "纳木措圣象天门", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0de6d6df24.jpg", offset: "84px", scale: 1.5 },
      { id: 5, title: "晚霞", sub: "", image: "https://free.picui.cn/free/2026/04/16/69e0de6d3044d.jpg", offset: "6px", scale: 1.5 },
    ]
  },
  {
    id: "proposal-999",
    title: "999感冒灵策划案",
    category: "PROPOSAL",
    year: "2022/05",
    description: "内容策划 | 需求分析 | 用户画像 | 周边设计。全方位品牌升级与创意营销方案。",
    tags: ["策划案", "品牌营销", "创意设计"],
    image: "https://picui.ogmua.cn/s1/2026/04/06/69d3ac1172925.webp",
    gallery: [
      { id: 1, title: "市场分析", sub: "现状与挑战", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a1f66ccbd.webp", offset: "-60px", scale: 1.5 },
      { id: 2, title: "用户画像", sub: "精准的洞察", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a1f674807.webp", offset: "60px", scale: 1.5 },
      { id: 3, title: "创意策略", sub: "核心的玩法", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a1f6726cc.webp", offset: "-30px", scale: 1.5 },
      { id: 4, title: "视觉设计", sub: "品牌的焕新", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a1f66ca01.webp", offset: "90px", scale: 1.5 },
      { id: 5, title: "媒介投放", sub: "全渠道覆盖", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a1f69669a.webp", offset: "12px", scale: 1.5 },
      { id: 6, title: "预算评估", sub: "落地执行评估", image: "https://picui.ogmua.cn/s1/2026/04/06/69d3a207c0714.webp", offset: "48px", scale: 1.5 },
    ]
  }
];
