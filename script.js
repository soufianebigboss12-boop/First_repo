const content = document.getElementById("content");

const sections = {
  morning: {
    title: "🌅 أذكار الصباح",
    items: [
      "أصبحنا وأصبح الملك لله، والحمد لله.",
      "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.",
      "رضيت بالله رباً، وبالإسلام ديناً، وبمحمد ﷺ نبياً.",
      "سبحان الله وبحمده."
    ]
  },
  evening: {
    title: "🌇 أذكار المساء",
    items: [
      "أمسينا وأمسى الملك لله، والحمد لله.",
      "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.",
      "رضيت بالله رباً، وبالإسلام ديناً، وبمحمد ﷺ نبياً.",
      "أعوذ بكلمات الله التامات من شر ما خلق."
    ]
  },
  sleep: {
    title: "🌙 أذكار النوم",
    items: [
      "باسمك اللهم أموت وأحيا.",
      "قراءة آية الكرسي.",
      "قراءة آخر آيتين من سورة البقرة.",
      "قراءة سورة الإخلاص والفلق والناس."
    ]
  },
  hadith: {
    title: "📚 الأحاديث النبوية",
    items: [
      "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.",
      "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
      "الكلمة الطيبة صدقة.",
      "من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت."
    ]
  },
  dua: {
    title: "🤲 الأدعية",
    items: [
      "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.",
      "رب اشرح لي صدري ويسر لي أمري.",
      "ربنا لا تزغ قلوبنا بعد إذ هديتنا وهب لنا من لدنك رحمة.",
      "اللهم إني أسألك الهدى والتقى والعفاف والغنى."
    ]
  }
};

window.showSection = function(section) {
  if (section === "quran") {
    content.innerHTML = `
      <h2>📖 القرآن الكريم</h2>
      <p>اقرأ واستمع إلى القرآن الكريم.</p>
      <a href="https://quran.com/ar" target="_blank" rel="noopener">
        <button>افتح المصحف الشريف</button>
      </a>
    `;
    return;
  }

  if (section === "tasbih") {
    showTasbih();
    return;
  }

  const data = sections[section];
  if (!data) return;

  content.innerHTML = `
    <h2>${data.title}</h2>
    ${data.items.map(item => `
      <article class="dhikr-item">
        <p>${item}</p>
      </article>
    `).join("")}
  `;
};

let count = Number(localStorage.getItem("noor_count")) || 0;

function showTasbih() {
  content.innerHTML = `
    <h2>📿 السبحة الإلكترونية</h2>
    <h3 id="counter">${count}</h3>
    <button onclick="addTasbih()">سبحان الله</button>
    <button onclick="resetTasbih()">إعادة العداد</button>
  `;
}

window.addTasbih = function() {
  count++;
  localStorage.setItem("noor_count", count);
  document.getElementById("counter").textContent = count;
};

window.resetTasbih = function() {
  count = 0;
  localStorage.setItem("noor_count", 0);
  document.getElementById("counter").textContent = count;
};

console.log("نور المسلم يعمل بنجاح");
