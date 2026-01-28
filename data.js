const ramos = [

/* SEMESTRE 1 */
{ nombre:"Bases biológicas del comportamiento", semestre:1 },
{ nombre:"Epistemología", semestre:1 },
{ nombre:"Introducción a la psicología", semestre:1 },
{ nombre:"Metodología de la investigación", semestre:1 },
{ nombre:"Procesos psicológicos básicos", semestre:1 },
{ nombre:"Taller de aprendizaje", semestre:1 },
{ nombre:"Taller de habilidades comunicacionales y relacionales", semestre:1 },

/* SEMESTRE 2 */
{ nombre:"Elementos de neurociencia", semestre:2, requisitos:["Bases biológicas del comportamiento"] },
{ nombre:"Metodología cuantitativa de investigación", semestre:2, requisitos:["Metodología de la investigación"] },
{ nombre:"Psicología del aprendizaje", semestre:2, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Psicología social", semestre:2 },
{ nombre:"Teoría de la personalidad", semestre:2, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Taller de vida universitaria", semestre:2 },

/* SEMESTRE 3 */
{ nombre:"Análisis de datos cuantitativos", semestre:3, requisitos:["Metodología cuantitativa de investigación"] },
{ nombre:"Ciclo vital I - infancia", semestre:3, requisitos:["Introducción a la psicología"] },
{ nombre:"Problemas psicosociales", semestre:3, requisitos:["Psicología social"] },
{ nombre:"Psicobiología", semestre:3, requisitos:["Elementos de neurociencia"] },
{ nombre:"Teorías psicoanalíticas", semestre:3, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Formación general I", semestre:3 },

/* SEMESTRE 4 */
{ nombre:"Ciclo vital II - adolescencia", semestre:4, requisitos:["Ciclo vital I - infancia"] },
{ nombre:"Metodología cualitativa de investigación", semestre:4, requisitos:["Metodología de la investigación"] },
{ nombre:"Sexualidad humana", semestre:4 },
{ nombre:"Teorías cognitivas", semestre:4, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Teorías sistémicas", semestre:4, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Formación general II", semestre:4 },

/* SEMESTRE 5 */
{ nombre:"Análisis de datos cualitativos", semestre:5, requisitos:["Metodología cualitativa de investigación"] },
{ nombre:"Ciclo vital III - adultez", semestre:5, requisitos:["Ciclo vital II - adolescencia"] },
{ nombre:"Psicología social-comunitaria", semestre:5, requisitos:["Psicología social"] },
{ nombre:"Psicopatología infantil y de la adolescencia", semestre:5, requisitos:["Ciclo vital II - adolescencia"] },
{ nombre:"Teorías humanistas", semestre:5, requisitos:["Procesos psicológicos básicos"] },
{ nombre:"Formación general III", semestre:5 },

/* SEMESTRE 6 */
{ nombre:"Evaluación psicológica infanto-juvenil", semestre:6, requisitos:["Psicopatología infantil y de la adolescencia"] },
{ nombre:"Intervención social comunitaria", semestre:6, requisitos:["Psicología social"] },
{ nombre:"Psicología educacional", semestre:6, requisitos:["Metodología cuantitativa de investigación","Metodología cualitativa de investigación"] },
{ nombre:"Psicología organizacional", semestre:6, requisitos:["Metodología cuantitativa de investigación","Metodología cualitativa de investigación"] },
{ nombre:"Psicopatología adultos", semestre:6, requisitos:["Ciclo vital III - adultez"] },
{ nombre:"Formación general IV", semestre:6 },

/* SEMESTRE 7 */
{ nombre:"Desarrollo organizacional", semestre:7, requisitos:["Psicología organizacional"] },
{ nombre:"Ética para psicólogos", semestre:7 },
{ nombre:"Evaluación psicológica adultos", semestre:7, requisitos:["Psicopatología adultos"] },
{ nombre:"Intervención clínica infanto juvenil", semestre:7, requisitos:["Evaluación psicológica infanto-juvenil"] },
{ nombre:"Intervenciones psicoeducativas y preventivas en salud mental", semestre:7, requisitos:["Psicopatología infantil y de la adolescencia","Psicopatología adultos"] },
{ nombre:"Formación general V", semestre:7 },

/* SEMESTRE 8 */
{ nombre:"Intervención clínica adultos", semestre:8, requisitos:["Evaluación psicológica adultos"] },
{ nombre:"Intervención educacional", semestre:8, requisitos:["Psicología educacional"] },
{ nombre:"Intervención organizacional", semestre:8, requisitos:["Desarrollo organizacional"] },
{ nombre:"Intervenciones psicológicas a distancia", semestre:8, requisitos:["Ética para psicólogos"] },
{ nombre:"Psicología y políticas públicas", semestre:8, requisitos:["Ética para psicólogos"] },
{ nombre:"Formación general VI", semestre:8 },

/* SEMESTRE 9 */
{ 
  nombre:"Seminario de título y ética profesional", 
  semestre:9, 
  requisitos: ramos.filter(r => r.semestre <= 8).map(r => r.nombre)
},

{ 
  nombre:"Taller de integración profesional I", 
  semestre:9, 
  requisitos: ramos.filter(r => r.semestre <= 8).map(r => r.nombre)
},


/* SEMESTRE 10 */
{ 
  nombre:"Taller de integración profesional II", 
  semestre:10, 
  requisitos:["Taller de integración profesional I"]
},

{ 
  nombre:"Taller de titulación", 
  semestre:10, 
  requisitos: ramos.map(r => r.nombre)
}
