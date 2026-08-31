/* NatureLet 官网 —— 交互脚本 */
(function () {
  'use strict';

  var KNOWLEDGE = window.NL_KNOWLEDGE || [];
  var I18N = {
    zh: {
      brand: '自然识别宝',
      navHome: '首页',
      navGallery: '真实图库',
      navFeatures: '功能亮点',
      navScenarios: '应用场景',
      navVideo: '场景视频',
      navKnowledge: '今日科普',
      navTry: '体验',
      navCta: '小程序体验',
      heroEyebrow: 'AI 自然识别小程序',
      heroTitle: '自然识别宝',
      heroGlobal: 'NatureLet · Identify the living world around you',
      heroLead: '把镜头对准一朵花、一只鸟、一尾鱼或一只昆虫，几秒认识它的名字、特征、习性与养护提醒。',
      heroPrimary: '立即体验',
      heroGhost: '看看能识别什么',
      resultLabel: '识别结果',
      resultName: '月季 Rosa chinensis',
      resultDesc: '置信度 96% · 花期、光照、浇水建议已生成',
      trustSpecies: '常见物种知识',
      trustCategories: '花鸟鱼虫重点覆盖',
      trustFast: '拍照识别反馈',
      trustRecord: '自然观察打卡',
      galleryTitle: '真实花鸟鱼虫，一眼进入自然现场',
      galleryLead: '用实拍图片呈现核心识别场景，让用户在打开页面的第一刻就知道它能帮自己认识什么。',
      galleryFlowerTag: '花卉识别',
      galleryFlowerTitle: '看花型、叶片、颜色，快速匹配常见植物',
      galleryBirdTag: '鸟类识别',
      galleryBirdTitle: '遇见飞羽，认识栖息地与习性',
      galleryFishTag: '鱼类识别',
      galleryFishTitle: '水族饲养与生态知识随手查',
      galleryInsectTag: '昆虫识别',
      galleryInsectTitle: '从翅纹、触角到活动季节，补全观察记录',
      featuresTitle: '不是只告诉你名字，也帮你真正看懂',
      feature1Title: '拍照识别',
      feature1Text: '上传清晰照片后，展示候选物种、相似度、拉丁名和关键识别点。',
      feature2Title: '养护与饲养',
      feature2Text: '补充光照、浇水、温度、食性、饲养注意事项，让兴趣自然延伸。',
      feature3Title: '风险提醒',
      feature3Text: '对有毒、危险、入侵或不建议触碰的物种做醒目提示，降低误判风险。',
      feature4Title: '打卡记录',
      feature4Text: '记录地点、时间、照片和笔记，积累自己的自然观察地图。',
      scenarioTitle: '从生活场景进入自然学习',
      scenarioLead: '高级感不只来自视觉，也来自用户一眼能理解的使用场景。',
      scenario1Title: '公园散步',
      scenario1Text: '遇见不认识的花草鸟鸣，随手拍下并收藏观察记录。',
      scenario2Title: '亲子自然教育',
      scenario2Text: '把一次户外游玩变成可互动、可回顾的自然课堂。',
      scenario3Title: '阳台养花',
      scenario3Text: '识别植物后查看光照、浇水、修剪和病虫害提醒。',
      scenario4Title: '水族饲养',
      scenario4Text: '认识观赏鱼与饲养要点，减少新手踩坑。',
      safetyTitle: '专业提示',
      safetyText: 'AI 识别适合辅助学习和观察记录；遇到有毒、危险或保护物种，请以专业资料和当地规定为准。',
      videoTitle: '真实人物场景，更像一次随身自然导览',
      videoLead: '从公园散步、亲子郊游到阳台养花，用户打开相机就能把“好奇一下”变成一次完整记录。',
      videoStep1: '识别眼前物种',
      videoStep2: '生成知识卡片',
      videoStep3: '收藏并打卡',
      videoCaption: '人在自然环境中使用手机，契合拍照识别与观察记录的产品场景。',
      knowledgeTitle: '今日科普',
      knowledgeLead: '每天认识一种植物或动物，图文知识随手学。',
      miniTitle: '打开自然识别宝，把每次遇见都收进观察册',
      miniLead: '上线后替换为正式小程序码，即可引导用户从宣传页直接进入拍照识别、收藏和打卡流程。',
      qrText: '小程序码<br>上线后替换',
      aboutTitle: '让身边自然变得可亲近',
      aboutText: '「自然识别宝」致力于让每个人都能轻松认识身边的植物与动物。识别与养护知识仅供参考，无法替代专业鉴定；危险、毒性、外来入侵等提示请以专业资料核实。',
      footerText: 'NatureLet 自然识别宝 · 拍一拍，认识身边自然',
      dailyTag: '今日物种',
      dailyMore: '去小程序体验完整识别 →'
    },
    en: {
      brand: 'NatureLet',
      navHome: 'Home',
      navGallery: 'Gallery',
      navFeatures: 'Features',
      navScenarios: 'Use Cases',
      navVideo: 'Video',
      navKnowledge: 'Learn',
      navTry: 'Try',
      navCta: 'Mini Program',
      heroEyebrow: 'AI Nature Identifier',
      heroTitle: 'NatureLet',
      heroGlobal: 'Identify the living world around you',
      heroLead: 'Point your camera at a flower, bird, fish, or insect. NatureLet helps identify it and explains its traits, habitat, and care notes in seconds.',
      heroPrimary: 'Try Now',
      heroGhost: 'Explore Species',
      resultLabel: 'Identification',
      resultName: 'Rose · Rosa chinensis',
      resultDesc: '96% confidence · Blooming, light, and watering tips ready',
      trustSpecies: 'species notes',
      trustCategories: 'nature categories',
      trustFast: 'quick recognition',
      trustRecord: 'field notes',
      galleryTitle: 'Real nature imagery, from flowers to wildlife',
      galleryLead: 'Authentic visuals make the product feel immediate, trustworthy, and easy to understand.',
      galleryFlowerTag: 'Flower ID',
      galleryFlowerTitle: 'Recognize plants by color, petals, leaves, and growth form',
      galleryBirdTag: 'Bird ID',
      galleryBirdTitle: 'Connect plumage, habitat, and behavior in one record',
      galleryFishTag: 'Fish ID',
      galleryFishTitle: 'Learn aquarium care and aquatic ecology at a glance',
      galleryInsectTag: 'Insect ID',
      galleryInsectTitle: 'Capture wing patterns, seasonality, and observation details',
      featuresTitle: 'More than a name. A clearer way to understand nature.',
      feature1Title: 'Photo Recognition',
      feature1Text: 'Upload a clear photo to get species candidates, confidence, scientific names, and key traits.',
      feature2Title: 'Care Guidance',
      feature2Text: 'Get practical notes on light, watering, temperature, feeding, and daily care.',
      feature3Title: 'Risk Alerts',
      feature3Text: 'Highlight toxic, dangerous, invasive, or protected species so users stay careful.',
      feature4Title: 'Observation Log',
      feature4Text: 'Save location, time, photos, and notes to build a personal nature journal.',
      scenarioTitle: 'Designed for everyday nature moments',
      scenarioLead: 'A premium product feels clear not only in visuals, but also in the situations it serves.',
      scenario1Title: 'Park Walks',
      scenario1Text: 'Capture unknown plants and birds, then save them into a personal observation log.',
      scenario2Title: 'Family Learning',
      scenario2Text: 'Turn an outdoor trip into an interactive nature lesson for parents and children.',
      scenario3Title: 'Balcony Gardening',
      scenario3Text: 'Identify plants and review light, watering, pruning, and pest reminders.',
      scenario4Title: 'Aquarium Care',
      scenario4Text: 'Recognize ornamental fish and learn care notes before making mistakes.',
      safetyTitle: 'Professional Note',
      safetyText: 'AI recognition is for learning and observation support. For toxic, dangerous, or protected species, always follow professional references and local rules.',
      videoTitle: 'A personal nature guide in your pocket',
      videoLead: 'From city parks to balcony gardening, every small curiosity can become a complete observation record.',
      videoStep1: 'Identify what you see',
      videoStep2: 'Generate a knowledge card',
      videoStep3: 'Save and check in',
      videoCaption: 'A real phone-in-nature scene that matches photo recognition and observation logging.',
      knowledgeTitle: 'Daily Learning',
      knowledgeLead: 'Meet one plant or animal each day through concise, practical notes.',
      miniTitle: 'Open NatureLet and collect every encounter',
      miniLead: 'Replace this placeholder with the official WeChat mini program code when ready.',
      qrText: 'Mini Program<br>Coming Soon',
      aboutTitle: 'Making nearby nature easier to know',
      aboutText: 'NatureLet helps people recognize plants and animals around them. Identification and care notes are for reference only and do not replace professional verification.',
      footerText: 'NatureLet · Identify the living world around you',
      dailyTag: 'Daily Species',
      dailyMore: 'Try the full mini program →'
    }
  };
  var currentLang = 'zh';

  // 顶栏导航高亮（滚动监听 + 点击）
  var links = document.querySelectorAll('.nav-link');
  function highlight(id) {
    links.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + id);
    });
  }
  links.forEach(function (l) {
    l.addEventListener('click', function () {
      var id = (l.getAttribute('href') || '').replace('#', '');
      highlight(id);
    });
  });
  // 简单滚动高亮
  var sections = ['home', 'gallery', 'features', 'scenarios', 'video', 'knowledge', 'mini', 'about'];
  window.addEventListener('scroll', function () {
    var y = window.scrollY + 120;
    for (var i = sections.length - 1; i >= 0; i--) {
      var el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= y) { highlight(sections[i]); break; }
    }
  }, { passive: true });

  // 每日科普：按当天日期取一个物种，保证一天内固定
  function dailyItem() {
    if (!KNOWLEDGE.length) return null;
    var d = new Date();
    var key = d.getFullYear() * 100 + (d.getMonth() + 1) * 100 + d.getDate();
    return KNOWLEDGE[key % KNOWLEDGE.length];
  }

  function renderDaily() {
    var box = document.getElementById('dailyBox');
    if (!box) return;
    var item = dailyItem();
    if (!item) { box.innerHTML = '<p>暂无科普内容。</p>'; return; }
    var care = (item.care || []).slice(0, 4).map(function (c) {
      return '<li>' + (c.icon || '') + ' ' + c.title + '：' + c.text + '</li>';
    }).join('');
    var danger = item.danger ?
      '<div class="danger-note">⚠️ 危险/毒性提示：' + item.caution + '</div>' : '';
    box.innerHTML =
      '<div class="daily-head">' +
        '<span class="daily-tag">' + I18N[currentLang].dailyTag + '</span>' +
        '<span class="daily-name">' + item.name + '</span>' +
      '</div>' +
      '<div class="daily-meta">' + item.category + ' · ' + (item.family || '') + '</div>' +
      '<p class="daily-feature">' + item.feature + '</p>' +
      '<ul class="daily-care">' + care + '</ul>' +
      (danger || '') +
      '<a class="daily-more" href="#mini">' + I18N[currentLang].dailyMore + '</a>';
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (I18N[lang] && I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });
    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中';
    renderDaily();
  }

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyLang(currentLang); });
  } else {
    applyLang(currentLang);
  }
})();
