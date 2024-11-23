const surahs = [
    { number: 1, name: "الفاتحة" },
    { number: 2, name: "البقرة" },
    { number: 3, name: "آل عمران" },
    { number: 4, name: "النساء" },
    { number: 5, name: "المائدة" },
    { number: 6, name: "الأنعام" },
    { number: 7, name: "الأعراف" },
    { number: 8, name: "الأنفال" },
    { number: 9, name: "التوبة" },
    { number: 10, name: "يونس" },
    { number: 11, name: "هود" },
    { number: 12, name: "يوسف" },
    { number: 13, name: "الرعد" },
    { number: 14, name: "إبراهيم" },
    { number: 15, name: "الحجر" },
    { number: 16, name: "النحل" },
    { number: 17, name: "الإسراء" },
    { number: 18, name: "الكهف" },
    { number: 19, name: "مريم" },
    { number: 20, name: "طه" },
    { number: 21, name: "الأنبياء" },
    { number: 22, name: "الحج" },
    { number: 23, name: "المؤمنون" },
    { number: 24, name: "النور" },
    { number: 25, name: "الفرقان" },
    { number: 26, name: "الشعراء" },
    { number: 27, name: "النمل" },
    { number: 28, name: "القصص" },
    { number: 29, name: "العنكبوت" },
    { number: 30, name: "الروم" },
    { number: 31, name: "لقمان" },
    { number: 32, name: "السجدة" },
    { number: 33, name: "الأحزاب" },
    { number: 34, name: "سبأ" },
    { number: 35, name: "فاطر" },
    { number: 36, name: "يس" },
    { number: 37, name: "الصافات" },
    { number: 38, name: "ص" },
    { number: 39, name: "الزمر" },
    { number: 40, name: "غافر" },
    { number: 41, name: "فصلت" },
    { number: 42, name: "الشورى" },
    { number: 43, name: "الزخرف" },
    { number: 44, name: "الدخان" },
    { number: 45, name: "الجاثية" },
    { number: 46, name: "الأحقاف" },
    { number: 47, name: "محمد" },
    { number: 48, name: "الفتح" },
    { number: 49, name: "الحجرات" },
    { number: 50, name: "ق" },
    { number: 51, name: "الذاريات" },
    { number: 52, name: "الطور" },
    { number: 53, name: "النجم" },
    { number: 54, name: "القمر" },
    { number: 55, name: "الرحمن" },
    { number: 56, name: "الواقعة" },
    { number: 57, name: "الحديد" },
    { number: 58, name: "المجادلة" },
    { number: 59, name: "الحشر" },
    { number: 60, name: "الممتحنة" },
    { number: 61, name: "الصف" },
    { number: 62, name: "الجمعة" },
    { number: 63, name: "المنافقون" },
    { number: 64, name: "التغابن" },
    { number: 65, name: "الطلاق" },
    { number: 66, name: "التحريم" },
    { number: 67, name: "الملك" },
    { number: 68, name: "القلم" },
    { number: 69, name: "الحاقة" },
    { number: 70, name: "المعارج" },
    { number: 71, name: "نوح" },
    { number: 72, name: "الجن" },
    { number: 73, name: "المزمل" },
    { number: 74, name: "المدثر" },
    { number: 75, name: "القيامة" },
    { number: 76, name: "الإنسان" },
    { number: 77, name: "المرسلات" },
    { number: 78, name: "النبأ" },
    { number: 79, name: "النازعات" },
    { number: 80, name: "عبس" },
    { number: 81, name: "التكوير" },
    { number: 82, name: "الإنفطار" },
    { number: 83, name: "المطففين" },
    { number: 84, name: "الإنشقاق" },
    { number: 85, name: "البروج" },
    { number: 86, name: "الطارق" },
    { number: 87, name: "الأعلى" },
    { number: 88, name: "الغاشية" },
    { number: 89, name: "الفجر" },
    { number: 90, name: "البلد" },
    { number: 91, name: "الشمس" },
    { number: 92, name: "الليل" },
    { number: 93, name: "الضحى" },
    { number: 94, name: "الشرح" },
    { number: 95, name: "التين" },
    { number: 96, name: "العلق" },
    { number: 97, name: "القدر" },
    { number: 98, name: "البينة" },
    { number: 99, name: "الزلزلة" },
    { number: 100, name: "العاديات" },
    { number: 101, name: "القارعة" },
    { number: 102, name: "التكاثر" },
    { number: 103, name: "العصر" },
    { number: 104, name: "الهمزة" },
    { number: 105, name: "الفيل" },
    { number: 106, name: "قريش" },
    { number: 107, name: "الماعون" },
    { number: 108, name: "الكوثر" },
    { number: 109, name: "الكافرون" },
    { number: 110, name: "النصر" },
    { number: 111, name: "المسد" },
    { number: 112, name: "الإخلاص" },
    { number: 113, name: "الفلق" },
    { number: 114, name: "الناس" }
  ];
  
  // إدراج السور داخل الصفحة
  const surahContainer = document.getElementById("surah-container");
  
  surahs.forEach((surah) => {
    const surahElement = document.createElement("a");
    surahElement.href = `https://quran.com/${surah.number}`;
    surahElement.target = "_blank"; // فتح الرابط في نافذة جديدة
    surahElement.textContent = surah.name;
    surahContainer.appendChild(surahElement);
  });

  
  const hadiths = [
    "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.",
    "من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت.",
    "المسلم من سلم المسلمون من لسانه ويده.",
    "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
    "من غشنا فليس منا.",
    "الدين النصيحة.",
    "الكلمة الطيبة صدقة.",
    "من حسن إسلام المرء تركه ما لا يعنيه.",
    "البخيل من ذُكرتُ عنده ولم يُصلِّ عليَّ.",
    "من يسر على معسر يسر الله عليه في الدنيا والآخرة.",
    "من توضأ فأحسن الوضوء خرجت خطاياه من تحت أظفاره.",
    "طلب العلم فريضة على كل مسلم.",
    "إن الله يحب إذا عمل أحدكم عملًا أن يتقنه.",
    "من لا يرحم لا يُرحم.",
    "إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له.",
    "الدعاء هو العبادة.",
    "من قال سبحان الله وبحمده في يوم مئة مرة حُطَّت خطاياه وإن كانت مثل زبد البحر.",

  "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
  "من غشنا فليس منا.",
  "إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم.",
  "الحياء شعبة من الإيمان.",
  "أحب الأعمال إلى الله أدومها وإن قل.",
  "خيركم من تعلم القران وعلمه",
    
  ];
  
  let currentIndex = 0;
  
  function displayHadith(index) {
    const hadithElement = document.getElementById("hadith-content");
    hadithElement.textContent = hadiths[index];
  }
  
  function nextHadith() {
    if (currentIndex < hadiths.length - 1) {
      currentIndex++;
      displayHadith(currentIndex);
    }
  }
  
  function prevHadith() {
    if (currentIndex > 0) {
      currentIndex--;
      displayHadith(currentIndex);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayHadith(currentIndex);
  });
  

  // JavaScript لتفعيل التمرير عند النقر على الروابط في الشريط العلوي
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const azkarMorning = [
    "ايه الكرسي",
    "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.",
    "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك المصير.",
    "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
    "رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً.",
    "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
    "اللهم إني أسألك العافية في الدنيا والآخرة.",
    "اللهم صل وسلم على نبينا محمد.",
    "سبحان الله وبحمده.",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
    "اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي وشر الشيطان وشركه.",
    "اللهم إني أسألك من فضلك ورحمتك، فإنه لا يملكها إلا أنت.",
    "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت.",
    "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه.",
    "قراءة آية الكرسي: (الله لا إله إلا هو الحي القيوم...).",
    "قراءة سورة الإخلاص 3 مرات.",
    "قراءة سورة الفلق 3 مرات.",
    "قراءة سورة الناس 3 مرات."
];

