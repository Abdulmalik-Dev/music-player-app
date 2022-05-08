// Cash
let audio = document.getElementById("audio"),
  playBtn = document.querySelector("#play"),
  audioName = document.querySelector("#audio-name"),
  audiosCount = document.querySelector("#number"),
  // Audios Name And Source
  audiosArray = [
    {
      name: "الفاتحة",
      src: "001",
    },
    {
      name: "البقرة",
      src: "002",
    },
    {
      name: "ال عران",
      src: "003",
    },
    {
      name: "النساء",
      src: "004",
    },
    {
      name: "المائدة",
      src: "005",
    },
    {
      name: "الأنعام",
      src: "006",
    },
    {
      name: "الأعراف",
      src: "007",
    },
    {
      name: "الأنفال",
      src: "008",
    },
    {
      name: "التوبة",
      src: "009",
    },
    {
      name: "يونس",
      src: "010",
    },
    {
      name: "هود",
      src: "011",
    },
    {
      name: "يوسف",
      src: "012",
    },
    {
      name: "الرعد",
      src: "013",
    },
    {
      name: "إبراهيم",
      src: "014",
    },
    {
      name: "الحجر",
      src: "015",
    },
    {
      name: "النحل",
      src: "016",
    },
    {
      name: "الإسراء",
      src: "017",
    },
    {
      name: "الكهف",
      src: "018",
    },
    {
      name: "مريم",
      src: "019",
    },
    {
      name: "طه",
      src: "020",
    },
    {
      name: "الأنبياء",
      src: "021",
    },
    {
      name: "الحج",
      src: "022",
    },
    {
      name: "المؤمنون",
      src: "023",
    },
    {
      name: "النور",
      src: "024",
    },
    {
      name: "الفرقان",
      src: "025",
    },
    {
      name: "الشعراء",
      src: "026",
    },
    {
      name: "النمل",
      src: "027",
    },
    {
      name: "القصص",
      src: "028",
    },
    {
      name: "العنكبوت",
      src: "029",
    },
    {
      name: "الروم",
      src: "030",
    },
    {
      name: "لقمان",
      src: "031",
    },
    {
      name: "السجدة",
      src: "032",
    },
    {
      name: "الأحزاب",
      src: "033",
    },
    {
      name: "سبأ",
      src: "034",
    },
    {
      name: "فاطر",
      src: "035",
    },
    {
      name: "يس",
      src: "036",
    },
    {
      name: "الصافات",
      src: "037",
    },
    {
      name: "ص",
      src: "038",
    },
    {
      name: "الزمر",
      src: "039",
    },
    {
      name: "غافر",
      src: "040",
    },
    {
      name: "فصلت",
      src: "041",
    },
    {
      name: "الشورى",
      src: "042",
    },
    {
      name: "الزخرف",
      src: "043",
    },
    {
      name: "الدخان",
      src: "044",
    },
    {
      name: "الجاثية",
      src: "045",
    },
    {
      name: "الأحقاف",
      src: "046",
    },
    {
      name: "محمد",
      src: "047",
    },
    {
      name: "الفتح",
      src: "048",
    },
    {
      name: "الجحرات",
      src: "049",
    },
    {
      name: "ق",
      src: "050",
    },
    {
      name: "الذرايات",
      src: "051",
    },
    {
      name: "الطور",
      src: "052",
    },
    {
      name: "النجم",
      src: "053",
    },
    {
      name: "القمر",
      src: "054",
    },
    {
      name: "الرحمن",
      src: "055",
    },
    {
      name: "الواقعة",
      src: "056",
    },
    {
      name: "الحديد",
      src: "057",
    },
    {
      name: "المجادلة",
      src: "058",
    },
    {
      name: "الحشر",
      src: "059",
    },
    {
      name: "الممتحنة",
      src: "060",
    },
    {
      name: "الصف",
      src: "061",
    },
    {
      name: "الجمعة",
      src: "062",
    },
    {
      name: "المنافقون",
      src: "063",
    },
    {
      name: "التغابن",
      src: "064",
    },
    {
      name: "الطلاق",
      src: "065",
    },
    {
      name: "التحريم",
      src: "066",
    },
    {
      name: "الملك",
      src: "067",
    },
    {
      name: "القلم",
      src: "068",
    },
    {
      name: "الحاقة",
      src: "069",
    },
    {
      name: "المعارج",
      src: "070",
    },
    {
      name: "نوح",
      src: "071",
    },
    {
      name: "الجن",
      src: "072",
    },
    {
      name: "المزمل",
      src: "073",
    },
    {
      name: "المدثر",
      src: "074",
    },
    {
      name: "القيامة",
      src: "075",
    },
    {
      name: "الإنسان",
      src: "076",
    },
    {
      name: "المرسلات",
      src: "077",
    },
    {
      name: "النبأ",
      src: "078",
    },
    {
      name: "النازعات",
      src: "079",
    },
    {
      name: "عبس",
      src: "080",
    },
    {
      name: "التكوير",
      src: "081",
    },
    {
      name: "الإنفطار",
      src: "082",
    },
    {
      name: "المطففين",
      src: "083",
    },
    {
      name: "الإنشقاق",
      src: "084",
    },
    {
      name: "البروج",
      src: "085",
    },
    {
      name: "الطارق",
      src: "086",
    },
    {
      name: "الأعلى",
      src: "087",
    },
    {
      name: "الغاشية",
      src: "088",
    },
    {
      name: "الفجر",
      src: "089",
    },
    {
      name: "البلد",
      src: "090",
    },
    {
      name: "الشمس",
      src: "091",
    },
    {
      name: "الليل",
      src: "092",
    },
    {
      name: "الضحى",
      src: "093",
    },
    {
      name: "الشرح",
      src: "094",
    },
    {
      name: "التين",
      src: "095",
    },
    {
      name: "العلق",
      src: "096",
    },
    {
      name: "القدر",
      src: "097",
    },
    {
      name: "البينة",
      src: "098",
    },
    {
      name: "الزلزلة",
      src: "099",
    },
    {
      name: "العاديات",
      src: "100",
    },
    {
      name: "القارعة",
      src: "101",
    },
    {
      name: "التكاثر",
      src: "102",
    },
    {
      name: "العصر",
      src: "103",
    },
    {
      name: "الهمزة",
      src: "104",
    },
    {
      name: "الفيل",
      src: "105",
    },
    {
      name: "قريش",
      src: "106",
    },
    {
      name: "الماعون",
      src: "107",
    },
    {
      name: "الكوثر",
      src: "108",
    },
    {
      name: "الكافرون",
      src: "109",
    },
    {
      name: "النصر",
      src: "110",
    },
    {
      name: "المسد",
      src: "111",
    },
    {
      name: "الإخلاص",
      src: "112",
    },
    {
      name: "الفلق",
      src: "113",
    },
    {
      name: "الناس",
      src: "114",
    },
  ];

