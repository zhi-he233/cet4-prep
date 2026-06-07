// 词库数据（从旧文件提取）
const WORDS = [
  {
    "word": "peril",
    "phonetic": "ˈper ə l",
    "meaning": "n .   严重危险",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "experienced",
    "phonetic": "ɪ kˈsp ɪə ri ə nst",
    "meaning": "a .   有经验的 ； 熟练的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confess",
    "phonetic": "k ə nˈfes",
    "meaning": "v .   承认 ； 坦白",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "murder",
    "phonetic": "ˈm ɜ :d ə (r)",
    "meaning": "n . &   v .   谋杀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mortgage",
    "phonetic": "ˈm ɔ :g ɪ d ʒ",
    "meaning": "n .   按揭贷款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cite",
    "phonetic": "sa ɪ t",
    "meaning": "v .   引用 ； 列举",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "account",
    "phonetic": "ə ˈ ka ʊ nt",
    "meaning": "n .   账户；描述   v .   认为是  ☞ accountable [ ə ˈ ka ʊ nt ə bl] a .   负责任的  ☞ discount [ˈd ɪ ska ʊ nt] n .   折扣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "charge",
    "phonetic": "t ʃɑ :d ʒ",
    "meaning": "n .   收费；控告；掌管；电荷   v .   收费 ； 控诉 ； 充电",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "organism",
    "phonetic": "ˈ ɔ :g ə n ɪ z ə m",
    "meaning": "n .   有机体 ； 生物体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "journalism",
    "phonetic": "ˈd ʒɜ :n ə l ɪ z ə m",
    "meaning": "n .   新闻业  ☞ journal [ˈd ʒɜ :nl] n.   杂志；期刊；日记",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "capital",
    "phonetic": "ˈkæp ɪ tl",
    "meaning": "n .   资本；首都；大写字母",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "credit",
    "phonetic": "ˈkred ɪ t",
    "meaning": "n .   信用；信用贷款  ☞ incredible [ ɪ nˈkred ə bl] a .   难以置信的；极好的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "civil",
    "phonetic": "ˈs ɪ vl",
    "meaning": "a .   公民的；民事的  ☞ citizen [ˈs ɪ t ɪ zn] n .   市民  ☞ civilization [ˌs ɪ v ə la ɪ ˈ ze ɪʃ n] n .   文明；开化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "campaign",
    "phonetic": "kæmˈpe ɪ n",
    "meaning": "n .  1500  活动；战役\n2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "campus",
    "phonetic": "ˈkæmp ə s",
    "meaning": "n .   校园",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "barrier",
    "phonetic": "ˈbæri ə (r)",
    "meaning": "n .   屏障；障碍",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "squeeze",
    "phonetic": "skwi:z",
    "meaning": "v .   挤；压",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aptitude",
    "phonetic": "ˈæpt ɪ tju:d",
    "meaning": "n .   能力；天赋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adapt",
    "phonetic": "ə ˈ dæpt",
    "meaning": "v .   改编；适应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "phase",
    "phonetic": "fe ɪ z",
    "meaning": "n .   阶段；时期",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cabinet",
    "phonetic": "ˈkæb ɪ n ə t",
    "meaning": "n .   橱柜；内阁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blanket",
    "phonetic": "ˈblæŋk ɪ t",
    "meaning": "n .   毛毯   a .   总括的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bundle",
    "phonetic": "ˈb ʌ ndl",
    "meaning": "n .   捆；一批",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sparkle",
    "phonetic": "ˈsp ɑ:kl",
    "meaning": "n .   光；活力； vi .   闪耀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "startle",
    "phonetic": "ˈst ɑ:tl",
    "meaning": "vt .   使 惊吓",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "packet",
    "phonetic": "ˈpæk ɪ t",
    "meaning": "n .   小包",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scenery",
    "phonetic": "ˈsi:n ə ri",
    "meaning": "n .   风景；舞台布景",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anchor",
    "phonetic": "ˈæŋk ə (r)",
    "meaning": "n .   锚   v .   抛锚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "custom",
    "phonetic": "ˈk ʌ st ə m",
    "meaning": "n .   风俗；习惯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "counter",
    "phonetic": "ˈka ʊ nt ə (r)",
    "meaning": "n .   柜台 ；对立面   a.   相反的   v .   反对  List 2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shelter",
    "phonetic": "ˈ ʃ elt ə (r)",
    "meaning": "n .   隐蔽处   v .   遮挡 ； 保护",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hinder",
    "phonetic": "ˈh ɪ nd ə (r)",
    "meaning": "vt .   妨碍；阻碍",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contend",
    "phonetic": "k ə nˈtend",
    "meaning": "v.   声称 ； 主张；竞争",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "content",
    "phonetic": "'k ɒ ntent",
    "meaning": "n.   内容；目录   [ k ə nˈtent] a.   满意的   v .   使满意\n3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "imply",
    "phonetic": "ɪ mˈpla ɪ",
    "meaning": "v.   暗示；说明  ☞ implicit [ ɪ m ˈ pl ɪ s ɪ t ] a.   含蓄的；隐含的  ☞ implication   [ˌ ɪ mpl ɪ ˈ ke ɪʃ n] n.   可能的影响；暗指；牵涉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flexible",
    "phonetic": "ˈfleks ə bl",
    "meaning": "a.   灵活的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "debate",
    "phonetic": "d ɪ ˈ be ɪ t",
    "meaning": "n   &   v .   讨论；辩论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "declare",
    "phonetic": "d ɪ ˈ kle ə (r)",
    "meaning": "v .   声明；宣告",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "detail",
    "phonetic": "ˈdi:te ɪ l",
    "meaning": "n .   细节；详情",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "determine",
    "phonetic": "d ɪ ˈ t ɜ :m ɪ n",
    "meaning": "v .   决定；决心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "devote",
    "phonetic": "[d ɪ ˈ v əʊ t",
    "meaning": "vt .   奉献；专用于  ☞ devotion [d ɪ ˈ v əʊʃ n] n .   奉献；忠诚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decline",
    "phonetic": "d ɪ ˈ kla ɪ n",
    "meaning": "v. &   n .   减少；下落",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "medium",
    "phonetic": "ˈmi:di ə m",
    "meaning": "n .   媒介； a .   中等的  ☞ immediate [ ɪ ˈ mi:di ə t ] a .   立即的；目前的  ☞ intermediate [ˌ ɪ nt ə ˈ mi:di ə t ] a .   中间的；中级的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "command",
    "phonetic": "k ə ˈ m ɑ:nd",
    "meaning": "vt .   要求",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recommend",
    "phonetic": "ˌrek ə ˈ mend",
    "meaning": "vt .   推荐；劝告",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "minister",
    "phonetic": "ˈm ɪ n ɪ st ə (r)",
    "meaning": "n .   部长；大臣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "minor",
    "phonetic": "ˈma ɪ n ə (r)",
    "meaning": "a .   较小的；次要的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "complex",
    "phonetic": "ˈk ɒ mpleks",
    "meaning": "a.   复杂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prominent",
    "phonetic": "ˈpr ɒ m ɪ n ə nt",
    "meaning": "a .   突 出的；杰出的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "edition",
    "phonetic": "ɪ ˈ d ɪʃ n",
    "meaning": "n .   版本  ☞ editor [ˈed ɪ t ə (r)] n .   编辑；编者\n4",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "radical",
    "phonetic": "ˈræd ɪ kl",
    "meaning": "a .   激进的；根本的   n .   激进分",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ample",
    "phonetic": "ˈæmpl",
    "meaning": "a .   充足的 ； 足够的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "voyage",
    "phonetic": "ˈv ɔɪɪ d ʒ",
    "meaning": "vi . &   n .   航行；航海",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bonus",
    "phonetic": "ˈb əʊ n ə s",
    "meaning": "n .   奖金；红利",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "migrate",
    "phonetic": "ma ɪ ˈ gre ɪ t",
    "meaning": "v.   迁徙；移居  ☞ m igrant [ˈma ɪ gr ə nt] n.   候鸟 ；移居者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obese",
    "phonetic": "əʊ ˈ bi:s",
    "meaning": "a .   肥胖的；病态肥胖的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bid",
    "phonetic": "b ɪ d",
    "meaning": "v . &   n .   出价；投标；努力争取",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "glory",
    "phonetic": "ˈgl ɔ :ri",
    "meaning": "n .   荣誉；光荣；荣耀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "judgement",
    "phonetic": "ˈd ʒʌ d ʒ m ə nt",
    "meaning": "( 亦作   judgment) n .   判断；审判；意见",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liquid",
    "phonetic": "ˈl ɪ kw ɪ d",
    "meaning": "n .   液体   a .   液体的  List 3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diminish",
    "phonetic": "d ɪ ˈ m ɪ n ɪʃ",
    "meaning": "v.   减少；降低",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "delete",
    "phonetic": "d ɪ ˈ li:t",
    "meaning": "vt .   删 除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "delighted",
    "phonetic": "d ɪ ˈ la ɪ t ɪ d",
    "meaning": "a .   高兴的 ； 快乐的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deny",
    "phonetic": "d ɪ ˈ na ɪ",
    "meaning": "vt .   否定 ； 否认；拒绝",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "department",
    "phonetic": "d ɪ ˈ p ɑ:tmənt",
    "meaning": "n .   部门；部 ； 司",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deposit",
    "phonetic": "d ɪ ˈ p ɒ z ɪ t",
    "meaning": "v .   储存；放置   n .   订金；存",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "despite",
    "phonetic": "d ɪ ˈ spa ɪ t",
    "meaning": "prep .   尽管；不管",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "domestic",
    "phonetic": "d ə ˈ mest ɪ k",
    "meaning": "a .   国内的；家庭的；驯养的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "partial",
    "phonetic": "ˈp ɑ:ʃl",
    "meaning": "a .   部分的；偏袒的\n5",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dep",
    "phonetic": "",
    "meaning": "a rt [d ɪ ˈ p ɑ:t] v .   离开 ； 出发 ； 启程；离职  ☞ departure [d ɪ ˈ p ɑ:tʃə(r) ] n .   离开；启程  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "derive",
    "phonetic": "diˈraiv",
    "meaning": "vi .   起源   ； 获得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deprive",
    "phonetic": "d ɪ ˈ pra ɪ v",
    "meaning": "v .   剥夺；使丧失  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "particle",
    "phonetic": "ˈp ɑ:tɪkl",
    "meaning": "n .   粒子 ； 微粒  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "particularly",
    "phonetic": "p ə ˈ t ɪ kj ə l ə li",
    "meaning": "ad .   特别地 ； 尤其 ； 格外",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "circuit",
    "phonetic": "ˈs ɜ :k ɪ t",
    "meaning": "n .   环行；巡回；电路",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "circul",
    "phonetic": "",
    "meaning": "ar [ˈs ɜ :k ɪ la(r) ] a .   圆的；环形的；循环的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "circulate",
    "phonetic": "ˈs ɜ :kj ə le ɪ t",
    "meaning": "v .   ( 使）循环   vi .   流传",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extend",
    "phonetic": "ɪ kˈstend",
    "meaning": "v.   延长 ； 扩大  ☞ extension   [ ɪ kˈsten ʃ n] n.   扩大 ； 延伸  ☞ extensive   [ ɪ kˈstens ɪ v] a.   广阔的；广泛的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comparative",
    "phonetic": "k ə mˈpær ə t ɪ v",
    "meaning": "a .   比较的；相对的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appear",
    "phonetic": "ə ˈ p ɪə (r)",
    "meaning": "v .   出现  ☞ appearance   [ ə ˈ p ɪə r ə ns] n .   外貌；到来",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "parade",
    "phonetic": "p ə ˈ re ɪ d",
    "meaning": "n .   游行；检阅   vi .   游行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "separate",
    "phonetic": "ˈsep ə re ɪ t",
    "meaning": "a .   单独的；分开的；不同的   v .   ( 使）分离",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "parallel",
    "phonetic": "ˈpær ə lel",
    "meaning": "a .   平行的；类似的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rhythm",
    "phonetic": "ˈr ɪ ð ə m",
    "meaning": "n .   节奏；韵律",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drawback",
    "phonetic": "ˈdr ɔ :bæk",
    "meaning": "n .   缺点 ； 缺陷；不利条件",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "graceful",
    "phonetic": "ˈgre ɪ sfl",
    "meaning": "a .   优美的 ； 优雅的；得体的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grat",
    "phonetic": "",
    "meaning": "itude [ˈgræt ɪ tju:d ] n .   感谢 ； 感激\n6",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "peculiar",
    "phonetic": "p ɪ ˈ kju:li ə (r)",
    "meaning": "a .   奇怪的；特殊的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "guidance",
    "phonetic": "ˈga ɪ dns",
    "meaning": "n .   指导 ； 引导",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "significance",
    "phonetic": "s ɪ gˈn ɪ f ɪ k ə ns",
    "meaning": "n .   意义；重要性  ☞ significance   [s ɪ gˈn ɪ f ɪ k ə ns]   n.   重要性  List 4",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tolerate",
    "phonetic": "ˈt ɒ l ə re ɪ t",
    "meaning": "vt .   忍受 ； 容忍；宽恕  ☞ tolerance [ˈt ɒ l ə r ə ns ] n .   忍受 ； 宽 容 ；耐性  ☞ tolerant [ˈt ɒ l ə r ə nt]   a .   容忍的 ； 宽容的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assistance",
    "phonetic": "ə ˈ s ɪ st ə ns",
    "meaning": "n .   协助 ； 援助",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prohibit",
    "phonetic": "pr ə ˈ h ɪ b ɪ t",
    "meaning": "vt .   禁止；阻止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prompt",
    "phonetic": "pr ɒ mpt",
    "meaning": "a .   迅迷的 ； 立刻的   v .   敦促；激起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "propose",
    "phonetic": "pr ə ˈ p əʊ z",
    "meaning": "vt .   提议   v .   求婚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "protest",
    "phonetic": "ˈpr əʊ test",
    "meaning": "v . & n.   抗议",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "provided",
    "phonetic": "pr ə ˈ va ɪ d ɪ d",
    "meaning": "conj .   以 …… 为条件；假如",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "provision",
    "phonetic": "pr ə ˈ v ɪʒ n",
    "meaning": "n .   预备；供应；规定 ； 条款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proclaim",
    "phonetic": "pr ə ˈ kle ɪ m",
    "meaning": "vt .   宣布；表明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "provoke",
    "phonetic": "pr ə ˈ v əʊ k",
    "meaning": "vt .   激怒；引起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "purchase",
    "phonetic": "ˈp ɜ :t ʃə s",
    "meaning": "vt . &   n .   购买",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pursue",
    "phonetic": "p ə ˈ sju:",
    "meaning": "vt .   追求 ；追赶  ☞   pursuit [p ə ˈ sju:t ] n .   追赶 ； 追求；爱好",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "defeat",
    "phonetic": "d ɪ ˈ fi:t",
    "meaning": "vt .   战胜 ； 击败   n .   失败\n7",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deceive",
    "phonetic": "d ɪ ˈ si:v",
    "meaning": "vt .   欺骗；辜负  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "defy",
    "phonetic": "d ɪ ˈ fa ɪ",
    "meaning": "vt .   反抗；使不能",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anxious",
    "phonetic": "ˈæŋk ʃə s",
    "meaning": "a .   焦 虑的；渴望的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "harmony",
    "phonetic": "ˈh ɑ:məni",
    "meaning": "n.   融洽；和谐  ☞ harmonious [h ɑ:ˈməʊniəs ] a .   和谐的；协调的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "infect",
    "phonetic": "ɪ nˈfekt",
    "meaning": "v.   传染  ☞ infectious [ ɪ nˈfek ʃə s ] a .   传染的；有感染力的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spacious",
    "phonetic": "ˈspe ɪʃə s",
    "meaning": "a .   宽敞的 ； 广阔的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "co",
    "phonetic": "",
    "meaning": "nscientious [ˌ k ɒ n ʃ iˈen ʃə s ] a .   勤勉认真的 ； 一丝不苟的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prosperous",
    "phonetic": "ˈpr ɒ sp ə r ə s",
    "meaning": "a .   繁荣的  ☞ prosperity [pr ɒ ˈ sper ə ti ] n .   繁荣；昌盛 ； 兴旺",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ambitious",
    "phonetic": "æmˈb ɪʃə s",
    "meaning": "a .   有雄心壮志的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obvious",
    "phonetic": "ˈ ɒ bvi ə s",
    "meaning": "a .   明显的 ； 显而易见的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tedious",
    "phonetic": "ˈtiːdi ə s",
    "meaning": "a .   冗长乏味的 ； 沉闷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conscious",
    "phonetic": "ˈk ɒ n ʃə s",
    "meaning": "a .   意识到的；有意的 ； 刻意的  ☞ consciousness   [ˈk ɒ n ʃə sn ə s] n.   意识；观念",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "des",
    "phonetic": "",
    "meaning": "pair [d ɪ ˈ spe ə (r) ] n . &   v.   绝望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "detective",
    "phonetic": "d ɪ ˈ tekt ɪ v",
    "meaning": "n .   侦探   a .   侦探的  ☞ detect   [d ɪ ˈ tekt] v.   发现 ； 查明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decay",
    "phonetic": "d ɪ ˈ ke ɪ",
    "meaning": "n . &   v .   衰退；腐烂 ； 腐朽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tremendous",
    "phonetic": "tr ə ˈ mend ə s",
    "meaning": "a .   巨大的；极大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marvelous",
    "phonetic": "ˈm ɑːvələs",
    "meaning": "a .   让人惊讶的；极好的\n8  List 5",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jealous",
    "phonetic": "ˈd ʒ el ə s",
    "meaning": "a .   妒忌的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "num",
    "phonetic": "",
    "meaning": "erous [ˈnjuːm ə r ə s ] a .   为数众多的 ； 许多的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "poison",
    "phonetic": "ˈp ɔɪ zn",
    "meaning": "n.   毒药  ☞ poisonous [ˈp ɔɪ z ə n ə s ] a .   有毒的 ； 有害的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "demonstrate",
    "phonetic": "ˈdem ə nstre ɪ t",
    "meaning": "v.   证明 ； 证实",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deputy",
    "phonetic": "ˈdepjuti",
    "meaning": "n .   副手 ； 代理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "continuous",
    "phonetic": "k ə nˈt ɪ nju ə s",
    "meaning": "a .   连续不断的 ； 持续的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enormous",
    "phonetic": "ɪ ˈ n ɔ ːm ə s",
    "meaning": "a .   巨大的 ； 庞大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "authority",
    "phonetic": "ɔ :ˈ θ ɒ r ə ti",
    "meaning": "n .   权力 ； 权威",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aware",
    "phonetic": "ə ˈ we ə (r)",
    "meaning": "a .   意识到的 ； 知道的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ashamed",
    "phonetic": "ə ˈ ʃ e ɪ md",
    "meaning": "a .   羞愧的 ； 惭愧的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "amuse",
    "phonetic": "ə ˈ mju:z",
    "meaning": "vt .   逗乐；娱乐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deliberate",
    "phonetic": "d ɪ ˈ l ɪ b ə r ə t",
    "meaning": "a .   故意的；不慌不忙的   v .   仔细考虑  ☞ deliberately [d ɪ 'liberetl ɪ ] ad .   故意；不慌不忙地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "award",
    "phonetic": "ə ˈ w ɔ :d",
    "meaning": "n .   奖品 ； 奖金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deteriorate",
    "phonetic": "d ɪ ˈ t ɪə ri ə re ɪ t",
    "meaning": "v .   恶化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arise",
    "phonetic": "ə ˈ ra ɪ z",
    "meaning": "vi .   出现；由 …… 引起；起来",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arouse",
    "phonetic": "ə ˈ ra ʊ z",
    "meaning": "vt .   唤醒；引起 ； 激起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "concept",
    "phonetic": "ˈk ɒ nsept",
    "meaning": "n .   概念 ； 观念 ； 理念",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "avenue",
    "phonetic": "ˈævinju:",
    "meaning": "n .   大街；林荫道；途径\n9",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "capable",
    "phonetic": "ˈke ɪ p ə bl",
    "meaning": "a .   有能力的 ； 有才能的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "occupy",
    "phonetic": "ˈ ɒ kjupa ɪ",
    "meaning": "vt .   占领；占用  ☞   occupation [ˌ ɒ kjuˈpe ɪʃ n ] n .   占领；职业",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "perceive",
    "phonetic": "p ə ˈ si:v",
    "meaning": "vt .   理解；察觉 ； 感觉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reception",
    "phonetic": "r ɪ ˈ sep ʃ n",
    "meaning": "n .   接待（处）；招待会；接收",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "defense",
    "phonetic": "d ɪ 'fens",
    "meaning": "n .   防卫 ； 保护；辨护",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "occasion",
    "phonetic": "ə ˈ ke ɪʒ n",
    "meaning": "n .   时机；场合  ☞   occasional [ ə ˈ ke ɪʒə nl ] a .   偶然的；临时的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cable",
    "phonetic": "ˈke ɪ bl",
    "meaning": "n .   缆 ； 索；电缆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regio",
    "phonetic": "",
    "meaning": "n [ˈri:d ʒə n ] n .   地区 ； 地带；领城",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regulate",
    "phonetic": "ˈregjule ɪ t",
    "meaning": "vt .   管理；控制；调整 ； 调节",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "royal",
    "phonetic": "ˈr ɔɪə l",
    "meaning": "a .   王室的；皇家的；盛大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bankrupt",
    "phonetic": "ˈbæŋkr ʌ pt",
    "meaning": "a .   & n. & v.   倒闭  3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "corrupt",
    "phonetic": "k ə ˈ r ʌ pt",
    "meaning": "a .   贪 污的   vt .   使腐化 ； 使 堕落  List 6",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disrupt",
    "phonetic": "dis'r ʌ pt",
    "meaning": "vt .   扰乱；使中断",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interrupt",
    "phonetic": "ˌ ɪ nt ə ˈ r ʌ pt",
    "meaning": "v .   打断 ； 打 扰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "moral",
    "phonetic": "ˈ m ɒ r ə l",
    "meaning": "a .   道德的 ； 合乎道德的   n .   道德；寓意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "orbit",
    "phonetic": "ˈ ɔ :b ɪ t",
    "meaning": "vt .   环绕 …… 运行   n .   轨道",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "optimism",
    "phonetic": "ˈ ɒ pt ɪ m ɪ z ə m",
    "meaning": "n .   乐观（主义）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "antique",
    "phonetic": "ænˈti:k",
    "meaning": "n .   文物   a .   陈旧的\n10",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nourish",
    "phonetic": "ˈn ʌ r ɪʃ",
    "meaning": "vt .   滋养；养育",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inferior",
    "phonetic": "ɪ nˈf ɪə ri ə (r)",
    "meaning": "a .   下等的；级别低的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "optional",
    "phonetic": "ˈ ɒ p ʃə nl",
    "meaning": "a .   可选择的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adoption",
    "phonetic": "ə ˈ d ɒ p ʃ n",
    "meaning": "n .   采用；收养",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "geology",
    "phonetic": "ˌd ʒ i: ə 'l ɒ d ʒɪ",
    "meaning": "n .   地质学；地质",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sensible",
    "phonetic": "ˈsens ə bl",
    "meaning": "a .   明智的； 意识到的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sensitive",
    "phonetic": "ˈsens ə t ɪ v",
    "meaning": "a .   敏感的；灵敏的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consent",
    "phonetic": "k ə nˈsent",
    "meaning": "n . &   v.   同意 ； 赞成  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resent",
    "phonetic": "reˈsent",
    "meaning": "vt .   愤恨 ； 怨恨  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "represent",
    "phonetic": "repr ɪ 'zent",
    "meaning": "vt .   代表；陈述  ☞ representative [ˌre pr ɪ 'ze ntat ɪ v ] a .   典型的 ； 有代表性的   n .   代表",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fraction",
    "phonetic": "ˈfræk ʃ n",
    "meaning": "n .   小部分；分数  ☞ fragment [fragmant ]   n .   碎片；片段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "principal",
    "phonetic": "p'r ɪ ns ə pl",
    "meaning": "a .   主要的   n .   校长",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "principle",
    "phonetic": "ˈpr ɪ ns ə pl",
    "meaning": "n .   原则",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "premier",
    "phonetic": "ˈpremi ə (r)",
    "meaning": "n .   首相   a .   首要的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "preferable",
    "phonetic": "ˈprefr ə bl",
    "meaning": "a .   更可取的 ； 更好的  ☞ prefer enc e   [ˈpref r ə ns]   n .   偏爱， 喜爱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prel",
    "phonetic": "",
    "meaning": "iminary [pr ɪ ˈ l ɪ m ɪ n ə ri ] a .   预备的；初步的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prejudice",
    "phonetic": "ˈpred ʒ ud ɪ s",
    "meaning": "n .   偏见 ； 成见",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pretend",
    "phonetic": "pr ɪ 'tend",
    "meaning": "v .   假装 ； 装作",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prevent",
    "phonetic": "pr ɪ 'vent",
    "meaning": "vt .   预防 ； 防止\n11",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prevail",
    "phonetic": "pr ɪ ˈ ve ɪ l",
    "meaning": "vi .   优胜；流行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "precise",
    "phonetic": "pr ɪ ˈ sa ɪ s",
    "meaning": "a .   精确的 ；清晰的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "invade",
    "phonetic": "ɪ nˈve ɪ d",
    "meaning": "v .   入侵   vt .   干扰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "index",
    "phonetic": "ɪ n ˈ deks",
    "meaning": "n .   索引；指标",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indicate",
    "phonetic": "ˈ ɪ nd ɪ ke ɪ t",
    "meaning": "vt .   表明；暗示  List 7",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thoughtful",
    "phonetic": "ˈ θ ɔ :tfl",
    "meaning": "a .   沉思的；体贴的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "considerate",
    "phonetic": "k ə nˈs ɪ d ə r ə t",
    "meaning": "a.   体贴的 ； 体谅的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "faithful",
    "phonetic": "ˈfe ɪ θ fl",
    "meaning": "a .   忠诚的；如实的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fruitful",
    "phonetic": "fru:tfl",
    "meaning": "a .   成果丰硕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "calendar",
    "phonetic": "ˈkæl ɪ nd ə (r)",
    "meaning": "n .   日历",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "schol",
    "phonetic": "",
    "meaning": "ar [ˈsk ɒ l ə (r)]   n .   学者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lunar",
    "phonetic": "ˈlu:n ə (r)",
    "meaning": "a .   月亮的；阴历的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plentiful",
    "phonetic": "'plent ɪ fl",
    "meaning": "a .   丰富的 ； 富裕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "skillful",
    "phonetic": "'sk ɪ lfl",
    "meaning": "a .   灵巧的 ； 熟练的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dynamic",
    "phonetic": "da ɪ ˈ næm ɪ k",
    "meaning": "a . &   n.   动力的；有活力 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dramatic",
    "phonetic": "dr ə ˈ mæt ɪ k",
    "meaning": "a .   戏剧的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "magnetic",
    "phonetic": "mægˈnet ɪ k",
    "meaning": "a.   有磁性的；有吸引力的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alcoho",
    "phonetic": "",
    "meaning": "l   [ˌælk ə ˈ h ɒ l ]   n.   酒精",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diplomatic",
    "phonetic": "ˌd ɪ pl ə ˈ mæt ɪ k",
    "meaning": "a .   外交上的；灵活变通的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "idealistic",
    "phonetic": "ˌa ɪ di ə ˈ l ɪ st ɪ k",
    "meaning": "a .   理想主义的；空想的\n12",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strategic",
    "phonetic": "str ə ˈ ti:d ʒɪ k",
    "meaning": "a .   战略性的；关键的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ethic",
    "phonetic": "ˈe θ ɪ k",
    "meaning": "n .   道德规范；伦理学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pessimistic",
    "phonetic": "ˌpes ɪ ˈ m ɪ st ɪ k",
    "meaning": "a .   悲观的 ； 悲观主义的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "romantic",
    "phonetic": "r əʊ ˈ mænt ɪ k",
    "meaning": "a .   浪漫的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "academi",
    "phonetic": "",
    "meaning": "c [ ˌ æk ə ˈ dem ɪ k ] a .   学术的；学院的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "characteristic",
    "phonetic": "ˌkær ə kt ə ˈ r ɪ st ɪ k",
    "meaning": "n .   特征   a.   典型的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cubic",
    "phonetic": "ˈkju:b ɪ k",
    "meaning": "a .   立方形的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brochure",
    "phonetic": "ˈbr əʊʃə (r)",
    "meaning": "n .   手册 ； 小册子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assure",
    "phonetic": "ə ˈ ʃʊə (r)",
    "meaning": "vt .   使确信",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ensure",
    "phonetic": "ɪ n' ʃʊə (r)",
    "meaning": "vt .   保证",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insure",
    "phonetic": "ɪ nˈ ʃʊə (r)",
    "meaning": "v .   投保；承保  ☞ insurance [ ɪ nˈ ʃʊə r ə ns ]   n .   保险；保险费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "panel",
    "phonetic": "ˈpænl",
    "meaning": "n .   嵌板 ； 镶板；专家资讯组",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "punctual",
    "phonetic": "ˈp ʌ ŋkt ʃ u ə l",
    "meaning": "a.   按时的 ； 准时的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "input",
    "phonetic": "ˈ ɪ np ʊ t",
    "meaning": "n . &   v.   输入 ; 投入资源",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "install",
    "phonetic": "ɪ nˈst ɔ :l",
    "meaning": "vt .   安装 ；任命  L ist 8",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inclusive",
    "phonetic": "ɪ nˈklu:s ɪ v",
    "meaning": "a.   包含广阔的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instant",
    "phonetic": "ˈ ɪ nst ə nt",
    "meaning": "a .   立即的   n .   瞬间",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instinct",
    "phonetic": "ˈ ɪ nst ɪ ŋk t",
    "meaning": "n .   天性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "institute",
    "phonetic": "ˈ ɪ nst ɪ tju:t",
    "meaning": "n .   机构；研究院\n13",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insult",
    "phonetic": "ɪ nˈs ʌ lt",
    "meaning": "vt .   侮辱；冒犯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "investigate",
    "phonetic": "ɪ nˈv ɛ st ɪ ˌ ɡet",
    "meaning": "v .   调查",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insane",
    "phonetic": "ɪ nˈse ɪ n",
    "meaning": "a .   精神失常的；疯狂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "implement",
    "phonetic": "ˈimplim ə nt",
    "meaning": "v .   实行   n.   工具",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "impulse",
    "phonetic": "ˈ ɪ mp ʌ ls",
    "meaning": "n .   冲动；推动力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inflate",
    "phonetic": "ɪ nˈfle ɪ t",
    "meaning": "v .   充气 ； 膨胀  ☞ in flation [ ɪ nˈfle ɪ ʃ n]   n .   通货膨胀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insight",
    "phonetic": "ˈ ɪ nsa ɪ t",
    "meaning": "n .   洞察 力 ； 领悟",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intact",
    "phonetic": "ɪ nˈtækt",
    "meaning": "a .   完整的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intake",
    "phonetic": "ˈ ɪ nte ɪ k",
    "meaning": "n .   吸收； 摄取（量）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intrude",
    "phonetic": "ɪ nˈtru:d",
    "meaning": "vi .   闯入；侵入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "irregular",
    "phonetic": "ɪ ˈ regj ə l ə (r)",
    "meaning": "a .   不规则的；非正规的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "irrigate",
    "phonetic": "ˈ ɪ r ɪ ge ɪ t",
    "meaning": "vt .   灌溉；冲洗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "object",
    "phonetic": "ˈ ɒ bd ʒɪ kt",
    "meaning": "n .   物体；目标   [ ə bˈd ʒ ekt]   vi .   反对",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oblige",
    "phonetic": "ə ˈ bla ɪ d ʒ",
    "meaning": "vt .   迫使；帮忙",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obstacle",
    "phonetic": "ˈ ɒ bst ə kl",
    "meaning": "n .   障碍 ； 障碍物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vague",
    "phonetic": "ve ɪ g",
    "meaning": "a .   含糊的；不明确的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "error",
    "phonetic": "ˈer ə (r)",
    "meaning": "n .   错误 ； 差错",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "miserable",
    "phonetic": "ˈmiz ə r ə bl",
    "meaning": "a .   痛苦的；悲惨的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "construct",
    "phonetic": "k ə nˈstr ʌ kt",
    "meaning": "vt .   建造；建设",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "structure",
    "phonetic": "ˈstr ʌ kt ʃə (r)",
    "meaning": "n .   结构；构造；建筑物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "destr",
    "phonetic": "",
    "meaning": "uction [d ɪ ˈ str ʌ k ʃ n ] n .   破坏；毁灭\n14",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instruction",
    "phonetic": "ɪ nˈstr ʌ k ʃ n",
    "meaning": "n .   教授 ； 指导；命令  ☞ instrument [ˈ ɪ nstr ə m ə nt ] n .   仪器；工具；乐器；手段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "navy",
    "phonetic": "ˈne ɪ vi",
    "meaning": "n .   海军  ☞ navigate [ˈnæv ɪ ge ɪ t]   v. 导肮；航行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pump",
    "phonetic": "p ʌ mp",
    "meaning": "n .   泵   vt .   ( 用泵）抽送",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prescribe",
    "phonetic": "pr ɪ ˈ skra ɪ b",
    "meaning": "vt .   开（处方）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "artificial",
    "phonetic": "ˌ ɑ:tɪˈf ɪʃ l",
    "meaning": "a .   人造的；虚伪的  L ist 9",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "privilege",
    "phonetic": "ˈpr ɪ v ə l ɪ d ʒ",
    "meaning": "n .   特权；优惠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "infer",
    "phonetic": "ɪ nˈf ɜ :(r)",
    "meaning": "v .   推断 ； 推论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vital",
    "phonetic": "ˈva ɪ tl",
    "meaning": "a .   至关重要的；生命的；充满生机的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vigor",
    "phonetic": "'v ɪ g ə",
    "meaning": "n .   活力 ； 精力 ； 热情  ☞ vigorous   [ˈv ɪ g ə r ə s]   a .   充满活力的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vivid",
    "phonetic": "ˈv ɪ v ɪ d",
    "meaning": "a .   生动的；清晰的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enclose",
    "phonetic": "ɪ nˈkl əʊ z",
    "meaning": "vt .   围 住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exclusive",
    "phonetic": "",
    "meaning": "ly [ ɪ k'sklu:s ɪ vl ɪ   ] ad .   排外地；专门地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mutual",
    "phonetic": "ˈmju:t ʃ u ə l",
    "meaning": "a.   相互的；共同的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "moisture",
    "phonetic": "ˈm ɔɪ st ʃə (r)",
    "meaning": "n .   潮气 ； 湿气；湿度  ☞ moist   [m ɔɪ st]   a .   潮湿的 ； 湿润的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "feature",
    "phonetic": "ˈfi:t ʃə (r )",
    "meaning": "n .   特征 ； 特色",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "procedure",
    "phonetic": "pr ə ˈ si:d ʒə (r)",
    "meaning": "n .   程序；步骤\n15",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "manufac",
    "phonetic": "",
    "meaning": "ture [ˌmænjuˈfækt ʃə (r)] vt .   ( 大规模）制造   n .   产品  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "restrict",
    "phonetic": "r ɪ ˈ str ɪ kt",
    "meaning": "vt .   限制 ； 限定；约束",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stimulate",
    "phonetic": "'st ɪ mj ə ˌ let",
    "meaning": "vt .   刺激；激励 ； 激发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "venture",
    "phonetic": "ˈvent ʃə (r)",
    "meaning": "n .   （风险的）企业 ； 商业   v.   敢于去",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "innovate",
    "phonetic": "ˈ ɪ n ə ve ɪ t",
    "meaning": "v .   创新 ； 革新  ☞ innovation   [ ˌ ɪ n ə ˈ ve ɪʃ n ]   n.   创新；革新；改革  ☞ i nnovative [ˈ ɪ n ə v e ɪ t ɪ v]   a .   革新的 ； 创新的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "violate",
    "phonetic": "ˈva ɪə le ɪ t",
    "meaning": "v .   侵犯；违反；玷污",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "delicate",
    "phonetic": "ˈdel ɪ k ə t",
    "meaning": "a .   精致的；易损的；微妙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "estimate",
    "phonetic": "ˈest ɪ m ə t",
    "meaning": "vt .   估计；估计",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evaluate",
    "phonetic": "ɪ ˈ væljue ɪ t",
    "meaning": "vt .   评估；估价",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "imitate",
    "phonetic": "ˈ ɪ m ɪ te ɪ t",
    "meaning": "vt .   模仿 ； 仿效",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "penetrate",
    "phonetic": "ˌpen ɪ ˈ tre ɪ t",
    "meaning": "v .   穿过； 渗透",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adequate",
    "phonetic": "ˈæd ɪ kw ə t",
    "meaning": "a .   足够的 ； 充分的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anticipate",
    "phonetic": "ænˈt ɪ s ɪ pe ɪ t",
    "meaning": "v t .   预料 ； 预期；期望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "candidate",
    "phonetic": "ˈkænd ɪ d ə t",
    "meaning": "n .   候选人；应试者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "furnish",
    "phonetic": "ˈf ɜ :n ɪʃ",
    "meaning": "vt .   布置 家具  ☞ furniture [ˈf ɜ :n ɪ t ʃə (r) ] n .   家具",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pirate",
    "phonetic": "ˈpa ɪ r ə t",
    "meaning": "n .   海盗；盗版   vt .   盗用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vibrate",
    "phonetic": "va ɪ ˈ bre ɪ t",
    "meaning": "v .   ( 使）颤动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coordinate",
    "phonetic": "k əʊ ' ɔ :d ɪ ne ɪ t",
    "meaning": "vt .   ( 使）协调 ； 调节   n .   坐标",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "isolate",
    "phonetic": "ˈa ɪ s ə le ɪ t",
    "meaning": "vt .   使隔离 ； 使孤立\n16  L ist 10",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accelerate",
    "phonetic": "ə kˈsel ə re ɪ t",
    "meaning": "v . （使）加速",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "justice",
    "phonetic": "ˈd ʒʌ st ɪ s",
    "meaning": "n .   公正；正义；司法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adjust",
    "phonetic": "ə ˈ d ʒʌ st",
    "meaning": "vt .   调整 ； 调节   v .   适应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "portion",
    "phonetic": "ˈp ɔ : ʃ n",
    "meaning": "n .   部分；一份",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "petrol",
    "phonetic": "ˈpetr ə l",
    "meaning": "n.   汽油",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "velocity",
    "phonetic": "v ə ˈ l ɒ s ə ti",
    "meaning": "n .   速度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "integrity",
    "phonetic": "ɪ nˈtegr ə ti",
    "meaning": "n .   完整；诚实 ； 正直",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "den",
    "phonetic": "",
    "meaning": "sity [ˈdens ə ti ] n .   密度  ☞ dense   [dens]   a.   密集的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elastic",
    "phonetic": "ɪ ˈ læst ɪ k",
    "meaning": "a .   有弹性的；灵活的   n .   松紧带",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dignity",
    "phonetic": "ˈd ɪ gn ə ti",
    "meaning": "n .   尊严；尊贵 ； 高尚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forbid",
    "phonetic": "f ə ˈ b ɪ d",
    "meaning": "v.   禁止 ； 不许；阻止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "minority",
    "phonetic": "ma ɪ ˈ n ɒ r ə ti",
    "meaning": "n .   少数；少数民族",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "national",
    "phonetic": "",
    "meaning": "ity [ ˌnæ ʃə ˈ næl ə ti ] n .   国籍；民族",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arrange",
    "phonetic": "ə ˈ re ɪ nd ʒ",
    "meaning": "vt .   整理；排列   v .   安排",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "register",
    "phonetic": "ˈred ʒɪ st ə (r)",
    "meaning": "v .   登记 ； 注册   n .   登记薄",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "joint",
    "phonetic": "d ʒɔɪ nt",
    "meaning": "a .   联合的；共同的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "incline",
    "phonetic": "ɪ nˈkla ɪ n",
    "meaning": "v .   倾向于   n .   斜坡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "facility",
    "phonetic": "f ə ˈ s ɪ l ə ti",
    "meaning": "n .   设备；设施",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "penalty",
    "phonetic": "ˈpen ə lti",
    "meaning": "n .   惩罚；处罚；刑罚\n17",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elaborate",
    "phonetic": "ɪ ˈ læb ə r ə t",
    "meaning": "a .   精心制作的；复杂的；详尽的   v .   详尽说明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "multiply",
    "phonetic": "ˈm ʌ lt ɪ pla ɪ",
    "meaning": "v .   乘； 迅速 增加",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forecast",
    "phonetic": "ˈf ɔ :k ɑ:st",
    "meaning": "n . &   vt .   预测；预报",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "foremost",
    "phonetic": "ˈf ɔ :m əʊ st",
    "meaning": "a .   最重要的；最前的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "legislate",
    "phonetic": "ˈled ʒɪ sle ɪ t",
    "meaning": "vi .   立法 ； 制定法律",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refrigerator",
    "phonetic": "r ɪ ˈ fr ɪ d ʒə re ɪ t ə (r)",
    "meaning": "n .   冰箱；冷藏库",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ballot",
    "phonetic": "ˈbæl ə t",
    "meaning": "n .   无记名投票；投票选举   v .   投票",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gravity",
    "phonetic": "ˈgræv ə ti",
    "meaning": "n .   重力；引力；严重性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discard",
    "phonetic": "d ɪ sˈk ɑ:d",
    "meaning": "vt .   丢弃 ； 抛弃",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distribute",
    "phonetic": "d ɪ ˈ str ɪ bju:t",
    "meaning": "vt .   分配  L ist 11",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discharge",
    "phonetic": "d ɪ sˈt ʃɑ :d ʒ",
    "meaning": "v t .   释放；解雇 ； 排放   n .   排出（物）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discriminate",
    "phonetic": "d ɪ ˈ skr ɪ m ɪ ne ɪ t",
    "meaning": "v .   辨别 ； 歧视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disguise",
    "phonetic": "d ɪ sˈga ɪ z",
    "meaning": "vt . &   n .   伪装 ； 假扮",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disgust",
    "phonetic": "d ɪ sˈg ʌ st",
    "meaning": "n .   厌恶   vt .   使反感",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "integrate",
    "phonetic": "ˈ ɪ nt ɪ gre ɪ t",
    "meaning": "v .   ( 使）成为整体  ☞ disintegrate [d ɪ sˈ ɪ nt ɪ gre ɪ t] v .   ( 使）碎裂；（使）解体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distress",
    "phonetic": "d ɪ ˈ stres",
    "meaning": "n .   悲痛 ； 不幸；贫困   vt .   使悲痛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dispute",
    "phonetic": "d ɪ ˈ spju:t",
    "meaning": "n .   &   v.   争辩 ； 辩论\n18",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dilemma",
    "phonetic": "d ɪ ˈ lem ə",
    "meaning": "n .   ( 进退两难的）窘境 ； 困境",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dioxide",
    "phonetic": "da ɪ ˈ ɒ ksa ɪ d",
    "meaning": "n .   二氧化物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disobey",
    "phonetic": "ˌd ɪ s ə ˈ be ɪ",
    "meaning": "vt .   不服从",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distinct",
    "phonetic": "d ɪ ˈ st ɪ ŋkt",
    "meaning": "a.   明显的 ； 清楚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distinction",
    "phonetic": "d ɪ ˈ st ɪ ŋk ʃ n",
    "meaning": "n .   差别；优秀；荣誉  ☞ distinguished [d ɪ ˈ st ɪ ŋgw ɪʃ t] a .   卓越的；杰出的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "genius",
    "phonetic": "ˈd ʒ i:ni ə s",
    "meaning": "n .   天才；天赋 ； 天资",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "genuine",
    "phonetic": "ˈd ʒ enjuin",
    "meaning": "a .   真的；真诚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gene",
    "phonetic": "d ʒ i:n",
    "meaning": "n .   基因",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "abolish",
    "phonetic": "ə ˈ b ɒ l ɪʃ",
    "meaning": "v .   废除 ； 废止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dispatch",
    "phonetic": "d ɪ ˈ spæt ʃ",
    "meaning": "v. & n.   派遣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "absen",
    "phonetic": "",
    "meaning": "t   [ˈæbs ə nt ] a.   缺少的；缺席的；心不在焉的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cease",
    "phonetic": "si:s",
    "meaning": "v .   停止 ； 停息",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proceed",
    "phonetic": "pr ə ˈ si:d",
    "meaning": "vi .   继续进 行；前往   vt .   接着做  ☞ procession [pr ə ˈ se ʃ n ] n.   队伍；行列",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exceed",
    "phonetic": "ɪ kˈsi:d",
    "meaning": "vt .   超出 ； 超过；超越  ☞ excess [ ɪ kˈses ] n .   过量；过度   [ ＇ ekses ] a .   超额的  ☞ excessive [ ɪ kˈses ɪ v] a.   过分的 ； 过度的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "abuse",
    "phonetic": "ə ˈ bju:z",
    "meaning": "vt .   滥用；虐待［ ə 'bju:s ] n .   滥用；虚待",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "absorb",
    "phonetic": "ə bˈs ɔ :b",
    "meaning": "vt .   吸收；吸引；使专心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "abstract",
    "phonetic": "ˈæbstrækt",
    "meaning": "n .   摘要   a .   抽象的［ aeb'straekt ] vt .   提取",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "solemn",
    "phonetic": "ˈs ɒ l ə m",
    "meaning": "a .   庄严的；严肃的\n19  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "practically",
    "phonetic": "ˈprækt ɪ kli",
    "meaning": "ad .   实际地；几乎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pioneer",
    "phonetic": "ˌpa ɪə ˈ n ɪə (r)",
    "meaning": "n .   先驱者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "routine",
    "phonetic": "ru:ˈti:n",
    "meaning": "n .   常规   a .   日常的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marine",
    "phonetic": "m ə ˈ ri:n",
    "meaning": "a .   海的；海上的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ideal",
    "phonetic": "a ɪ ˈ di: ə l",
    "meaning": "a .   理想的；最佳的   n .   理想；典范  List 12",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vehicle",
    "phonetic": "ˈvi: ə kl",
    "meaning": "n .   车辆 ； 工具 ； 手段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intimate",
    "phonetic": "ˈ ɪ nt ɪ m ə t",
    "meaning": "a .   亲密的   n .   密友",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "realistic",
    "phonetic": "ˌri: ə ˈ l ɪ st ɪ k",
    "meaning": "a .   现实的；切实可行的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "surge",
    "phonetic": "s ɜ :d ʒ",
    "meaning": "vi . &   n .   激增；涌动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reckon",
    "phonetic": "ˈrek ə n",
    "meaning": "vt .   认为；预计；估计",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ozone",
    "phonetic": "ˈ əʊ z əʊ n",
    "meaning": "n .   臭氧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "display",
    "phonetic": "d ɪ ˈ sple ɪ",
    "meaning": "n./v.   陈列 ； 展览",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "habitat",
    "phonetic": "ˈhæb ɪ tæt",
    "meaning": "n.   栖息地  ☞ inhabit [ ɪ nˈhæb ɪ t] v .   居住于；栖息于  ☞ i nhabitant [ ɪ nˈhæb ɪ t ə nt]   n .   居 民 ；栖息动物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vertical",
    "phonetic": "ˈv ɜ :t ɪ kl",
    "meaning": "a .   垂直的；直立的；纵向的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "convert",
    "phonetic": "k ə nˈv ɜ :t",
    "meaning": "v .   ( 使）转变 ； （使）皈依",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "converse",
    "phonetic": "k ə nˈv ɜ :s",
    "meaning": "vi .   交谈 ； 谈话   [ ˈ k ɒ nv ɜ :s ]n .   相反的事物  ☞ conversation [ ˌ k ɒ nv ə ˈ se ɪ ʃ n ] n. ( 非正式的）谈话 ； 会话",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "version",
    "phonetic": "ˈv ɜ : ʃ n",
    "meaning": "n .   版本；译文；说法\n20",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confine",
    "phonetic": "k ə nˈfa ɪ n",
    "meaning": "vt .   限制；禁闭",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fini",
    "phonetic": "",
    "meaning": "te   [ˈfa ɪ na ɪ t] a.   有限的  ☞ infinite [ˈ ɪ nf ɪ n ə t ] a .   无限的 ； 极大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "define",
    "phonetic": "d ɪ ˈ fa ɪ n",
    "meaning": "vt .   使明确；给 …… 下定义；界定  ☞ definition [ˌdefiˈni ʃə n ] n .   定义  ☞ definite [ˈdef ɪ n ə t ] a .   明确的；确定的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reverse",
    "phonetic": "r ɪ ˈ v ɜ :s",
    "meaning": "v.   颠倒 ； 反转   a.   相反的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diverse",
    "phonetic": "da ɪ ˈ v ɜ :s",
    "meaning": "a.   不同的 ； 多种多样的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "successive",
    "phonetic": "s ə kˈses ɪ v",
    "meaning": "a .   连续的 ； 相继的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refine",
    "phonetic": "r ɪ ˈ fa ɪ n",
    "meaning": "vt .   精炼 ； 提纯；改善  ☞ refined   [r ɪ ˈ fa ɪ nd] a.   精炼的；举止优雅的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "municipal",
    "phonetic": "mju:ˈn ɪ s ɪ pl",
    "meaning": "a ； 市政的 ； 市的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "unique",
    "phonetic": "ju'n ɪ :k",
    "meaning": "a .   唯一的 ； 独一无二的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interval",
    "phonetic": "ˈ ɪ nt ə vl",
    "meaning": "n .   间隔；休息时间",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "un",
    "phonetic": "",
    "meaning": "iversal [ˌju:n ɪ ˈ v ɜ :sl ] a .   普遍的；通用的；全体的 ； 共同的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nuclear",
    "phonetic": "ˈnju:kli ə (r)",
    "meaning": "a .   原子核的 ； 核能的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "superficial",
    "phonetic": "ˌsu:p ə ˈ f ɪʃ l",
    "meaning": "a .   表面的；肤浅的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "supreme",
    "phonetic": "su: 'pr ɪ m",
    "meaning": "a .   最高 的 ； 至高的；最重要的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "superior",
    "phonetic": "su:ˈp ɪə ri ə (r)",
    "meaning": "a .   较高的；更好的；卓越的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explode",
    "phonetic": "ɪ kˈspl əʊ d",
    "meaning": "v .   ( 使）爆炸   vi .   爆发\n21  ☞ explosi on   [ ɪ kˈspl əʊʒ n] n.   爆炸；激增",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intelligent",
    "phonetic": "ɪ nˈtel ɪ d ʒə nt",
    "meaning": "a .   聪明的；有才智的；智能的  ☞ intelligence [ ɪ nˈtel ɪ d ʒə ns] n.   才智；情报  L ist 13",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interfere",
    "phonetic": "ˌ ɪ nt ə ˈ f ɪə (r)",
    "meaning": "vi .   干涉；干扰 ； 妨碍",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interior",
    "phonetic": "ɪ nˈt ɪə ri ə (r)",
    "meaning": "a .   内部的   n .   内部；内地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interpret",
    "phonetic": "ɪ nˈt ɜ :pr ɪ t",
    "meaning": "vt .   解释 ； 说明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enterprise",
    "phonetic": "ˈ ent ə pra ɪ z",
    "meaning": "n .   企业；事业心  ☞ entrepreneur [ˌ ɒ ntr ə pr ə ˈ n ɜ :(r) ] n .   企业家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exhaust",
    "phonetic": "ɪ gˈz ɔ :st",
    "meaning": "v.   筋疲力尽；用光 ； 花完  ☞ e xhausted [ ɪ gˈz ɔ :st ɪ d]   a .   筋疲力尽的；用光的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exaggerate",
    "phonetic": "ɪ g ˈ zæd ʒə re ɪ t",
    "meaning": "v .   夸大 ； 夸张",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exclaim",
    "phonetic": "ɪ kˈskle ɪ m",
    "meaning": "vi .   呼喊 ； 惊叫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "execute",
    "phonetic": "ɪ gˈzekj ə t",
    "meaning": "vt .   实施 ； 执行；处死  ☞ executive [ ɪ g ˈ zekj ə t ɪ v ] n .   主管领导 ； 管理人员   a .   执行的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explicit",
    "phonetic": "ɪ kˈspl ɪ s ɪ t",
    "meaning": "a .   明确的 ； 清楚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extinguish",
    "phonetic": "ɪ kˈst ɪ ŋgw ɪʃ",
    "meaning": "vt .   扑灭 ； 熄灭；消灭 ； 消除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exploit",
    "phonetic": "ɪ kˈspl ɔɪ t",
    "meaning": "vt .   利用；开采；剥削",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exert",
    "phonetic": "ɪ gˈz ɜ :t",
    "meaning": "vt .   运用 ； 发挥；尽力；施加",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exhibit",
    "phonetic": "ɪ gˈz ɪ b ɪ t",
    "meaning": "v .   展览 ； 展出；表现 ； 显出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reliability",
    "phonetic": "r ɪ ˌ la ɪə 'b ɪ l ə t ɪ",
    "meaning": "n .   可靠性\n22  ☞ reliable   [r ɪ ˈ la ɪə bl] a.   可靠的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stability",
    "phonetic": "st ə ˈ b ɪ l ə ti",
    "meaning": "n .   稳定（性） ； 稳固（性）  ☞ stable   [ˈste ɪ bl] a.   稳定的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fertile",
    "phonetic": "ˈf ɜ :ta ɪ l",
    "meaning": "a .   肥沃的；多产 的；丰富的；能生育的  ☞ fertilizer   [ˈf ɜ :t ə la ɪ z ə (r)] n.   肥料",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hostile",
    "phonetic": "ˈh ɒ sta ɪ l",
    "meaning": "a .   敌对的；有敌意的；不友善的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "restrain",
    "phonetic": "r ɪ ˈ stre ɪ n",
    "meaning": "v.   约束；管制；限 制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expert",
    "phonetic": "ˈeksp ɜ :t",
    "meaning": "n.   专家 ； 行家  ☞ expertise   [ˌeksp ɜ :ˈti:z] n.   专门的知识或技能",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prior",
    "phonetic": "ˈpra ɪə (r)",
    "meaning": "a .   先前的；优先的  ☞ priority   [pra ɪ ˈ ɒ r ə ti] n.   优先 ； 优先权",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "retail",
    "phonetic": "ˈri:te ɪ l",
    "meaning": "n . &   v .   零售",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recruit",
    "phonetic": "r ɪ ˈ kru:t",
    "meaning": "v .   招募；招聘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refrain",
    "phonetic": "r ɪ ˈ fre ɪ n",
    "meaning": "vi .   克制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "renovate",
    "phonetic": "ˈren ə ve ɪ t",
    "meaning": "vt .   翻新 ； 修复",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "revenue",
    "phonetic": "ˈrev ə nju:",
    "meaning": "n .   财政收入 ； 税收",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "remedy",
    "phonetic": "ˈrem ə di",
    "meaning": "n .   治疗 方 法 ； 补救措施   vt .   改正",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rescue",
    "phonetic": "ˈreskju:",
    "meaning": "vt . &   n .   援救；营救",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resort",
    "phonetic": "r ɪ ˈ z ɔ :t",
    "meaning": "vi .   求助 ； 诉诸于   n .   度假胜地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reveal",
    "phonetic": "r ɪ ˈ vi:l",
    "meaning": "vt .   暴露；显示",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "precaution",
    "phonetic": "pr ɪ ˈ k ɔ : ʃ n",
    "meaning": "n.   预防措施\n23  L ist 14",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reinforce",
    "phonetic": "ˌri: ɪ nˈf ɔ :s",
    "meaning": "vt .   增援；加强；加固",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refresh",
    "phonetic": "r ɪ ˈ fre ʃ",
    "meaning": "v.   使恢复 ； 更新；使想起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "restore",
    "phonetic": "r ɪ ˈ st ɔ :(r)",
    "meaning": "vt .   恢复；归还；修复",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "revolt",
    "phonetic": "r ɪ ˈ v əʊ lt",
    "meaning": "v . &   n .   反抗；反叛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "speculate",
    "phonetic": "ˈspekjule ɪ t",
    "meaning": "v .   推测 ； 推断；猜测   vi .   投机",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "respective",
    "phonetic": "r ɪ ˈ spekt ɪ v",
    "meaning": "a .   各自的 ； 各个的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "corporation",
    "phonetic": "ˌk ɔ :p ə ˈ re ɪʃ n",
    "meaning": "n .   公司 ； 企业；法人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inspect",
    "phonetic": "ɪ nˈspekt",
    "meaning": "vt .   检查；视察；检阅",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "perspective",
    "phonetic": "p ə ˈ spekt ɪ v",
    "meaning": "n .   观点 ； 看法；透视；视角",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prospect",
    "phonetic": "ˈpr ɒ spekt",
    "meaning": "n .   展望；前景；景色",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "specific",
    "phonetic": "sp ə ˈ s ɪ f ɪ k",
    "meaning": "a .   明确的；具体的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "specialize",
    "phonetic": "ˈspe ʃə laiz",
    "meaning": "vi .   专攻 ； 专门从事",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recreation",
    "phonetic": "ˌri:kriˈe ɪʃ n",
    "meaning": "n .   娱乐 ； 娱乐活动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "increasingly",
    "phonetic": "ɪ n'kri:s ɪ ŋly",
    "meaning": "ad .   日益增长地 ； 越来越多地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vacant",
    "phonetic": "ˈ ve ɪ k ə nt",
    "meaning": "a .   空的；空缺的；呆滞的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vacuum",
    "phonetic": "ˈvækju ə m",
    "meaning": "n .   真空；真空吸尘器",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vanish",
    "phonetic": "ˈvæn ɪʃ",
    "meaning": "vi .   突然不见 ； 消失",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "literal",
    "phonetic": "ˈl ɪ t ə r ə l",
    "meaning": "a .   字面意义的；文字的；完全按原文的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decent",
    "phonetic": "ˈdi:snt",
    "meaning": "a .   体面的；得体的；像样的；高雅的\n24",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inherit",
    "phonetic": "ɪ nˈher ɪ t",
    "meaning": "v .   继承（遗产）；遗传",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dimension",
    "phonetic": "da ɪ ˈ men ʃ n",
    "meaning": "n .   维度 ；方面",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "im",
    "phonetic": "",
    "meaning": "mense [ ɪ 'mens ] a .   巨大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "utilize",
    "phonetic": "ˈju:t ə la ɪ z",
    "meaning": "vt .   利用；使用  ☞ utility [ju:ˈt ɪ l ə ti ] n .   实用；效用；公共事业",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "species",
    "phonetic": "ˈspi: ʃ i:z",
    "meaning": "n.   物种",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decorate",
    "phonetic": "ˈdek ə re ɪ t",
    "meaning": "v.   装饰 ； 装潢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "humble",
    "phonetic": "ˈh ʌ mbl",
    "meaning": "a .   谦逊的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equality",
    "phonetic": "iˈkw ɒ l ə ti",
    "meaning": "n .   相等；等同 ； 平等  ☞ equivalent [ ɪ ˈ kw ɪ v ə l ə nt ] a .   等价的；相等的   n .   等价物 ； 相等物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sequence",
    "phonetic": "ˈsi:kw ə ns",
    "meaning": "n .   顺序 ； 次序  L ist 15",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consequence",
    "phonetic": "ˈk ɒ ns ɪ kw ə ns",
    "meaning": "n .   结果；后果  ☞ consequently [ˈk ɒ ns ɪ kw ə ntly ] ad .   因此；所以",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subse",
    "phonetic": "",
    "meaning": "quent [ˈs ʌ bs ɪ kw ə nt ] a .   随后的 ； 后来的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sympathize",
    "phonetic": "ˈs ɪ mp ə θ a ɪ z",
    "meaning": "vi .   同情；支持  ☞ sympat hetic [ˌs ɪ mp ə ˈ θ et ɪ k]   a .   同情的；赞 同的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "passion",
    "phonetic": "ˈpæ ʃ n",
    "meaning": "n .   激情 ； 热情；爱好  ☞ passionate   [ˈpæ ʃə n ə t] a.   狂热的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "passive",
    "phonetic": "ˈpæs ɪ v",
    "meaning": "a .   被动的；消极的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "format",
    "phonetic": "ˈf ɔ :mæt",
    "meaning": "n .   形式；版式；格式\n25",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inform",
    "phonetic": "ɪ nˈf ɔ :m",
    "meaning": "v.   通 知 ；了解",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reform",
    "phonetic": "r ɪ ˈ f ɔ :m",
    "meaning": "vt . &   n .   改良 ； 改革",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "formulate",
    "phonetic": "ˈf ɔ :mjule ɪ t",
    "meaning": "vt .   规划；制定；确切表达",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "federal",
    "phonetic": "ˈfed ə r ə l",
    "meaning": "a .   联邦的；联盟的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extraordinary",
    "phonetic": "ɪ kˈstr ɔ :dnri",
    "meaning": "a .   非同寻常的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "margin",
    "phonetic": "ˈm ɑ:dʒɪn",
    "meaning": "n .   边缘；页边的空白",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fluctuate",
    "phonetic": "ˈfl ʌ kt ʃ ue ɪ t",
    "meaning": "vi .   波动；起伏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fluid",
    "phonetic": "ˈflu: ɪ d",
    "meaning": "n .   液 体   a.   流动的  ☞ f luent [ˈflu: ə nt]   a .   流利的 ； 流畅的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suspend",
    "phonetic": "s ə ˈ spend",
    "meaning": "vt .   推迟；使暂停；吊 ； 悬  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suspect",
    "phonetic": "s ə ˈ spe kt",
    "meaning": "vt .   怀疑   n .   嫌疑犯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "temporary",
    "phonetic": "ˈtempr ə ri",
    "meaning": "a .   暂时的 ； 临时的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contemporary",
    "phonetic": "k ə nˈtempr ə ri",
    "meaning": "a .   当代的；同时代的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tremble",
    "phonetic": "ˈtrembl",
    "meaning": "vi .   发抖 ； 战栗；焦虑   n .   颤抖",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "terminal",
    "phonetic": "ˈt ɜ :m ɪ n l",
    "meaning": "a .   末端的；终点的；晚期的   n .   末端",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "majority",
    "phonetic": "m ə ˈ d ʒɒ r ə ti",
    "meaning": "n .   多数 ； 大多数",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collapse",
    "phonetic": "k ə ˈ læps",
    "meaning": "vi .   &   n .   倒塌；崩溃",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "colleague",
    "phonetic": "ˈk ɒ li:g",
    "meaning": "n .   同事 ； 同僚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collision",
    "phonetic": "k ə ˈ l ɪʒ n",
    "meaning": "n .   碰撞；冲突 ； 抵触",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comprise",
    "phonetic": "k ə mˈpra ɪ z",
    "meaning": "vt .   包含 ； 包括；构成",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compromise",
    "phonetic": "ˈk ɒ mpr ə ma ɪ z",
    "meaning": "n .   & v.   妥协 ； 和解",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comp",
    "phonetic": "",
    "meaning": "act [k ə m'pækt ] a .   紧凑的；体积小的\n26",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commence",
    "phonetic": "k ə ˈ mens",
    "meaning": "v .   开始 ； 着手",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comply",
    "phonetic": "k ə mˈpla ɪ",
    "meaning": "vi .   服从 ； 顺从 ； 遵从；遵守",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "concrete",
    "phonetic": "ˈk ɒ ŋkri:t",
    "meaning": "a .   实在的 ； 具体的   n .   混凝土  L ist16",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "condemn",
    "phonetic": "k ə nˈdem",
    "meaning": "vt .   谴责 ； 指责；判刑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contest",
    "phonetic": "ˈk ɒ ntest",
    "meaning": "n .   竞赛   [ k ə nˈtest] vt .   争 取赢得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contract",
    "phonetic": "'kontraekt",
    "meaning": "n .   合同 ； 契约   [ k ə nˈtrækt]   v.   缩小；感染",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "context",
    "phonetic": "ˈk ɒ ntekst",
    "meaning": "n .   上下文；背景 ； 环境",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conceal",
    "phonetic": "k ə n ˈ si:l",
    "meaning": "vt .   隐藏；隐瞒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "condense",
    "phonetic": "k ə nˈdens",
    "meaning": "vt .   使浓缩；简缩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confirm",
    "phonetic": "k ə nˈf ɜ :m",
    "meaning": "vt .   确认 ； 确定；批准",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "constitute",
    "phonetic": "ˈk ɒ nst ɪ tju:t",
    "meaning": "vt .   组成 ； 构成；建立；制定",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contact",
    "phonetic": "ˈk ɒ ntækt",
    "meaning": "n .   &   v.   接触 ； 联系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conv",
    "phonetic": "",
    "meaning": "ey [k ə nˈve ɪ ] vt .   表达；传送",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "convince",
    "phonetic": "k ə nˈv ɪ ns",
    "meaning": "vt .   使确信 ； 使信服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conflic",
    "phonetic": "",
    "meaning": "t [ˈk ɒ nfl ɪ kt ] n .   &   v.   冲突；斗争",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consolidate",
    "phonetic": "k ə nˈs ɒ l ɪ de ɪ t",
    "meaning": "v .   ( 使）巩固 ； （使）强化；（使）合并",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contaminate",
    "phonetic": "k ə nˈtæm ɪ ne ɪ t",
    "meaning": "vt .   污染 ； 弄脏；腐蚀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "council",
    "phonetic": "'ka ʊ ns ɪ l",
    "meaning": "n .   理事会 ； 委员会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coherence",
    "phonetic": "k əʊ ˈ h ɪə r ə ns",
    "meaning": "n .   一致；连贯性  ☞ coherent   [k əʊ ˈ h ɪə r ə nt]   a .   合乎逻辑的 ； 有条理的\n27",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conference",
    "phonetic": "ˈk ɒ nf ə r ə ns",
    "meaning": "n .   会议 ； 讨论会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conscience",
    "phonetic": "ˈk ɒ n ʃə ns",
    "meaning": "n .   良心 ； 道德心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "existence",
    "phonetic": "ɪ gˈz ɪ st ə ns",
    "meaning": "n .   存在；生活（方式）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compel",
    "phonetic": "k ə mˈpel",
    "meaning": "vt .   强迫；引起  ☞ c ompulsory [k ə mˈp ʌ ls ə ri]   a .   强制性的；必修的；义务的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expel",
    "phonetic": "ɪ kˈspel",
    "meaning": "v.   开除；驱逐出境  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appeal",
    "phonetic": "ə ˈ pi:l",
    "meaning": "vi . &   n .   呼吁；上诉 ；吸引力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "counsel",
    "phonetic": "ˈka ʊ ns l",
    "meaning": "n .   建议 ； 劝告；法律顾问   vt .   劝告 ； 建议",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consult",
    "phonetic": "k ə nˈs ʌ lt",
    "meaning": "v .   咨询 ； 请教；协商   vt .   查阅  ☞ consultant   [k ə nˈs ʌ lt ə nt] n.   顾问",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "category",
    "phonetic": "ˈkæt ə g ə ri",
    "meaning": "n .   种类 ； 类别；范畴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "combat",
    "phonetic": "ˈk ɒ mbæt",
    "meaning": "n .   &   v.   搏斗 ； 战斗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compress",
    "phonetic": "k ə mˈpres",
    "meaning": "v .   压缩   vt .   精简",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "depress",
    "phonetic": "d ɪ ˈ pres",
    "meaning": "v .   使沮丧；使萧条  ☞ depres sion   [d ɪ ˈ pre ʃ n] n.   抑郁；萧条期  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "annual",
    "phonetic": "ˈænju ə l",
    "meaning": "a .   每年的 ； 年度的   n .   年刊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "section",
    "phonetic": "ˈsek ʃ n",
    "meaning": "n .   部门；部分；一段  ☞ segment ['segmant ] n .   部分；段［ seg'ment ] vt .   分割  L ist 17",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liberate",
    "phonetic": "ˈl ɪ b ə re ɪ t",
    "meaning": "vt .   解放；释放  ☞ liberty [ ˈ l ɪ b ə ti ] n .   自由\n28",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deliver",
    "phonetic": "d ɪ ˈ l ɪ v ə (r)",
    "meaning": "vt .   递送；发表；分娩；接生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contradict",
    "phonetic": "ˌk ɒ ntr ə ˈ d ɪ kt",
    "meaning": "vt .   反驳；与 ······ 矛盾",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contrary",
    "phonetic": "ˈk ɒ ntr ə ri",
    "meaning": "a .   相反的；对立的   n .   相反",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contrast",
    "phonetic": "'kontra:st",
    "meaning": "n .   对比 ； 对照；差异",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "controversy",
    "phonetic": "ˈk ɒ ntr ə v ɜ :si",
    "meaning": "n .   争论；辩论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reproduce",
    "phonetic": "ˌri:pr ə ˈ dju:s",
    "meaning": "v .   繁殖 ； 生殖   vt .   复制；使再生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transmission",
    "phonetic": "trænsˈm ɪʃ n",
    "meaning": "n .   传递 ； 传播",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mission",
    "phonetic": "ˈm ɪʃ n",
    "meaning": "n .   任务；使命；使团",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commission",
    "phonetic": "k ə ˈ m ɪʃ n",
    "meaning": "n 、委员会；佣金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "omit",
    "phonetic": "ə ˈ m ɪ t",
    "meaning": "vt .   省略 ； 删掉；遗漏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dismiss",
    "phonetic": "d ɪ sˈm ɪ s",
    "meaning": "vt .   解雇；遣散 ； 解散；驳回",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commit",
    "phonetic": "k ə ˈ m ɪ t",
    "meaning": "v.   犯罪；承诺",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "committee",
    "phonetic": "k ə ˈ m ɪ ti",
    "meaning": "n .   委员会；全体委员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "settlem",
    "phonetic": "",
    "meaning": "ent [ˈsetlm ə nt ] n .   和解；偿清；协议",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "supplement",
    "phonetic": "ˈs ʌ pl ɪ m ə nt",
    "meaning": "n .   补充 ； 增补；补充物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "installment",
    "phonetic": "ɪ n'st ɔ :lm ə nt",
    "meaning": "n .   分期付款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conduct",
    "phonetic": "k ə nˈd ʌ kt",
    "meaning": "v.   组织；指挥；引导   [ ˈ k ɒ nd ʌ kt] n.   行为举止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shortage",
    "phonetic": "ˈ ʃɔ :t ɪ d ʒ",
    "meaning": "n .   不足 ； 缺少 ； 缺乏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drain",
    "phonetic": "dre ɪ n",
    "meaning": "v.   流光；排空   n .   下水道 ； 排水管  ☞ drainage   [ˈdre ɪ n ɪ d ʒ ] n .   排水；排水系统",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "beverage",
    "phonetic": "ˈbev ə r ɪ d ʒ",
    "meaning": "n .   饮料",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arbitrary",
    "phonetic": "ˈ ɑ:bɪtrəri",
    "meaning": "a .   随意的；专横的\n29",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "boundary",
    "phonetic": "ˈba ʊ ndri",
    "meaning": "n .   分界线；边界",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elementary",
    "phonetic": "ˌel ɪ ˈ mentri",
    "meaning": "a .   基本的；初级的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "monetary",
    "phonetic": "ˈm ʌ n ɪ tri",
    "meaning": "a .   货币的；金融的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "voluntary",
    "phonetic": "'v ɒ l ə nt( ə )ri",
    "meaning": "a.   自愿的 ； 志愿的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acute",
    "phonetic": "ə ˈ kju:t",
    "meaning": "a .   十分严重的；急性的；灵敏的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hospitable",
    "phonetic": "h ɒ ˈ sp ɪ t ə bl",
    "meaning": "a .   好客的；适宜的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "injection",
    "phonetic": "ɪ nˈd ʒ ek ʃ n",
    "meaning": "n .   注射 ； 注入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reject",
    "phonetic": "r ɪ ˈ d ʒ ekt",
    "meaning": "vt .   拒绝 ； 去弃  List 18",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "catalogue",
    "phonetic": "kæt ə l ɔ :g",
    "meaning": "( 亦作   catalog) n.   目录 ； 目录册",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sponsor",
    "phonetic": "ˈ sp ɒ ns ə (r)",
    "meaning": "n.   赞助商   vt.   赞助",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "correspond",
    "phonetic": "ˌ k ɒ r ə ˈ sp ɒ nd",
    "meaning": "vi.   相符合；一致；通信  ☞ correspond ing [ˌk ɒ r ə ˈ sp ɒ nd ɪ ŋ]   a .   符合的 ； 相应的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decade",
    "phonetic": "ˈ deke ɪ d",
    "meaning": "n.   十年",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aggressive",
    "phonetic": "ə ˈ gres ɪ v",
    "meaning": "a.   有进取心的 ； 挑峰的 ； 侵略的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "congress",
    "phonetic": "ˈ k ɒ ŋgres",
    "meaning": "n.   代表大会；国会；议会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resign",
    "phonetic": "r ɪ ˈ za ɪ n",
    "meaning": "v.   辞职",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mount",
    "phonetic": "ma ʊ nt",
    "meaning": "vt.   登上   vi.   增加",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sacrifi",
    "phonetic": "",
    "meaning": "ce [ ˈ sækr ɪ fa ɪ s ] vt.   牺牲 ；祭献   n.   牺牲；祭品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accord",
    "phonetic": "ə ˈ k ɔ :d",
    "meaning": "vi.   符合 ； 配合   vt.   给予   n.   协议；条约  ☞ accordance [ ə ˈ k ɔ :dns ] n.   一致；按照  ☞ accordingly [ ə ˈ k ɔ :d ɪ ŋli ] ad.   相应地 ； 照着；因此",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enthusiasm",
    "phonetic": "ɪ nˈ θ ju:ziæz ə m",
    "meaning": "n .   热情  ☞ enthusias tic [ ɪ nˌ θ ju:ziˈæst ɪ k] a.   热情的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "logic",
    "phonetic": "ˈl ɒ d ʒɪ k",
    "meaning": "n.   逻辑  ☞ logical   [ˈl ɒ d ʒɪ kl] a.   符合逻辑的；符合情理的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "embrace",
    "phonetic": "ɪ m ˈ bre ɪ s",
    "meaning": "v.   拥抱 ； 包括",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emphasize",
    "phonetic": "ˈ emf ə sa ɪ z",
    "meaning": "vt.   强调 ； 着重",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "encounter",
    "phonetic": "ɪ n ˈ ka ʊ nt ə (r)",
    "meaning": "vt.   &   n .   遭遇；遇到",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "endure",
    "phonetic": "ɪ n ˈ dj ʊə (r)",
    "meaning": "v.   忍受；容忍",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enforce",
    "phonetic": "ɪ n ˈ f ɔ :s",
    "meaning": "vt.   强制实施 ； 强制执行；强迫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "engage",
    "phonetic": "ɪ n ˈ ge ɪ d ʒ",
    "meaning": "vi.   从事   vt.   吸引；聘用 ；交战",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "entitle",
    "phonetic": "ɪ n ˈ ta ɪ tl",
    "meaning": "vt.   给 …… 权利；有资格",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "envy",
    "phonetic": "ˈ envi",
    "meaning": "v.   &   n.   嫉妒；羡慕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "entry",
    "phonetic": "ˈ entri",
    "meaning": "n.   入口处；登记；进入；条目",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enlighten",
    "phonetic": "ɪ n ˈ la ɪ tn",
    "meaning": "vt.   启发 ； 启迪；开导",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enroll",
    "phonetic": "ɪ n'r əʊ l",
    "meaning": "( 亦作   enrol) v.   注册；登记；加入\n31",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "property",
    "phonetic": "ˈ pr ɒ p ə ti",
    "meaning": "n.   财产 ， 资产 ； 性质",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "feasible",
    "phonetic": "ˈ fi:z ə bl",
    "meaning": "a.   可行的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tangibl",
    "phonetic": "",
    "meaning": "e [ ˈ tænd ʒə bl ] a.   有形的；实际的 ； 可触摸的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intangible",
    "phonetic": "ɪ n ˈ tænd ʒə b l",
    "meaning": "a.   无形的；难以形容的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "administer",
    "phonetic": "ə d ˈ m ɪ n ɪ st ə (r)",
    "meaning": "vt.   管理；执行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ad",
    "phonetic": "",
    "meaning": "v ocate [ ˈ ædv ə ke ɪ t ] vt.   主张 ； 提倡   n.   拥护者  L ist 19",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accumulate",
    "phonetic": "ə ˈ kju:mj ə le ɪ t",
    "meaning": "vt.   积累 ； 积攒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acquaint",
    "phonetic": "ə ˈ kwe ɪ nt",
    "meaning": "vt.   使熟悉 ； 使了解  ☞ acqu aintanc e   [ ə ˈ kwe ɪ nt ə ns]   n .   熟人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accuse",
    "phonetic": "ə ˈ kju:z",
    "meaning": "vt.   控告 ； 指控；谐责",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appetite",
    "phonetic": "ˈ æp ɪ ta ɪ t",
    "meaning": "n.   食欲 ； 胃口；欲望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "approximate",
    "phonetic": "ə ˈ pr ɒ ks ɪ m ə t",
    "meaning": "a.   近似的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acknowledge",
    "phonetic": "ə kˈn ɒ l ɪ d ʒ",
    "meaning": "n.   承认；感谢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appr",
    "phonetic": "",
    "meaning": "oach [ ə ˈ pr əʊ t ʃ ]   v.   接近   n .   方法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attribute",
    "phonetic": "ə ˈ tr ɪ bju:t",
    "meaning": "vt.   把 …… 归因于   [ ˈ ætr ɪ bju:t]   n .   属性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arrest",
    "phonetic": "ə ˈ rest",
    "meaning": "vt.   &   n.   逮捕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "annoy",
    "phonetic": "ə ˈ n ɔɪ",
    "meaning": "v .   使恼怒 ； 使生气\n32",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "asset",
    "phonetic": "ˈ æset",
    "meaning": "n.   资产；有用的人或物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evident",
    "phonetic": "ˈ ev ɪ d ə nt",
    "meaning": "a.   明显的 ； 显著的  ☞   evidence [ ˈ ev ɪ d ə ns ] n.   证据 ； 证明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "visible",
    "phonetic": "ˈ v ɪ z ə bl",
    "meaning": "a.   可见的  ☞ invisible   [ ɪ nˈv ɪ z ə bl] a.   看不见的  ☞ vision [ ˈ v ɪʒ n ] n.   视力；视野",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "de",
    "phonetic": "",
    "meaning": "vis e [d ɪ ˈ va ɪ z ] vt.   发明；设计；想出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "revise",
    "phonetic": "r ɪ ˈ va ɪ z",
    "meaning": "vt.   修订 ； 校订   vi.   复习功课",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "witness",
    "phonetic": "ˈ w ɪ tn ə s",
    "meaning": "n.   目击者；证人   vt.   目击",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "summit",
    "phonetic": "ˈ s ʌ m ɪ t",
    "meaning": "n.   最高点；首脑会议 ； 峰会；顶峰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assume",
    "phonetic": "ə ˈ sju:m",
    "meaning": "vt.   假定；承担；呈现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "democracy",
    "phonetic": "d ɪ ˈ m ɒ kr ə si",
    "meaning": "n.   民主；民主政体  ☞ democratic   [ˌdem ə ˈ kræt ɪ k]   a.   民主的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ultima",
    "phonetic": "",
    "meaning": "te [ ˈ ʌ lt ɪ m ə t ] a.   最后的 ； 最终的 ； 终极的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disturb",
    "phonetic": "d ɪ ˈ st ɜ :b",
    "meaning": "vt.   扰乱；打扰；妨碍；使不安",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "frontier",
    "phonetic": "fr ʌ nt ɪə (r)",
    "meaning": "n.   边境；边疆；边界；前沿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confront",
    "phonetic": "k ə n ˈ fr ʌ nt",
    "meaning": "vt.   使面对；对抗；遭遇",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "withdraw",
    "phonetic": "w ɪ ð ˈ dr ɔ :",
    "meaning": "v.   撤回；退出   vt.   收回；取",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "withstand",
    "phonetic": "w ɪ ð ˈ stænd",
    "meaning": "vt.   抵抗；承受\n33",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evolution",
    "phonetic": "ˌ i :v ə ˈ lu: ʃ n",
    "meaning": "n.   进化 ； 演化；发展",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "volume",
    "phonetic": "ˈ v ɒ lju:m",
    "meaning": "n.   卷 ； 册；量；体积；音量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "revolution",
    "phonetic": "ˌ rev ə ˈ lu: ʃ n",
    "meaning": "n.   革命；旋转",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "circumstance",
    "phonetic": "ˈs ɜ :k ə mst ə ns",
    "meaning": "n.   条件；环境；状况",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "opponent",
    "phonetic": "ə ˈ p əʊ n ə nt",
    "meaning": "n.   对手；敌手；对抗者  L ist 20",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oppose",
    "phonetic": "ə ˈ p əʊ z",
    "meaning": "vt.   反对；反抗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "synthetic",
    "phonetic": "s ɪ n ˈ θ et ɪ k",
    "meaning": "a.   综合的； 合成的 ； 人造的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "symptom",
    "phonetic": "ˈ s ɪ mpt ə m",
    "meaning": "n.   症状；征兆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resemble",
    "phonetic": "r ɪ ˈ zembl",
    "meaning": "vt.   像 ； 类似",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assemble",
    "phonetic": "ə ˈ sembl",
    "meaning": "v.   集合 ； 召集   vt.   装配",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "capacity",
    "phonetic": "k ə ˈ pæs ə ti",
    "meaning": "n.   容量；能力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "static",
    "phonetic": "ˈ stæt ɪ k",
    "meaning": "a.   静止的；静态的   n.   静电",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "status",
    "phonetic": "ˈ ste ɪ t ə s",
    "meaning": "n.   地位；身份；状况",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stadium",
    "phonetic": "ˈ ste ɪ di ə m",
    "meaning": "n.   体育场 ； 运动场",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "statistic",
    "phonetic": "st ə ˈ t ɪ st ɪ k",
    "meaning": "n.   统计数据（ statistics)   统计学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "estate",
    "phonetic": "ɪ ˈ ste ɪ t",
    "meaning": "n.   庄园 ； 地产；财产；遗产",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instance",
    "phonetic": "ˈ ɪ nst ə ns",
    "meaning": "n.   例子 ； 实例 ； 事例\n34",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insist",
    "phonetic": "ɪ n ˈ s ɪ st",
    "meaning": "v.   坚持；坚持要求",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consist",
    "phonetic": "k ə nˈs ɪ st",
    "meaning": "v.   由 … 组成",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resist",
    "phonetic": "r ɪ ˈ z ɪ st",
    "meaning": "v.   抵抗；反抗  ☞ resistance   [r ɪ ˈ z ɪ st ə ns] n.   反对 ； 抵抗  ☞ resis tant   [r ɪ ˈ z ɪ st ə nt] a.   抵抗的；抗 … 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sightseeing",
    "phonetic": "ˈ sa ɪ tsi: ɪ ŋ",
    "meaning": "n.   观光 ； 游览",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "surrounding",
    "phonetic": "s ə ˈ ra ʊ nd ɪ ŋ",
    "meaning": "a .   周围的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "calculating",
    "phonetic": "ˈ kælkjule ɪ t ɪ ŋ",
    "meaning": "a.   精明的 ； 有心计的 ； 精于算计的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "imposing",
    "phonetic": "ɪ m ˈ p əʊ z ɪ ŋ",
    "meaning": "a.   令人印象深刻的；壮观的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regarding",
    "phonetic": "r ɪ ˈ g ɑ:d ɪ ŋ",
    "meaning": "prep.   关于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "concerning",
    "phonetic": "k ə n ˈ s ɜ :n ɪ ŋ",
    "meaning": "prep.   关于；涉及",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sophistic",
    "phonetic": "",
    "meaning": "ated [s ə ˈ f ɪ st ɪ ke ɪ t ɪ d ] a.   久经世故的；高级的；复杂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "steady",
    "phonetic": "ˈ stedi",
    "meaning": "a.   稳定的 ； 稳固的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sticky",
    "phonetic": "ˈ st ɪ ki",
    "meaning": "a.   黏性的；棘手的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "guilty",
    "phonetic": "ˈ g ɪ lti",
    "meaning": "a.   有罪的；内疚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "greedy",
    "phonetic": "ˈ gri:di",
    "meaning": "a.   贪婪的；贪吃的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rationa",
    "phonetic": "",
    "meaning": "l   [ˈræ ʃ n ə l] a.   合理的 ； 理性的  ☞ irrational [ ɪ ˈ ræ ʃə nl] a.   不合理的\n35",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "faulty",
    "phonetic": "ˈ f ɔ :lti",
    "meaning": "a.   有错误的；有缺点的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slippery",
    "phonetic": "ˈsl ɪ p ə ri",
    "meaning": "a.   滑的；油滑的  List 21",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dictate",
    "phonetic": "d ɪ k ˈ te ɪ t",
    "meaning": "vt.   口述；命令；使听写   [ ˈ d ɪ kte ɪ t] n .   命令；规定  ☞ dictation [d ɪ k ˈ te ɪʃ n ] n.   听写；口述",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "predict",
    "phonetic": "pr ɪ ˈ d ɪ kt",
    "meaning": "v.   预测；预言",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "initiate",
    "phonetic": "ɪ ˈ n ɪʃ ie ɪ t",
    "meaning": "v.   开始 ； 发起  ☞ initial   [ ɪ ˈ n ɪʃ l ] a.   最初的；开始的  ☞ initiative   [ ɪ ˈ n ɪʃə t ɪ v] n.   倡议；自发性 ； 主动性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ambition",
    "phonetic": "æm ˈ b ɪʃ n",
    "meaning": "n.   野心；志向",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "veteran",
    "phonetic": "ˈ vet ə r ə n",
    "meaning": "n.   老兵；老手",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fate",
    "phonetic": "fe ɪ t",
    "meaning": "n.   命运",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fatal",
    "phonetic": "ˈ fe ɪ tl",
    "meaning": "a.   致命的；灾难性的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flame",
    "phonetic": "fle ɪ m",
    "meaning": "n.   火焰；热情   vi.   燃烧；发怒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "phenom",
    "phonetic": "",
    "meaning": "enon [f ə ˈ n ɒ m ɪ n ə n] (pl. phenomena) n.   现象",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "foundation",
    "phonetic": "fa ʊ n ˈ de ɪʃ n",
    "meaning": "n.   基础；地基；基金会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fund",
    "phonetic": "f ʌ nd",
    "meaning": "n.   基金；资金  ☞ fundamental [ ˌ f ʌ nd ə ˈ mentl] a.   基础的 ； 基本的；根本的\n36",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alternative",
    "phonetic": "ɔ :l ˈ t ɜ :n ə t ɪ v",
    "meaning": "a.   供选择的； 可替代的   n.   可供选择的事物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "underline",
    "phonetic": "ˌ ʌ nd ə ˈ la ɪ n",
    "meaning": "vt.   强调；在 …… 下划线",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "undergo",
    "phonetic": "ˌ ʌ nd ə ˈ g əʊ",
    "meaning": "v.   经历 ； 遭受",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "undertake",
    "phonetic": "ˌ ʌ nd ə ˈ te ɪ k",
    "meaning": "v.   承担；从事；承诺",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jury",
    "phonetic": "ˈ d ʒʊə ri",
    "meaning": "n.   陪审团；评委会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "injure",
    "phonetic": "ˈ ɪ nd ʒə (r)",
    "meaning": "vt.   伤害；损害；损伤  ☞ injury   [ˈ ɪ nd ʒə ri] n.   伤害 ； 损伤",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rigid",
    "phonetic": "ˈ r ɪ d ʒɪ d",
    "meaning": "a.   严格的；僵硬的；刚硬的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "valid",
    "phonetic": "ˈ væl ɪ d",
    "meaning": "a.   有效的；正当的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acid",
    "phonetic": "ˈ æs ɪ d",
    "meaning": "a.   酸的 ； 酸性的   n.   酸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "splendid",
    "phonetic": "ˈ splend ɪ d",
    "meaning": "a.   辉煌的；极佳的；壮丽的；豪华的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compatible",
    "phonetic": "k ə m ˈ pæt ə bl",
    "meaning": "a.   兼容的；和睦共处的；志趣相投的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "neutral",
    "phonetic": "ˈ nju:tr ə l",
    "meaning": "a.   中立的；中性的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conventional",
    "phonetic": "k ə nˈven ʃə nl",
    "meaning": "a .   传统的；依照惯例的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "typical",
    "phonetic": "ˈt ɪ p ɪ kl",
    "meaning": "a.   典型的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arrival",
    "phonetic": "ə ˈ ra ɪ vl",
    "meaning": "n.   抵达；到来；到货",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proof",
    "phonetic": "pru:f",
    "meaning": "n.   证明   a.   防 … 的  ☞ waterproof [ ˈ w ɔ :t ə pru:f ] a.   防水的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reputation",
    "phonetic": "ˌ repju ˈ te ɪʃ n",
    "meaning": "n.   名誉 ； 名声\n37",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resolution",
    "phonetic": "ˌrez ə ˈ lu: ʃ n",
    "meaning": "n.   决议；决心；解决  ☞ resolve   [r ɪ ˈ z ɒ lv] v.   解决；决心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "temptation",
    "phonetic": "temp ˈ te ɪʃ n",
    "meaning": "n.   诱惑 ； 引诱  List 22",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vocation",
    "phonetic": "v əʊ ˈ ke ɪʃ n",
    "meaning": "n.   职业；行业；使命感",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cooperation",
    "phonetic": "k əʊ ˌ ɒ p ə ˈ re ɪʃ n",
    "meaning": "n.   合作；协助",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "frustration",
    "phonetic": "fr ʌ ˈ stre ɪʃ n",
    "meaning": "n.   挫折；失败；沮丧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pension",
    "phonetic": "ˈ pen ʃ n",
    "meaning": "n .   养老金；退休金；抚恤金   vt.   给予 …… 养老金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "institution",
    "phonetic": "ˌ ɪ nst ɪ ˈ tju: ʃ n",
    "meaning": "n.   机构；制度；习俗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cohesion",
    "phonetic": "k əʊ ˈ hi: ʒ n",
    "meaning": "n.   结合； 凝聚 性 ；内聚力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conjuncti",
    "phonetic": "",
    "meaning": "on [k ə n ˈ d ʒʌ ŋk ʃ n] n.   连接词 ；结合",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "convention",
    "phonetic": "k ə n ˈ ven ʃ n",
    "meaning": "n.   习俗 ； 惯例 ； 大会；公约",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "constitution",
    "phonetic": "ˌ k ɒ nst ɪ ˈ tju: ʃ n",
    "meaning": "n.   宪法 ； 章程；体质；构造",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "combination",
    "phonetic": "ˌ k ɒ mb ɪ ˈ ne ɪʃ n",
    "meaning": "n.   组合 ； 联合；合并",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "submit",
    "phonetic": "s ə b ˈ m ɪ t",
    "meaning": "vt.   呈递 ； 提交   v.   服从\n38",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "substantial",
    "phonetic": "s ə b ˈ stæn ʃ l",
    "meaning": "a.   大量的；坚固的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "substitute",
    "phonetic": "ˈ s ʌ bst ɪ t ju:t",
    "meaning": "n.   代替人；替代品   v.   用 …… 代替",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "substance",
    "phonetic": "ˈs ʌ bst ə ns",
    "meaning": "n.   物质；实质",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subject",
    "phonetic": "ˈ s ʌ bd ʒɪ kt",
    "meaning": "n.   主题；学科 ；实验对象   a .   可能受 … 的影响  [s ə bˈd ʒ ekt ]   v.   使臣服 ； 使顺从",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lessen",
    "phonetic": "ˈ lesn",
    "meaning": "v.   减少；减轻",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strengthen",
    "phonetic": "ˈstreŋ θ n",
    "meaning": "v.   加强 ； 增强",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "broaden",
    "phonetic": "ˈ br ɔ : dn",
    "meaning": "v. ( 使）变宽；（使）扩大",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "maiden",
    "phonetic": "ˈ me ɪ dn",
    "meaning": "n.   少 女 ； 姑娘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "submarine",
    "phonetic": "ˌ s ʌ bm ə ˈ ri:n",
    "meaning": "a.   水下的 ； 海底的   n.   潜水艇",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "submerge",
    "phonetic": "s ə b ˈ m ɜ :d ʒ",
    "meaning": "v.   淹没；潜入水中",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conquer",
    "phonetic": "ˈk ɒ ŋk ə (r)",
    "meaning": "v.   征服；克服  ☞ conquest [ ˈ k ɒ ŋkwest ] n.   征服；克服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "threaten",
    "phonetic": "ˈ θ retn",
    "meaning": "vt.   威胁 ； 恐吓",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fasten",
    "phonetic": "ˈ f ɑ:sn",
    "meaning": "v.   系牢 ； 扎 牢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enquire",
    "phonetic": "ɪ n ˈ kwa ɪə (r)",
    "meaning": "( 亦作   inquire) v.   询问 ； 打听；调查  ☞ enquiry [ ɪ n'kwa ɪə r ɪ   ] ( 亦作   inquiry) n.   询问；调查；探索",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "essence",
    "phonetic": "ˈesns",
    "meaning": "n.   本质；实质；精髓  ☞ essential   [ ɪ ˈ sen ʃ l] a.   基本的 ； 必要的 ； 极其重要的\n39",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "permanent",
    "phonetic": "ˈ p ɜ :m ə n ə nt",
    "meaning": "a.   永久的 ； 长久的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "persist",
    "phonetic": "p ə ˈ s ɪ st",
    "meaning": "vi.   坚持 ； 执意  L ist 23",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pe",
    "phonetic": "",
    "meaning": "rsuade [p ə ˈ swe ɪ d] vt.   劝说 ； 说服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "persevere",
    "phonetic": "ˌ p ɜ :s ɪ ˈ v ɪə (r)",
    "meaning": "vi.   坚持  ☞ perseverance   [ˌp ɜ :s ɪ ˈ v ɪə r ə ns] n.   毅力 ； 韧性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "preserve",
    "phonetic": "pr ɪ ˈ z ɜ :v",
    "meaning": "vt.   保护；维持；保存",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reserve",
    "phonetic": "r ɪ ˈ z ɜ :v",
    "meaning": "v.   预定；保留",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deserve",
    "phonetic": "d ɪ ˈ z ɜ :v",
    "meaning": "v.   值得；应受",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "observe",
    "phonetic": "ə bˈz ɜ :v",
    "meaning": "v.   观察；看到",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conserve",
    "phonetic": "k ə nˈs ɜ :v",
    "meaning": "v.   节约；保护  ☞ conservative   [k ə nˈs ɜ :v ə t ɪ v]   a.   保 守 的   n .   保守的人；保守党",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mislead",
    "phonetic": "ˌ m ɪ s ˈ li:d",
    "meaning": "vt.   误导",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "criticize",
    "phonetic": "ˈ kr ɪ t ɪ sa ɪ z",
    "meaning": "v.   批评；指责   vt.   评论  ☞ criticism   [ˈkr ɪ t ɪ s ɪ z ə m] n.   批评；评论  ☞ critical   [ˈkr ɪ t ɪ kl] a.   批判的；极其重要的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crisis",
    "phonetic": "ˈ kra ɪ s ɪ s",
    "meaning": "( 复数   crises) n.   危机；危难时刻",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "criterio",
    "phonetic": "",
    "meaning": "n [kra ɪ ˈ t ɪə ri ə n ] ( 复数   criteria) n.   标准\n40",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cas",
    "phonetic": "",
    "meaning": "ual   [ˈkæ ʒ u ə l] a.   漫不经心的；非正式的；偶然的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indifferent",
    "phonetic": "ɪ nˈd ɪ fr ə nt",
    "meaning": "a.   漠不关心的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dissolve",
    "phonetic": "d ɪ ˈ z ɒ lv",
    "meaning": "v.   使溶解；解除；消除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "awesome",
    "phonetic": "ˈ ɔ :s ə m",
    "meaning": "a.   令人惊叹的；很好的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "modest",
    "phonetic": "ˈ m ɒ d ɪ st",
    "meaning": "a.   谦虚的；适中的；朴素的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "moderate",
    "phonetic": "ˈm ɒ d ə r ə t",
    "meaning": "a .   适中的；温和的   v.   缓和  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commodity",
    "phonetic": "k ə ˈ m ɒ d ə ti",
    "meaning": "n.   商品；有用之物  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accommodate",
    "phonetic": "ə ˈ k ɒ m ə de ɪ t",
    "meaning": "v.   提供住宿；容纳  ☞ accommodation [ ə ˌ k ɒ m ə ˈ de ɪʃ n ] n.   住处 ； 住宿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "miracle",
    "phonetic": "ˈ m ɪ r ə kl",
    "meaning": "n.   奇迹",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marvel",
    "phonetic": "ˈm ɑ:vl",
    "meaning": "n .   奇迹   v.   感到惊叹  ☞ marvelous   ['m ɑ:vɪləs] a.   不可思议的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sew",
    "phonetic": "s əʊ",
    "meaning": "v.   缝制 ； 缝纫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pilot",
    "phonetic": "ˈ pa ɪ l ə t",
    "meaning": "n.   飞行员   vt.   驾驶   a.   试验性的 ； 试点的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "label",
    "phonetic": "ˈ le ɪ bl",
    "meaning": "n.   标签；标记   vt.   贴标签于 …",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blend",
    "phonetic": "blend",
    "meaning": "v.   混合；融合   n.   混合体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pitch",
    "phonetic": "p ɪ t ʃ",
    "meaning": "n.   球场；音调   v.   投 ； 掷",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tame",
    "phonetic": "te ɪ m",
    "meaning": "a.   驯服的；温顺的   vt.   驯养 ； 驯服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pray",
    "phonetic": "pre ɪ",
    "meaning": "v.   祈求；祈祷\n41",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "claim",
    "phonetic": "kle ɪ m",
    "meaning": "vt.   &   n.   要求 ； 索取；声称",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "digest",
    "phonetic": "da ɪ ˈ d ʒ est",
    "meaning": "v.   消 化   vt.   领会   [ˈda ɪ d ʒ est] n.   摘要 ； 文摘  L ist 24",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loa",
    "phonetic": "",
    "meaning": "n [l əʊ n] n.   贷款；借出   vt.   借出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slender",
    "phonetic": "ˈ slend ə (r)",
    "meaning": "a.   纤细的；苗条的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grave",
    "phonetic": "ɡre ɪ v",
    "meaning": "n.   坟墓   a.   严重的；严肃的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grand",
    "phonetic": "grænd",
    "meaning": "a.   宏伟的；盛大的；总括的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chief",
    "phonetic": "t ʃ i:f",
    "meaning": "a.   主要的；首席的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "former",
    "phonetic": "ˈ f ɔ :m ə (r)",
    "meaning": "a.   以前的；在前的  ☞ latter [ ˈ læt ə (r) ] a.   后者的 ；后面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shift",
    "phonetic": "ʃɪ ft",
    "meaning": "v.   &   n.   移动；改变",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cerem",
    "phonetic": "",
    "meaning": "ony   [ˈser ə m ə ni] n.   典礼 ； 仪式",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "patch",
    "phonetic": "pæt ʃ",
    "meaning": "n.   补丁 ； 眼罩；小片   vt.   修补 ； 缝补",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "steer",
    "phonetic": "st ɪə (r)",
    "meaning": "v.   驾驶   vt.   行驶；引导；控制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "damp",
    "phonetic": "dæmp",
    "meaning": "a.   潮湿的；微湿的   n.   潮湿；湿气  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "creep",
    "phonetic": "kri:p",
    "meaning": "vi.   爬行；潜入  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scratch",
    "phonetic": "skræt ʃ",
    "meaning": "v.   &   n.   搔 ； 抓；划伤  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "seal",
    "phonetic": "si:l",
    "meaning": "n.   密封；印章；海豹   vt.   密封\n42",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rent",
    "phonetic": "rent",
    "meaning": "v.   租用   n .   租金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stir",
    "phonetic": "st ɜ : (r)",
    "meaning": "vt.   搅拌；搅和；激起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "whisper",
    "phonetic": "ˈ w ɪ sp ə (r)",
    "meaning": "n.   私语；谣传   v.   低语；私语",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spill",
    "phonetic": "sp ɪ l",
    "meaning": "v. ( 使）溢出   vi.   蜂拥而出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "float",
    "phonetic": "fl əʊ t",
    "meaning": "v.   浮动；漂浮  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plunge",
    "phonetic": "pl ʌ nd ʒ",
    "meaning": "v.   暴跌   n.   猛降  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gl",
    "phonetic": "",
    "meaning": "impse [gl ɪ mps] v.   瞥见   n.   一瞥  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pack",
    "phonetic": "pæk",
    "meaning": "v.   将 …… 打包   n. （商品的）纸包 ； 纸袋 ； 纸盒  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "court",
    "phonetic": "k ɔ :t",
    "meaning": "n.   法庭；球场；宫廷  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pierce",
    "phonetic": "p ɪə s",
    "meaning": "v.   刺穿 ；穿透  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thorough",
    "phonetic": "ˈ θ ʌ r ə",
    "meaning": "a.   彻底的 ； 全面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trial",
    "phonetic": "ˈtra ɪə l",
    "meaning": "n .   审讯；试验；考验",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trail",
    "phonetic": "tre ɪ l",
    "meaning": "n .   痕迹；小径   v.   跟踪；拖 ； 拉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recognize",
    "phonetic": "ˈrek ə gna ɪ z",
    "meaning": "v.   识别出 ；承认  ☞ recognition   [ˌrek ə gˈn ɪʃ n] n.   认出；承认",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loyal",
    "phonetic": "ˈ l ɔɪə l",
    "meaning": "a.   忠诚的 ； 忠心的  ☞ loyalty   [ˈl ɔɪə lti] n.   忠诚 ； 忠实\n43  L ist 25",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dizzy",
    "phonetic": "ˈ d ɪ zi",
    "meaning": "a.   头晕目眩的 ； 眩晕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crash",
    "phonetic": "kræ ʃ",
    "meaning": "v.   &   n .   碰撞；撞击",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sincere",
    "phonetic": "s ɪ n ˈ s ɪə (r)",
    "meaning": "a.   真诚的；诚挚的；诚实的  ☞ sincerely   [s ɪ nˈs ɪə li] ad.   真诚地 ； 诚实地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "famine",
    "phonetic": "ˈf æm ɪ n",
    "meaning": "n.   饥荒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "choke",
    "phonetic": "t ʃəʊ k",
    "meaning": "v.   窒息；阻塞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mine",
    "phonetic": "",
    "meaning": "ral [ ˈ m ɪ n ə r ə l] n.   矿物；矿物质",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "favor",
    "phonetic": "fe ɪ v ə",
    "meaning": "n.   帮助 ；赞同   v.   较喜欢；有助于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "echo",
    "phonetic": "ˈ ek əʊ",
    "meaning": "n.   回声；反响   vi.   发出回声",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stretch",
    "phonetic": "stret ʃ",
    "meaning": "v .   & n.   伸展 ； 张开；延伸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "glance",
    "phonetic": "gl ɑ:ns",
    "meaning": "n.   一瞥   vi.   瞥一眼；浏览",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grant",
    "phonetic": "gr ɑ:nt",
    "meaning": "vt.   授予；允许；承认   n.   拨款；补助金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pattern",
    "phonetic": "ˈpætn",
    "meaning": "n.   模式 ； 方式；范例；图案",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "poem",
    "phonetic": "ˈ p əʊɪ m",
    "meaning": "n .   诗  ☞ p oetry [ˈp əʊə tri] n.   诗集；诗歌  ☞ p oet [ˈp əʊɪ t] n.   诗人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nuisance",
    "phonetic": "ˈ nju:sns",
    "meaning": "n.   讨厌的人或行为；麻烦事",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fancy",
    "phonetic": "ˈ fænsi",
    "meaning": "n.   幻想；想象力；喜欢 ； 爱好\n44",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "layout",
    "phonetic": "ˈ le ɪ a ʊ t",
    "meaning": "n.   布局；安排；设计",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "debt",
    "phonetic": "det",
    "meaning": "n.   债务；欠款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shiver",
    "phonetic": "ˈ ʃɪ v ə ( r)",
    "meaning": "v. & n.   颤抖 ； 哆嗦",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brief",
    "phonetic": "bri:f",
    "meaning": "a.   简短的 ； 简 洁的；短暂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "organ",
    "phonetic": "ˈ ɔ :g ə n",
    "meaning": "n.   器官；机构；管风琴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "organic",
    "phonetic": "ɔ :ˈgæn ɪ k",
    "meaning": "a.   有机的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "switch",
    "phonetic": "sw ɪ t ʃ",
    "meaning": "n.   开关；转换   v.   转变 ； 改变；转换",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "formula",
    "phonetic": "ˈ f ɔ :m j ə l ə",
    "meaning": "n.   公式 ； 方程式；配方",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "world",
    "phonetic": "",
    "meaning": "wide [w ɜ :ldw'a ɪ d   ] a.   遍及全世界的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "queue",
    "phonetic": "kju:",
    "meaning": "n.   队列   vi.   排队 ； 排队等候",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "neglect",
    "phonetic": "n ɪ ˈ glekt",
    "meaning": "n   & v.   忽略 ； 忽视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "string",
    "phonetic": "str ɪ ŋ",
    "meaning": "n.   线 ； 绳；一串   vt.   串起；悬挂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fuel",
    "phonetic": "ˈ fju: ə l",
    "meaning": "n.   燃料   v.   加油；加剧  L ist 26",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "steel",
    "phonetic": "sti:l",
    "meaning": "n.   钢铁 ； 钢\n45",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "melt",
    "phonetic": "melt",
    "meaning": "v.   使融 化；使熔化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cope",
    "phonetic": "k əʊ p",
    "meaning": "vi.   应付 ； 处理；对抗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "keen",
    "phonetic": "ki: n",
    "meaning": "a.   热衷的；强烈的；敏锐的；锋利的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tidy",
    "phonetic": "ˈ ta ɪ di",
    "meaning": "a.   整洁的；整齐的   v.   整理；使整齐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "balance",
    "phonetic": "ˈbæl ə ns",
    "meaning": "n.   平衡；余额   v.   保持平衡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "utter",
    "phonetic": "ˈ ʌ t ə (r)",
    "meaning": "a.   完全的 ； 彻底的   vt.   说出 ； 讲",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vast",
    "phonetic": "v ɑ:st",
    "meaning": "a.   巨大的；大量的；巨额的；广阔的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "era",
    "phonetic": "ˈ ɪə r ə",
    "meaning": "n.   时代 ； 年代；纪元",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scatter",
    "phonetic": "ˈ skæt ə (r)",
    "meaning": "vt.   撒播；撒   v.   驱散   n.   散落  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tense",
    "phonetic": "ten s",
    "meaning": "a .   紧张的；紧绷的   v.   拉紧   n.   时态  ☞ tension   [ˈten ʃ n] n.   紧张；拉近；张力  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intense",
    "phonetic": "ɪ nˈtens",
    "meaning": "a.   强烈的 ； 剧烈的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intensive",
    "phonetic": "ɪ nˈtens ɪ v",
    "meaning": "a.   加强的 ； 密集的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "craft",
    "phonetic": "kr ɑ:ft",
    "meaning": "n.   工艺；手艺； 飞行器",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spur",
    "phonetic": "sp ɜ : (r)",
    "meaning": "n.   &   v.   刺激；鼓舞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "swear",
    "phonetic": "swe ə (r )",
    "meaning": "v.   发誓 ； 宣誓；咒骂；说脏话",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dash",
    "phonetic": "dæ ʃ",
    "meaning": "vi.   猛冲   v.   使 …… 破灭   n.   破折号；少量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "harsh",
    "phonetic": "h ɑ:ʃ",
    "meaning": "a.   严厉的；恶劣的；粗糙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hollow",
    "phonetic": "ˈ h ɒ l əʊ",
    "meaning": "a.   空的；中空的；凹陷的；虚伪的\n46",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "raw",
    "phonetic": "r ɔ :",
    "meaning": "a.   生的；未加工的；原始的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strategy",
    "phonetic": "ˈ stræt ə d ʒ i",
    "meaning": "n.   战略；策略",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coarse",
    "phonetic": "k ɔ :s",
    "meaning": "a.   粗的；粗糙的；粗俗的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deficit",
    "phonetic": "ˈdef ɪ s ɪ t",
    "meaning": "n.   赤字",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "soak",
    "phonetic": "s əʊ k",
    "meaning": "v.   浸泡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dump",
    "phonetic": "d ʌ mp",
    "meaning": "n.   垃圾场   vt.   倾倒；倾销",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "facilitate",
    "phonetic": "f ə ˈ s ɪ l ɪ te ɪ t",
    "meaning": "v.   促进 ； 促使",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flesh",
    "phonetic": "",
    "meaning": "[fle ʃ ］ n.   肉；皮肤；果肉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bound",
    "phonetic": "ba ʊ nd",
    "meaning": "a.   可能会 … 的； 有义务的 ； 受约束的   n .   界限；限  制   v.   跳跃；限制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elite",
    "phonetic": "e ɪ ˈ li:t",
    "meaning": "n.   社会精英  ☞ elect   [ ɪ ˈ lekt] v.   选举",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "welfare",
    "phonetic": "ˈ welfe ə (r)",
    "meaning": "n.   福利；幸福  List 27",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sorrow",
    "phonetic": "ˈs ɒ r əʊ",
    "meaning": "n.   悲伤 ； 悲痛  ☞ sorrowf ul   [ˈs ɒ r əʊ fl] a.   悲伤的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drag",
    "phonetic": "dræg",
    "meaning": "v.   拖 ； 拉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "faculty",
    "phonetic": "ˈfæklti",
    "meaning": "n.   天赋；能力；系 ； 院；全体教职人员\n47",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nevertheless",
    "phonetic": "ˌ nev ə ð ə ˈ les",
    "meaning": "ad.   然而；不过；尽管如此",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "split",
    "phonetic": "spl ɪ t",
    "meaning": "v.   分裂；分开 ； 分手",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cultivate",
    "phonetic": "ˈk ʌ lt ɪ ve ɪ t",
    "meaning": "v.   耕种；培养",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "foster",
    "phonetic": "ˈf ɒ st ə (r)",
    "meaning": "v.   促进；助长；抚养",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hazard",
    "phonetic": "ˈ hæz ə d",
    "meaning": "n.   危险；危害  ☞ h azardous [ˈhæz ə d ə s]   a .   危险的 ； 有害的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "severe",
    "phonetic": "s ɪ ˈ v ɪə (r)",
    "meaning": "a.   严重的；严厉的；恶劣的；严峻的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trap",
    "phonetic": "træp",
    "meaning": "n.   陷阱；圈套   vt.   陷入困境；捕捉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "agriculture",
    "phonetic": "ˈægr ɪ k ʌ lt ʃə (r)",
    "meaning": "n .   农业",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sway",
    "phonetic": "swe ɪ",
    "meaning": "vi.   摇动   vt.   影响；使动摇",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "device",
    "phonetic": "d ɪ ˈ va ɪ s",
    "meaning": "n.   装置；方 法 ； 手段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ripe",
    "phonetic": "ra ɪ p",
    "meaning": "a.   熟的；时机成熟的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wander",
    "phonetic": "ˈ w ɒ nd ə (r)",
    "meaning": "v.   徘徊；漫步；迷路",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cast",
    "phonetic": "k ɑ:st",
    "meaning": "vt.   投 ； 扔 ； 抛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diagnose",
    "phonetic": "ˈda ɪə gn əʊ z",
    "meaning": "v.   诊断  ☞ diagnosis   [ˌda ɪə gˈn əʊ s ɪ s] n.   诊断；判断",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compose",
    "phonetic": "k ə mˈp əʊ z",
    "meaning": "v.   组成；创作；使镇静  ☞ composition   [ˌk ɒ mp ə ˈ z ɪʃ n]   n .   构成；作品；作文",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "component",
    "phonetic": "k ə mˈp əʊ n ə nt",
    "meaning": "n.   成分 ； 部件\n48",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compound",
    "phonetic": "ˈk ɒ mpa ʊ nd",
    "meaning": "n.   复合物   a.   复合的   v.   使恶化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expose",
    "phonetic": "ɪ k'sp əʊ z",
    "meaning": "v.   使暴露 ； 揭露  ☞ exposure   [ ɪ kˈsp əʊʒə (r)] n.   面临；暴露；揭发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dispose",
    "phonetic": "d ɪ ˈ sp əʊ z",
    "meaning": "v.   布置 ； 安排",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "luxury",
    "phonetic": "ˈ l ʌ k ʃə ri",
    "meaning": "n.   奢侈 ； 奢华  ☞ luxurious   [l ʌ gˈ ʒʊə ri ə s] a.   奢侈的 ； 豪华的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "notion",
    "phonetic": "ˈn əʊʃ n",
    "meaning": "n.   观念；信念；理解  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discipline",
    "phonetic": "ˈ d ɪ s ə pl ɪ n",
    "meaning": "n.   纪律；训练 ；科目   vt.   训练；惩罚  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "filter",
    "phonetic": "ˈ f ɪ lt ə (r)",
    "meaning": "v.   过滤   n.   过滤器",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blast",
    "phonetic": "bl ɑ:st",
    "meaning": "n.   爆炸； 突如其来的强劲气流   vt.   炸毁；爆破",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pos",
    "phonetic": "",
    "meaning": "tpone [p ə ˈ sp əʊ n]   v.   延迟 ； 延期",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "delay",
    "phonetic": "d ɪ ˈ le ɪ",
    "meaning": "v.   &   n .   延迟 ； 延期  L ist 28",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gu",
    "phonetic": "",
    "meaning": "arantee [ ˌ gær ə n ˈ ti: ] n.   &   vt.   保证；担保",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "launch",
    "phonetic": "l ɔ :nt ʃ",
    "meaning": "vt.   发射；发起；发行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "identical",
    "phonetic": "a ɪ ˈ dent ɪ kl",
    "meaning": "a.   相同的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transfer",
    "phonetic": "træns ˈ f ɜ :(r)",
    "meaning": "v .   &   n.   转移； 搬迁\n49",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transmit",
    "phonetic": "trænsˈm ɪ t",
    "meaning": "vt.   传输； 输送 ； 传染",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transit",
    "phonetic": "'træns ɪ t",
    "meaning": "n.   运输； 通过； 交通运输体系  ☞ transition   [træn ˈ z ɪʃ n]   n.   过渡；转变",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transaction",
    "phonetic": "trænˈzæk ʃ n",
    "meaning": "n.   交易 ； 办理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transparen",
    "phonetic": "",
    "meaning": "t [ trænsˈpær ə nt]   a .   透明的； 显而易见的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clarify",
    "phonetic": "ˈklær ə fa ɪ",
    "meaning": "v.   使清楚 ； 澄清  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "classify",
    "phonetic": "ˈklæs ɪ fa ɪ",
    "meaning": "vt.   分类；归类  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "identify",
    "phonetic": "a ɪ ˈ dent ɪ fa ɪ",
    "meaning": "v .   确认；认出；鉴定  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "modify",
    "phonetic": "ˈm ɒ d ɪ fa ɪ",
    "meaning": "vi.   被修饰； 修改   vt.   改变；缓 和  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "specify",
    "phonetic": "ˈspes ɪ fa ɪ",
    "meaning": "vt.   具体说明； 详述",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "verify",
    "phonetic": "ˈver ɪ fa ɪ",
    "meaning": "vt.   核实； 查证  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crucia",
    "phonetic": "",
    "meaning": "l   [ˈkru: ʃ l] a .   关键性的；极其 重要的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cruise",
    "phonetic": "kru:z",
    "meaning": "vi.   &   n.   巡游； 漫游； 巡航  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "currency",
    "phonetic": "ˈk ʌ r ə nsi",
    "meaning": "n.   货币； 流通  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "curriculum",
    "phonetic": "k ə ˈ r ɪ kj ə l ə m",
    "meaning": "n.   课程  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "amateur",
    "phonetic": "ˈæm ə t ə (r)",
    "meaning": "n.   业余爱好者   a .   业余的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "technique",
    "phonetic": "tekˈni:k",
    "meaning": "n.   技巧； 技能； 技术  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accurate",
    "phonetic": "ˈækj ə r ə t",
    "meaning": "a .   精确的 ； 准确的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "overcome",
    "phonetic": "ˌ əʊ v ə ˈ k ʌ m",
    "meaning": "v .   战胜；克服； 压倒  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "overlook",
    "phonetic": "ˌ əʊ v ə ˈ l ʊ k",
    "meaning": "vt.   忽视；检查；俯瞰； n.   从 高处 看到的景色  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "incentive",
    "phonetic": "ɪ nˈsent ɪ v",
    "meaning": "n.   动机； 刺激  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liable",
    "phonetic": "ˈla ɪə bl",
    "meaning": "a .   有责任的； 有 … 倾向的\n50  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "considerable",
    "phonetic": "k ə nˈs ɪ d ə r ə bl",
    "meaning": "a .   相当大（或多）的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "applicable",
    "phonetic": "ə ˈ pl ɪ k ə bl",
    "meaning": "a .   适当的； 可应用的  ☞ a pplication   [ˌæpl ɪ 'ke ɪʃ ( ə )n]   n.   应用；申请；应用程序 （ APP ）  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "available",
    "phonetic": "ə ˈ ve ɪ l ə bl",
    "meaning": "a .   可获得的； 有空的； 可购得的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "remarkable",
    "phonetic": "r ɪ ˈ m ɑ:kəbl",
    "meaning": "a .   卓越的； 值得注意 的； 非凡的  ☞ r emark [r ɪ ˈ m ɑ:k]   v.   & n.   评论  3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "invaluable",
    "phonetic": "ɪ nˈvælju ə bl",
    "meaning": "a .   非常宝贵的 ； 无价的  List   29",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inevitable",
    "phonetic": "ɪ nˈev ɪ t ə bl",
    "meaning": "a .   不可避免的； 必然发生的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indis",
    "phonetic": "",
    "meaning": "pensable   [ˌ ɪ nd ɪ ˈ s pens ə bl] a .   不可缺少的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "virtually",
    "phonetic": "ˈv ɜ :t ʃ u ə li",
    "meaning": "ad .   实质上；事实上；几乎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emerge",
    "phonetic": "iˈm ɜ :d ʒ",
    "meaning": "vi.   浮现； 暴露； 摆脱  ☞ emergence   [ ɪ 'm ɜ :d ʒə ns]   n.   出现 ； 发生； 浮现  ☞ emer gency [iˈm ɜ :d ʒə nsi] n.   紧急情况； 突发事件   a .   紧急的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emit",
    "phonetic": "iˈm ɪ t",
    "meaning": "vt.   发出，射出，散发（光、热、声音、气等）  ☞ e mission [iˈm ɪʃ n] n.   发射；喷射； 散发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "eliminate",
    "phonetic": "ɪ ˈ l ɪ m ɪ ne ɪ t",
    "meaning": "vt.   排除 ； 消除； 淘汰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "effective",
    "phonetic": "ɪ ˈ fekt ɪ v",
    "meaning": "a .   有效的； 起作用的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "efficient",
    "phonetic": "ɪ ˈ f ɪʃ nt",
    "meaning": "a .   有效率的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evaporate",
    "phonetic": "ɪ ˈ væp ə re ɪ t",
    "meaning": "vi.   失踪 ；消失   vt.   使脱水； 使蒸发  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evolve",
    "phonetic": "iˈv ɒ lv",
    "meaning": "v .   发展；进化  ☞ e volution [ˌi:v ə ˈ lu: ʃ n] n.   演变； 进化 论 ； 进 展  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rat",
    "phonetic": "",
    "meaning": "io   [ˈre ɪʃ i əʊ ]   n.   比 ； 比率； 比例  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "manner",
    "phonetic": "ˈmæn ə (r)",
    "meaning": "n.   方式； 举止； 礼貌  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "manipulate",
    "phonetic": "m ə ˈ n ɪ pjule ɪ t",
    "meaning": "vt.   操作 ； 操纵  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "illustrate",
    "phonetic": "ˈ ɪ l ə stre ɪ t",
    "meaning": "vt.   阐明； 举例说明  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comprehend",
    "phonetic": "ˌk ɒ mpr ɪ ˈ hend",
    "meaning": "v .   理解  ☞ c omprehension [ˌk ɒ mpr ɪ ˈ hen ʃ n] n.   理解  ☞ c omprehensive [ˌk ɒ mpr ɪ ˈ hens ɪ v] a .   广泛的；综合的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "urban",
    "phonetic": "' ɜ ːb( ə )n",
    "meaning": "a .   都市的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rural",
    "phonetic": "ˈr ʊə r ə l",
    "meaning": "a .   乡下的 ； 农村的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "awkward",
    "phonetic": "ˈ ɔ :kw ə d",
    "meaning": "a .   尴尬的； 笨拙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commerce",
    "phonetic": "ˈk ɒ m ɜ :s",
    "meaning": "n.   商业； 商务  ☞ c ommercial [k ə ˈ m ɜ : ʃ l] a .   商业的   n.   广告  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "merchant",
    "phonetic": "ˈm ɜ :t ʃə nt",
    "meaning": "n.   商人  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "origin",
    "phonetic": "ˈ ɒ r ɪ d ʒɪ n",
    "meaning": "n.   起源 ；开端  ☞ o riginal [ ə ˈ r ɪ d ʒə nl] a .   原 来 的； 首创 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "orient",
    "phonetic": "ˈ ɔ :rient",
    "meaning": "vt.   确定 方向 ； 使 适应  ☞ o riental [ˌ ɔ :riˈentl]   a .   东方的；东方人的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dominate",
    "phonetic": "ˈd ɒ m ɪ ne ɪ t",
    "meaning": "v.   支配；占有优势  ☞ d ominant [ˈd ɒ m ɪ n ə nt] a .   占优势的； 统治的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "defect",
    "phonetic": "ˈdi:fekt",
    "meaning": "n.   瑕疵；缺点\n52  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "defic",
    "phonetic": "",
    "meaning": "ient [d ɪ ˈ f ɪʃ nt] a .   不足的；有缺陷的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sufficient",
    "phonetic": "s ə ˈ f ɪʃ nt",
    "meaning": "a .   足够的；充分的  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "posse",
    "phonetic": "",
    "meaning": "ss   [p ə ˈ zes] v .   拥有；掌握  ☞ p ossession [p ə ˈ ze ʃ n] n.   拥有 ； 财 产  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "settle",
    "phonetic": "ˈsetl",
    "meaning": "vt.   解决；安排； 定居  3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reside",
    "phonetic": "r ɪ ˈ za ɪ d",
    "meaning": "vi.   居住 在  ☞ r esidence [ˈrez ɪ d ə ns] n.   住处 ； 住宅  ☞ resident   [ˈrez ɪ d ə nt]   n.   居民   a .   居住 的  List   30",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assess",
    "phonetic": "ə ˈ ses",
    "meaning": "vt.   评定；估价",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "constant",
    "phonetic": "ˈk ɒ nst ə nt",
    "meaning": "a .   不断的 ； 恒定 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consistent",
    "phonetic": "k ə nˈs ɪ st ə nt",
    "meaning": "a .   一致的 ； 连续的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "violent",
    "phonetic": "ˈva ɪə l ə nt",
    "meaning": "a .   暴力的； 猛烈的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "urgent",
    "phonetic": "ˈ ɜ :d ʒə nt",
    "meaning": "a .   急迫的； 紧急的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "innocent",
    "phonetic": "ˈ ɪ n ə snt",
    "meaning": "a .   无辜的 ； 无知的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ingredient",
    "phonetic": "ɪ nˈgri:di ə nt",
    "meaning": "n.   组成部分；原料",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reluctant",
    "phonetic": "r ɪ ˈ l ʌ kt ə nt",
    "meaning": "a .   不情愿的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relevant",
    "phonetic": "ˈrel ə v ə nt",
    "meaning": "a .   相关的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "territory",
    "phonetic": "ˈ ter ə tri",
    "meaning": "n.   领土； 领域\n53  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rotat",
    "phonetic": "",
    "meaning": "e   [r əʊ ˈ te ɪ t]   v.   旋转； 轮流",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "automatic",
    "phonetic": "ˌ ɔ :t ə ˈ mæt ɪ k",
    "meaning": "a .   自动的  ☞ automate   [ˈ ɔ :t ə me ɪ t]   v.   自动化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "betray",
    "phonetic": "b ɪ ˈ tre ɪ",
    "meaning": "vt.   出卖；背叛；泄露；辜负",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "motivate",
    "phonetic": "ˈm əʊ t ɪ ve ɪ t",
    "meaning": "vt.   使有动机 ； 刺激；激发 … 的积极性  ☞ m otivation   [ˌm əʊ t ɪ 've ɪʃ n] n.   动机； 动力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "merit",
    "phonetic": "ˈ mer ɪ t",
    "meaning": "n.   优 势；优点；功绩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "remote",
    "phonetic": "r ɪ ˈ m əʊ t",
    "meaning": "a.   遥 远的；偏僻的；远程的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accustom",
    "phonetic": "ə ˈ k ʌ st ə m",
    "meaning": "vt.   使习惯 ； 使适应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "variable",
    "phonetic": "ˈve ə ri ə bl",
    "meaning": "n .   变量   a .   多变的；易变的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "addition",
    "phonetic": "ə ˈ d ɪʃ n",
    "meaning": "n.   增 加 ； 加 法  ☞ additional   [ ə ˈ d ɪʃə nl] a .   额外的 ； 附加的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "maintain",
    "phonetic": "me ɪ nˈte ɪ n",
    "meaning": "vt.   维持 ； 维修",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "retain",
    "phonetic": "r ɪ ˈ te ɪ n",
    "meaning": "vt.   保持； 保留",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attain",
    "phonetic": "ə ˈ te ɪ n",
    "meaning": "v.   达到 ； 获得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contain",
    "phonetic": "k ə nˈte ɪ n",
    "meaning": "vt.   包含 ； 容纳",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "entertain",
    "phonetic": "ˌent ə ˈ te ɪ n",
    "meaning": "vt.   热情款待； 使 娱乐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sustain",
    "phonetic": "s ə ˈ ste ɪ n",
    "meaning": "vt.   维持（生命、生存）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obtain",
    "phonetic": "ə bˈte ɪ n",
    "meaning": "vt.   获得 ； 得到",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "continent",
    "phonetic": "ˈk ɒ nt ɪ n ə nt",
    "meaning": "n.   大陆 ； 洲\n54",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "allege",
    "phonetic": "ə ˈ led ʒ",
    "meaning": "vt.   断言 ； 宣称  ☞ alleged   [ ə 'led ʒ d] a .   声 称的；被断言的；涉嫌的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gradual",
    "phonetic": "ˈgræd ʒ u ə l",
    "meaning": "a .   逐渐的；逐步的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "manual",
    "phonetic": "ˈmænju ə l",
    "meaning": "a .   手工的； 手动的   n .   说明书  L ist 31",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enhance",
    "phonetic": "ɪ nˈh ɑ:ns",
    "meaning": "vt.   提高 ； 增加；加强",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bacteria",
    "phonetic": "bækˈt ɪə ri ə",
    "meaning": "n. (bacterium   的复数）细菌",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "virus",
    "phonetic": "ˈva ɪ r ə s",
    "meaning": "n.   病毒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trigger",
    "phonetic": "ˈtr ɪ g ə (r)",
    "meaning": "n.   扳机   vt.   引发 ； 触发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "negotiate",
    "phonetic": "n ɪ ˈ g əʊʃ ie ɪ t",
    "meaning": "vi.   谈判 ； 协商 ； 交涉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ban",
    "phonetic": "bæn",
    "meaning": "v .   & n.   禁止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cater",
    "phonetic": "ˈke ɪ t ə (r)",
    "meaning": "v.   提供饮食及服务 ； 迎合",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clash",
    "phonetic": "klæ ʃ",
    "meaning": "v .   & n.   冲突； 争论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "curb",
    "phonetic": "k ɜ :b",
    "meaning": "n.   抑制 ， 控制  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "therapy",
    "phonetic": "ˈ θ er ə pi",
    "meaning": "n.   治疗 ； 疗法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tough",
    "phonetic": "t ʌ f",
    "meaning": "a .   坚强的； 艰苦的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tackle",
    "phonetic": "ˈtækl",
    "meaning": "vt.   处理； 应付",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "element",
    "phonetic": "ˈel ɪ m ə nt",
    "meaning": "n.   元素； 要 素",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mend",
    "phonetic": "mend",
    "meaning": "vt.   修理；修补",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coincidence",
    "phonetic": "k əʊ ˈ ɪ ns ɪ d ə ns",
    "meaning": "n.   巧合\n55",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trace",
    "phonetic": "tre ɪ s",
    "meaning": "n.   痕迹   vt.   追踪；追溯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "issue",
    "phonetic": "ˈ ɪʃ u:",
    "meaning": "n.   争论的 问题   v.   公布； 发行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "swallow",
    "phonetic": "ˈ sw ɒ l əʊ",
    "meaning": "n.   燕子   v.   吞下；咽下",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "leap",
    "phonetic": "li:p",
    "meaning": "v.   跳 ； 跃   n.   跳跃；激增",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hatred",
    "phonetic": "ˈ he ɪ tr ɪ d",
    "meaning": "n.   仇恨；憎恨；敌意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "evil",
    "phonetic": "ˈ i:vl",
    "meaning": "a.   坏 的 ； 邪恶的   n.   邪恶；祸害",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "undermine",
    "phonetic": "ˌ ʌ nd ə ˈ ma ɪ n",
    "meaning": "vt.   逐渐削弱；破坏；暗中损害",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "highlight",
    "phonetic": "ˈ ha ɪ la ɪ t",
    "meaning": "vt.   强调；彰显   n.   亮点 ； 最精彩的部分",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "feedback",
    "phonetic": "ˈ fi:dbæk",
    "meaning": "n.   反馈",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "framework",
    "phonetic": "ˈ fre ɪ mw ɜ :k",
    "meaning": "n.   框架；结构；体制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fulfill",
    "phonetic": "f ʊ l'f ɪ l",
    "meaning": "vt.   履行；满足；完成；实现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "headline",
    "phonetic": "ˈ hedla ɪ n",
    "meaning": "n.   标题；新闻提要   vt.   给 …… 加标 题",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "farewell",
    "phonetic": "ˌ fe ə ˈ wel",
    "meaning": "n.   告别 ； 欢送",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "headquarters",
    "phonetic": "ˌ hed ˈ kw ɔ :t ə z",
    "meaning": "n.   司令部；总部",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "copyright",
    "phonetic": "ˈ k ɒ pira ɪ t",
    "meaning": "n.   版权 ； 著作权  List   32",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "counterpart",
    "phonetic": "ˈ ka ʊ nt ə p ɑ:t",
    "meaning": "n.   职位 ( 或作用 ) 相当的人；对应的事物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "harness",
    "phonetic": "ˈ h ɑ:n ɪ s",
    "meaning": "vt.   利用 ； 控制；给 …… 上挽具\n56",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tragedy",
    "phonetic": "ˈ træd ʒə di",
    "meaning": "n.   悲剧；惨事 ； 惨案",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wreck",
    "phonetic": "r ek",
    "meaning": "n.   失事；残骸   vt.   破坏 ； 毁坏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equip",
    "phonetic": "ɪ ˈ kw ɪ p",
    "meaning": "vt.   装备 ； 配备；使有能力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "draft",
    "phonetic": "dr ɑ:ft",
    "meaning": "n.   草稿 ； 草案   vt.   起草 ； 草拟",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "masterpiece",
    "phonetic": "ˈ m ɑ:st ə pi:s",
    "meaning": "n.   杰作；代表作；名著",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "haste",
    "phonetic": "he ɪ st",
    "meaning": "n.   急速 ； 急忙；草率",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mercy",
    "phonetic": "ˈ m ɜ :si",
    "meaning": "n.   仁慈 ； 慈悲；恩惠  ☞ mercifully   [ˈm ɜ :s ɪ f ə li] ad. （不幸中）幸运地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "item",
    "phonetic": "ˈ a ɪ t ə m",
    "meaning": "n.   条款；一条； 项目  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "straightforward",
    "phonetic": "ˌ stre ɪ t ˈ f ɔ :w ə d",
    "meaning": "a.   简单的；易懂的；坦率的  1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "guideline",
    "phonetic": "ˈ ga ɪ dla ɪ n",
    "meaning": "n.   指导方针 ； 指南；准则",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "boast",
    "phonetic": "b əʊ st",
    "meaning": "v.   夸耀；吹嘘   n.   自夸；夸耀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stri",
    "phonetic": "",
    "meaning": "ke   [stra ɪ k ] vi.   撞击；罢工 ； 突然想到",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strive",
    "phonetic": "stra ɪ v",
    "meaning": "vi.   努力；奋斗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crude",
    "phonetic": "kru:d",
    "meaning": "a.   天然的；粗略的；粗 鲁的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rouse",
    "phonetic": "ra ʊ z",
    "meaning": "vt.   激起；使振奋 ；唤醒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chill",
    "phonetic": "t ʃɪ l",
    "meaning": "v. ( 使）变冷 ； 使感到害怕   n.   寒冷；害怕   a.   寒冷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rear",
    "phonetic": "r ɪə (r)",
    "meaning": "n.   后部 ； 背面；臀部   a.   后面的   vt.   抚养 ； 饲养",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "worship",
    "phonetic": "ˈ w ɜ : ʃɪ p",
    "meaning": "n.   礼拜；崇拜   vt.   崇拜 ； 爱慕\n57",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "horizon",
    "phonetic": "h ə ˈ ra ɪ zn",
    "meaning": "n.   地平线；眼界 ； 视野  ☞ horizontal   [ˌh ɒ r ɪ ˈ z ɒ ntl] a.   水平的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "twist",
    "phonetic": "t w ɪ st",
    "meaning": "vt.   扭曲；扭伤；拧   n.   扭曲；转动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sting",
    "phonetic": "s t ɪ ŋ",
    "meaning": "v.   &   n.   刺；刺痛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fade",
    "phonetic": "fe ɪ d",
    "meaning": "v. ( 使）褪色   vi.   淡出 ； 逐渐消失",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rival",
    "phonetic": "ˈ ra ɪ vl",
    "meaning": "n.   对手 ； 竞争者   vt.   竞争",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fierce",
    "phonetic": "f ɪə s",
    "meaning": "a.   凶猛的；猛烈的 ； 激烈的；强烈的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grasp",
    "phonetic": "gr ɑ:sp",
    "meaning": "vt.   抓紧 ； 抓住；理解   n.   掌握；理解（力）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dull",
    "phonetic": "d ʌ l",
    "meaning": "a.   呆滞的 ； 迟钝的；无聊的；暗淡的；阴暗的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sw",
    "phonetic": "",
    "meaning": "ell [swel ] v.   肿胀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mature",
    "phonetic": "m ə ˈ t ʃʊə (r)",
    "meaning": "a.   成熟的   v .   成熟",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fatigue",
    "phonetic": "f ə ˈ ti:g",
    "meaning": "n.   疲劳 ； 劳累",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bold",
    "phonetic": "b əʊ ld",
    "meaning": "a.   大胆的；英勇的；醒目的；粗体的；冒失的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slide",
    "phonetic": "sla ɪ d",
    "meaning": "v.   滑动；下滑 ； 衰落   n.   幻灯片；滑动；滑梯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "render",
    "phonetic": "ˈ rend ə (r)",
    "meaning": "vt.   提供；翻译；表达；回报",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "earnest",
    "phonetic": "ˈ ɜ :n ɪ st",
    "meaning": "a.   认真的；真诚的 ； 诚挚的\n58",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ease",
    "phonetic": "i:z",
    "meaning": "n.   容易；安逸   vt.   缓和 ； 减 轻",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scheme",
    "phonetic": "ski:m",
    "meaning": "n.   计划 ； 阴谋   v.   密谋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "somehow",
    "phonetic": "ˈ s ʌ mha ʊ",
    "meaning": "ad.   由于某种原因 ； 不知怎么地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "breed",
    "phonetic": "bri:d",
    "meaning": "n.   品种   v.   繁殖；养育；引起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "banknote",
    "phonetic": "ˈ bæŋkn əʊ t",
    "meaning": "n.   钞票 ； 纸币",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thrive",
    "phonetic": "θ ra ɪ v",
    "meaning": "vi.   兴旺 ； 繁荣；旺盛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vain",
    "phonetic": "ve ɪ n",
    "meaning": "a.   徒劳的；自负 的；无结果的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "well",
    "phonetic": "",
    "meaning": "off [wel' ɔ :f ] a.   富裕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spoil",
    "phonetic": "sp ɔɪ l",
    "meaning": "vt.   破坏；溺爱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "idle",
    "phonetic": "ˈ a ɪ dl",
    "meaning": "a.   空闲的；闲散的 ； 懒散的；无用的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "realm",
    "phonetic": "relm",
    "meaning": "n.   领域 ； 范围；王国",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clue",
    "phonetic": "klu:",
    "meaning": "n.   线索 ； 提示",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stuff",
    "phonetic": "st ʌ f",
    "meaning": "n.   东西；材料   vt.   装 ； 填 ； 塞  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "swing",
    "phonetic": "sw ɪ ŋ",
    "meaning": "v.   摇摆；转向；转动   n.   秋千；摇摆  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crack",
    "phonetic": "kræk",
    "meaning": "n.   裂缝 ； 缝隙   v. ( 使）破裂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "virtue",
    "phonetic": "ˈ v ɜ :t ʃ u:",
    "meaning": "n.   美德 ； 德行；优点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gap",
    "phonetic": "gæp",
    "meaning": "n.   缺 口；差距；间隔  2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brilliant",
    "phonetic": "ˈ br ɪ li ə nt",
    "meaning": "a.   明亮的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gross",
    "phonetic": "gr əʊ s",
    "meaning": "a.   总的；粗鲁的；严重的；令人恶心的\n59",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crush",
    "phonetic": "kr ʌʃ",
    "meaning": "v.   压碎 ； 压坏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forthcoming",
    "phonetic": "ˌ f ɔ : θ ˈ k ʌ m ɪ ŋ",
    "meaning": "a.   即将发生的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "triumph",
    "phonetic": "ˈ tra ɪʌ mf",
    "meaning": "n.   胜利 ； 成功   vi.   战胜",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "old",
    "phonetic": "",
    "meaning": "fashioned [ ˈ ə uld ˈ fæ ʃə nd ] a.   陈旧的；过时的；守旧的  3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "durable",
    "phonetic": "ˈdj ʊə r ə bl",
    "meaning": "a .   耐用的 ； 持久的\n60  四级基础 词  List 1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regret",
    "phonetic": "r ɪ ˈ gret",
    "meaning": "vt.   后悔；对 …… 感到遗憾   n.   懊悔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blind",
    "phonetic": "bla ɪ nd",
    "meaning": "adj.   盲的 ； 瞎的；盲目的；未察觉的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relation",
    "phonetic": "r ɪ ˈ le ɪʃ n",
    "meaning": "n.   关系 ； 联系；亲戚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "burst",
    "phonetic": "b ɜ :st",
    "meaning": "v. （使）爆裂； vi.   猛冲；突然出现   n.   突发；裂口",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scream",
    "phonetic": "skri:m",
    "meaning": "v./n.   尖叫； vt.   高声喊； vi.   呼啸而过",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bright",
    "phonetic": "bra ɪ t",
    "meaning": "adj.   明亮的；聪明的；鲜艳的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rough",
    "phonetic": "r ʌ f",
    "meaning": "adj.   粗糙的 ；粗略的；粗暴的 ； 恶劣的；艰难的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drought",
    "phonetic": "dra ʊ t",
    "meaning": "n.   干旱；旱灾",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "secretary",
    "phonetic": "ˈsekr ə tri",
    "meaning": "n.   秘书；干事；大臣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "edge",
    "phonetic": "ed ʒ",
    "meaning": "n.   边缘；优势",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bench",
    "phonetic": "bent ʃ",
    "meaning": "n.   长凳 ； 条凳；工作台",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wine",
    "phonetic": "wa ɪ n",
    "meaning": "n.   酒；葡萄酒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "basin",
    "phonetic": "ˈbe ɪ sn",
    "meaning": "n.   盆 ； 洗脸盆；盆地；流域",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wheel",
    "phonetic": "wi:l",
    "meaning": "n.   轮 ； 车轮",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wound",
    "phonetic": "wu:nd",
    "meaning": "n. （身体或 心灵上的）伤 ； 伤口",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "valley",
    "phonetic": "ˈvæli",
    "meaning": "n.   流域；山谷；溪谷",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sin",
    "phonetic": "",
    "meaning": "k [s ɪ ŋk] v. （使）下沉   n.   水池 ； 水槽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "area",
    "phonetic": "ˈe ə ri ə",
    "meaning": "n.   区域 ； 地区；范围；面积",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "type",
    "phonetic": "ta ɪ p",
    "meaning": "n.   类型 ； 典型   v.   打字",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "soil",
    "phonetic": "s ɔɪ l",
    "meaning": "n.   土壤； 土地\n61",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "south",
    "phonetic": "sa ʊ θ",
    "meaning": "n.   南方；南部   adj.   南的   adv.   在南方；向南方  ☞ southwest [ˌsa ʊ θ' west] n.   西南方   adj.   西南的   adv. 往西南 ;   来自西南  ☞ southern [ˈs ʌ ð ə n]   adj.   南的；南方的   n.   南；南方   adv.   在南方  ☞ southe ast [ˌsa ʊ θ' i:st] n.   东南；东南地区   adj.   东南的   adv.   来自东南",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prisoner",
    "phonetic": "ˈpr ɪ zn ə (r)",
    "meaning": "n.   囚犯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wedding",
    "phonetic": "ˈwed ɪ ŋ",
    "meaning": "n.   婚礼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tip",
    "phonetic": "t ɪ p",
    "meaning": "n.   尖端；末端；建议；小费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ordinary",
    "phonetic": "ˈ ɔ :dnri",
    "meaning": "adj.   平常的；平凡的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coal",
    "phonetic": "k əʊ l",
    "meaning": "n.   煤 ； 煤块",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "period",
    "phonetic": "ˈp ɪə ri ə d",
    "meaning": "n.   阶段；时期；经期",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wheat",
    "phonetic": "wi:t",
    "meaning": "n.   小麦",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "century",
    "phonetic": "ˈsent ʃə ri",
    "meaning": "n.   世纪 ； 百年",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "daw",
    "phonetic": "",
    "meaning": "n [d ɔ :n] n.   黎明 ； 拂晓；开端  List   2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "republic",
    "phonetic": "r ɪ ˈ p ʌ bl ɪ k",
    "meaning": "n.   共和国；共和政体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bias",
    "phonetic": "ˈba ɪə s",
    "meaning": "n.   偏见；偏爱   vt.   使有偏见；使偏向",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dove",
    "phonetic": "d ʌ v",
    "meaning": "n.   鸽子；温和派人物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gas",
    "phonetic": "gæs",
    "meaning": "n.   煤气；气体；汽油；天然气",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dust",
    "phonetic": "d ʌ st",
    "meaning": "n.   灰尘 ； 尘土；粉末",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "block",
    "phonetic": "bl ɒ k",
    "meaning": "n.   大块；街区 ； 大楼 ； 障碍物   vt.   堵住；拦截",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crop",
    "phonetic": "kr ɒ p",
    "meaning": "n.   庄稼 ； 作物；收成   vt.   剪裁；剪短\n62",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "downstairs",
    "phonetic": "ˌ da ʊ nˈste ə z",
    "meaning": "adv.   在楼下；往楼下   n. 楼下",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ahead",
    "phonetic": "ə ˈ hed",
    "meaning": "adv.   在前；向前；预先；领先",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "devil",
    "phonetic": "'devl",
    "meaning": "n.   魔鬼；撒旦；淘气鬼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gossip",
    "phonetic": "ˈg ɒ s ɪ p",
    "meaning": "n.   流言蜚语；闲聊   vi.   说三道四",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forest",
    "phonetic": "ˈf ɒ r ɪ st",
    "meaning": "n.   森林；森林地带",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "among",
    "phonetic": "ə ˈ m ʌ ŋ",
    "meaning": "prep.   在 …… 中间； …… 之一",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fork",
    "phonetic": "f ɔ :k",
    "meaning": "n.   餐叉；叉；岔口",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cave",
    "phonetic": "ke ɪ v",
    "meaning": "n .   山洞 ； 洞穴 ； 窑洞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chimney",
    "phonetic": "ˈt ʃɪ mni",
    "meaning": "n.   烟囱；裂 缝",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "north",
    "phonetic": "n ɔ : θ",
    "meaning": "n.   北 ； 北方   adj.   北方的   adv.   向北  ☞ northern [ˈn ɔ :ð ə n] adj.   北方的 ； 北部的  ☞ northwest ['n ɔ : θ' west] n.   西北   adj.   位于西北的；向西北  ☞ northeast ['n ɔ : θ' i:st] n.   东北   adj.   位于东北的   adv.   向东北",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "honest",
    "phonetic": "ˈ ɒ n ɪ st",
    "meaning": "adj.   诚实的；正直的；坦率的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equipment",
    "phonetic": "ɪ ˈ kw ɪ pm ə nt",
    "meaning": "n.   装备 ； 设备 ； 配备",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scold",
    "phonetic": "sk əʊ ld",
    "meaning": "vt.   训 斥 ； 责骂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "geography",
    "phonetic": "d ʒ iˈ ɒ gr ə fi",
    "meaning": "n.   地理；地理学；地形",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "further",
    "phonetic": "ˈf ɜ :ð ə (r)",
    "meaning": "adv.   更远地；此外   adj.   更多的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "remove",
    "phonetic": "r ɪ ˈ mu:v",
    "meaning": "vt.   以移开 ； 搬走；脱掉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mouse",
    "phonetic": "ma ʊ s",
    "meaning": "n.   老鼠 ； 耗子   （ mice   复数）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pale",
    "phonetic": "pe ɪ l",
    "meaning": "adj.   苍白的；浅色的；微弱的；暗淡的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "native",
    "phonetic": "ˈne ɪ t ɪ v",
    "meaning": "adj.   本地的；土著的   n.   本地人\n63",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cage",
    "phonetic": "ke ɪ d ʒ",
    "meaning": "n.   笼；鸟笼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "peasant",
    "phonetic": "ˈpeznt",
    "meaning": "n.   农 民",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "theory",
    "phonetic": "ˈ θ ɪə ri",
    "meaning": "n.   理论；原理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "medal",
    "phonetic": "ˈmedl",
    "meaning": "n.   奖章；勋章  List   3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tin",
    "phonetic": "t ɪ n",
    "meaning": "n.   锡；罐；罐头",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shore",
    "phonetic": "ʃɔ :(r)",
    "meaning": "n.   岸 ； 滨",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anyhow",
    "phonetic": "ˈeniha ʊ",
    "meaning": "adv.   尽管如此；随便地  ☞ anyone [ˈeniw ʌ n] pron.   任何人  ☞ anybody [ˈenib ɒ di] pron.   任何人  ☞ anything [ˈeni θ ɪ ŋ] pron.   任何事 物  ☞ anyway [ˈeniwe ɪ ] adv.   无论如何 ； 反正；尽管如 此；至少  ☞ anywhere [ˈeniwe ə (r)] adv.   无论何处；在任何地方",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strength",
    "phonetic": "streŋ θ",
    "meaning": "n.   力量；毅力实力；长处",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wise",
    "phonetic": "wa ɪ z",
    "meaning": "adj.   明智的；充满智慧的；英明的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "peer",
    "phonetic": "p ɪə (r)",
    "meaning": "n.   同龄人   vi.   盯着看 ； 端详",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enemy",
    "phonetic": "ˈen ə mi",
    "meaning": "n.   敌人；仇敌",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "below",
    "phonetic": "b ɪ ˈ l əʊ",
    "meaning": "prep.   在 …… 下面；低于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collar",
    "phonetic": "ˈk ɒ l ə (r)",
    "meaning": "n.   衣领；项圈   vt.   抓住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "political",
    "phonetic": "p ə ˈ l ɪ t ɪ kl",
    "meaning": "adj.   政治 的；党派的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cow",
    "phonetic": "ka ʊ",
    "meaning": "n.   母牛 ； 奶牛   v.   恐吓 ； 胁迫\n64",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gather",
    "phonetic": "ˈgæð ə (r)",
    "meaning": "ν.   聚集；集合； vt.   收集",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quarrel",
    "phonetic": "ˈkw ɒ r ə l",
    "meaning": "n. / v.   争吵",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cheque",
    "phonetic": "t ʃ ek",
    "meaning": "n.   支票",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "goose",
    "phonetic": "gu:s",
    "meaning": "n.   鹅",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ham",
    "phonetic": "hæm",
    "meaning": "n.   火腿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "natural",
    "phonetic": "ˈnæt ʃ r ə l",
    "meaning": "adj.   自然界的；天然的；天生的；正常的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pan",
    "phonetic": "pæn",
    "meaning": "n.   平底锅；秤盘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scent",
    "phonetic": "s ent",
    "meaning": "n.   香味；气息；察觉   vt.   嗅出；觉察出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "noble",
    "phonetic": "ˈ n əʊ bl",
    "meaning": "adj.   贵族的；高尚的；宏伟的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ought",
    "phonetic": "ɔ :t",
    "meaning": "aux. / v.   应当 ； 应该",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sheet",
    "phonetic": "ʃ i:t",
    "meaning": "n.   被单；纸张；薄板；一张 ； 一大片",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "neat",
    "phonetic": "ni:t",
    "meaning": "adj.   整洁的；简洁的；纯的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pure",
    "phonetic": "pj ʊə (r)",
    "meaning": "adj.   纯粹的；纯的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "melon",
    "phonetic": "ˈmel ə n",
    "meaning": "n.   瓜；甜瓜",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "heaven",
    "phonetic": "ˈhevn",
    "meaning": "n.   天堂；极乐世界；天空",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tailor",
    "phonetic": "ˈte ɪ l ə (r)",
    "meaning": "n.   裁缝   vt.   订做",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "silver",
    "phonetic": "ˈs ɪ lv ə (r)",
    "meaning": "n.   银；银币；银器；银色   adj.   银色的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tobacco",
    "phonetic": "t ə ˈ bæk əʊ",
    "meaning": "n.   烟草 ； 烟叶；烟草制品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spirit",
    "phonetic": "ˈsp ɪ r ɪ t",
    "meaning": "n.   精神；心灵；灵魂；志气  List   4",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indeed",
    "phonetic": "ɪ nˈdi:d",
    "meaning": "adv.   真正地 ； 确实其实 ； 实际上\n65",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shrink",
    "phonetic": "ʃ r ɪ ŋk",
    "meaning": "v. （使）缩小 ； （使）收缩； vi.   缩水；退缩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "land",
    "phonetic": "lænd",
    "meaning": "n.   陆地；土地；地区   v.   使降落；使着陆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "willing",
    "phonetic": "ˈw ɪ l ɪ ŋ",
    "meaning": "adj.   乐意的；自愿的 ；心甘情愿的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pile",
    "phonetic": "pa ɪ l",
    "meaning": "n.   堆   vt.   堆叠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thick",
    "phonetic": "θ ɪ k",
    "meaning": "adj.   厚的；粗的 ； 浓密的；黏稠的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mode",
    "phonetic": "m əʊ d",
    "meaning": "n.   方式；模式；状态",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pork",
    "phonetic": "p ɔ :k",
    "meaning": "n.   猪肉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cruel",
    "phonetic": "kru: ə l",
    "meaning": "adj.   残忍的 ； 残酷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "root",
    "phonetic": "ru:t",
    "meaning": "n.   根 ； 根源；根基   vt.   生根",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "escape",
    "phonetic": "ɪ ˈ ske ɪ p",
    "meaning": "v. / n.   逃跑；漏出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fare",
    "phonetic": "fe ə (r)",
    "meaning": "n.   车费；船费   vi.   进展",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forge",
    "phonetic": "f ɔ :d ʒ",
    "meaning": "v.   伪造；锻造； vi.   稳步前进",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cheese",
    "phonetic": "t ʃ i:z",
    "meaning": "n.   乳酪 ； 干酪",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "percent",
    "phonetic": "p ə 'sent",
    "meaning": "n.   百分之 ……",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cotton",
    "phonetic": "ˈk ɒ tn",
    "meaning": "n.   棉；棉线；棉布",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "depth",
    "phonetic": "dep θ",
    "meaning": "n.   深 ； 深度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fault",
    "phonetic": "f ɔ :lt",
    "meaning": "n.   缺点；过失；故障",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pity",
    "phonetic": "ˈp ɪ ti",
    "meaning": "n.   同情 ； 怜悯；遗憾   vt.   同情",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "communism",
    "phonetic": "ˈk ɒ mjun ɪ z ə m",
    "meaning": "n.   共产主义  ☞ communist [ˈk ɒ mj ə n ɪ st] n.   共产主义者   adj.   共产主 义的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advance",
    "phonetic": "ə dˈv ɑ:ns",
    "meaning": "n. / v.   前进；（ 使）进展   adj.   事先的\n66",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mad",
    "phonetic": "mæd",
    "meaning": "adj.   疯的；气愤的；极愚蠢的；痴迷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "freeze",
    "phonetic": "fri:z",
    "meaning": "v. （使）冻结；冷藏；（使）结冰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brush",
    "phonetic": "br ʌʃ",
    "meaning": "n.   刷子 ； 毛刷；画笔；灌木丛   v.   刷；涂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fridge",
    "phonetic": "fr ɪ d ʒ",
    "meaning": "（亦作   refrigerator ） n.   电冰箱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quarter",
    "phonetic": "ˈkw ɔ :t ə (r)",
    "meaning": "n.   四分之一；一刻钟；季度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fellow",
    "phonetic": "ˈfel əʊ",
    "meaning": "n.   男人；家伙；伙伴；同事",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exhib",
    "phonetic": "",
    "meaning": "ition [ˌeks ɪ ˈ b ɪʃ n] n.   展览；表现；展览会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "he",
    "phonetic": "",
    "meaning": "adache [ˈhede ɪ k] n.   头痛；令人头痛的事  List   5",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "row",
    "phonetic": "r əʊ",
    "meaning": "n.   排；吵架 ； 纠纷；大的噪音   v.   吵架",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scarce",
    "phonetic": "ske ə s",
    "meaning": "adj.   缺乏的；稀少的   adv.   几乎不；简直不",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "harvest",
    "phonetic": "ˈh ɑ:vɪst",
    "meaning": "n   收获 ； 收成   v.   收割；捕猎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "greeting",
    "phonetic": "ˈgri:t ɪ ŋ",
    "meaning": "n.   问候；招呼；致敬；迎接  ☞ greet [gri:t] vt.   问候；招呼；迎接；对 …… 作出反应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "labou",
    "phonetic": "",
    "meaning": "r ['le ɪ b ə (r)] （亦作   labor ） n.   劳动；工作；劳工",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mirror",
    "phonetic": "ˈm ɪ r ə (r)",
    "meaning": "n.   镜子；写照   vi.   反映",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "modern",
    "phonetic": "ˈm ɒ dn",
    "meaning": "adj.   现代的；近代的；新式的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nut",
    "phonetic": "n ʌ t",
    "meaning": "n.   坚果；螺母",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elegant",
    "phonetic": "ˈel ɪ g ə nt",
    "meaning": "a dj .   优雅的 ； 文雅的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "square",
    "phonetic": "skwe ə (r)",
    "meaning": "n.   平方；广场；正方形   adj.   平方的；正方形的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "operate",
    "phonetic": "ˈ ɒ p ə re ɪ t",
    "meaning": "v.   操作；运营； vi.   运转；动手术\n67",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "machine",
    "phonetic": "m ə ˈ ʃ i:n",
    "meaning": "n.   机器；机械装置",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shallow",
    "phonetic": "ˈ ʃ æl əʊ",
    "meaning": "adj.   浅的；肤 浅的；弱的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "twin",
    "phonetic": "tw ɪ n",
    "meaning": "n.   双胞胎中一人   adj.   双胞胎的；成双的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ladder",
    "phonetic": "ˈlæd ə (r)",
    "meaning": "n.   梯子；阶梯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "whereas",
    "phonetic": "ˌwe ə rˈæz",
    "meaning": "conj.   然而 ； 但是；尽管",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "international",
    "phonetic": "ˌ ɪ nt ə ˈ næ ʃ n ə l",
    "meaning": "adj.   国际的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "penny",
    "phonetic": "ˈpeni",
    "meaning": "n. （英）便士；（美）分",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scene",
    "phonetic": "si:n",
    "meaning": "n.   情景；景象；场面；片段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "increase",
    "phonetic": "ɪ nˈkri:s",
    "meaning": "v.   增加； （使）增加；（使）增长",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hole",
    "phonetic": "h əʊ l",
    "meaning": "n.   洞；孔 ； 眼；巢 六；漏洞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "garage",
    "phonetic": "ˈgær ɑ:ʒ",
    "meaning": "n.   车库；汽车修理厂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fond",
    "phonetic": "f ɒ nd",
    "meaning": "adj.   喜爱的；温情的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "destroy",
    "phonetic": "d ɪ ˈ str ɔɪ",
    "meaning": "vt.   破坏 ； 毁坏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "energy",
    "phonetic": "ˈen ə d ʒ i",
    "meaning": "n.   活力；精力；能源；能量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bother",
    "phonetic": "ˈb ɒ ð ə (r)",
    "meaning": "v.   麻烦；打扰   n.   麻烦 ； 困难",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "above",
    "phonetic": "ə ˈ b ʌ v",
    "meaning": "prep.   在 …… 上面； 超过   adv. 在 …… 上面   adj. 上述的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "honour",
    "phonetic": "' ɒ n ə (r)",
    "meaning": "（ 亦作   honor ） n.   荣幸；尊敬 ； 敬意   vt.   尊敬",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "seek",
    "phonetic": "s i:k",
    "meaning": "v.   寻找；谋求；试图",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "medical",
    "phonetic": "ˈmed ɪ kl",
    "meaning": "adj.   医学的；医疗的  List   6",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wipe",
    "phonetic": "wa ɪ p",
    "meaning": "v.   擦；拭；抹；消除\n68",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "midday",
    "phonetic": "ˌm ɪ dˈde ɪ",
    "meaning": "n.   中午；正午",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "roof",
    "phonetic": "ru:f",
    "meaning": "n.   屋顶 ； 顶部",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quantity",
    "phonetic": "ˈkw ɒ nt ə ti",
    "meaning": "n.   数量；大量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exist",
    "phonetic": "ɪ gˈz ɪ st",
    "meaning": "vi.   存在；生存",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "generation",
    "phonetic": "ˌd ʒ en ə ˈ re ɪʃ n",
    "meaning": "n.   一代；一代人；产生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refer",
    "phonetic": "r ɪ ˈ f ɜ :(r)",
    "meaning": "v.   谈及；查阅；参考；提交",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dialogue",
    "phonetic": "'da ɪə l ɒɡ",
    "meaning": "n.   对话 ； 对白",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cream",
    "phonetic": "kri:m",
    "meaning": "n.   奶油 ； 乳脂；奶油色",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bone",
    "phonetic": "b əʊ n",
    "meaning": "n.   骨；骨质",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deed",
    "phonetic": "di:d",
    "meaning": "n.   行为 ； 行动；契约 ； 证书",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bury",
    "phonetic": "ˈberi",
    "meaning": "vt.   埋葬 ； 葬； n.   埋藏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cent",
    "phonetic": "sent",
    "meaning": "n.   分；分币",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coast",
    "phonetic": "k əʊ st",
    "meaning": "n.   海岸；海滨",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inch",
    "phonetic": "ɪ nt ʃ",
    "meaning": "n.   英寸；少量；短距离",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "envelope",
    "phonetic": "ˈenv ə l əʊ p",
    "meaning": "n.   信封",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "handkerchief",
    "phonetic": "ˈhæŋk ə t ʃɪ f",
    "meaning": "n.   手 帕；纸巾",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regular",
    "phonetic": "ˈregj ə l ə (r)",
    "meaning": "adj.   定期的；经常的   n.   常客",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "model",
    "phonetic": "ˈm ɒ dl",
    "meaning": "n.   模型；模范；模特儿   v.   做模型   adj.   模范的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pleasure",
    "phonetic": "ˈple ʒə (r)",
    "meaning": "n.   愉快 ； 快乐；乐事；满足；娱乐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pot",
    "phonetic": "p ɒ t",
    "meaning": "n.   锅；壶；罐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "length",
    "phonetic": "leŋ θ",
    "meaning": "n.   长 ； 长度；一段；篇幅",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plain",
    "phonetic": "ple ɪ n",
    "meaning": "adj.   清楚的；朴素的；平凡的；坦诚的   n.   平原\n69",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nail",
    "phonetic": "ne ɪ l",
    "meaning": "n.   指甲；趾甲；钉   vt.   钉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sweater",
    "phonetic": "ˈs wet ə (r)",
    "meaning": "n.   毛线衣；针织衫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "patent",
    "phonetic": "ˈpætnt",
    "meaning": "n.   专利权   adj.   明显的；有专利的   vt.   获得专利权",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "treasure",
    "phonetic": "ˈtre ʒə (r)",
    "meaning": "n.   珠宝；财富；宝物   vt.   珍视；珍藏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shade",
    "phonetic": "ʃ e ɪ d",
    "meaning": "n.   阴凉处；遮光物；阴暗的   v.   为 …… 遮阳",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tale",
    "phonetic": "te ɪ l",
    "meaning": "n.   故事；传说",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "branch",
    "phonetic": "br ɑ:ntʃ",
    "meaning": "n.   树枝；分支；支路   v . 分开；分岔  List   7",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bush",
    "phonetic": "b ʊ ʃ",
    "meaning": "n.   灌木 ； 灌木丛；荒野",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "laboratory",
    "phonetic": "l ə ˈ b ɒ r ə tri",
    "meaning": "（亦作   lab ） n.   实验室；研究所",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shelf",
    "phonetic": "ʃ elf",
    "meaning": "n.   架子 ； 搁板；大陆架",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "internet",
    "phonetic": "ˈ ɪ nt ə net",
    "meaning": "n.   因特网",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "within",
    "phonetic": "w ɪ ˈ ð ɪ n",
    "meaning": "prep.   在 … 之内   adv.   在内部",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "temper",
    "phonetic": "ˈtemp ə (r)",
    "meaning": "n.   脾气；怒气；情绪   v.   使缓和；使温和",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "soldier",
    "phonetic": "ˈs əʊ ld ʒə (r)",
    "meaning": "n.   军人；士兵；战士",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prison",
    "phonetic": "ˈpr ɪ zn",
    "meaning": "n.   监狱；监禁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "medicine",
    "phonetic": "ˈmedsn",
    "meaning": "n.   药；医学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sort",
    "phonetic": "s ɔ :t",
    "meaning": "n.   种类 ；分类   v.   整理；妥善处理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "throughout",
    "phonetic": "θ ru:ˈa ʊ t",
    "meaning": "prep. / adv.   贯穿；遍及；到处",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sweep",
    "phonetic": "swi:p",
    "meaning": "v.   扫 ； 打扫；扫过",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "seize",
    "phonetic": "si:z",
    "meaning": "v.   抓住 ； 逮捕；夺取\n70",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "otherwise",
    "phonetic": "ˈ ʌ ð ə wa ɪ z",
    "meaning": "adv.   否则；要不然 ； 另外",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pleasant",
    "phonetic": "ˈpleznt",
    "meaning": "adj.   令人愉快的；友好的；可喜的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "needle",
    "phonetic": "ˈni:dl",
    "meaning": "n.   针 ； 编织针；指针；松针；针头",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prope",
    "phonetic": "",
    "meaning": "r [ˈpr ɒ p ə (r)] adj.   正确的；恰当的；合乎体统的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sail",
    "phonetic": "se ɪ l",
    "meaning": "n.   帆；船   v.   航行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hatch",
    "phonetic": "hæt ʃ",
    "meaning": "v.   孵出 ； 孵化；策划   n.   舱口 ； 舱门",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flow",
    "phonetic": "fl əʊ",
    "meaning": "v.   流动；流通   n.   流动；流畅",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "peach",
    "phonetic": "pi:t ʃ",
    "meaning": "n.   桃子；桃红色   adj.   桃红色的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fist",
    "phonetic": "f ɪ st",
    "meaning": "n.   拳头",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lip",
    "phonetic": "l ɪ p",
    "meaning": "n.   嘴唇；边沿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "seed",
    "phonetic": "si:d",
    "meaning": "n.   种子 ； 籽；萌芽；起源",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "particular",
    "phonetic": "p ə ˈ t ɪ kj ə l ə (r)",
    "meaning": "adj.   特殊的；特定的；挑剔的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mai",
    "phonetic": "",
    "meaning": "lbox [ˈme ɪ lb ɒ ks] n.   邮筒；信箱；电子邮箱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "code",
    "phonetic": "k əʊ d",
    "meaning": "n.   密码；道德准则；法典   vi.   为 …… 编码",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "boil",
    "phonetic": "b ɔɪ l",
    "meaning": "v. （使）沸腾 ； 煮沸 ； 烧开",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "district",
    "phonetic": "ˈd ɪ str ɪ kt",
    "meaning": "n.   区；地区；区域  List   8",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cottage",
    "phonetic": "ˈk ɒ t ɪ d ʒ",
    "meaning": "n.   村舍 ； 小屋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hereby",
    "phonetic": "ˌh ɪə ˈ ba ɪ",
    "meaning": "adv.   特此；以此",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jail",
    "phonetic": "d ʒ e ɪ l",
    "meaning": "n.   监狱   vt.   监禁\n71",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sketch",
    "phonetic": "sket ʃ",
    "meaning": "v.   画素描；概述   n.   素描；小品；概述",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tho",
    "phonetic": "",
    "meaning": "ught [ θ ɔ :t] n.   思想；思考；想法；关心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stair",
    "phonetic": "ste ə (r)",
    "meaning": "n.   楼梯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "iron",
    "phonetic": "ˈa ɪə n",
    "meaning": "n.   铁；熨斗   v.   熨 ； 烫平   adj.   坚强的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tap",
    "phonetic": "tæp",
    "meaning": "n.   水龙头   v.   轻敲；轻拍；轻叩；开发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "upward",
    "phonetic": "ˈ ʌ pw ə d",
    "meaning": "adj.   向上的；上升的   adv.   向上",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tight",
    "phonetic": "ta ɪ t",
    "meaning": "adj.   紧的；牢固的；绷紧的；严厉的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "surface",
    "phonetic": "ˈs ɜ :f ɪ s",
    "meaning": "n.   表面；表层；外观",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "phys",
    "phonetic": "",
    "meaning": "ics [ˈf ɪ z ɪ ks] n.   物理学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sight",
    "phonetic": "sa ɪ t",
    "meaning": "n.   视力；视觉；情景；景点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "path",
    "phonetic": "p ɑ: θ",
    "meaning": "n.   路 ； 小道；道路",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "narrow",
    "phonetic": "ˈnær əʊ",
    "meaning": "adj.   狭窄的；勉强的；独隘的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ceiling",
    "phonetic": "ˈsi:l ɪ ŋ",
    "meaning": "n.   天花板 ； 顶棚；上限",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accept",
    "phonetic": "ə kˈsept",
    "meaning": "v.   接受；忍受；同意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diet",
    "phonetic": "ˈda ɪə t",
    "meaning": "n.   饮食   v.   节食",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pledge",
    "phonetic": "pled ʒ",
    "meaning": "v.   正式承诺；使保证   n.   保证；誓言",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "servant",
    "phonetic": "ˈs ɜ :v ə nt",
    "meaning": "n.   仆人 ； 佣人；职 员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "metal",
    "phonetic": "ˈmetl",
    "meaning": "n.   金属",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "phrase",
    "phonetic": "fre ɪ z",
    "meaning": "n.   短语；词组；成语；惯用语",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "telegram",
    "phonetic": "ˈtel ɪ græm",
    "meaning": "n.   电报",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "steak",
    "phonetic": "ste ɪ k",
    "meaning": "n.   牛排；肉排；鱼排",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ski",
    "phonetic": "ski:",
    "meaning": "v.   滑雪\n72",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "technical",
    "phonetic": "ˈtekn ɪ kl",
    "meaning": "adj.   技术的 ； 工艺的；专业的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "puzzle",
    "phonetic": "ˈp ʌ zl",
    "meaning": "n.   谜；智力游戏；难题   v.   使迷惑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spoon",
    "phonetic": "spu:n",
    "meaning": "n.   匙 ； 勺子；一匙的量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pearl",
    "phonetic": "p ɜ :l",
    "meaning": "n.   珍珠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "upstairs",
    "phonetic": "ˌ ʌ pˈ ste ə z",
    "meaning": "adv.   在楼上；往楼上   adj.   楼上的   n.   楼上  List   9",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thief",
    "phonetic": "θ i:f",
    "meaning": "n.   小偷 ； 贼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pipe",
    "phonetic": "pa ɪ p",
    "meaning": "n.   管子；管道；烟斗；管乐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "broad",
    "phonetic": "br ɔ :d",
    "meaning": "adj.   宽阔的；广泛的；概括的；辽阔的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "port",
    "phonetic": "p ɔ :t",
    "meaning": "n.   港 ； 港口；港口城市",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "opposite",
    "phonetic": "ˈ ɒ p ə z ɪ t",
    "meaning": "adj.   对面的   n.   对立的人 （物） prep.   在 …… 对面",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "heat",
    "phonetic": "hi:t",
    "meaning": "n.   热；温度   v.   变热；加热",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pupil",
    "phonetic": "ˈpju:pl",
    "meaning": "n.   学生 ； 小学生； 门徒；瞳孔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "saw",
    "phonetic": "s ɔ :",
    "meaning": "n. / v.   锯",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fair",
    "phonetic": "fe ə (r)",
    "meaning": "adj.   适当的；公正的；漂亮的   n.   集市",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "click",
    "phonetic": "kl ɪ k",
    "meaning": "v.   点击；（使发出）咔嗒声",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "goat",
    "phonetic": "g əʊ t",
    "meaning": "n.   山羊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dozen",
    "phonetic": "ˈd ʌ zn",
    "meaning": "n.   十二个 ； 一打；许多",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "castle",
    "phonetic": "ˈk ɑ:sl",
    "meaning": "n.   城堡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "camp",
    "phonetic": "kæmp",
    "meaning": "n.   营地；兵营   v.   宿营",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equal",
    "phonetic": "ˈi:kw ə l",
    "meaning": "adj.   相等的；平等的；能胜任的\n73",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cock",
    "phonetic": "k ɒ k",
    "meaning": "n.   公鸡 ； 雄禽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blame",
    "phonetic": "ble ɪ m",
    "meaning": "vt.   责怪；把 …… 归咎于   n.   责任",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dial",
    "phonetic": "ˈda ɪə l",
    "meaning": "v.   拨（电话号码） n.   表盘；刻度盘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chaos",
    "phonetic": "ˈke ɪɒ s",
    "meaning": "n.   混乱 ； 杂乱 ； 紊乱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hack",
    "phonetic": "hæk",
    "meaning": "v.   砍；非法侵入   n.   侵入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slave",
    "phonetic": "sle ɪ v",
    "meaning": "n.   奴隶   vi.   苦干",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tongue",
    "phonetic": "t ʌ ŋ",
    "meaning": "n.   舌头；语言；说话方式",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tire",
    "phonetic": "ˈta ɪə (r)",
    "meaning": "vt. （使）感到累   n.   轮胎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bitter",
    "phonetic": "ˈb ɪ t ə (r)",
    "meaning": "adj.   苦的；痛苦的；怨恨的；严寒的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "button",
    "phonetic": "ˈb ʌ tn",
    "meaning": "n.   纽扣；按钮；徽章   v.   扣上",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hall",
    "phonetic": "h ɔ :l",
    "meaning": "n.   门厅；过道；礼堂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drow",
    "phonetic": "",
    "meaning": "n [dra ʊ n] v.   溺死；淹没",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cell",
    "phonetic": "sel",
    "meaning": "n.   细胞；小房间；牢房",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "party",
    "phonetic": "ˈp ɑ:ti",
    "meaning": "n.   聚会；党 ； 党派",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wage",
    "phonetic": "we ɪ d ʒ",
    "meaning": "n.   工资 ； 工钱  List   10",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flight",
    "phonetic": "fla ɪ t",
    "meaning": "n.   航班；飞行；逃跑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fence",
    "phonetic": "fens",
    "meaning": "n.   栅栏；障碍物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "affair",
    "phonetic": "ə ˈ fe ə (r)",
    "meaning": "n.   事情 ； 事件；暧昧关系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chalk",
    "phonetic": "t ʃɔ :k",
    "meaning": "n.   粉笔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bend",
    "phonetic": "bend",
    "meaning": "v. （使）倾斜 ； 弯曲 ； 弯腰\n74",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cough",
    "phonetic": "k ɒ f",
    "meaning": "n. / v.   咳嗽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chain",
    "phonetic": "t ʃ e ɪ n",
    "meaning": "n.   链 ； 链条；一连串   vt.   用锁链拴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "operation",
    "phonetic": "ˌ ɒ p ə ˈ re ɪʃ n",
    "meaning": "n.   操作；手术；运算；行动；运转",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "throw",
    "phonetic": "θ r əʊ",
    "meaning": "v.   投；抛；掷；扔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slip",
    "phonetic": "sl ɪ p",
    "meaning": "v.   滑倒；脱落；下降；溜走；陷入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disk",
    "phonetic": "d ɪ sk",
    "meaning": "（亦作   disc ） n.   磁盘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "league",
    "phonetic": "li:g",
    "meaning": "n.   同盟 ； 联盟；联合会；级别 ； 水平",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "corn",
    "phonetic": "k ɔ :n",
    "meaning": "n.   ( 英）谷物；（美）玉米",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fetch",
    "phonetic": "fet ʃ",
    "meaning": "v.   拿来；请来；接来；卖得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "haul",
    "phonetic": "h ɔ :l",
    "meaning": "v.   拖 ； 拉 ；用力缓慢挪动到   n.   大批赃物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "situation",
    "phonetic": "ˌs ɪ t ʃ uˈe ɪʃ n",
    "meaning": "n.   形势；情况；位置",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "olympic",
    "phonetic": "ə ˈ l ɪ mp ɪ k",
    "meaning": "adj.   奥林匹克运动会的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "poll",
    "phonetic": "p əʊ l",
    "meaning": "n.   民意测验；计票；投票数   v.   获得（票数）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "haunt",
    "phonetic": "h ɔ :nt",
    "meaning": "v.   出没；难以忘却   n. 常去的场所",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "church",
    "phonetic": "t ʃɜ :t ʃ",
    "meaning": "n. 教堂 ； 礼拜堂；礼拜；教派",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dare",
    "phonetic": "de ə (r)",
    "meaning": "v. / aux.   敢 ； 敢于   n.   挑战 ； 激将",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "broadcast",
    "phonetic": "ˈbr ɔ :dk ɑ:st",
    "meaning": "n.   广播   v .   播送；散布",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "solid",
    "phonetic": "ˈs ɒ l ɪ d",
    "meaning": "adj.   固体的；结实的；可靠的固体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "altogether",
    "phonetic": "ˌ ɔ :lt ə ˈ geð ə (r)",
    "meaning": "adv.   全部地 ； 完全地；总共；总而言之",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bite",
    "phonetic": "ba ɪ t",
    "meaning": "v.   咬；叮；咬铒 ； 上钩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obey",
    "phonetic": "ə ˈ be ɪ",
    "meaning": "v.   服从；遵守",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plough",
    "phonetic": "pla ʊ",
    "meaning": "n.   犁   v.   犁 ； 耕\n75",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "edit",
    "phonetic": "ˈed ɪ t",
    "meaning": "vt.   编辑；校订；剪辑；主编",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quality",
    "phonetic": "ˈkw ɒ l ə ti",
    "meaning": "n.   质量；品质；特 性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fever",
    "phonetic": "ˈfi:v ə (r)",
    "meaning": "n .   发烧 ； 发热；激 动不安\n76  四级偶考词  List   1",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "presently",
    "phonetic": "ˈprezntli",
    "meaning": "adj.   不久；目前",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plantation",
    "phonetic": "pl ɑ:nˈteɪʃn",
    "meaning": "n.   种植园；人造林",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attic",
    "phonetic": "ˈæt ɪ k",
    "meaning": "n.   阁楼 ； 顶楼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bulletin",
    "phonetic": "ˈb ʊ l ə t ɪ n",
    "meaning": "n.   新闻简报；公告",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discrimination",
    "phonetic": "d ɪ ˌ skr ɪ m ɪ ˈ ne ɪʃ n",
    "meaning": "n.   歧视 ； 偏相；区别；识别",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marsh",
    "phonetic": "m ɑ:ʃ",
    "meaning": "n .   沼泽；湿地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pine",
    "phonetic": "pa ɪ n",
    "meaning": "n.   松树；松木   v.   悲伤 ； 难过",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "breadth",
    "phonetic": "bred θ",
    "meaning": "n.   宽 度 ； 阔度；广泛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "route",
    "phonetic": "ru:t",
    "meaning": "n.   路线；途径",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marathon",
    "phonetic": "ˈmær ə θ ə n",
    "meaning": "n.   马拉松赛跑；马拉松式的活动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ash",
    "phonetic": "æ ʃ",
    "meaning": "n.   灰 ； 灰烬；骨灰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brandy",
    "phonetic": "ˈbrændi",
    "meaning": "n.   白兰地（酒）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lid",
    "phonetic": "l ɪ d",
    "meaning": "n.   盖子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brag",
    "phonetic": "bræg",
    "meaning": "v.   吹噓；夸耀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "column",
    "phonetic": "ˈk ɒ l ə m",
    "meaning": "n.   柱 ； 支柱；圆柱；栏；专栏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "boom",
    "phonetic": "bu: m",
    "meaning": "n.   繁荣；激增   v.   繁荣昌盛；轰鸣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rumour",
    "phonetic": "ˈru:m ə (r)",
    "meaning": "（亦作   rumor ） n.   谣言",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tube",
    "phonetic": "[ tju:b",
    "meaning": "n.   管；管状物；软管",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "colony",
    "phonetic": "ˈk ɒ l ə ni",
    "meaning": "n.   殖民地；群 ； 群体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "blur",
    "phonetic": "bl ɜ :(r)",
    "meaning": "v. （使）模糊不清   n.   模糊形状\n77  List   2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "physicist",
    "phonetic": "ˈf ɪ z ɪ s ɪ st",
    "meaning": "n.   物理学家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arrow",
    "phonetic": "ˈær əʊ",
    "meaning": "n.   箭；箭头",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "terror",
    "phonetic": "ˈter ə (r)",
    "meaning": "n.   恐怖 ； 惊骇；小捣蛋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "approval",
    "phonetic": "ə ˈ pru:vl",
    "meaning": "n.   赞成；同 意；批准",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "portable",
    "phonetic": "ˈp ɔ :t ə bl",
    "meaning": "adj.   轻便的；手提的；便携式的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trunk",
    "phonetic": "tr ʌ ŋk",
    "meaning": "n .   树干；大衣箱；象鼻；躯干",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ancestor",
    "phonetic": "ˈænsest ə (r)",
    "meaning": "n.   祖宗；祖先",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "horizontal",
    "phonetic": "ˌh ɒ r ɪ ˈ z ɒ ntl",
    "meaning": "adj.   水平的；横的   n.   水平位置；水平线",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thunder",
    "phonetic": "ˈ θ ʌ nd ə (r)",
    "meaning": "n.   雷（声） v.   打雷；怒吼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "imperial",
    "phonetic": "ɪ mˈp ɪə ri ə l",
    "meaning": "adj.   帝国的；（度量衡）英制的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jewel",
    "phonetic": "ˈd ʒ u: ə l",
    "meaning": "n.   宝石；珠宝首饰 ；宝贝",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insect",
    "phonetic": "ˈ ɪ nsekt",
    "meaning": "n.   昆虫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "knit",
    "phonetic": "n ɪ t",
    "meaning": "v.   编织； ( 使 ) 紧凑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "incidenc",
    "phonetic": "",
    "meaning": "e [ˈ ɪ ns ɪ d ə ns] n.   发生率；发生范围",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "christ",
    "phonetic": "kra ɪ st",
    "meaning": "n.   基督；耶稣基督  ☞ Christian [ˈkr ɪ st ʃə n] n.   基督教徒   adj.   基督教的；基督教徒的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "infant",
    "phonetic": "ˈ ɪ nf ə nt",
    "meaning": "n.   婴儿 ； 幼儿   adj.   供婴幼儿用的；初期的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "troublesome",
    "phonetic": "ˈtr ʌ bls ə m",
    "meaning": "adj.   令人烦恼的；引起麻烦的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indication",
    "phonetic": "ˌ ɪ n d ɪ ˈ ke ɪʃ n",
    "meaning": "n.   迹象；表示 ； 表明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pillar",
    "phonetic": "ˈp ɪ l ə (r)",
    "meaning": "n.   柱子；核心 ； 支柱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indust",
    "phonetic": "",
    "meaning": "rialize [ ɪ nˈd ʌ stri ə la ɪ z] v. （使）工业化\n78  List   3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "indirect",
    "phonetic": "ˌ ɪ nd ə ˈ rekt",
    "meaning": "adj.   间接的；迂回的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gang",
    "phonetic": "gæŋ",
    "meaning": "n.   帮 ； 一伙 ； 一群",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thumb",
    "phonetic": "θ ʌ m",
    "meaning": "n.   拇指   v.   示意要求搭车",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decoration",
    "phonetic": "ˌdek ə ˈ re ɪʃ n",
    "meaning": "n.   装饰 ； 装饰品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fuss",
    "phonetic": "f ʌ s",
    "meaning": "n.   大惊小怪；大发牢骚   v.   过分关心；瞎忙活",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "portrait",
    "phonetic": "ˈp ɔ :tre ɪ t",
    "meaning": "n.   肖像；描绘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "funeral",
    "phonetic": "ˈfju:n ə r ə l",
    "meaning": "n.   葬礼 ； 丧礼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "theoretical",
    "phonetic": "ˌ θ ɪə ˈ ret ɪ kl",
    "meaning": "adj.   理论（上）的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "customs",
    "phonetic": "ˈk ʌ st ə mz",
    "meaning": "n.   海关；关税",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "operational",
    "phonetic": "ˌ ɒ p ə ˈ re ɪʃə nl",
    "meaning": "adj.   操作上的；可使用的  ☞ operator [ˈ ɒ p ə re ɪ t ə (r)] n.   操作人员；接线员；经营者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "frost",
    "phonetic": "fr ɒ st",
    "meaning": "n.   霜； 严寒天气；冰冻（期） v. （使）结霜",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "database",
    "phonetic": "ˈde ɪ t ə be ɪ s",
    "meaning": "n.   资料库 ； 数据库",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rope",
    "phonetic": "r əʊ p",
    "meaning": "n.   粗绳 ； 绳索   vt.   用绳捆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trim",
    "phonetic": "tr ɪ m",
    "meaning": "adj.   整齐的；苗条的   vt. / n.   修剪；装饰（物）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "freight",
    "phonetic": "fre ɪ t",
    "meaning": "n.   货运；货物   vt.   货运",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crown",
    "phonetic": "kra ʊ n",
    "meaning": "n.   王冠 ； 冕；花冠；桂冠 ； 冠军",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ministry",
    "phonetic": "ˈm ɪ n ɪ stri",
    "meaning": "n. （政府的）部；神职；牧师职位",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clay",
    "phonetic": "kle ɪ",
    "meaning": "n.   粘土 ； 泥土",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fortunately",
    "phonetic": "ˈf ɔ :t ʃə n ə tli",
    "meaning": "adv.   幸运地\n79  List   4",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thrust",
    "phonetic": "θ r ʌ st",
    "meaning": "v.   插 ； 刺；猛推   n .   插；戳；推力；要点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "claw",
    "phonetic": "kl ɔ :",
    "meaning": "n.   爪 ； 脚爪；蝥",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flock",
    "phonetic": "fl ɒ k",
    "meaning": "n.   群；一大群   vi.   群集；聚集；蜂拥",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "basically",
    "phonetic": "ˈbe ɪ s ɪ kli",
    "meaning": "adv.   基本上；从根本上说",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "banquet",
    "phonetic": "ˈbæŋkw ɪ t",
    "meaning": "n.   宴会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "classification",
    "phonetic": "ˌklæs ɪ f ɪ ˈ ke ɪʃ n",
    "meaning": "n.   分 类；分级；类别；等级分类法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "zone",
    "phonetic": "z əʊ n",
    "meaning": "n.   地区；区域",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explosive",
    "phonetic": "ɪ kˈspl əʊ s ɪ v",
    "meaning": "adj.   易爆炸的；猛增的；暴躁的   n.   炸药",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "beard",
    "phonetic": "b ɪə d",
    "meaning": "n.   胡须 ； 络腮胡子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pad",
    "phonetic": "pæd",
    "meaning": "n.   垫；爪垫 ； 便笺本   v.   填充 ； 轻步行为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "experimental",
    "phonetic": "ɪ kˌsper ɪ ˈ mentl",
    "meaning": "adj.   实验性的；试验性的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "belly",
    "phonetic": "ˈbeli",
    "meaning": "n.   腹部 ； 肚子   v.   隆起 ； 鼓起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trifle",
    "phonetic": "ˈtra ɪ fl",
    "meaning": "n.   琐事；有点儿 ； 稍微",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mainland",
    "phonetic": "ˈme ɪ nlænd",
    "meaning": "n.   大陆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aside",
    "phonetic": "ə ˈ sa ɪ d",
    "meaning": "adv.   在旁边；撇开   n.   旁白",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marshal",
    "phonetic": "ˈm ɑ:ʃl",
    "meaning": "n.   元帅；司仪；执行官   vt.   安排",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chop",
    "phonetic": "t ʃɒ p",
    "meaning": "v.   砍 ； 劈；切碎；削减 ； 降低",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "revolutionary",
    "phonetic": "ˌrev ə ˈ lu: ʃə n ə ri",
    "meaning": "adj.   革命的   n.   革命者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exceedingly",
    "phonetic": "ɪ kˈsi:d ɪ ŋli",
    "meaning": "adv.   非常 ； 极其\n80  List   5",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bible",
    "phonetic": "ˈba ɪ bl",
    "meaning": "n.   基督教的《圣经》",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "naturally",
    "phonetic": "ˈnæt ʃ r ə li",
    "meaning": "adv.   自然地；天然地；大方地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loyalty",
    "phonetic": "ˈl ɔɪə lti",
    "meaning": "n.   忠诚 ； 忠实",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "altitude",
    "phonetic": "ˈæ lt ɪ tju:d",
    "meaning": "n.   海拔；高度；高处",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emperor",
    "phonetic": "ˈemp ə r ə (r)",
    "meaning": "n.   皇帝",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mystery",
    "phonetic": "ˈm ɪ stri",
    "meaning": "n.   神秘（性）；神秘的事物；悬疑（故事）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ridiculous",
    "phonetic": "r ɪ ˈ d ɪ kj ə l ə s",
    "meaning": "adj.   荒谬的 ； 可笑的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lord",
    "phonetic": "l ɔ :d",
    "meaning": "n.   贵族；上帝；（尊称）大人 ； 阁下",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alley",
    "phonetic": "ˈæli",
    "meaning": "n.   小街 ； 小巷 ； 胡同",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "parcel",
    "phonetic": "ˈp ɑ:sl",
    "meaning": "n.   包裹 ； 邮包；一块地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "philosopher",
    "phonetic": "f ə ˈ l ɒ s ə f ə (r)",
    "meaning": "n.   哲学家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elbow",
    "phonetic": "ˈel b əʊ",
    "meaning": "n.   肘；肘部   v.   用肘推",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "psychological",
    "phonetic": "ˌsa ɪ k ə ˈ l ɒ d ʒɪ kl",
    "meaning": "adj.   心理的；心理学上的  ☞ psychology [sa ɪ ˈ k ɒ l ə d ʒ i] n.   心理学；心理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mushroom",
    "phonetic": "ˈm ʌʃ r ʊ m",
    "meaning": "n.   蘑菇   vi.   迅速发展 ； 快速增长",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loop",
    "phonetic": "lu:p",
    "meaning": "n.   圈 ； 环；循环；环线",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alert",
    "phonetic": "ə ˈ l ɜ :t",
    "meaning": "adj.   警惕的；机敏的   n.   警 戒   vt.   使警觉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "yawn",
    "phonetic": "j ɔ :n",
    "meaning": "vi.   打哈欠   n.   哈欠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dusk",
    "phonetic": "d ʌ sk",
    "meaning": "n.   傍晚 ； 黄昏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lobby",
    "phonetic": "ˈl ɒ bi",
    "meaning": "n.   大厅；游说（团体） v.   游说\n81  List   6",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drawer",
    "phonetic": "dr ɔ :(r)",
    "meaning": "n.   抽屉；开票人 ； 出票人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "multiple",
    "phonetic": "ˈm ʌ lt ɪ pl",
    "meaning": "adj.   多个的；多种的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "treaty",
    "phonetic": "ˈtri:ti",
    "meaning": "n.   条约 ； 协议 ； 协定",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liquor",
    "phonetic": "ˈl ɪ k ə (r)",
    "meaning": "n.   烈酒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quotation",
    "phonetic": "kw əʊ ˈ te ɪʃ n",
    "meaning": "n.   报价；引用；引文",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "donkey",
    "phonetic": "ˈd ɒ ŋki",
    "meaning": "n.   驴；笨蛋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mop",
    "phonetic": "m ɒ p",
    "meaning": "n.   拖 把；墩布   v.   用布擦掉；用拖把擦干净",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "likewise",
    "phonetic": "ˈla ɪ kwa ɪ z",
    "meaning": "adv.   同样地；也",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dirt",
    "phonetic": "d ɜ :t",
    "meaning": "n.   尘士；污物 ； 污垢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resume",
    "phonetic": "r ɪ 'zju:m",
    "meaning": "v.   重新开始",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lick",
    "phonetic": "l ɪ k",
    "meaning": "vt.   舔   n.   少量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "noticeable",
    "phonetic": "ˈn əʊ t ɪ s ə bl",
    "meaning": "adj.   显而易见的；显著的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dialect",
    "phonetic": "ˈda ɪə lekt",
    "meaning": "n.   方言 ； 土语 ； 地方话",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "leisure",
    "phonetic": "ˈle ʒə (r)",
    "meaning": "n.   空 闲；闲暇   adj.   空闲的；   闲暇的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "normally",
    "phonetic": "ˈn ɔ :m ə li",
    "meaning": "adv.   通常地；正常地；平常地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wrist",
    "phonetic": "r ɪ st",
    "meaning": "n.   手腕；腕关节",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "costly",
    "phonetic": "ˈk ɒ stli",
    "meaning": "adj.   昂贵的 ； 价钱高的；代价高的 ； 损失大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "religious",
    "phonetic": "r ɪ ˈ l ɪ d ʒə s",
    "meaning": "adj.   宗教的；虚诚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lease",
    "phonetic": "li:s",
    "meaning": "n.   租约   vt.   出租；租用\n82  List   7",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nonsense",
    "phonetic": "ˈn ɒ nsns",
    "meaning": "n.   胡说；废话；愚蠢的行为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cop",
    "phonetic": "k ɒ p",
    "meaning": "n.   警察   vt.   遭受；抓住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lane",
    "phonetic": "le ɪ n",
    "meaning": "n. （乡间）小路；跑道；泳道；车道；小巷",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nightmare",
    "phonetic": "ˈna ɪ tme ə (r)",
    "meaning": "n.   噩梦；可怕的事物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commander",
    "phonetic": "k ə ˈ m ɑ:ndə(r)",
    "meaning": "n.   司令官 ； 指挥官",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proportional",
    "phonetic": "pr ə ˈ p ɔ : ʃə nl",
    "meaning": "adj.   成比例的；相称的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "landlord",
    "phonetic": "ˈlændl ɔ :d",
    "meaning": "n.   地主；房东；店主；业主",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "undergraduate",
    "phonetic": "ˌ ʌ nd ə ˈ g ræd ʒ u ə t",
    "meaning": "n.   大学本科生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "chew",
    "phonetic": "t ʃ u:",
    "meaning": "v.   咀嚼 ； 嚼碎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "visa",
    "phonetic": "ˈvi:z ə",
    "meaning": "n.   签证",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "parliament",
    "phonetic": "ˈp ɑ:ləmənt",
    "meaning": "n.   议会 ； 国会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "knot",
    "phonetic": "n ɒ t",
    "meaning": "n.   绳结；痉挛   v.   把 …… 打成结",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "underneath",
    "phonetic": "ˌ ʌ nd ə ˈ ni: θ",
    "meaning": "prep.   在 …… 下面 ； 在 …… 底下",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "champagne",
    "phonetic": "ʃ æmˈpe ɪ n",
    "meaning": "n.   香槟酒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vitamin",
    "phonetic": "ˈv ɪ t ə m ɪ n",
    "meaning": "n.   维生素 ； 维他命",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hence",
    "phonetic": "hence",
    "meaning": "adv.   因此 ； 由此",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "upper",
    "phonetic": "ˈ ʌ p ə (r)",
    "meaning": "adj.   上面的；较高的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "unconscious",
    "phonetic": "ʌ nˈk ɒ n ʃə s",
    "meaning": "adj.   不省人事的；无意识 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alcohol",
    "phonetic": "ˈælk ə h ɒ l",
    "meaning": "n.   酒 ； 酒精；乙醇",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bunch",
    "phonetic": "b ʌ nt ʃ",
    "meaning": "n.   串；束；扎   v. （使）打褶；（使）变紧\n83  List   8",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wicked",
    "phonetic": "ˈw ɪ k ɪ d",
    "meaning": "adj.   邪恶的；淘气的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hell",
    "phonetic": "hel",
    "meaning": "n.   地狱；苦难的经历；该死",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "utmost",
    "phonetic": "ˈ ʌ tm əʊ st",
    "meaning": "（亦作   uttermost ） adj.   最大的；极度的   n.   极限",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "priest",
    "phonetic": "pri:st",
    "meaning": "n.   牧师；神父；祭司",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bully",
    "phonetic": "ˈb ʊ li",
    "meaning": "n.   横行霸道者   v.   恐吓；伤害；胁迫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "worm",
    "phonetic": "w ɜ :m",
    "meaning": "n.   蠕虫；可怜虫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pea",
    "phonetic": "pi:",
    "meaning": "n.   豌豆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hardware",
    "phonetic": "ˈh ɑ:dweə(r)",
    "meaning": "n.   硬件；设备；工具",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "viewpoint",
    "phonetic": "ˈvju:p ɔɪ nt",
    "meaning": "n.   观点 ； 意见；角度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bullet",
    "phonetic": "ˈb ʊ l ɪ t",
    "meaning": "n.   枪弹 ； 子弹；弹丸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "troop",
    "phonetic": "tru:p",
    "meaning": "n.   一群士兵；   群   v.   成群地走",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "platform",
    "phonetic": "ˈplætf ɔ :m",
    "meaning": "n.   平台；站台；讲台；纲领",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "har",
    "phonetic": "",
    "meaning": "dship [ˈh ɑ:dʃɪp] n.   艰难 ； 困苦",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mechanical",
    "phonetic": "m ə ˈ kæn ɪ kl",
    "meaning": "adj.   机械（驱 动）的；机械般的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "paste",
    "phonetic": "paste",
    "meaning": "n.   酱；糨糊；面团   vt.   粘贴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "budget",
    "phonetic": "ˈb ʌ d ʒɪ t",
    "meaning": "n.   预算   v.   把 …… 编入预算   adj.   价格低廉的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oval",
    "phonetic": "ˈ əʊ vl",
    "meaning": "adj.   卵形的；椭圆的   n.   椭圆形；卵形",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gulf",
    "phonetic": "g ʌ lf",
    "meaning": "n.   鸿沟；分歧；隔阂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "measurement",
    "phonetic": "ˈme ʒə m ə nt",
    "meaning": "n.   测量；尺寸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "buddy",
    "phonetic": "ˈb ʌ di",
    "meaning": "n.   朋友 ；同伴\n84  List   9",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "outer",
    "phonetic": "ˈa ʊ t ə (r)",
    "meaning": "adj.   远离中心的；外面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grin",
    "phonetic": "gr ɪ n",
    "meaning": "v.   / n.   咧着嘴笑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "maximum",
    "phonetic": "ˈmæks ɪ m ə m",
    "meaning": "n.   最大量（值） adj.   最大量（值）的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bubble",
    "phonetic": "ˈb ʌ bl",
    "meaning": "n.   泡   vi.   冒泡；沸腾；充满",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ounce",
    "phonetic": "a ʊ ns",
    "meaning": "n.   盎司 ； 一点点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grief",
    "phonetic": "gri:f",
    "meaning": "n.   悲伤 ； 悲痛心事；忧虑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mat",
    "phonetic": "mæt",
    "meaning": "n.   小地毯；垫子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bang",
    "phonetic": "bæŋ",
    "meaning": "n.   巨响；猛击   v.   猛敲；猛摔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "governor",
    "phonetic": "ˈg ʌ v ə n ə (r)",
    "meaning": "n.   主管；董事；总裁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "marxist",
    "phonetic": "m ɑ:ksɪst",
    "meaning": "n.   马克思主义者   adj.   马克思主义的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bandage",
    "phonetic": "ˈbænd ɪ d ʒ",
    "meaning": "n.   绷带   vt.   用绷带包扎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oral",
    "phonetic": "ˈ ɔ :r ə l",
    "meaning": "adj.   口头的；口腔的   n.   口试",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "goodness",
    "phonetic": "ˈg ʊ dn ə s",
    "meaning": "int.   天哪   n.   善良；美德；精华",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trash",
    "phonetic": "træ ʃ",
    "meaning": "n.   垃圾；劣质品   vt.   捣毁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "baggage",
    "phonetic": "ˈbæg ɪ d ʒ",
    "meaning": "n.   行李",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relativity",
    "phonetic": "ˌrel ə ˈ t ɪ v ə ti",
    "meaning": "n.   相对论；相对性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ghost",
    "phonetic": "g əʊ st",
    "meaning": "n.   鬼 ； 鬼魂；记忆",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trademark",
    "phonetic": "ˈtre ɪ dm ɑ:k",
    "meaning": "n.   商标；特征 ； 标记",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "badge",
    "phonetic": "bæd ʒ",
    "meaning": "n.   徽章；标记；象征\n85  List   10",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "germ",
    "phonetic": "d ʒɜ :m",
    "meaning": "n.   细菌；微生物；萌芽；胚胎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "toss",
    "phonetic": "t ɒ s",
    "meaning": "v.   扔 ； 抛 ； 投；颠簸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "auxiliary",
    "phonetic": "ɔ :gˈz ɪ li ə ri",
    "meaning": "adj.   辅助的；备用的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ridge",
    "phonetic": "r ɪ d ʒ",
    "meaning": "n.   脊；山脉；垄",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "railroad",
    "phonetic": "ˈre ɪ lr əʊ d",
    "meaning": "n.   铁路   v.   迫使 …… 做",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "generator",
    "phonetic": "ˈ d ʒ en ə re ɪ t ə (r)",
    "meaning": "n.   发电机；发生器；电力公司",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tunnel",
    "phonetic": "ˈt ʌ nl",
    "meaning": "n.   隧道；坑道 ； 地道",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "torch",
    "phonetic": "t ɔ :t ʃ",
    "meaning": "n.   火炬 ； 火把；手电筒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "authentic",
    "phonetic": "ɔ :ˈ θ ent ɪ k",
    "meaning": "adj.   真正的；可靠的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "moreover",
    "phonetic": "m ɔ :rˈ əʊ v ə (r)",
    "meaning": "adv.   而且 ； 此外",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rag",
    "phonetic": "ræg",
    "meaning": "n.   破布；抹布",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "forum",
    "phonetic": "ˈf ɔ :r ə m",
    "meaning": "n.   论坛；讨 论会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "paw",
    "phonetic": "p ɔ :",
    "meaning": "n.   爪   v.   用爪；抓",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "token",
    "phonetic": "ˈt əʊ k ə n",
    "meaning": "n.   代币；象征   adj.   装样子 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attorney",
    "phonetic": "ə ˈ t ɜ :ni",
    "meaning": "n.   律师",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "throat",
    "phonetic": "θ r əʊ t",
    "meaning": "n.   咽喉 ； 喉咙",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "racial",
    "phonetic": "ˈre ɪʃ l",
    "meaning": "adj.   种族的；人种的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oven",
    "phonetic": "ˈ ʌ vn",
    "meaning": "n.   烤箱\n86",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resident",
    "phonetic": "",
    "meaning": "(考频 396 次) adj.定居的 n.居民",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conversation",
    "phonetic": "",
    "meaning": "(考频 396 次) n.交谈, 谈话",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "direction",
    "phonetic": "",
    "meaning": "(考频 388 次) n.方向 , 指导",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "total",
    "phonetic": "",
    "meaning": "(考频 219 次) adj.全部的 vt.共计",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "contribute",
    "phonetic": "",
    "meaning": "(考频 212 次) v.贡献出; 促进",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "single",
    "phonetic": "",
    "meaning": "(考频 204 次) adj.一个的, 单身的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "information",
    "phonetic": "",
    "meaning": "(考频 192 次) n.消息",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "finding",
    "phonetic": "",
    "meaning": "(考频 186 次) n.发现, 调查结果",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "experience",
    "phonetic": "",
    "meaning": "(考频 177 次) v 经验, 经历",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "research",
    "phonetic": "",
    "meaning": "(考频 177 次) v.研究 , 调查",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "program",
    "phonetic": "",
    "meaning": "(考频 164 次) n.程序, 节目",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "health",
    "phonetic": "",
    "meaning": "(考频 149 次) n.健康;医疗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "digital",
    "phonetic": "",
    "meaning": "(考频 148 次) a.数码的, 数字的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "average",
    "phonetic": "",
    "meaning": "(考频 138 次) a.平均的 , 普通",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rate",
    "phonetic": "",
    "meaning": "(考频 131 次) n.速度 , 价格 v.评价",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "position",
    "phonetic": "",
    "meaning": "(考频 126 次) n.职位 , 位置",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "individual",
    "phonetic": "",
    "meaning": "(考频 110 次) adj.个人的 n.个人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "author",
    "phonetic": "",
    "meaning": "(考频 110 次) n.作家;作者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "living",
    "phonetic": "",
    "meaning": "(考频 104 次) /n.生活方式",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "academic",
    "phonetic": "",
    "meaning": "(考频 100 次) a.学院的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obesity",
    "phonetic": "",
    "meaning": "(考频 97 次) n.肥大, 肥胖",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "access",
    "phonetic": "",
    "meaning": "(考频 95 次) n.入口; 接近…的方法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pay",
    "phonetic": "",
    "meaning": "(考频 90 次) v.付款;交款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recession",
    "phonetic": "",
    "meaning": "(考频 85 次) n.经济衰退",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suggest",
    "phonetic": "",
    "meaning": "(考频 85 次) v.表明, 建议;暗示",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regulation",
    "phonetic": "",
    "meaning": "(考频 79 次) n.规章",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "process",
    "phonetic": "",
    "meaning": "(考频 79 次) vt.处理 n.过程步骤",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "create",
    "phonetic": "",
    "meaning": "(考频 76 次) vt.创建;创造",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tend",
    "phonetic": "",
    "meaning": "(考频 72 次) v.趋向, 照顾",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relationship",
    "phonetic": "",
    "meaning": "(考频 72 次) n.关系, 联系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "promote",
    "phonetic": "",
    "meaning": "(考频 70 次) v.促进; 推销",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "professor",
    "phonetic": "",
    "meaning": "(考频 69 次) n.教授",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "speaker",
    "phonetic": "",
    "meaning": "(考频 67 次) n.发言者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "affect",
    "phonetic": "",
    "meaning": "(考频 66 次) vt.影响; 感动; 假装",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "involve",
    "phonetic": "",
    "meaning": "(考频 65 次) vt.包含; 参与",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "communicate",
    "phonetic": "",
    "meaning": "(考频 64 次) v.交流; 传播",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "include",
    "phonetic": "",
    "meaning": "(考频 62 次) v.包括, 包含",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "community",
    "phonetic": "",
    "meaning": "(考频 62 次) n.社区, 社团",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "condition",
    "phonetic": "",
    "meaning": "(考频 61 次) n.状况; 形势; 条件",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "government",
    "phonetic": "",
    "meaning": "(考频 61 次) n.政府;内阁  List   1\nList   2",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "concern",
    "phonetic": "",
    "meaning": "(考频 60 次) v.涉及; 使关心 n.担心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pose",
    "phonetic": "",
    "meaning": "(考频 60 次) v.引起困难等) ; 提出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "professional",
    "phonetic": "",
    "meaning": "(考频 59 次) a.专业的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "self",
    "phonetic": "",
    "meaning": "(考频 58 次) n.自身;本我",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "approach",
    "phonetic": "",
    "meaning": "(考频 57 次) v.接近 n.接近",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mental",
    "phonetic": "",
    "meaning": "(考频 56 次) adj.心理的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "state",
    "phonetic": "",
    "meaning": "(考频 56 次) n.州;国家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "major",
    "phonetic": "",
    "meaning": "(考频 53 次) a.主要的 n/v.主修",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "employee",
    "phonetic": "",
    "meaning": "(考频 53 次) n.雇员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "impact",
    "phonetic": "",
    "meaning": "(考频 52 次) v.影响",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nature",
    "phonetic": "",
    "meaning": "(考频 52 次) n.大自然; 天性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "financial",
    "phonetic": "",
    "meaning": "(考频 50 次) a.财政的, 金融的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "function",
    "phonetic": "",
    "meaning": "(考频 50 次) n. 功能 v.起作用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "potential",
    "phonetic": "",
    "meaning": "(考频 50 次) n.潜力 a.潜在的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "region",
    "phonetic": "",
    "meaning": "(考频 49 次) n.地区, 范围",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "light",
    "phonetic": "",
    "meaning": "(考频 47 次) n.光线; v.照亮",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "divorce",
    "phonetic": "",
    "meaning": "(考频 47 次) v.离婚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "innovation",
    "phonetic": "",
    "meaning": "(考频 47 次) n.创新 , 改革",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "association",
    "phonetic": "",
    "meaning": "(考频 47 次) n.社团; 交往",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "security",
    "phonetic": "",
    "meaning": "(考频 47 次) n.安全, 保证",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "remark",
    "phonetic": "",
    "meaning": "(考频 46 次) v/n.评论注意 观察",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "current",
    "phonetic": "",
    "meaning": "(考频 46 次) a.当前的, 流通的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "essay",
    "phonetic": "",
    "meaning": "(考频 45 次) n.散文, 随笔",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consumption",
    "phonetic": "",
    "meaning": "(考频 45 次) n.消费, 消耗",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attach",
    "phonetic": "",
    "meaning": "(考频 45 次) v.系上, 贴上 , 附加",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extent",
    "phonetic": "",
    "meaning": "(考频 45 次) n.程度;限度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "invest",
    "phonetic": "",
    "meaning": "(考频 43 次) v.投资",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "generate",
    "phonetic": "",
    "meaning": "(考频 43 次) v.产生, 发热, 电)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "standard",
    "phonetic": "",
    "meaning": "(考频 43 次) n.标准 a.标准的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gym",
    "phonetic": "",
    "meaning": "(考频 43 次) n.体育馆; 健身房",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consider",
    "phonetic": "",
    "meaning": "(考频 43 次) v.仔细考虑;认为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "participate",
    "phonetic": "",
    "meaning": "(考频 42 次) v.参加",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stick",
    "phonetic": "",
    "meaning": "(考频 42 次) v.粘附 卡住忍受",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "researcher",
    "phonetic": "",
    "meaning": "(考频 42 次) n.研究员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "character",
    "phonetic": "",
    "meaning": "(考频 41 次) n.角色性格特点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "private",
    "phonetic": "",
    "meaning": "(考频 41 次) a.私人的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "combine",
    "phonetic": "",
    "meaning": "(考频 41 次) v.结合, 联合",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gender",
    "phonetic": "",
    "meaning": "(考频 41 次) n.性别\nList   3",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "project",
    "phonetic": "",
    "meaning": "(考频 41 次) n.项目;课题",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "boost",
    "phonetic": "",
    "meaning": "(考频 40 次) n.提高, 促进",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assignment",
    "phonetic": "",
    "meaning": "(考频 40 次) n.分配, 任务",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "previous",
    "phonetic": "",
    "meaning": "(考频 39 次) a.先前的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emission",
    "phonetic": "",
    "meaning": "(考频 38 次) n.排放, 散发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "essential",
    "phonetic": "",
    "meaning": "(考频 38 次) a.必要的, 基本的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "action",
    "phonetic": "",
    "meaning": "(考频 38 次) n.行动; 作用; 情节",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "simply",
    "phonetic": "",
    "meaning": "(考频 38 次) adv.仅仅;浅显地;简直",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "technology",
    "phonetic": "",
    "meaning": "(考频 38 次) n.科技",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conclude",
    "phonetic": "",
    "meaning": "(考频 37 次) v.推断出, 得出结论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "experiment",
    "phonetic": "",
    "meaning": "(考频 37 次) n.实验 v.做实验",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "excellent",
    "phonetic": "",
    "meaning": "(考频 37 次) a.优秀的, 杰出的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intelligence",
    "phonetic": "",
    "meaning": "(考频 37 次) n.智力, 情报",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "document",
    "phonetic": "",
    "meaning": "(考频 37 次) n.文件",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brand",
    "phonetic": "",
    "meaning": "(考频 37 次) n.品牌; 类型",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "neighbour",
    "phonetic": "",
    "meaning": "(考频 36 次) n.邻居",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commercial",
    "phonetic": "",
    "meaning": "(考频 36 次) a.贸易的商业的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "likely",
    "phonetic": "",
    "meaning": "(考频 36 次) a.可能的; 适合的 ad.可能",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vice",
    "phonetic": "",
    "meaning": "(考频 36 次) n.缺点; 罪行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "patience",
    "phonetic": "",
    "meaning": "(考频 36 次) n.耐心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ultimately",
    "phonetic": "",
    "meaning": "(考频 35 次) ad.最终",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "helpful",
    "phonetic": "",
    "meaning": "(考频 35 次) a.有益的; 给予帮助的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "corresponding",
    "phonetic": "",
    "meaning": "(考频 35 次) adj.相应的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rather",
    "phonetic": "",
    "meaning": "(考频 35 次) adv.相反;相当",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interaction",
    "phonetic": "",
    "meaning": "(考频 34 次) n.互相交流",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "originate",
    "phonetic": "",
    "meaning": "(考频 34 次) v.引起, 开始",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "risk",
    "phonetic": "",
    "meaning": "(考频 34 次) n.危险 vt.冒...的危险",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "powerful",
    "phonetic": "",
    "meaning": "(考频 34 次) adj.有权力的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "population",
    "phonetic": "",
    "meaning": "(考频 34 次) n.人口;人口数量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interview",
    "phonetic": "",
    "meaning": "(考频 33 次) n./ vt.会见; 面试",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "thirst",
    "phonetic": "",
    "meaning": "(考频 33 次) n.渴; 渴望 vi.渴望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "career",
    "phonetic": "",
    "meaning": "(考频 33 次) n.事业, 职业",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "release",
    "phonetic": "",
    "meaning": "(考频 32 次) v.释放, 发布\nList   4",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "saving",
    "phonetic": "",
    "meaning": "(考频 32 次) n.节省; 存款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stress",
    "phonetic": "",
    "meaning": "(考频 32 次) n.压力; 强调 vt.强调,",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "complete",
    "phonetic": "",
    "meaning": "(考频 32 次) v.完成;使完整",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "encourage",
    "phonetic": "",
    "meaning": "(考频 32 次) v.鼓励",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spouse",
    "phonetic": "",
    "meaning": "(考频 31 次) n.配偶",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reconcile",
    "phonetic": "",
    "meaning": "(考频 31 次) v.调停; 使和解",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "terrific",
    "phonetic": "",
    "meaning": "(考频 31 次) a.极妙的; 极大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sector",
    "phonetic": "",
    "meaning": "(考频 31 次) n.部门, 部分; 防区",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "salary",
    "phonetic": "",
    "meaning": "(考频 31 次) n.薪金,工资",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compensate",
    "phonetic": "",
    "meaning": "(考频 31 次) v.补偿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "special",
    "phonetic": "",
    "meaning": "(考频 31 次) adj.特殊的;特别的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "economic",
    "phonetic": "",
    "meaning": "(考频 31 次) adj.经济学的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "similar",
    "phonetic": "",
    "meaning": "(考频 31 次) adj.相像的, 类似的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "secure",
    "phonetic": "",
    "meaning": "(考频 30 次)a.安全的 vt.得到; 使安全",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consumer",
    "phonetic": "",
    "meaning": "(考频 30 次) n.消费者;顾客",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "economy",
    "phonetic": "",
    "meaning": "(考频 30 次) n.经济;节约",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "corporate",
    "phonetic": "",
    "meaning": "(考频 29 次) a.团体的, 公司的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "select",
    "phonetic": "",
    "meaning": "(考频 29 次) vt 选择 a.精选的;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "truly",
    "phonetic": "",
    "meaning": "(考频 29 次) ad.真正地; 忠实地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "variety",
    "phonetic": "",
    "meaning": "(考频 29 次) n.品种;变化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "task",
    "phonetic": "",
    "meaning": "(考频 29 次) n.任务, 工作",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "journal",
    "phonetic": "",
    "meaning": "(考频 28 次) n.日志, 期刊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "yield",
    "phonetic": "",
    "meaning": "(考频 28 次) vi 屈服 vt.产生 n.产量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "preface",
    "phonetic": "",
    "meaning": "(考频 28 次) n.序言",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "image",
    "phonetic": "",
    "meaning": "(考频 28 次) n.形象; 印象; 图像",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "affection",
    "phonetic": "",
    "meaning": "(考频 28 次) n.喜爱, 钟爱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "base",
    "phonetic": "",
    "meaning": "(考频 28 次) n.根部;基础",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "record",
    "phonetic": "",
    "meaning": "(考频 28 次) n.记录;案",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "negative",
    "phonetic": "",
    "meaning": "(考频 28 次) adj.负面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "administration",
    "phonetic": "",
    "meaning": "(考频 27 次) n.管理, 行政",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "limited",
    "phonetic": "",
    "meaning": "(考频 27 次) adj.有限的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "temperature",
    "phonetic": "",
    "meaning": "(考频 26 次) n.温度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "perception",
    "phonetic": "",
    "meaning": "(考频 26 次) n.感知, 看法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sympathy",
    "phonetic": "",
    "meaning": "(考频 26 次) n.同情; 赞同",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "website",
    "phonetic": "",
    "meaning": "(考频 26 次) n.网站",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "difference",
    "phonetic": "",
    "meaning": "(考频 26 次) n.差别, 差异;分歧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aim",
    "phonetic": "",
    "meaning": "(考频 25 次) v.目的是, 旨在",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "literature",
    "phonetic": "",
    "meaning": "(考频 25 次) n.文学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "outcome",
    "phonetic": "",
    "meaning": "(考频 25 次) n.结果, 成果",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vulnerable",
    "phonetic": "",
    "meaning": "(考频 25 次) a.脆弱的, 易受伤",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prime",
    "phonetic": "",
    "meaning": "(考频 25 次) a.首要的; 最好的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "survival",
    "phonetic": "",
    "meaning": "(考频 25 次) n.幸存; 幸存者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "balcony",
    "phonetic": "",
    "meaning": "(考频 25 次) n.阳台; 楼厅",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "elect",
    "phonetic": "",
    "meaning": "(考频 25 次) v.选举; 选择",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "symbol",
    "phonetic": "",
    "meaning": "(考频 25 次) n.符号, 标志; 象征",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suicide",
    "phonetic": "",
    "meaning": "(考频 25 次) n.自 sha; 自取灭亡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alter",
    "phonetic": "",
    "meaning": "(考频 25 次) v.改变, 更改",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "whether",
    "phonetic": "",
    "meaning": "(考频 25 次) 是否;不管。或者。",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "admission",
    "phonetic": "",
    "meaning": "(考频 24 次) n.准许进入; 承认",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "segment",
    "phonetic": "",
    "meaning": "(考频 24 次) n.部分, 片段",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "passport",
    "phonetic": "",
    "meaning": "(考频 24 次) n.护照",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "staff",
    "phonetic": "",
    "meaning": "(考频 24 次) n.全体职员;职工",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "depend",
    "phonetic": "",
    "meaning": "(考频 24 次) v.取决于;依靠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "personality",
    "phonetic": "",
    "meaning": "(考频 24 次) n.性格, 人格",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "connect",
    "phonetic": "",
    "meaning": "(考频 24 次) v.(使)连接, 与.有联  系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fear",
    "phonetic": "",
    "meaning": "(考频 23 次) n./v.害怕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disorder",
    "phonetic": "",
    "meaning": "(考频 23 次) n.混乱 , 失调",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tuition",
    "phonetic": "",
    "meaning": "(考频 23 次) n.教学; 学费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "responsible",
    "phonetic": "",
    "meaning": "(考频 23 次) a.有责任感的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trait",
    "phonetic": "",
    "meaning": "(考频 23 次) n.特征, 特性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "married",
    "phonetic": "",
    "meaning": "(考频 23 次) a.已婚的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collaboration",
    "phonetic": "",
    "meaning": "(考频 23 次) n.合作; 勾结",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "series",
    "phonetic": "",
    "meaning": "(考频 23 次) n.一系列; 丛书, 连续剧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "positive",
    "phonetic": "",
    "meaning": "(考频 23 次) a.肯定的; 积极的;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ancient",
    "phonetic": "",
    "meaning": "(考频 23 次) a.古代的; 年老的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trouble",
    "phonetic": "",
    "meaning": "(考频 23 次) n.问题;苦恼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "factor",
    "phonetic": "",
    "meaning": "(考频 23 次) n.因素, 要素;系数",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "law",
    "phonetic": "",
    "meaning": "(考频 23 次) n.法律;定律",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "eventually",
    "phonetic": "",
    "meaning": "(考频 22 次) adv.最后, 终于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clumsy",
    "phonetic": "",
    "meaning": "(考频 22 次) a.笨拙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flash",
    "phonetic": "",
    "meaning": "(考频 22 次) vi.闪烁; 闪现 n.闪烁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "weird",
    "phonetic": "",
    "meaning": "(考频 22 次) a.古怪的; 怪诞的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "significant",
    "phonetic": "",
    "meaning": "(考频 22 次) adj.显著的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "supply",
    "phonetic": "",
    "meaning": "(考频 22 次) v.提供, 供应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "session",
    "phonetic": "",
    "meaning": "(考频 21 次) n.会议 , 学期",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "profile",
    "phonetic": "",
    "meaning": "(考频 21 次) n.轮廓; vt.为...描绘",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vote",
    "phonetic": "",
    "meaning": "(考频 21 次 n.投票, 选举表决结果投  票",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "approve",
    "phonetic": "",
    "meaning": "(考频 21 次) v.赞成; 批准",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slap",
    "phonetic": "",
    "meaning": "(考频 21 次) vt/n 掴, 掌击",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "response",
    "phonetic": "",
    "meaning": "(考频 21 次) n.回答; 反应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extensive",
    "phonetic": "",
    "meaning": "(考频 21 次) a.广阔的; 广泛的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collective",
    "phonetic": "",
    "meaning": "(考频 21 次) a.集体的 n.集体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "being",
    "phonetic": "",
    "meaning": "(考频 21 次) n.人; 存在",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scrape",
    "phonetic": "",
    "meaning": "(考频 21 次) v.刮, 擦 n.; 刮痕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transport",
    "phonetic": "",
    "meaning": "(考频 21 次) vt/n.运输",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "victim",
    "phonetic": "",
    "meaning": "(考频 21 次) n.牺牲品, 受害者\nList   7",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "objective",
    "phonetic": "",
    "meaning": "(考频 21 次) n.目标 a.客观的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "latter",
    "phonetic": "",
    "meaning": "(考频 21 次) n.后者 a.后者的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reflect",
    "phonetic": "",
    "meaning": "(考频 21 次) v.沉思;反映",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tradition",
    "phonetic": "",
    "meaning": "(考频 21 次) n.传统",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attract",
    "phonetic": "",
    "meaning": "(考频 21 次) v.吸引;引起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diabetes",
    "phonetic": "",
    "meaning": "(考频 20 次) n.糖尿病",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "division",
    "phonetic": "",
    "meaning": "(考频 20 次) n.划分 , 除法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "threat",
    "phonetic": "",
    "meaning": "(考频 20 次) n.威胁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "failure",
    "phonetic": "",
    "meaning": "(考频 20 次) n.失败",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "safety",
    "phonetic": "",
    "meaning": "(考频 20 次) n.安全;安全性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "formal",
    "phonetic": "",
    "meaning": "(考频 19 次) a.正式的; 形式上的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appliance",
    "phonetic": "",
    "meaning": "(考频 19 次) n.家用) 电器; 应用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "violence",
    "phonetic": "",
    "meaning": "(考频 19 次) n.暴力; 猛烈",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "channel",
    "phonetic": "",
    "meaning": "(考频 19 次) n.频道; 沟渠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "injury",
    "phonetic": "",
    "meaning": "(考频 19 次) n.损害; 受伤处",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exclude",
    "phonetic": "",
    "meaning": "(考频 19 次) vt.把..排斥在外,",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "currently",
    "phonetic": "",
    "meaning": "(考频 19 次) adv.现时;当前",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regard",
    "phonetic": "",
    "meaning": "(考频 19 次) n.关注;重视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recommendation",
    "phonetic": "",
    "meaning": "(考频 19 次) n.推荐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "opinion",
    "phonetic": "",
    "meaning": "(考频 19 次) n.意见;观点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "demand",
    "phonetic": "",
    "meaning": "(考频 19 次) n.所需事物;需求",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "solution",
    "phonetic": "",
    "meaning": "(考频 19 次) n.答案;溶液",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "divide",
    "phonetic": "",
    "meaning": "(考频 18 次) n.明显差异",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consideration",
    "phonetic": "",
    "meaning": "(考频 18 次) n.考虑;体贴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "belong",
    "phonetic": "",
    "meaning": "(考频 18 次) v.属于, 适应",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "massive",
    "phonetic": "",
    "meaning": "(考频 18 次) a.大量的, 巨大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "graffito",
    "phonetic": "",
    "meaning": "(考频 18 次) n.涂鸦单数)\nList   8",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rational",
    "phonetic": "",
    "meaning": "(考频 18 次) a.理性的 , 合理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "motive",
    "phonetic": "",
    "meaning": "(考频 18 次) n.动机, 目的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loan",
    "phonetic": "",
    "meaning": "(考频 18 次) n.贷款 vt.借出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "challenge",
    "phonetic": "",
    "meaning": "(考频 18 次) n/v.挑战",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "performance",
    "phonetic": "",
    "meaning": "(考频 18 次) n.表演; 表现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anyway",
    "phonetic": "",
    "meaning": "(考频 18 次) ad.不管怎么说",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "avert",
    "phonetic": "",
    "meaning": "(考频 18 次) vt.避免; 转移",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stem",
    "phonetic": "",
    "meaning": "(考频 18 次) n.茎 v. from) 源于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mild",
    "phonetic": "",
    "meaning": "(考频 18 次) a.温和的, 温柔的; 温暖的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "abrupt",
    "phonetic": "",
    "meaning": "(考频 18 次) a.意外的; 鲁莽的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accent",
    "phonetic": "",
    "meaning": "(考频 18 次) n.口音; 重音 vt.重读",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inner",
    "phonetic": "",
    "meaning": "(考频 18 次) a.内部的; 内心的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "delivery",
    "phonetic": "",
    "meaning": "(考频 18 次) n.投递; 分娩; 演讲",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "greenhouse",
    "phonetic": "",
    "meaning": "(考频 18 次) n.温室",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accompany",
    "phonetic": "",
    "meaning": "(考频 18 次) vt.陪伴; 伴随",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trend",
    "phonetic": "",
    "meaning": "(考频 18 次) n.趋势, 倾向",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "athlete",
    "phonetic": "",
    "meaning": "(考频 18 次) n.运动员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "output",
    "phonetic": "",
    "meaning": "(考频 18 次) n.产量; 输出 vt.输出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hunt",
    "phonetic": "",
    "meaning": "(考频 18 次) n./v 搜寻; 追踪; 打猎",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "apply",
    "phonetic": "",
    "meaning": "(考频 18 次) vi.申请; 应用 vt.实施",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "background",
    "phonetic": "",
    "meaning": "(考频 18 次) n.背景",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fry",
    "phonetic": "",
    "meaning": "(考频 18 次) vt.油炸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tender",
    "phonetic": "",
    "meaning": "(考频 18 次) a.柔弱的 v.提出; 照看者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "election",
    "phonetic": "",
    "meaning": "(考频 18 次) n.选举",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "choice",
    "phonetic": "",
    "meaning": "(考频 18 次) n.选择;挑选",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bore",
    "phonetic": "",
    "meaning": "(考频 18 次) v.使厌倦;承受\nList   9",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "manufacture",
    "phonetic": "",
    "meaning": "(考频 17 次) v.制造, 虚构",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "longevity",
    "phonetic": "",
    "meaning": "(考频 17 次) n.寿命, 长寿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shuttle",
    "phonetic": "",
    "meaning": "(考频 17 次) n.往返 , 航天飞机",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sheer",
    "phonetic": "",
    "meaning": "(考频 17 次) a.完全的 ad.陡峭地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "decrease",
    "phonetic": "",
    "meaning": "(考频 17 次) v.减少 n.减少",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "persuasion",
    "phonetic": "",
    "meaning": "(考频 17 次) n.说服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "replace",
    "phonetic": "",
    "meaning": "(考频 17 次) vt.取代; 更换;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "senior",
    "phonetic": "",
    "meaning": "(考频 17 次) a.地位高的 n.较年长者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advanced",
    "phonetic": "",
    "meaning": "(考频 17 次) a.先进的; 高级的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "competent",
    "phonetic": "",
    "meaning": "(考频 17 次) a.有能力的能胜任的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rob",
    "phonetic": "",
    "meaning": "(考频 17 次) vt.抢劫; of) 剥夺",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consensus",
    "phonetic": "",
    "meaning": "(考频 17 次) n.一致, 一致同意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "border",
    "phonetic": "",
    "meaning": "(考频 17 次) n.边缘; 边界; v.近似",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "classic",
    "phonetic": "",
    "meaning": "(考频 17 次) a.经典的 n.经典作品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anonymous",
    "phonetic": "",
    "meaning": "(考频 17 次) a.匿名的; 无特色的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "weary",
    "phonetic": "",
    "meaning": "(考频 17 次) a.疲倦的; 令人厌倦的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "magic",
    "phonetic": "",
    "meaning": "(考频 17 次) n.魔术; 魔力",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "desire",
    "phonetic": "",
    "meaning": "(考频 17 次) n.渴望;欲望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "employment",
    "phonetic": "",
    "meaning": "(考频 17 次) n.就业;雇用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wonder",
    "phonetic": "",
    "meaning": "(考频 17 次) v.想知道",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nutrition",
    "phonetic": "",
    "meaning": "(考频 16 次) n.营养",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "immune",
    "phonetic": "",
    "meaning": "(考频 16 次) a.免疫的不受影响的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "artistic",
    "phonetic": "",
    "meaning": "(考频 16 次) a.艺术家) 的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "internal",
    "phonetic": "",
    "meaning": "(考频 16 次) a.国内的, 内心的\nList   10",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rare",
    "phonetic": "",
    "meaning": "(考频 16 次) a.稀有的; 珍奇的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "summarize",
    "phonetic": "",
    "meaning": "(考频 16 次) vt.概括, 总结",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "workshop",
    "phonetic": "",
    "meaning": "(考频 16 次) n.车间; 研讨会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "halt",
    "phonetic": "",
    "meaning": "(考频 16 次) n./v.停住, 暂停",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "selection",
    "phonetic": "",
    "meaning": "(考频 16 次) n.选择; 挑选",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attractive",
    "phonetic": "",
    "meaning": "(考频 16 次) a.有吸引力的好看的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "update",
    "phonetic": "",
    "meaning": "(考频 16 次) vt.更新, 使现代化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tragic",
    "phonetic": "",
    "meaning": "(考频 16 次) a.悲惨的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cling",
    "phonetic": "",
    "meaning": "(考频 16 次) vi.黏着; 依恋; 坚持",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "talent",
    "phonetic": "",
    "meaning": "(考频 16 次) n.才能, 天资; 人才",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "immigrant",
    "phonetic": "",
    "meaning": "(考频 16 次) n.移民",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enrich",
    "phonetic": "",
    "meaning": "(考频 16 次) vt.充实, 使丰富; 使富裕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "glow",
    "phonetic": "",
    "meaning": "(考频 16 次) n.光亮; 激情 vi.灼热",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suggestion",
    "phonetic": "",
    "meaning": "(考频 16 次) n.建议; 暗示",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fun",
    "phonetic": "",
    "meaning": "d (考频 16 次) n.基金; 存款",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "privacy",
    "phonetic": "",
    "meaning": "(考频 16 次) n.隐私",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fraud",
    "phonetic": "",
    "meaning": "(考频 16 次) n.欺诈; 骗子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "option",
    "phonetic": "",
    "meaning": "(考频 16 次) n.选择权)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "offence",
    "phonetic": "",
    "meaning": "(考频 16 次) n.犯规, 违法行为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assist",
    "phonetic": "",
    "meaning": "(考频 16 次) v./n.帮助",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advisable",
    "phonetic": "",
    "meaning": "(考频 16 次) a.可取的, 明智的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "festival",
    "phonetic": "",
    "meaning": "(考频 16 次) n.节日",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "offend",
    "phonetic": "",
    "meaning": "(考频 16 次) vt.冒犯; 违反",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "belief",
    "phonetic": "",
    "meaning": "(考频 16 次) n.信仰;信心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cultural",
    "phonetic": "",
    "meaning": "(考频 16 次) adj.文化的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emotional",
    "phonetic": "",
    "meaning": "(考频 16 次) adj.情绪的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vary",
    "phonetic": "",
    "meaning": "(考频 16 次) v.改变",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "educational",
    "phonetic": "",
    "meaning": "(考频 16 次) adj.教育的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scenic",
    "phonetic": "",
    "meaning": "(考频 15 次) adj.风景优美的\nList   11",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "atmosphere",
    "phonetic": "",
    "meaning": "(考频 15 次) n.大气 , 气氛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inflation",
    "phonetic": "",
    "meaning": "(考频 15 次) n.充气 , 通货膨胀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attraction",
    "phonetic": "",
    "meaning": "(考频 15 次) n.吸引旅游胜地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "furniture",
    "phonetic": "",
    "meaning": "(考频 15 次) n.家具",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dean",
    "phonetic": "",
    "meaning": "(考频 15 次) n.教长; 系主任",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "oxygen",
    "phonetic": "",
    "meaning": "(考频 15 次) n.氧气",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expand",
    "phonetic": "",
    "meaning": "(考频 15 次) v.扩张; 胀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "invalid",
    "phonetic": "",
    "meaning": "(考频 15 次) a.无效的; n.病人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fundamental",
    "phonetic": "",
    "meaning": "(考频 15 次) a.基本的 n.原理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bare",
    "phonetic": "",
    "meaning": "(考频 15 次) a.赤裸的; 光秃的勉强的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grip",
    "phonetic": "",
    "meaning": "(考频 15 次) n.紧握; 掌握 vt.握紧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "controversial",
    "phonetic": "",
    "meaning": "(考频 15 次) a.有争议的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nasty",
    "phonetic": "",
    "meaning": "(考频 15 次) a.令人讨厌的; 难弄的;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interference",
    "phonetic": "",
    "meaning": "(考频 15 次) n.干涉; 干扰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appropriate",
    "phonetic": "",
    "meaning": "(考频 15 次) a.适当的; 合适的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "profit",
    "phonetic": "",
    "meaning": "(考频 15 次) n.利润 vt.有益于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plot",
    "phonetic": "",
    "meaning": "(考频 15 次) n.情节; 阴谋 v.密谋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "locate",
    "phonetic": "",
    "meaning": "(考频 15 次) vt.探明; 使坐落于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "graduate",
    "phonetic": "",
    "meaning": "(考频 15 次) n.毕业生; 研究生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "means",
    "phonetic": "",
    "meaning": "(考频 15 次) n.方法; 金钱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expense",
    "phonetic": "",
    "meaning": "(考频 15 次) n.花费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instruct",
    "phonetic": "",
    "meaning": "(考频 15 次) vt.指示; 教育",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stain",
    "phonetic": "",
    "meaning": "(考频 15 次) v.沾污, 染色 n.污点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recycle",
    "phonetic": "",
    "meaning": "(考频 15 次) vt.回收利用 v.再循环",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "theft",
    "phonetic": "",
    "meaning": "(考频 15 次) n.偷窃",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "apparent",
    "phonetic": "",
    "meaning": "(考频 15 次) a.显然的; 表面上的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cripple",
    "phonetic": "",
    "meaning": "(考频 15 次) n.瘸子 vt.使成为瘸子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "alike",
    "phonetic": "",
    "meaning": "(考频 15 次) a/ ad.同样的相似的地)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "anxiety",
    "phonetic": "",
    "meaning": "(考频 15 次) n.焦虑; 担忧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assign",
    "phonetic": "",
    "meaning": "(考频 15 次) vt.指定; 分配\nList   12",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "executive",
    "phonetic": "",
    "meaning": "(考频 14 次) n.主管 a.行政的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appearance",
    "phonetic": "",
    "meaning": "(考频 14 次) n.外表",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hire",
    "phonetic": "",
    "meaning": "(考频 15 次) v.租用, 雇用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suppose",
    "phonetic": "",
    "meaning": "(考频 15 次) v.推断;料想",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "organization",
    "phonetic": "",
    "meaning": "(考频 15 次) n.组织",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "amount",
    "phonetic": "",
    "meaning": "(考频 15 次) n.数量;金额",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "critical",
    "phonetic": "",
    "meaning": "(考频 15 次) adj.关键的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "agent",
    "phonetic": "",
    "meaning": "(考频 15 次) n.代理人;经纪人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scientific",
    "phonetic": "",
    "meaning": "(考频 15 次) adj.科学的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "physician",
    "phonetic": "",
    "meaning": "(考频 14 次) n.医师, 内科医生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "definition",
    "phonetic": "",
    "meaning": "(考频 14 次) n.定义, 清晰度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "heritage",
    "phonetic": "",
    "meaning": "(考频 14 次) n.遗产 , 传统",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appreciate",
    "phonetic": "",
    "meaning": "(考频 14 次) v.欣赏, 感谢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "soar",
    "phonetic": "",
    "meaning": "(考频 14 次) vi 猛增; 高飞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liberal",
    "phonetic": "",
    "meaning": "(考频 14 次) a.开明的; 自由的;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pace",
    "phonetic": "",
    "meaning": "(考频 14 次) n.一)步; 速度 vi.踱步",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "depression",
    "phonetic": "",
    "meaning": "(考频 14 次) n.抑郁; 萧条期)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "circular",
    "phonetic": "",
    "meaning": "(考频 14 次) a.圆形的; 循环的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gloomy",
    "phonetic": "",
    "meaning": "(考频 14 次) a.忧郁的; 令人沮丧的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "heal",
    "phonetic": "",
    "meaning": "(考频 14 次) v.愈合, 使康复; 调停",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "competition",
    "phonetic": "",
    "meaning": "(考频 14 次) n.竞争, 比赛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "denial",
    "phonetic": "",
    "meaning": "(考频 14 次) n.否认; 拒绝, 拒绝给予",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reap",
    "phonetic": "",
    "meaning": "(考频 14 次) vt.收割; 获得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intensify",
    "phonetic": "",
    "meaning": "(考频 14 次) v.使) 增强",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shield",
    "phonetic": "",
    "meaning": "(考频 14 次) n.防护物, 盾 vt.保护",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "additional",
    "phonetic": "",
    "meaning": "(考频 14 次) a.额外的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "limp",
    "phonetic": "",
    "meaning": "(考频 14 次) a.无力的 vi.蹒跚",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "plug",
    "phonetic": "",
    "meaning": "(考频 14 次) n.插头, 插座 vt.把…塞住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bi",
    "phonetic": "",
    "meaning": "d (考频 14 次) n.努力; 投标 v 努力争取",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rude",
    "phonetic": "",
    "meaning": "(考频 14 次) a.粗鲁的; 粗糙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "environmental",
    "phonetic": "",
    "meaning": "(考频 14 次) adj.自然环境的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "focus",
    "phonetic": "",
    "meaning": "(考频 14 次) v.集中;聚集",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "creative",
    "phonetic": "",
    "meaning": "(考频 14 次) adj.创造的;创作的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "connection",
    "phonetic": "",
    "meaning": "(考频 14 次) n.关系;联系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "warn",
    "phonetic": "",
    "meaning": "(考频 14 次) v.警告;告诫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emotion",
    "phonetic": "",
    "meaning": "(考频 14 次) n.情感;情绪",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spot",
    "phonetic": "",
    "meaning": "(考频 14 次) n.地点;排名位置;斑点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "associate",
    "phonetic": "",
    "meaning": "(考频 14 次) v.联系;表明支持",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reasonable",
    "phonetic": "",
    "meaning": "(考频 13 次) adj.明智,合理的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "core",
    "phonetic": "",
    "meaning": "(考频 13 次) n.核心, 要点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relieve",
    "phonetic": "",
    "meaning": "(考频 13 次) v.减轻, 缓解",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "percentage",
    "phonetic": "",
    "meaning": "(考频 13 次) n.百分比",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cognitive",
    "phonetic": "",
    "meaning": "(考频 13 次) a.认知的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "episode",
    "phonetic": "",
    "meaning": "(考频 13 次) n.一集, 插曲",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "specialist",
    "phonetic": "",
    "meaning": "(考频 13 次) n.专家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "growth",
    "phonetic": "",
    "meaning": "(考频 13 次) n.增长, 发展; 成长",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scholarship",
    "phonetic": "",
    "meaning": "(考频 13 次) n.奖学金",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cash",
    "phonetic": "",
    "meaning": "(考频 13 次) n.现金 vt.把...兑现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exceptional",
    "phonetic": "",
    "meaning": "(考频 13 次) a.杰出的; 例外的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proportion",
    "phonetic": "",
    "meaning": "(考频 13 次) n.比例; 部分; 均",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "somewhat",
    "phonetic": "",
    "meaning": "(考频 13 次) ad.稍微, 有点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rid",
    "phonetic": "",
    "meaning": "(考频 13 次) vt. of)使摆脱, 从…中清除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "unfortunately",
    "phonetic": "",
    "meaning": "(考频 13 次) ad.不幸地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "swift",
    "phonetic": "",
    "meaning": "(考频 13 次) a.迅速的; 敏捷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "worthy",
    "phonetic": "",
    "meaning": "(考频 13 次) a.值得的; 可尊敬的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "impatient",
    "phonetic": "",
    "meaning": "(考频 13 次) a.不耐烦的; 热切的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "achievement",
    "phonetic": "",
    "meaning": "(考频 13 次) n.成就; 实现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "complicated",
    "phonetic": "",
    "meaning": "(考频 13 次) a.复杂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "toll",
    "phonetic": "",
    "meaning": "(考频 13 次) n.通行费; 伤亡人数 v.敲钟)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "industrial",
    "phonetic": "",
    "meaning": "(考频 13 次) a.工业的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "invent",
    "phonetic": "",
    "meaning": "(考频 13 次) vt.发明; 捏造",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confuse",
    "phonetic": "",
    "meaning": "(考频 13 次) vt.使困惑; 混乱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rail",
    "phonetic": "",
    "meaning": "(考频 13 次) n.踪迹; 小路 v.拖; 磨蹭",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bin",
    "phonetic": "",
    "meaning": "d (考频 13 次) vt.捆绑; 使结合; 约束",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "polish",
    "phonetic": "",
    "meaning": "(考频 13 次) vt.磨光; 润色 n.擦光剂\nList   14",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "publicity",
    "phonetic": "",
    "meaning": "(考频 13 次) n.公众的注意; 宣传",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "leak",
    "phonetic": "",
    "meaning": "(考频 13 次) v. (使) 漏; 泄露",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "desirable",
    "phonetic": "",
    "meaning": "(考频 13 次) a.称心如意的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "attitude",
    "phonetic": "",
    "meaning": "(考频 13 次) n.态度;看法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "figure",
    "phonetic": "",
    "meaning": "(考频 13 次) n.数字;图形",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "possibility",
    "phonetic": "",
    "meaning": "(考频 13 次) n.可能",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "motivation",
    "phonetic": "",
    "meaning": "(考频 13 次) n.动力;积极性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "limit",
    "phonetic": "",
    "meaning": "(考频 13 次) v.限制;限定",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advantage",
    "phonetic": "",
    "meaning": "(考频 13 次) n.有利条件",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "widen",
    "phonetic": "",
    "meaning": "(考频 12 次) v.使变宽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "description",
    "phonetic": "",
    "meaning": "(考频 12 次) n.描述, 说明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "academy",
    "phonetic": "",
    "meaning": "(考频 12 次) n.研究院,专科院校",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "press",
    "phonetic": "",
    "meaning": "(考频 12 次) n.报刊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "roughly",
    "phonetic": "",
    "meaning": "(考频 12 次) ad.大约, 粗略地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tension",
    "phonetic": "",
    "meaning": "(考频 12 次) n.紧张",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "density",
    "phonetic": "",
    "meaning": "(考频 12 次) n.密度, 浓度",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pediatrician",
    "phonetic": "",
    "meaning": "(考频 12 次) n.儿科医生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "universal",
    "phonetic": "",
    "meaning": "(考频 12 次) a.普遍的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distraction",
    "phonetic": "",
    "meaning": "(考频 12 次) n.分心, 娱乐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "capture",
    "phonetic": "",
    "meaning": "(考频 12 次) v/n.逮捕, 捕捉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "package",
    "phonetic": "",
    "meaning": "(考频 12 次) n.包裹 v.包装",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "benefit",
    "phonetic": "",
    "meaning": "(考频 12 次) n.益处; vt.有益于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dense",
    "phonetic": "",
    "meaning": "(考频 12 次) a.密集的; 密度大的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "swell",
    "phonetic": "",
    "meaning": "(考频 12 次) vi.肿胀, 膨胀 n.波浪起伏",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "network",
    "phonetic": "",
    "meaning": "(考频 12 次) n.网状物; 网络",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "enable",
    "phonetic": "",
    "meaning": "(考频 12 次) vt.使能够",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strip",
    "phonetic": "",
    "meaning": "(考频 12 次) vt.剥去 n.条/带状物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subtract",
    "phonetic": "",
    "meaning": "(考频 12 次) v.减去)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "instrument",
    "phonetic": "",
    "meaning": "(考频 12 次) n.工具; 乐器",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "engineering",
    "phonetic": "",
    "meaning": "(考频 12 次) n.工程学)\nList   15",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "generally",
    "phonetic": "",
    "meaning": "(考频 12 次) ad.通常; 普地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fantasy",
    "phonetic": "",
    "meaning": "(考频 12 次) n.想象, 幻想;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "useless",
    "phonetic": "",
    "meaning": "(考频 12 次) a.无用的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shortly",
    "phonetic": "",
    "meaning": "(考频 12 次) ad.立刻; 不耐烦地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "personally",
    "phonetic": "",
    "meaning": "(考频 12 次) ad.在个人看来; 亲自",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suite",
    "phonetic": "",
    "meaning": "(考频 12 次) n.套间; 一套家具; 系列",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "uncover",
    "phonetic": "",
    "meaning": "(考频 12 次) vt.揭露; 揭开…的盖子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bet",
    "phonetic": "",
    "meaning": "(考频 12 次) v.打赌; 确信 n.打赌; 赌注",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "treatment",
    "phonetic": "",
    "meaning": "(考频 12 次) n.治疗;处理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "management",
    "phonetic": "",
    "meaning": "(考频 12 次) n.经营",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "progress",
    "phonetic": "",
    "meaning": "(考频 12 次) n.进步, 进展",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "respond",
    "phonetic": "",
    "meaning": "(考频 12 次) v.回应;应对",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "handle",
    "phonetic": "",
    "meaning": "(考频 12 次) v.应付, 处理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "priority",
    "phonetic": "",
    "meaning": "(考频 12 次) n.优先",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "luggage",
    "phonetic": "",
    "meaning": "(考频 11 次) n.行李",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gadget",
    "phonetic": "",
    "meaning": "(考频 11 次) n.小配件, 小器具",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "guarantee",
    "phonetic": "",
    "meaning": "(考频 11 次) v.确保",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comprehension",
    "phonetic": "",
    "meaning": "(考频 11 次) n.理解力)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "participant",
    "phonetic": "",
    "meaning": "(考频 11 次) n.参与者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "export",
    "phonetic": "",
    "meaning": "(考频 11 次) v/n.出口物)",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diagram",
    "phonetic": "",
    "meaning": "(考频 11 次) n.图解, 简图, 图表",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "protective",
    "phonetic": "",
    "meaning": "(考频 11 次) a.保护的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "retire",
    "phonetic": "",
    "meaning": "(考频 11 次) vi.退休, 退役; 退出就寝",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insert",
    "phonetic": "",
    "meaning": "(考频 11 次) vt.插入, 嵌入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "impress",
    "phonetic": "",
    "meaning": "(考频 11 次) vt.给 以深刻的印象;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consultant",
    "phonetic": "",
    "meaning": "(考频 11 次) n.顾问; 会诊医师",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "primary",
    "phonetic": "",
    "meaning": "(考频 11 次) a.首要的; 最初的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "imaginary",
    "phonetic": "",
    "meaning": "(考频 11 次) a.想象中的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "confidential",
    "phonetic": "",
    "meaning": "(考频 11 次) a.秘密的; 表示信任",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "optimistic",
    "phonetic": "",
    "meaning": "(考频 11 次) a.乐观的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "appoint",
    "phonetic": "",
    "meaning": "(考频 11 次) vt.任命; 约定",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disaster",
    "phonetic": "",
    "meaning": "(考频 11 次) n.灾难, 不幸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conflict",
    "phonetic": "",
    "meaning": "(考频 11 次) n.争执;冲突",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expectation",
    "phonetic": "",
    "meaning": "(考频 11 次) n.希望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "entire",
    "phonetic": "",
    "meaning": "(考频 11 次) adj.全部的, 整个的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "proposal",
    "phonetic": "",
    "meaning": "(考频 11 次) n.提议;建议",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "couple",
    "phonetic": "",
    "meaning": "(考频 11 次) n.两个;几个",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relate",
    "phonetic": "",
    "meaning": "(考频 11 次) v.涉及;联系",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "difficulty",
    "phonetic": "",
    "meaning": "(考频 11 次) n.困难, 难题",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "climate",
    "phonetic": "",
    "meaning": "(考频 10 次) n.气候",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intellectual",
    "phonetic": "",
    "meaning": "(考频 10 次) a.明智的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stable",
    "phonetic": "",
    "meaning": "(考频 10 次) a.稳定的, 稳重的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shortcoming",
    "phonetic": "",
    "meaning": "(考频 10 次) n.缺点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "volcano",
    "phonetic": "",
    "meaning": "(考频 10 次) n.火山",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "readily",
    "phonetic": "",
    "meaning": "(考频 10 次) ad.乐意地; 容易地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extension",
    "phonetic": "",
    "meaning": "(考频 10 次) n.伸展; 延长",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "presumably",
    "phonetic": "",
    "meaning": "(考频 10 次) ad.大概",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "target",
    "phonetic": "",
    "meaning": "(考频 10 次) n.目标, 靶子 vt.瞄准",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "historic",
    "phonetic": "",
    "meaning": "(考频 10 次) a.历史上著名的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ambassador",
    "phonetic": "",
    "meaning": "(考频 10 次) n.大使",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fascinate",
    "phonetic": "",
    "meaning": "(考频 10 次) v.强烈地吸引, 迷住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subtle",
    "phonetic": "",
    "meaning": "(考频 10 次) a.微妙的; 狡猾的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "improvement",
    "phonetic": "",
    "meaning": "(考频 10 次) n.改善;改进",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "authenticity",
    "phonetic": "",
    "meaning": "(考频 10 次) n.真实性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acquire",
    "phonetic": "",
    "meaning": "(考频 10 次) v.购得;获得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "method",
    "phonetic": "",
    "meaning": "(考频 10 次) n.方法;措施",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "diversity",
    "phonetic": "",
    "meaning": "(考频 10 次) n.差异性;多样性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "emphasis",
    "phonetic": "",
    "meaning": "(考频 10 次) n.强调;重视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "request",
    "phonetic": "",
    "meaning": "(考频 10 次) n.要求;请求\nList   17",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "application",
    "phonetic": "",
    "meaning": "(考频 10 次) n.申请;用途",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "guard",
    "phonetic": "",
    "meaning": "(考频 10 次) n.警卫, 看守",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "income",
    "phonetic": "",
    "meaning": "(考频 10 次) n.收入;收益",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "original",
    "phonetic": "",
    "meaning": "(考频 10 次) adj.原来的;起初的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pain",
    "phonetic": "",
    "meaning": "(考频 10 次) n.疼痛;苦恼",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reality",
    "phonetic": "",
    "meaning": "(考频 10 次) n.现实,实际情况",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "trade",
    "phonetic": "",
    "meaning": "(考频 10 次) n.贸易;生意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "construction",
    "phonetic": "",
    "meaning": "(考频 10 次) n.建筑;建筑物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fascinated",
    "phonetic": "",
    "meaning": "(考频 9 次) a.着迷的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "personnel",
    "phonetic": "",
    "meaning": "(考频 9 次) n.全体人员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coach",
    "phonetic": "",
    "meaning": "(考频 9 次) n.教练; 旅客 v.指导",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "supervise",
    "phonetic": "",
    "meaning": "(考频 9 次) v.监督, 管理",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "odd",
    "phonetic": "",
    "meaning": "(考频 9 次) adj.古怪的; 奇数的;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "commitment",
    "phonetic": "",
    "meaning": "(考频 9 次) n.承诺; 信奉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "agency",
    "phonetic": "",
    "meaning": "(考频 9 次) n.代理机构",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arrangement",
    "phonetic": "",
    "meaning": "(考频 9 次) n.安排; 布置",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fantastic",
    "phonetic": "",
    "meaning": "(考频 9 次) a.极好的; 极美妙的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recognition",
    "phonetic": "",
    "meaning": "(考频 9 次) n.承认;认出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "calorie",
    "phonetic": "",
    "meaning": "(考频 9 次) n.卡路里",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "refugee",
    "phonetic": "",
    "meaning": "(考频 9 次) n.难民",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "firm",
    "phonetic": "",
    "meaning": "(考频 9 次) n.公司;事务所",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transform",
    "phonetic": "",
    "meaning": "(考频 9 次) v.改变;转变",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ignore",
    "phonetic": "",
    "meaning": "(考频 9 次) v.忽视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collaborate",
    "phonetic": "",
    "meaning": "(考频 9 次) v.合作;协",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "awareness",
    "phonetic": "",
    "meaning": "(考频 9 次) n.认识, 意识",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "psychologist",
    "phonetic": "",
    "meaning": "(考频 9 次) n.心理学家",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wealth",
    "phonetic": "",
    "meaning": "(考频 9 次) n.财富;大量",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "productive",
    "phonetic": "",
    "meaning": "(考频 9 次) adj.多产的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inspire",
    "phonetic": "",
    "meaning": "(考频 8 次) v.激励;启发",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "partnership",
    "phonetic": "",
    "meaning": "(考频 8 次) n.伙伴关系, 合作",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ethnic",
    "phonetic": "",
    "meaning": "(考频 8 次) a.种族的, 民族的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "incredibly",
    "phonetic": "",
    "meaning": "(考频 8 次) adv.难以置信的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vessel",
    "phonetic": "",
    "meaning": "(考频 8 次) n.容器, 血管, 船\nList   18",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "frustrate",
    "phonetic": "",
    "meaning": "(考频 8 次) v.使沮丧; 挫败",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "semester",
    "phonetic": "",
    "meaning": "(考频 8 次) n.学期",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "impose",
    "phonetic": "",
    "meaning": "(考频 8 次) vt. on) 把...强加于",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "concentrate",
    "phonetic": "",
    "meaning": "(考频 8 次) v.全神贯注 n.浓缩物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hook",
    "phonetic": "",
    "meaning": "(考频 8 次) n.钩, 钩状物 vt.钩住",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "qualify",
    "phonetic": "",
    "meaning": "(考频 8 次) v.使) 胜任, 具有资格",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "renew",
    "phonetic": "",
    "meaning": "(考频 8 次) v.重新开始; 更新;",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advertisement",
    "phonetic": "",
    "meaning": "(考频 8 次) n.广告; 宣传",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "politician",
    "phonetic": "",
    "meaning": "(考频 8 次) n.政治家, 政客",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "safeguard",
    "phonetic": "",
    "meaning": "(考频 8 次) vt.保护 n.预防措施",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "overtake",
    "phonetic": "",
    "meaning": "(考频 8 次) vt.超过; 突然发生",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "crucial",
    "phonetic": "",
    "meaning": "(考频 8 次) adj.至关重要的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extra",
    "phonetic": "",
    "meaning": "(考频 8 次) adj.额外的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "visual",
    "phonetic": "",
    "meaning": "(考频 8 次) adj.视觉的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "collection",
    "phonetic": "",
    "meaning": "(考频 8 次) n.一群人;收藏品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "doubt",
    "phonetic": "",
    "meaning": "(考频 8 次) n.疑惑;疑问",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "due",
    "phonetic": "",
    "meaning": "(考频 8 次) adj.由于;因为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "clinical",
    "phonetic": "",
    "meaning": "(考频 8 次) adj.临床的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drug",
    "phonetic": "",
    "meaning": "(考频 8 次) n.毒品;药物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "implication",
    "phonetic": "",
    "meaning": "(考频 7 次) n.暗示",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "self-",
    "phonetic": "",
    "meaning": "esteem (考频 7 次) n.自尊心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comet",
    "phonetic": "",
    "meaning": "(考频 7 次) n.彗星",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "client",
    "phonetic": "",
    "meaning": "(考频 7 次) n.客户 , 当事人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mainstream",
    "phonetic": "",
    "meaning": "(考频 7 次) n.主流",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "profound",
    "phonetic": "",
    "meaning": "(考频 7 次) a.意义深远的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fossil",
    "phonetic": "",
    "meaning": "(考频 7 次) n.化石 , 守旧的事物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hypothesis",
    "phonetic": "",
    "meaning": "(考频 7 次) n.假说, 前提",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scholar",
    "phonetic": "",
    "meaning": "(考频 7 次) n.学者",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "representation",
    "phonetic": "",
    "meaning": "(考频 7 次) n.表现",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "independent",
    "phonetic": "",
    "meaning": "(考频 7 次) adj.独立的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deeply",
    "phonetic": "",
    "meaning": "(考频 7 次) adv.深深地;非常",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "via",
    "phonetic": "",
    "meaning": "(考频 7 次) prep.经由",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "statement",
    "phonetic": "",
    "meaning": "(考频 7 次) n.声明;陈述",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "direct",
    "phonetic": "",
    "meaning": "(考频 7 次) adj.直接的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comfort",
    "phonetic": "",
    "meaning": "(考频 7 次) n.安慰, 舒服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scale",
    "phonetic": "",
    "meaning": "(考频 7 次) n.规模;等级",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explosion",
    "phonetic": "",
    "meaning": "(考频 7 次) n.爆炸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "absence",
    "phonetic": "",
    "meaning": "(考频 7 次) n.缺乏;缺席",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "behave",
    "phonetic": "",
    "meaning": "(考频 7 次) v.表现;举止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "recall",
    "phonetic": "",
    "meaning": "(考频 7 次) v.回忆起;回想起",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "establish",
    "phonetic": "",
    "meaning": "(考频 7 次) v.建立;创立",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shorten",
    "phonetic": "",
    "meaning": "(考频 7 次) v.缩写",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "carbon",
    "phonetic": "",
    "meaning": "(考频 7 次) n.碳",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "numerous",
    "phonetic": "",
    "meaning": "(考频 7 次) adj.众多的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "allowance",
    "phonetic": "",
    "meaning": "(考频 6 次) n.津贴, 零花钱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cuisine",
    "phonetic": "",
    "meaning": "(考频 6 次) /n.烹饪, 菜肴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "employer",
    "phonetic": "",
    "meaning": "(考频 6 次) n.雇主",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stock",
    "phonetic": "",
    "meaning": "(考频 6 次) n.储备",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "investigation",
    "phonetic": "",
    "meaning": "(考频 6 次) n.调查",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "agreement",
    "phonetic": "",
    "meaning": "(考频 6 次) n.协议",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "norm",
    "phonetic": "",
    "meaning": "(考频 6 次) n.行为准则;常态",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "observation",
    "phonetic": "",
    "meaning": "(考频 6 次) n.评论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "translate",
    "phonetic": "",
    "meaning": "(考频 6 次) v.翻译;变为",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "relief",
    "phonetic": "",
    "meaning": "(考频 6 次) n.解脱;救济",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adopt",
    "phonetic": "",
    "meaning": "(考频 6 次) v.采用;采取",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "beneficial",
    "phonetic": "",
    "meaning": "(考频 6 次) adj.有利的;有用的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "union",
    "phonetic": "",
    "meaning": "(考频 6 次) n.联邦;协会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rarely",
    "phonetic": "",
    "meaning": "(考频 6 次) adv.罕有;不常",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intention",
    "phonetic": "",
    "meaning": "(考频 6 次) n.打算;意图\nList 20",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "basis",
    "phonetic": "",
    "meaning": "(考频 6 次) n.基础;要素",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "burden",
    "phonetic": "",
    "meaning": "(考频 6 次) n.负荷;负担",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "global",
    "phonetic": "",
    "meaning": "(考频 6 次) adj.全球的, 全面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subordinate",
    "phonetic": "",
    "meaning": "(考频 5 次) adj.下级的 n.部属",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ethical",
    "phonetic": "",
    "meaning": "(考频 5 次) a.伦理的, 道德的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "random",
    "phonetic": "",
    "meaning": "(考频 5 次) n.随意的, 任意的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "assumption",
    "phonetic": "",
    "meaning": "(考频 5 次) n.假定; 担任",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ignorance",
    "phonetic": "",
    "meaning": "(考频 5 次) n.无知",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "acquaintance",
    "phonetic": "",
    "meaning": "(考频 5 次) n.熟人; 认识",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "continental",
    "phonetic": "",
    "meaning": "(考频 5 次) adj.大陆的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "judge",
    "phonetic": "",
    "meaning": "(考频 5 次) n.裁判员",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reflection",
    "phonetic": "",
    "meaning": "(考频 5 次) n.沉思;想法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advocate",
    "phonetic": "",
    "meaning": "(考频 5 次) v.提倡;支持",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "violation",
    "phonetic": "",
    "meaning": "(考频 5 次) n.违反;违背",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "descent",
    "phonetic": "",
    "meaning": "(考频 5 次) n.下降;下落",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resistant",
    "phonetic": "",
    "meaning": "(考频 5 次) adj.抵制的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explanation",
    "phonetic": "",
    "meaning": "(考频 5 次) n.阐述",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "disappointing",
    "phonetic": "",
    "meaning": "(考频 5 次) adj.令人失望的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "actual",
    "phonetic": "",
    "meaning": "(考频 5 次) adj.实际的;真正的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "occupation",
    "phonetic": "",
    "meaning": "(考频 5 次) n.职业",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "smartphone",
    "phonetic": "",
    "meaning": "(考频 5 次) n.智能手机",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aid",
    "phonetic": "",
    "meaning": "(考频 5 次) v.帮助, 援助",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "aspect",
    "phonetic": "",
    "meaning": "(考频 5 次) n.方面",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mostly",
    "phonetic": "",
    "meaning": "(考频 5 次) adv.大部分;通常",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "regardless",
    "phonetic": "",
    "meaning": "(考频 5 次) adv.不顾,不加理会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "embarrass",
    "phonetic": "",
    "meaning": "(考频 4 次) vt.使尴尬",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "destination",
    "phonetic": "",
    "meaning": "(考频 4 次) n.目的;终点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "intend",
    "phonetic": "",
    "meaning": "(考频 4 次) v.计划;打算",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accomplishment",
    "phonetic": "",
    "meaning": "(考频 4 次) n.成就",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "embarrassment",
    "phonetic": "",
    "meaning": "(考频 4 次) n.困境",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "overwhelm",
    "phonetic": "",
    "meaning": "(考频 4 次) v.征服, 制服",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "glimpse",
    "phonetic": "",
    "meaning": "(考频 3 次) n.一瞥, 扫视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "consume",
    "phonetic": "k ə n ˈ sju ː m",
    "meaning": "v.   消耗，耗尽",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spit",
    "phonetic": "sp ɪ t",
    "meaning": "v.   吐（唾液等）；唾弃",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "transplant",
    "phonetic": "tr æ ns ˈ pl ɑː nt",
    "meaning": "v.   移植",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suspicion",
    "phonetic": "s əˈ sp ɪʃ n",
    "meaning": "n.   怀疑，疑心",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suspicious",
    "phonetic": "s əˈ sp ɪʃə s",
    "meaning": "a.   怀疑的，可疑的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insignificant",
    "phonetic": "ˌɪ ns ɪɡˈ n ɪ f ɪ k ə nt",
    "meaning": "a.   无意义的，无足轻重的；无价值的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "absolute",
    "phonetic": "ˈæ bs ə lu ː t",
    "meaning": "a.   绝对的，无条件的；完全的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "brake",
    "phonetic": "bre ɪ k",
    "meaning": "n.   刹车，制动器   v.   刹住（车）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "catalog",
    "phonetic": "ˈ k æ t ə l ɒɡ",
    "meaning": "n.   目录（册）   v.   编目",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extinct",
    "phonetic": "ɪ k ˈ st ɪŋ kt",
    "meaning": "a.   绝灭的，熄灭的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "extreme",
    "phonetic": "ɪ k ˈ stri ː m",
    "meaning": "a.   极度的，极端的   n.   极端，过分",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "accomplish",
    "phonetic": "əˈ k ʌ mpl ɪʃ",
    "meaning": "vt.   完成，到达；实行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tide",
    "phonetic": "ta ɪ d",
    "meaning": "n.   潮汐；潮流",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "torture",
    "phonetic": "ˈ t ɔː t ʃə ( r )",
    "meaning": "n. / vt.   拷打，折磨",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wax",
    "phonetic": "w æ ks",
    "meaning": "n.   蜡",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "weave",
    "phonetic": "wi ː v",
    "meaning": "v.   织，编",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "battery",
    "phonetic": "ˈ b æ tri",
    "meaning": "n.   电池（组）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cargo",
    "phonetic": "ˈ k ɑːɡəʊ",
    "meaning": "n.   （船、飞机等装载的）货物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "obscure",
    "phonetic": "ə b ˈ skj ʊə ( r )",
    "meaning": "a.   阴暗，模糊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exterior",
    "phonetic": "ɪ k ˈ st ɪə ri ə ( r )",
    "meaning": "n.   外部，外表   a.   外部的，外表的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "external",
    "phonetic": "ɪ k ˈ st ɜː nl",
    "meaning": "a.   外部的，外表的，外面的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "petroleum",
    "phonetic": "p əˈ tr əʊ li ə m",
    "meaning": "n.   石油",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ruin",
    "phonetic": "ˈ ru ːɪ n",
    "meaning": "v.   毁坏，破坏   n.   毁灭",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sake",
    "phonetic": "se ɪ k",
    "meaning": "n.   缘故，理由",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "satellite",
    "phonetic": "ˈ s æ t ə la ɪ t",
    "meaning": "n.   卫星",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "temple",
    "phonetic": "ˈ templ",
    "meaning": "n.   庙宇",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tendency",
    "phonetic": "ˈ tend ə nsi",
    "meaning": "n.   趋向，趋势",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ultimate",
    "phonetic": "ˈʌ lt ɪ m ə t",
    "meaning": "a.   极端的，最大的，最终的   n.   极端",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "abundant",
    "phonetic": "əˈ b ʌ nd ə nt",
    "meaning": "a.   丰富的，充裕的，大量的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bachelor",
    "phonetic": "ˈ b æ t ʃə l ə ( r )",
    "meaning": "n.   学士，学士学位；单身汉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "casual",
    "phonetic": "ˈ k æʒ u ə l",
    "meaning": "a.   偶然的，碰巧的；临时的；非正式的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "optics",
    "phonetic": "ˈɒ pt ɪ ks",
    "meaning": "n.   （单、复数同形）光学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "excess",
    "phonetic": "ɪ k ˈ ses",
    "meaning": "n.   过分，过量，过剩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expend",
    "phonetic": "ɪ k ˈ spend",
    "meaning": "v.   消费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expenditure",
    "phonetic": "ɪ k ˈ spend ɪ t ʃə ( r )",
    "meaning": "n.   支出，消费；经费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expensive",
    "phonetic": "ɪ k ˈ spens ɪ v",
    "meaning": "a.   花钱多的；价格高贵的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "expansion",
    "phonetic": "ɪ k ˈ sp æ n ʃ n",
    "meaning": "n.   扩大，扩充；发展，膨胀",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "personal",
    "phonetic": "ˈ p ɜː s ə nl",
    "meaning": "a.   个人的，私人的；亲自的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "the",
    "phonetic": "",
    "meaning": "Pacific   Ocean   [ ðə   p əˈ s ɪ f ɪ k   ˈəʊʃə n ]   -   太平洋",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "calculate",
    "phonetic": "ˈ k æ lkjule ɪ t",
    "meaning": "vt.   计算，核算",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "outstanding",
    "phonetic": "a ʊ t ˈ st æ nd ɪŋ",
    "meaning": "a.   杰出的，突出的，显著的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "import",
    "phonetic": "ˈɪ mp ɔː t",
    "meaning": "n.   进口（物）   v.   进口，输入",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "religion",
    "phonetic": "r ɪˈ l ɪ d ʒə n",
    "meaning": "n.   宗教，宗教信仰",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "video",
    "phonetic": "ˈ v ɪ di əʊ",
    "meaning": "n.   电视，视频   a.   电视的，录像的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "videotape",
    "phonetic": "ˈ v ɪ di əʊ te ɪ p",
    "meaning": "n.   录像磁带   v.   把 … 录在录像带上",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "beforehand",
    "phonetic": "b ɪˈ f ɔː h æ nd",
    "meaning": "ad.   预先，事先",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "radiation",
    "phonetic": "ˌ re ɪ di ˈ e ɪʃ n",
    "meaning": "n.   放射物，辐射",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "range",
    "phonetic": "re ɪ nd ʒ",
    "meaning": "n.   幅度，范围   v.   （在某范围内）变动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adhere",
    "phonetic": "ə d ˈ h ɪə ( r )",
    "meaning": "vi.   粘附，附着；遵守，坚持",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "continual",
    "phonetic": "k ə n ˈ t ɪ nju ə l",
    "meaning": "a.   不断地，频繁的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "explore",
    "phonetic": "ɪ k ˈ spl ɔː ( r )",
    "meaning": "v.   勘探",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "removal",
    "phonetic": "r ɪˈ mu ː vl",
    "meaning": "n.   除去，消除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "poverty",
    "phonetic": "ˈ p ɒ v ə ti",
    "meaning": "n.   贫穷",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "resolve",
    "phonetic": "r ɪˈ z ɒ lv",
    "meaning": "vt.   解决；决定，决意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "barrel",
    "phonetic": "ˈ b æ r ə l",
    "meaning": "n.   桶",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bargain",
    "phonetic": "ˈ b ɑːɡə n",
    "meaning": "n.   便宜货   vi.   讨价还价",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "coil",
    "phonetic": "k ɔɪ l",
    "meaning": "n.   线圈   v.   卷，盘绕",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "adult",
    "phonetic": "ˈæ d ʌ lt",
    "meaning": "n.   成年人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "advertise",
    "phonetic": "ˈæ dv ə ta ɪ z",
    "meaning": "v.   为 … 做广告",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "globe",
    "phonetic": "ɡ l əʊ b",
    "meaning": "n.   地球，世界；地球仪",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scan",
    "phonetic": "sk æ n",
    "meaning": "vt.   细看；扫描；浏览",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "scandal",
    "phonetic": "ˈ sk æ ndl",
    "meaning": "n.   丑事，丑闻",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subsequent",
    "phonetic": "ˈ s ʌ bs ɪ kw ə nt",
    "meaning": "a.   随后的，后来的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "virtual",
    "phonetic": "ˈ v ɜː t ʃ u ə l",
    "meaning": "a.   实际上的，事实上的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "illusion",
    "phonetic": "ɪˈ lu ːʒ n",
    "meaning": "n.   错觉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "likelihood",
    "phonetic": "ˈ la ɪ klih ʊ d",
    "meaning": "n.   可能，可能性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stripe",
    "phonetic": "stra ɪ p",
    "meaning": "n.   条纹",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "awful",
    "phonetic": "ˈɔː fl",
    "meaning": "a.   极坏的，威严的，可怕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "devise",
    "phonetic": "d ɪˈ va ɪ z",
    "meaning": "vt.   发明，策划，想出",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "naval",
    "phonetic": "ˈ ne ɪ vl",
    "meaning": "a.   海军的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "navigation",
    "phonetic": "ˌ n æ v ɪˈɡ e ɪʃ n",
    "meaning": "n.   航行",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "necessity",
    "phonetic": "n əˈ ses ə ti",
    "meaning": "n.   必需品；必要性",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "stale",
    "phonetic": "ste ɪ l",
    "meaning": "a.   不新鲜的，陈腐的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "insurance",
    "phonetic": "ɪ n ˈʃʊə r ə ns",
    "meaning": "n.   保险，保险费",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "spray",
    "phonetic": "spre ɪ",
    "meaning": "v.   喷，（使）溅散",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "media",
    "phonetic": "ˈ mi ː di ə",
    "meaning": "n.   新闻传媒",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "compete",
    "phonetic": "k ə m ˈ pi ː t",
    "meaning": "vi.   竞争，比赛",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "moist",
    "phonetic": "m ɔɪ st",
    "meaning": "a.   潮湿",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sophisticated",
    "phonetic": "s əˈ f ɪ st ɪ ke ɪ t ɪ d",
    "meaning": "a.   老于世故的，老练的；很复杂的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cancel",
    "phonetic": "ˈ k æ nsl",
    "meaning": "vt.   取消，废除",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "prosperity",
    "phonetic": "pr ɒˈ sper ə ti",
    "meaning": "n.   兴旺，繁荣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "cliff",
    "phonetic": "kl ɪ f",
    "meaning": "n.   悬崖，峭壁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "audio",
    "phonetic": "ˈɔː di əʊ",
    "meaning": "a.   听觉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comment",
    "phonetic": "ˈ k ɒ ment",
    "meaning": "n.   / vt.   评论",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "distinguish",
    "phonetic": "d ɪˈ st ɪŋɡ w ɪʃ",
    "meaning": "vt.   区分，辨别",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mixture",
    "phonetic": "ˈ m ɪ kst ʃə ( r )",
    "meaning": "n.   混合，混合物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mood",
    "phonetic": "mu ː d",
    "meaning": "n.   心情，情绪；语气",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vocabulary",
    "phonetic": "v əˈ k æ bj ə l ə ri",
    "meaning": "n.   词汇（量）；词汇表",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "waist",
    "phonetic": "we ɪ st",
    "meaning": "n.   腰，腰部",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "weld",
    "phonetic": "weld",
    "meaning": "v.   / n.   焊接",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comparable",
    "phonetic": "ˈ k ɒ mp ə r ə bl",
    "meaning": "a.   可比较的，类似的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "data",
    "phonetic": "ˈ de ɪ t ə",
    "meaning": "n.   数据，资料",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dive",
    "phonetic": "da ɪ v",
    "meaning": "vi.   跳水，潜水",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "suburb",
    "phonetic": "ˈ s ʌ b ɜː b",
    "meaning": "n.   市郊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "subway",
    "phonetic": "ˈ s ʌ bwe ɪ",
    "meaning": "n.   地铁",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "survey",
    "phonetic": "ˈ s ɜː ve ɪ",
    "meaning": "n.   / vt.   调查，勘测",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wealthy",
    "phonetic": "ˈ wel θ i",
    "meaning": "a.   富裕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "profitable",
    "phonetic": "ˈ pr ɒ f ɪ t ə bl",
    "meaning": "a.   有利可图的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "slope",
    "phonetic": "sl əʊ p",
    "meaning": "n.   斜坡，斜面",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "illegal",
    "phonetic": "ɪˈ li ːɡ l",
    "meaning": "a.   不合法的，非法的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comedy",
    "phonetic": "ˈ k ɒ m ə di",
    "meaning": "n.   喜剧",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "dumb",
    "phonetic": "d ʌ m",
    "meaning": "a.   哑的；沉默的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deaf",
    "phonetic": "def",
    "meaning": "a.   聋的；不愿听的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "repetition",
    "phonetic": "ˌ rep əˈ t ɪʃ n",
    "meaning": "n.   重复，反复",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "opportunity",
    "phonetic": "ˌɒ p əˈ tju ː n ə ti",
    "meaning": "n.   机会，时机",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "orchestra",
    "phonetic": "ˈɔː k ɪ str ə",
    "meaning": "n.   管弦乐队",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "semiconductor",
    "phonetic": "ˌ semik ə n ˈ d ʌ kt ə ( r )",
    "meaning": "n.   半导体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "seminar",
    "phonetic": "ˈ sem ɪ n ɑː ( r )",
    "meaning": "n.   研讨会",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "architect",
    "phonetic": "ˈɑː k ɪ tekt",
    "meaning": "n.   建筑师",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "architecture",
    "phonetic": "ˈɑː k ɪ tekt ʃə ( r )",
    "meaning": "n.   建筑学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "biology",
    "phonetic": "ba ɪˈɒ l ə d ʒ i",
    "meaning": "n.   生物学",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "geometry",
    "phonetic": "d ʒ i ˈɒ m ə tri",
    "meaning": "n.   几何（学）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "arithmetic",
    "phonetic": "əˈ r ɪθ m ə t ɪ k",
    "meaning": "n.   算术",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "algebra",
    "phonetic": "ˈæ ld ʒɪ br ə",
    "meaning": "n.   代数",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "entertainment",
    "phonetic": "ˌ ent əˈ te ɪ nm ə nt",
    "meaning": "n.   娱乐；招待，款待",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "environment",
    "phonetic": "ɪ n ˈ va ɪ r ə nm ə nt",
    "meaning": "n.   环境",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equation",
    "phonetic": "ɪˈ kwe ɪʒ n",
    "meaning": "n.   方程（式）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "restraint",
    "phonetic": "r ɪˈ stre ɪ nt",
    "meaning": "n.   抑制，限制",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "sexual",
    "phonetic": "ˈ sek ʃ u ə l",
    "meaning": "a.   性的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "simplicity",
    "phonetic": "s ɪ m ˈ pl ɪ s ə ti",
    "meaning": "n.   简单；朴素",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "simplify",
    "phonetic": "ˈ s ɪ mpl ɪ fa ɪ",
    "meaning": "vt.   简化",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "bureau",
    "phonetic": "ˈ bj ʊə r əʊ",
    "meaning": "n.   局，办事处",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "minimum",
    "phonetic": "ˈ m ɪ n ɪ m ə m",
    "meaning": "a.   最低的，最小的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nucleus",
    "phonetic": "ˈ nju ː kli ə s",
    "meaning": "n.   核",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "universe",
    "phonetic": "ˈ ju ː n ɪ v ɜː s",
    "meaning": "n.   宇宙",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "volunteer",
    "phonetic": "ˌ v ɒ l ə n ˈ t ɪə ( r )",
    "meaning": "n.   志愿者   v.   自愿（做）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "wagon",
    "phonetic": "ˈ w æɡə n",
    "meaning": "n.   四轮马车，铁路货车",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "ceremony",
    "phonetic": "ˈ ser ə m ə ni",
    "meaning": "n.   典礼，仪式",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "discount",
    "phonetic": "ˈ d ɪ ska ʊ nt",
    "meaning": "n.   （价格）折扣",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "equivalent",
    "phonetic": "ɪˈ kw ɪ v ə l ə nt",
    "meaning": "a.   相等的   a.   相等物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "erect",
    "phonetic": "ɪˈ rekt",
    "meaning": "a.   竖直的   v.   建造，竖立",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fax",
    "phonetic": "f æ ks",
    "meaning": "n. / vt.   传真",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "fertilizer",
    "phonetic": "ˈ f ɜː t ə la ɪ z ə ( r )",
    "meaning": "n.   肥料",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "grateful",
    "phonetic": "ˈɡ re ɪ tfl",
    "meaning": "a.   感激的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gratitude",
    "phonetic": "ˈɡ r æ t ɪ tju ː d",
    "meaning": "n.   感激",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "horror",
    "phonetic": "ˈ h ɒ r ə ( r )",
    "meaning": "n.   恐怖",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "horrible",
    "phonetic": "ˈ h ɒ r ə bl",
    "meaning": "a.   可怕的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "interpretation",
    "phonetic": "ɪ n ˌ t ɜː pr ɪˈ te ɪʃ n",
    "meaning": "n.   解释，说明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jungle",
    "phonetic": "ˈ d ʒʌŋɡ l",
    "meaning": "n.   丛林，密林",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lean",
    "phonetic": "li ː n",
    "meaning": "vi.   倾斜，倚，靠",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "nylon",
    "phonetic": "ˈ na ɪ l ɒ n",
    "meaning": "n.   尼龙",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "onion",
    "phonetic": "ˈʌ nj ə n",
    "meaning": "n.   洋葱",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "powder",
    "phonetic": "ˈ pa ʊ d ə ( r )",
    "meaning": "n.   粉末",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "applicant",
    "phonetic": "ˈæ pl ɪ k ə nt",
    "meaning": "n.   申请人",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conservation",
    "phonetic": "ˌ k ɒ ns əˈ ve ɪʃ n",
    "meaning": "n.   保存，保护",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "conservative",
    "phonetic": "k ə n ˈ s ɜː v ə t ɪ v",
    "meaning": "a.   保守的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pat",
    "phonetic": "p æ t",
    "meaning": "v. / n.   轻拍，轻打",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "peak",
    "phonetic": "pi ː k",
    "meaning": "n.   山峰，顶点",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "phenomenon",
    "phonetic": "f əˈ n ɒ m ɪ n ə n",
    "meaning": "n.   现象",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "rely",
    "phonetic": "r ɪˈ la ɪ",
    "meaning": "vi.   依赖，指望",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "reliable",
    "phonetic": "r ɪˈ la ɪə bl",
    "meaning": "a.   可靠的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "triangle",
    "phonetic": "ˈ tra ɪæŋɡ l",
    "meaning": "n.   三角（形）",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "shrug",
    "phonetic": "ʃ r ʌɡ",
    "meaning": "v. / n.   耸肩",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "signature",
    "phonetic": "ˈ s ɪɡ n ə t ʃə ( r )",
    "meaning": "n.   签名",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "utility",
    "phonetic": "ju ːˈ t ɪ l ə ti",
    "meaning": "n.   功用，效用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "utilise",
    "phonetic": "ˈ ju ː t ə la ɪ z",
    "meaning": "vt.   利用",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "variation",
    "phonetic": "ˌ ve ə ri ˈ e ɪʃ n",
    "meaning": "n.   变化，变动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "applause",
    "phonetic": "əˈ pl ɔː z",
    "meaning": "n.   鼓掌，掌声",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "frown",
    "phonetic": "fra ʊ n",
    "meaning": "v. / n.   皱眉",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jeans",
    "phonetic": "d ʒ i ː nz",
    "meaning": "n.   牛仔裤",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liter",
    "phonetic": "",
    "meaning": "/ litre   [ ˈ li ː t ə ( r )]   -   n.   升",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "molecule",
    "phonetic": "ˈ m ɒ l ɪ kju ː l",
    "meaning": "n.   分子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "descend",
    "phonetic": "d ɪˈ send",
    "meaning": "v.   下来，下降",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "missile",
    "phonetic": "ˈ m ɪ sa ɪ l",
    "meaning": "n.   导弹",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mist",
    "phonetic": "m ɪ st",
    "meaning": "n.   薄雾",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "notify",
    "phonetic": "ˈ n əʊ t ɪ fa ɪ",
    "meaning": "vt.   通知，告知",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "vitally",
    "phonetic": "ˈ va ɪ t ə li",
    "meaning": "ad.   极度，非常；致命地",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "urge",
    "phonetic": "ɜː d ʒ",
    "meaning": "vt.   鼓励，激励",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "usage",
    "phonetic": "ˈ ju ː s ɪ d ʒ",
    "meaning": "n.   使用，用法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "violet",
    "phonetic": "ˈ va ɪə l ə t",
    "meaning": "a.   紫色的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "weed",
    "phonetic": "wi ː d",
    "meaning": "n.   杂草，野草",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "whatsoever",
    "phonetic": "ˌ w ɒ ts əʊˈ ev ə ( r )",
    "meaning": "ad.   （用于否定句）任何",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "excursion",
    "phonetic": "ɪ k ˈ sk ɜːʃ n",
    "meaning": "n.   远足",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "flee",
    "phonetic": "fli ː",
    "meaning": "vi.   逃走",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "incident",
    "phonetic": "ˈɪ ns ɪ d ə nt",
    "meaning": "n.   事件，事变",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "infinite",
    "phonetic": "ˈɪ nf ɪ n ə t",
    "meaning": "a.   无限的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "inhabitant",
    "phonetic": "ɪ n ˈ h æ b ɪ t ə nt",
    "meaning": "n.   居民",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "jam",
    "phonetic": "d ʒæ m",
    "meaning": "n.   果酱；拥挤，堵塞",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "junior",
    "phonetic": "ˈ d ʒ u ː ni ə ( r )",
    "meaning": "a.   年少的；资历较浅的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "laser",
    "phonetic": "ˈ le ɪ z ə ( r )",
    "meaning": "n.   激光",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "magnet",
    "phonetic": "ˈ m æɡ n ə t",
    "meaning": "n.   磁铁，磁体",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "male",
    "phonetic": "me ɪ l",
    "meaning": "a.   男性的，雄的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "female",
    "phonetic": "ˈ fi ː me ɪ l",
    "meaning": "a.   女性的，雌的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "naked",
    "phonetic": "ˈ ne ɪ k ɪ d",
    "meaning": "a.   裸露的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "outset",
    "phonetic": "ˈ a ʊ tset",
    "meaning": "n.   开始，开端",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "quit",
    "phonetic": "kw ɪ t",
    "meaning": "v.   停止",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "skim",
    "phonetic": "sk ɪ m",
    "meaning": "vt.   搬（去），掠过；浏览",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "theme",
    "phonetic": "θ i ː m",
    "meaning": "n.   主题",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "textile",
    "phonetic": "ˈ teksta ɪ l",
    "meaning": "n.   纺织品",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tropical",
    "phonetic": "ˈ tr ɒ p ɪ kl",
    "meaning": "a.   热情的，炎热的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "kneel",
    "phonetic": "ni ː l",
    "meaning": "vi.   跪",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "mere",
    "phonetic": "m ɪə ( r )",
    "meaning": "a.   仅仅的，只不过的；纯粹的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "pants",
    "phonetic": "p æ nts",
    "meaning": "n.   长裤；内裤",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "primitive",
    "phonetic": "ˈ pr ɪ m ə t ɪ v",
    "meaning": "a.   原始的，早期的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "smash",
    "phonetic": "sm æʃ",
    "meaning": "vt.   粉碎，打烂",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "snap",
    "phonetic": "sn æ p",
    "meaning": "n.   / vt.   折断，拉断；快照",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "software",
    "phonetic": "ˈ s ɒ ftwe ə ( r )",
    "meaning": "n.   软件",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "solar",
    "phonetic": "ˈ s əʊ l ə ( r )",
    "meaning": "a.   太阳的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "timber",
    "phonetic": "ˈ t ɪ mb ə ( r )",
    "meaning": "n.   木材，原本",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tissue",
    "phonetic": "ˈ t ɪʃ u ː",
    "meaning": "n.   组织；薄纱，手巾纸",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "title",
    "phonetic": "ˈ ta ɪ tl",
    "meaning": "n.   题目，标题",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "tone",
    "phonetic": "t əʊ n",
    "meaning": "n.   语气，音调",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drift",
    "phonetic": "dr ɪ ft",
    "meaning": "vi.   漂，漂流",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "drip",
    "phonetic": "dr ɪ p",
    "meaning": "n.   滴",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "duration",
    "phonetic": "dj ʊˈ re ɪʃ n",
    "meaning": "n.   持续，持续期间",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "leather",
    "phonetic": "ˈ le ðə ( r )",
    "meaning": "n.   皮革",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "legislation",
    "phonetic": "ˌ led ʒɪ s ˈ le ɪʃ n",
    "meaning": "n.   法律，法规；立法",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loose",
    "phonetic": "lu ː s",
    "meaning": "a.   松的，宽松的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "loosen",
    "phonetic": "ˈ lu ː sn",
    "meaning": "v.   解开，放松",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "earthquake",
    "phonetic": "ˈɜːθ kwe ɪ k",
    "meaning": "n.   地震",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "electron",
    "phonetic": "ɪˈ lektr ɒ n",
    "meaning": "n.   电子",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "favorable",
    "phonetic": "ˈ fe ɪ v ə r ə bl",
    "meaning": "a.   称赞道；有利的，顺利的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "favorite",
    "phonetic": "ˈ fe ɪ v ə r ɪ t",
    "meaning": "a.   特别受喜欢的   n.   喜爱的人或物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gallery",
    "phonetic": "ˈɡæ l ə ri",
    "meaning": "n.   画廊",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gallon",
    "phonetic": "ˈɡæ l ə n",
    "meaning": "n.   加仑",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "garbage",
    "phonetic": "ˈɡɑː b ɪ d ʒ",
    "meaning": "n.   垃圾，废物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gaze",
    "phonetic": "ɡ e ɪ z",
    "meaning": "v.   凝视，注视",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gear",
    "phonetic": "ɡɪə ( r )",
    "meaning": "n.   齿轮，传动装置",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "lest",
    "phonetic": "lest",
    "meaning": "conj.   唯恐，免得",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "liberty",
    "phonetic": "ˈ l ɪ b ə ti",
    "meaning": "n.   自由",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "license",
    "phonetic": "ˈ la ɪ sns",
    "meaning": "n.   许可证，执照",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gasoline",
    "phonetic": "ˈɡæ s ə li ː n",
    "meaning": "n.   汽油",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "gesture",
    "phonetic": "ˈ d ʒ est ʃə ( r )",
    "meaning": "n.   姿势，手势",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "giant",
    "phonetic": "ˈ d ʒ a ɪə nt",
    "meaning": "a.   巨大的   n.   巨人，巨物",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "glorious",
    "phonetic": "ˈɡ l ɔː ri ə s",
    "meaning": "a.   光荣的，极好的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "golf",
    "phonetic": "ɡɒ lf",
    "meaning": "n.   高尔夫球运动",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hydrogen",
    "phonetic": "ˈ ha ɪ dr ə d ʒə n",
    "meaning": "n.   氢",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "household",
    "phonetic": "ˈ ha ʊ sh əʊ ld",
    "meaning": "n.   家庭，户",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "holy",
    "phonetic": "ˈ h əʊ li",
    "meaning": "a.   神圣地，圣洁的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hint",
    "phonetic": "h ɪ nt",
    "meaning": "n.   暗示，示意",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "hesitate",
    "phonetic": "ˈ hez ɪ te ɪ t",
    "meaning": "v.   犹豫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "herd",
    "phonetic": "h ɜː d",
    "meaning": "n.   兽群，牧群",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deliberately",
    "phonetic": "d ɪˈ l ɪ b ə r ə tli",
    "meaning": "adv.   故意的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "destructive",
    "phonetic": "d ɪˈ str ʌ kt ɪ v",
    "meaning": "adj.   破坏性的",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "starvation",
    "phonetic": "st ɑːˈ ve ɪʃ n",
    "meaning": "n.   饥饿，饿死",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "exhaustion",
    "phonetic": "ɪɡˈ z ɔː st ʃə n",
    "meaning": "n.   竭力，疲惫",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "strike",
    "phonetic": "stra ɪ k",
    "meaning": "n.   罢工   v. 打击，罢工",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "await",
    "phonetic": "əˈ we ɪ t",
    "meaning": "vt.   等候",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "deportation",
    "phonetic": "ˌ di ː p ɔːˈ te ɪʃ n",
    "meaning": "n.   放逐",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "identification",
    "phonetic": "a ɪˌ dent ɪ f ɪˈ ke ɪʃ n",
    "meaning": "n.   鉴别，证明",
    "example": "",
    "examPoint": ""
  },
  {
    "word": "comprehensive",
    "phonetic": "ˌ k ɒ mpr ɪˈ hens ɪ v",
    "meaning": "a.   全面的，综合的",
    "example": "",
    "examPoint": ""
  }
];