const azkarEvening = [
    "ايه الكرسي",
    "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.",
    "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.",
    "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
    "رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً.",
    "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
    "اللهم إني أسألك العافية في الدنيا والآخرة.",
    "اللهم صل وسلم على نبينا محمد.",
    "سبحان الله وبحمده.",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
    "اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي وشر الشيطان وشركه.",
    "اللهم إني أسألك من فضلك ورحمتك، فإنه لا يملكها إلا أنت.",
    "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت.",
    "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه.",
    "قراءة آية الكرسي: (الله لا إله إلا هو الحي القيوم...).",
    "قراءة سورة الإخلاص 3 مرات.",
    "قراءة سورة الفلق 3 مرات.",
    "قراءة سورة الناس 3 مرات."
];


let morningIndex = 0;
let eveningIndex = 0;

function displayAzkar(type) {
    const azkarContent = document.getElementById(`${type}-content`);
    const azkarList = type === "morning" ? azkarMorning : azkarEvening;
    azkarContent.textContent = azkarList[type === "morning" ? morningIndex : eveningIndex];
}

function nextAzkar(type) {
    if (type === "morning") {
        if (morningIndex < azkarMorning.length - 1) {
            morningIndex++;
            displayAzkar("morning");
        }
    } else {
        if (eveningIndex < azkarEvening.length - 1) {
            eveningIndex++;
            displayAzkar("evening");
        }
    }
}

function prevAzkar(type) {
    if (type === "morning") {
        if (morningIndex > 0) {
            morningIndex--;
            displayAzkar("morning");
        }
    } else {
        if (eveningIndex > 0) {
            eveningIndex--;
            displayAzkar("evening");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayAzkar("morning");
    displayAzkar("evening");
});

  



// لطلب مواقيت الصلاة من API لمدينة معينة (مثلاً القاهرة)
fetch('http://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8')
  .then(response => response.json())
  .then(data => {
    // تحديد توقيت الصلوات
    document.getElementById('fajr-time').textContent = data.data.timings.Fajr;
    document.getElementById('dhuhr-time').textContent = data.data.timings.Dhuhr;
    document.getElementById('asr-time').textContent = data.data.timings.Asr;
    document.getElementById('maghrib-time').textContent = data.data.timings.Maghrib;
    document.getElementById('isha-time').textContent = data.data.timings.Isha;
  })
  .catch(error => console.error('Error fetching prayer times:', error));
