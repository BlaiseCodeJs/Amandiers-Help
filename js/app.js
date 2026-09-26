const examens = [
  {titre:"Anglais — 3e trimestre (Democracy)", classe:"3e", matiere:"Anglais", fichier:"epreuves/09_Anglais_3e_trimestre_Democracy.pdf"},
  {titre:"Anglais — 2e trimestre", classe:"3e", matiere:"Anglais", fichier:"epreuves/10_Anglais_2e_trimestre_Ekpessosso.pdf"},
  {titre:"Anglais — Compréhension écrite", classe:"3e", matiere:"Anglais", fichier:"epreuves/11_Anglais_page_isolee_Internet.pdf"},
  {titre:"Français — 3e trimestre", classe:"3e", matiere:"Francais", fichier:"epreuves/07_Francais_3e_trimestre_Johnny.pdf"},
  {titre:"Mathématiques — 3e trimestre", classe:"3e", matiere:"Mathematiques", fichier:"epreuves/02_Maths_3e_trimestre.pdf"},
  {titre:"Mathématiques — 2e trimestre (mars 2026)", classe:"3e", matiere:"Mathematiques", fichier:"epreuves/03_Maths_2e_trimestre_mars2026.pdf"},
  {titre:"Mathématiques — DRE Centrale (2024-2025)", classe:"3e", matiere:"Mathematiques", fichier:"epreuves/04_Maths_DRE_Centrale_2024-2025.pdf"},
  {titre:"BEPC Blanc 2026 — Mathématiques (DRE Maritime)", classe:"3e", matiere:"Mathematiques", fichier:"epreuves/BEPC_Blanc_2026_Mathematiques_DRE_Maritime.pdf"},
  {titre:"Français — CPL Les Amandiers (Ken Bugul)", classe:"4e", matiere:"Francais", fichier:"epreuves/08_Francais_4e_CPL_Amandiers_Ken_Bugul.pdf"}
];

const cards=document.getElementById("cards"), empty=document.getElementById("empty");
const search=document.getElementById("searchInput"), cf=document.getElementById("classFilter"), sf=document.getElementById("subjectFilter");

function labelSubject(s){return ({Francais:"Français",Mathematiques:"Mathématiques",Anglais:"Anglais",Sciences:"Sciences"})[s]||s}
function render(){
  const q=search.value.toLowerCase().trim(), c=cf.value, s=sf.value;
  const list=examens.filter(e=>(!q||`${e.titre} ${e.classe} ${e.matiere}`.toLowerCase().includes(q))&&(c==="all"||e.classe===c)&&(s==="all"||e.matiere===s));
  cards.innerHTML=list.map(e=>`<article class="card">
    <div class="file-top"><div class="pdf">PDF</div><span class="class-tag">${e.classe}</span></div>
    <h3>${e.titre}</h3><div class="meta">${labelSubject(e.matiere)}</div>
    <a class="download" href="${e.fichier}" download>Télécharger ↓</a>
  </article>`).join("");
  empty.classList.toggle("hidden",list.length!==0);
  document.getElementById("resultCount").textContent=`${list.length} épreuve${list.length>1?"s":""}`;
}
[search,cf,sf].forEach(x=>x.addEventListener("input",render));
document.getElementById("heroCount").textContent=examens.length;

const themeBtn=document.getElementById("themeBtn");
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark");themeBtn.textContent="☀️"}
themeBtn.onclick=()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");localStorage.setItem("theme",dark?"dark":"light");themeBtn.textContent=dark?"☀️":"🌙"};

render();

