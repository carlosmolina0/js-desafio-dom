class Personas {
    constructor(id, nombre, puesto, edad, antiguedad) {
        this.id = id
        this.nombre = nombre
        this.puesto = puesto
        this.edad = edad
        this. antiguedad = antiguedad
    }
}

const persona1 = new Personas(1, "Raúl de Pablos", "CEO", 48, 23)
const persona2 = new Personas(2, "Carlos Molina", "VP Sales", 45, 21)
const persona3 = new Personas(3, "Pablo Fiestas", "VP Operaciones", 40, 12)
const persona4 = new Personas(4, "Fiorella Adamo", "Marketing Manager", 29, 2)
const persona5 = new Personas(5, "Sofia Yonico", "Sales Manager", 32, 2)
const persona6 = new Personas(6, "Reka Barath", "Operations Manager", 35, 8)


const personas = [persona1, persona2, persona3, persona4, persona5]

const divPersonas = document.getElementById("personas")

personas.forEach(empleado => {
    divPersonas.innerHTML += `
    <div class="card personas" id="persona${empleado.id}" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${empleado.nombre}</h5>
        <p class="card-text">Puesto: ${empleado.puesto}</p>
        <p class="card-text">Edad: ${empleado.edad}</p>
        <p class="card-text">Antiguedad: ${empleado.antiguedad}</p>
        <a href="#" class="btn btn-primary">Ver Ficha</a>
    </div>
    </div>
    `
})