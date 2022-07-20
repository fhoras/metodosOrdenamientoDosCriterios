import "./styles.css";

let cant = document.getElementById("cantidad");

function AzarNumeros(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cargar_numeros_vector(max: number): number[] {
  let numeros: number[] = [];
  for (let i = 0; i < max; i++) {
    numeros[i] = AzarNumeros(10, -10);
  }
  console.log(numeros);
  return numeros;
}

function seleccion(vector_numeros: number[]) {
  var n, i, k, aux;
  n = vector_numeros.length;
  console.log("Vector desordenado " + vector_numeros);
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (vector_numeros[i] > vector_numeros[i + 1]) {
        aux = vector_numeros[i];
        vector_numeros[i] = vector_numeros[i + 1];
        vector_numeros[i + 1] = aux;
      }
    }
  }
  console.log("Vector ordenado método burbuja " + vector_numeros); // Mostramos, por consola, la lista ya ordenada
}

btnDatos1.addEventListener("click", () => {
  let cantidad: number = cant.value;
  let vector_numeros: number[];
  vector_numeros = cargar_numeros_vector(cantidad);
  console.log("Resultados");
  seleccion(vector_numeros);
});
