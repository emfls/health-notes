'use strict';
const normalize=s=>String(s).normalize('NFKC').toLowerCase().replace(/\s/g,'');
function match(t,q,c,country=""){return (!country||t.country===country)&&(!c||t.category===c)&&normalize(t.title+' '+t.summary+' '+t.publisher).includes(normalize(q));}
if(typeof module!=='undefined')module.exports={match};
if(typeof document!=='undefined'){const $=id=>document.getElementById(id);function render(){let n=0;for(const t of TOPICS){const visible=match(t,$('q').value,$('category').value,$('country').value);document.querySelector(`[data-id="${t.id}"]`).hidden=!visible;n+=visible;}$('count').textContent=`${n}개 주제`;$('empty').hidden=n!==0;}for(const id of ['q','category','country'])$(id).addEventListener('input',render);$('filters').addEventListener('submit',e=>e.preventDefault());$('filters').addEventListener('reset',()=>setTimeout(render));render();}
