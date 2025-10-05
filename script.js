// Theme toggle with localStorage
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved==='light'){ setLight(); }

btn.addEventListener('click', ()=>{
  if(root.dataset.theme === 'light'){ setDark(); }
  else{ setLight(); }
});

function setLight(){
  root.dataset.theme = 'light';
  root.style.setProperty('--bg','#f7f8fb');
  root.style.setProperty('--surface','#ffffff');
  root.style.setProperty('--text','#0b0c0f');
  root.style.setProperty('--muted','#4b5566');
  root.style.setProperty('--card','rgba(0,0,0,0.03)');
  root.style.setProperty('--glass','rgba(255,255,255,0.7)');
  root.style.setProperty('--border','1px solid rgba(0,0,0,0.12)');
  document.body.classList.add('light');
  localStorage.setItem('theme','light');
  btn.textContent = '🌙';
}

function setDark(){
  root.dataset.theme = 'dark';
  root.style.removeProperty('--bg');
  root.style.removeProperty('--surface');
  root.style.removeProperty('--text');
  root.style.removeProperty('--muted');
  root.style.removeProperty('--card');
  root.style.removeProperty('--glass');
  root.style.removeProperty('--border');
  document.body.classList.remove('light');
  localStorage.setItem('theme','dark');
  btn.textContent = '🌞';
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:.15});
reveals.forEach(el=>io.observe(el));
