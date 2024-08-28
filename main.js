//Crear una matriz mxm donde: entrada(m) -> talla
//Calcular tiempo de ejecucion

console.time("time");
function createMatrix(m) {
    let matrix = [];
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < m; j++) {
            matrix[i][j] = Math.floor(Math.random()*100);
        }
    }
    return matrix;
}

let m = prompt("Ingrse el valor del arreglo: ");
let matrix = createMatrix(m);
console.table(matrix);
console.timeEnd("time");