// Set The Defualt Text For The Audio Count And Audio Name
audioName.innerHTML = `السورة: ${audiosArray[0].name}`;
audiosCount.innerHTML = `1 من ${audiosArray.length}`;

playBtn.addEventListener("click", (e) => {
  /* Check If The Audio Play Incon Exitnig
      Remove The Play Icon 
      Add Pause Icon 
      Play The Audio
    Else 
      Remove The Pause Icon
      Add The Play Icon
      Pause The Audio
      */
  if (e.target.classList.contains("fa-play")) {
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audio.play();
  } else {
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    audio.pause();
  }
});

document.getElementById("backward").addEventListener("click", () => {
  audioAciton("previus");
});
document.getElementById("forward").addEventListener("click", () => {
  audioAciton("next");
});

// Audio Source Count
let i = 0;
function audioAciton(action) {
  /* Check If The Action Equal To Nex 
    Check If The Audio Source Count Equal To The Last Source 
      Make The Audio Source Count Equal To 0 To Restart The Audios 
    Else 
      Increase The Audio Source Count 
  Else  
    Check If The Audio Source Count Equal To 0
      Make The Audio Source Count Equal To 0 To Make The User Connot To Return More
    Else
      Dicreace The Audio Source Count */
  if (action === "next") {
    if (i === audiosArray.length - 1) i = 0;
    else ++i;
  } else {
    if (i === 0) i = 0;
    else --i;
  }

  // Set The Audio
  audio.src = `audios/${audiosArray[i].src}.mp3`;
  // Set The Audio Name
  audioName.innerHTML = `السورة: ${audiosArray[i].name}`;
  // Set The Audio Count
  audiosCount.innerHTML = `${i + 1} من ${audiosArray.length}`;
  // Play The Audio
  audio.play();
  // Remove play Icon
  playBtn.classList.remove("fa-play");
  // Add pause Icon
  playBtn.classList.add("fa-pause");
}