function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ========== 状态与 DOM ==========
let currentIndex = 0;
let mode = 'study';
let favorites = loadFavoriteRecords();

const studyModeEl = document.getElementById('studyMode');
const dictationModeEl = document.getElementById('dictationMode');
const studyWordEl = document.getElementById('studyWord');
const studyPhoneticEl = document.getElementById('studyPhonetic');
const studyMeaningEl = document.getElementById('studyMeaning');
const toggleMeaningBtn = document.getElementById('toggleMeaningBtn');
const nextWordStudyBtn = document.getElementById('nextWordStudyBtn');
const switchToDictationBtn = document.getElementById('switchToDictationBtn');
const switchToStudyBtn = document.getElementById('switchToStudyBtn');
const dictationMeaningEl = document.getElementById('dictationMeaning');
const dictationInput = document.getElementById('dictationInput');
const checkSpellBtn = document.getElementById('checkSpellBtn');
const spellResult = document.getElementById('spellResult');
const nextWordAfterCheckBtn = document.getElementById('nextWordAfterCheckBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const aiExplainBtn = document.getElementById('aiExplainBtn');
const aiQuizBtn = document.getElementById('aiQuizBtn');
const wordResult = document.getElementById('wordResult');
const quizResult = document.getElementById('quizResult');
const wordFileInput = document.getElementById('wordFile');

function getCurrentWord() {
  return WORDS.length > 0 ? WORDS[currentIndex % WORDS.length] : null;
}

function saveFavorites() {
  setUserJson('favorites', favorites);
}

function loadFavoriteRecords() {
  return getUserJson('favorites', [], 'cet4_favorites');
}

function isFavorited(word) {
  return favorites.some(f => f.word === word);
}

function toggleFavorite(word, meaning) {
  if (isFavorited(word)) {
    favorites = favorites.filter(f => f.word !== word);
    favoriteBtn.textContent = '☆ 收藏';
    favoriteBtn.classList.remove('active');
  } else {
    favorites.push({ word, meaning, time: new Date().toISOString() });
    favoriteBtn.textContent = '★ 已收藏';
    favoriteBtn.classList.add('active');
  }
  saveFavorites();
}

function refreshWordUserData() {
  favorites = loadFavoriteRecords();
  updateFavoriteBtn();
}

function updateFavoriteBtn() {
  const w = getCurrentWord();
  if (!w) return;
  if (isFavorited(w.word)) {
    favoriteBtn.textContent = '★ 已收藏';
    favoriteBtn.classList.add('active');
  } else {
    favoriteBtn.textContent = '☆ 收藏';
    favoriteBtn.classList.remove('active');
  }
}

function showStudyView() {
  const w = getCurrentWord();
  if (!w) {
    studyWordEl.textContent = '无单词数据';
    studyPhoneticEl.textContent = '';
    studyMeaningEl.textContent = '';
    toggleMeaningBtn.textContent = '显示释义';
    return;
  }
  studyWordEl.textContent = w.word || '?';
  studyPhoneticEl.textContent = w.phonetic || '';
  studyMeaningEl.textContent = w.meaning || '（释义缺失）';
  studyMeaningEl.style.display = 'none';
  toggleMeaningBtn.textContent = '显示释义';
  updateFavoriteBtn();
}

function showDictationView() {
  const w = getCurrentWord();
  if (!w) return;
  dictationMeaningEl.textContent = w.meaning || '';
  dictationInput.value = '';
  spellResult.innerHTML = '';
}

function switchMode(newMode) {
  mode = newMode;
  if (mode === 'study') {
    studyModeEl.style.display = 'block';
    dictationModeEl.style.display = 'none';
    showStudyView();
  } else {
    studyModeEl.style.display = 'none';
    dictationModeEl.style.display = 'block';
    showDictationView();
  }
}

function nextWord() {
  currentIndex = (currentIndex + 1) % WORDS.length;
  if (mode === 'study') showStudyView();
  else showDictationView();
  wordResult.textContent = '';
  quizResult.textContent = '';
}

// ========== 事件绑定 ==========
toggleMeaningBtn.addEventListener('click', () => {
  if (!studyMeaningEl) return;
  if (studyMeaningEl.style.display === 'none') {
    studyMeaningEl.style.display = 'block';
    toggleMeaningBtn.textContent = '隐藏释义';
  } else {
    studyMeaningEl.style.display = 'none';
    toggleMeaningBtn.textContent = '显示释义';
  }
});

nextWordStudyBtn.addEventListener('click', nextWord);
switchToDictationBtn.addEventListener('click', () => switchMode('dictation'));
switchToStudyBtn.addEventListener('click', () => switchMode('study'));

checkSpellBtn.addEventListener('click', () => {
  const w = getCurrentWord();
  if (!w) return;
  const answer = dictationInput.value.trim().toLowerCase();
  const correct = w.word.toLowerCase();
  if (answer === correct) {
    spellResult.innerHTML = '<span style="color:green; font-weight:bold;">✅ 完全正确！</span>';
    setTimeout(nextWord, 1500);
  } else {
    spellResult.innerHTML = `<span style="color:red;">❌ 拼写错误，正确答案是：<strong>${w.word}</strong></span>`;
  }
});

nextWordAfterCheckBtn.addEventListener('click', nextWord);

favoriteBtn.addEventListener('click', () => {
  const w = getCurrentWord();
  if (!w) return;
  toggleFavorite(w.word, w.meaning);
});

aiExplainBtn.addEventListener('click', async () => {
  const w = getCurrentWord();
  if (!w) return;
  aiExplainBtn.disabled = true;
  wordResult.textContent = 'AI 讲解生成中...';
  const data = await API.post('/api/word/enrich', { word: w.word });
  wordResult.innerHTML = data.result ? marked.parse(data.result) : ('出错：' + (data.error || ''));
  aiExplainBtn.disabled = false;
});

// ========== AI 出题（按钮答题版本） ==========
// AI 出题已移至 exam.js，由弹窗选择题型后调用对应函数

// 导入词库文件
wordFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (Array.isArray(data) && data.length > 0 && data[0].word) {
        WORDS.length = 0;
        Array.prototype.push.apply(WORDS, data);
        shuffleArray(WORDS);
        currentIndex = 0;
        switchMode('study');
        alert('成功导入 ' + data.length + ' 个单词！');
      } else {
        alert('JSON 格式错误');
      }
    } catch {
      alert('文件解析失败');
    }
  };
  reader.readAsText(file);
});

// 初始化
if (WORDS.length > 0) {
  shuffleArray(WORDS);
  switchMode('study');
} else {
  studyWordEl.textContent = '暂无单词';
  studyPhoneticEl.textContent = '';
  studyMeaningEl.textContent = '请导入词库或运行生成脚本';
}
