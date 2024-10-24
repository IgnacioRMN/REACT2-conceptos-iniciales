// proyecto de aplicacion de conceptos vistos en clases. Comisión REACT2.

document.write(`<p style="color: blue; font-size: 24px; text-decoration: underline;">
     Estadísticas de satisfacción con los clientes<br>
  </p>`);


const arraysNotas = [
    8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
  ];
  
  //
  let sumarArrays = 0;
  for (let i = 0; i < arraysNotas.length; i++) {
    sumarArrays += arraysNotas[i];
  }
  const promedio = sumarArrays / arraysNotas.length;
  document.write(`<p style="color: green; font-size: 24px;">
      El promedio de satisfacción es: ${promedio.toFixed(2)}<br>
    </p>`);
  
  //
  let clientesSatisfechos = 0;
  for (let i = 0; i < arraysNotas.length; i++) {
    if (arraysNotas[i] >= 7) {
      clientesSatisfechos++;
    }
  }
  document.write(`<p style="color: green; font-size: 24px;">
      El número de clientes satisfechos es: ${clientesSatisfechos}<br>
    </p>`);
  
  //
  let clientesInsatisfechos = 0;
  for (let i = 0; i < arraysNotas.length; i++) {
    if (arraysNotas[i] <= 4) {
      clientesInsatisfechos++;
    }
  }
  document.write(`<p style="color: green; font-size: 24px;">
      El número de clientes insatisfechos es: ${clientesInsatisfechos}<br>
    </p>`);
  
  //
  const totalClientes = arraysNotas.length;
  const porcentajeSatisfechos = (clientesSatisfechos / totalClientes) * 100;
  const porcentajeInsatisfechos = (clientesInsatisfechos / totalClientes) * 100;
  
  document.write(`<p style="color: green; font-size: 24px;">
      El porcentaje de clientes satisfechos es: ${porcentajeSatisfechos.toFixed(
        2
      )}%<br>
    </p>`);
  document.write(`<p style="color: green; font-size: 24px;">
      El porcentaje de clientes insatisfechos es: ${porcentajeInsatisfechos.toFixed(
        2
      )}%<br>
    </p>`);
  
  //
  const conteoCalificaciones = {};
  for (let i = 0; i < arraysNotas.length; i++) {
    const calificacion = arraysNotas[i];
    if (conteoCalificaciones[calificacion]) {
      conteoCalificaciones[calificacion]++;
    } else {
      conteoCalificaciones[calificacion] = 1;
    }
  }
  
  let moda = null;
  let maxRepeticiones = 0;
  for (const calificacion in conteoCalificaciones) {
    if (conteoCalificaciones[calificacion] > maxRepeticiones) {
      maxRepeticiones = conteoCalificaciones[calificacion];
      moda = calificacion;
    }
  }
  
  document.write(`<p style="color: green; font-size: 24px;">
      La calificación que se repitió más veces (moda) es: ${moda} (repetido ${maxRepeticiones} veces)<br>
    </p>`);
  