class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation (Los niños de la posguerra)";
      rasgo = "Austeridad";
      alert(`Generación: ${generacion}    Rasgo caracteristico: ${rasgo} `);
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
      alert(`Generación: ${generacion}    Rasgo caracteristico: ${rasgo} `);
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
      alert(`Generación: ${generacion}    Rasgo caracteristico: ${rasgo} `);
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y";
      rasgo = "Frustración";
      alert(`Generación: ${generacion}    Rasgo caracteristico: ${rasgo} `);
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
      alert(`Generación: ${generacion}    Rasgo caracteristico: ${rasgo} `);
    } else {
      aler(
        "No se puede determinar la generacion de la persona, ingrese otro año de nacimiento."
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(` ${this.nombre} SI es mayor de edad.`);
    } else {
      alert(`${this.nombre} NO es mayor de edad.`);
    }
  }

  mostrarDatos() {
    let sectionMostrarDatos = document.querySelector("#sectionMostrarDatos");
    let main = document.querySelector("main");

    sectionMostrarDatos.innerHTML += `<aside class="text-center mt-5">
      <ul>
          <h2>Datos Cargados</h2>
          <li><b>Nombre: </b> ${persona.nombre}</li>
          <li><b>Edad: </b> ${persona.edad}</li>
          <li><b>DNI: </b>${persona.dni}</li>
          <li><b>Sexo: </b> ${persona.sexo}</li>
          <li><b>Peso(kg): </b>${persona.peso}</li>
          <li><b>Altura(cm): </b> ${persona.altura}</li>
          <li><b>Año de nacimiendo: </b>${persona.anioNacimiento}</li>
      </ul>
                  
      <button id="btnMostrar" type="button" onclick="persona.mostrarGeneracion()" class="btn btn-secondary m-1 col-12 col-md-6 col-lg-3">Mostrar Generacion </button>
      <button id="btnEsMayor" type="button" onclick="persona.esMayorDeEdad()" class="btn btn-secondary m-1 col-12 col-md-6 col-lg-3">¿Es Mayor de edad? </button>
  </aside>`;

    main.innerHTML += ` <footer class="container text-center my-5">
                               <div class="row">
                                   <a href="./index.html" class="btn btn-outline-secondary">Recargar Pagina</a>
                               </div>
                           </footer>`;
  }

  crearPersona() {
    let btnCrear = document.querySelector("#btnCrear");
    const nombre = document.querySelector("#nombre");
    const edad = document.querySelector("#edad");
    const dni = document.querySelector("#dni");
    const sexo = document.querySelector("#sexo");
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const anioNacimiento = document.querySelector("#anioNacimiento");

    btnCrear.innerHTML = "Datos Cargados!";
    btnCrear.disabled = true;

    persona = new Persona(
      nombre.value,
      edad.value,
      dni.value,
      sexo.value,
      peso.value,
      altura.value,
      anioNacimiento.value
    );
    console.log(persona);

    persona.mostrarDatos();

    return persona;
  }
}

let persona = new Persona();
