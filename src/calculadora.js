function extraerDelimitadorYNumeros(cadenaEntrada) {
  const delimitadorPorDefecto = /,|-/;

  const delimitadorPersonalizado = cadenaEntrada.match(/^\/\/(\[.+?\])+\s/);
  if (!delimitadorPersonalizado) {
    return { delimitador: delimitadorPorDefecto, cadenaNumeros: cadenaEntrada };
  }

  const delimitadores = [...cadenaEntrada.matchAll(/\[(.+?)\]/g)].map(match => match[1]);
  const delimitadoresEscapados = delimitadores.map(delim => delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const delimitador = new RegExp(`${delimitadoresEscapados.join('|')}|,|-`);
  const cadenaNumeros = cadenaEntrada.slice(delimitadorPersonalizado[0].length);

  return { delimitador, cadenaNumeros };
}

function esCadenaVacia(cadenaEntrada) {
  return cadenaEntrada.trim() === "";
}

function excluirNumerosMayoresA1000(numeros) {
  return numeros.filter(num => num <= 1000);
}

function calcular(cadenaEntrada) {
  if (esCadenaVacia(cadenaEntrada)) {
    return 0;
  }

  const { delimitador, cadenaNumeros } = extraerDelimitadorYNumeros(cadenaEntrada);

  const numeros = cadenaNumeros
    .split(delimitador)
    .map(Number);

  const numerosValidos = excluirNumerosMayoresA1000(numeros);

  return numerosValidos.reduce((acc, num) => acc + num, 0);
}

export default calcular;
