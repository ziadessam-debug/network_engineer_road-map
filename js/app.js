
document.addEventListener('DOMContentLoaded',()=>{
 const page=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});
 const checks=[...document.querySelectorAll('.task-check')];
 if(!checks.length)return;
 const key='roadmap-'+page;
 let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
 checks.forEach((c,i)=>{c.checked=!!saved[i];c.addEventListener('change',save)});
 function save(){const obj={};checks.forEach((c,i)=>obj[i]=c.checked);localStorage.setItem(key,JSON.stringify(obj));update()}
 function update(){const n=checks.filter(c=>c.checked).length;const p=Math.round(n/checks.length*100);document.querySelector('.progress-bar').style.width=p+'%';document.querySelector('.progress-label').textContent=p+'% مكتمل ('+n+'/'+checks.length+')'}
 update();
});
