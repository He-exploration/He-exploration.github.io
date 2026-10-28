(() => {
  'use strict';
  const copy = {
    en: {
      skip: 'Skip to content', researchNav: 'Research', contactNav: 'Contact',
      eyebrow: 'Personal website', role: 'Ph.D. student · 2026 cohort',
      college: 'College of AI', university: 'Tsinghua University',
      intro: 'I’m a Ph.D. student at the College of AI, Tsinghua University, where I began my doctoral studies in 2026.',
      bio: 'My research interests include foundation model training and optimization, machine learning systems, and world models. I’m particularly interested in efficient and numerically stable training at scale.',
      researchTitle: 'Research interests',
      area1: 'Foundation models & optimization', detail1: 'Training large-scale models efficiently and with numerical stability.',
      area2: 'Machine learning systems', detail2: 'Systems for efficient large-scale model training.',
      area3: 'World models', detail3: 'Learning representations and dynamics of the world.',
      email: 'Email', contactTitle: 'Contact & links', footer: '温和 · Tsinghua University'
    },
    zh: {
      skip: '跳至正文', researchNav: '研究兴趣', contactNav: '联系',
      eyebrow: '个人主页', role: '2026级博士生',
      college: '人工智能学院', university: '清华大学',
      intro: '我是温和，清华大学人工智能学院2026级博士生。',
      bio: '我的研究兴趣包括基础模型的训练与优化、机器学习系统以及世界模型，尤其关注大规模模型训练的效率与数值稳定性。',
      researchTitle: '研究兴趣',
      area1: '基础模型与优化', detail1: '大规模模型训练的效率与数值稳定性。',
      area2: '机器学习系统', detail2: '面向大规模模型高效训练的系统。',
      area3: '世界模型', detail3: '学习世界的表征与动态规律。',
      email: '邮箱', contactTitle: '联系与链接', footer: '温和 · 清华大学'
    }
  };
  const buttons = document.querySelectorAll('[data-language]');
  function setLanguage(language) {
    if (!Object.hasOwn(copy, language)) return;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = copy[language][element.dataset.i18n];
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    try { localStorage.setItem('he-wen-language', language); } catch (_) { /* Optional preference storage. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  try { setLanguage(localStorage.getItem('he-wen-language') || 'en'); } catch (_) { setLanguage('en'); }
})();
