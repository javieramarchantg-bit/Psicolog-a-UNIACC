const contenedor = document.getElementById("malla");
const selector = document.getElementById("fuente");

let aprobados = [];

const semestres = {};
ramos.forEach(r=>{
 if(!semestres[r.semestre]) semestres[r.semestre]=[];
 semestres[r.semestre].push(r);
});

function puedeTomar(r){

  if(r.requiereTodo){
    return ramos
      .filter(x => x.nombre !== r.nombre)
      .every(x => aprobados.includes(x.nombre));
  }

  if(r.requisitos){
    return r.requisitos.every(req => aprobados.includes(req));
  }

  return true;
}

function render(){
 contenedor.innerHTML="";

 Object.keys(semestres).sort((a,b)=>a-b).forEach(num=>{

  const col=document.createElement("div");
  col.className="semestre";
  col.dataset.sem=num;

  const h=document.createElement("h2");
  h.textContent="Semestre "+num;
  col.appendChild(h);

  semestres[num].forEach(r=>{

   const d=document.createElement("div");
   d.className="ramo";
   d.textContent=r.nombre;

   const ok=aprobados.includes(r.nombre);
   const disp=puedeTomar(r);

   if(ok) d.classList.add("aprobado");
   else if(!disp) d.classList.add("bloqueado");

   d.onclick=()=>{
    if(!disp && !ok) return;

    if(ok) aprobados=aprobados.filter(x=>x!==r.nombre);
    else aprobados.push(r.nombre);

    render();
   };

   col.appendChild(d);
  });

  contenedor.appendChild(col);
 });
}

selector.onchange=()=>{
 document.body.className="";
 document.body.classList.add("font-"+selector.value);
};

render();
