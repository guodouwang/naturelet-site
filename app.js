/* NatureLet 官网 —— 交互脚本 */
(function () {
  'use strict';

  var KNOWLEDGE = window.NL_KNOWLEDGE || [];

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
  var sections = ['home', 'features', 'knowledge', 'about'];
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
        '<span class="daily-tag">今日物种</span>' +
        '<span class="daily-name">' + item.name + '</span>' +
      '</div>' +
      '<div class="daily-meta">' + item.category + ' · ' + (item.family || '') + '</div>' +
      '<p class="daily-feature">' + item.feature + '</p>' +
      '<ul class="daily-care">' + care + '</ul>' +
      (danger || '') +
      '<a class="daily-more" href="#mini">去小程序体验完整识别 →</a>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDaily);
  } else {
    renderDaily();
  }
})();
