function obtenerDelimitador(inputString) {
  const delimitadorPorDefecto = /,|-/;

  const delimitadorPersonalizado = inputString.match(/^\/\/(\[.+?\])+\s/);
  if (!delimitadorPersonalizado) {
    return { delimitador: delimitadorPorDefecto, numerosCadena: inputString };
  }

  const delimitadores = [...inputString.matchAll(/\[(.+?)\]/g)].map(match => match[1]);
  const delimitadoresEscapados = delimitadores.map(delim => delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const delimitador = new RegExp(`${delimitadoresEscapados.join('|')}|,|-`);
  const numerosCadena = inputString.slice(delimitadorPersonalizado[0].length);

  return { delimitador, numerosCadena };
}

function calcular(inputString) {
  if (inputString.trim() === "") {
    return 0;
  }

  const { delimitador, numerosCadena } = obtenerDelimitador(inputString);

  const numeros = numerosCadena
    .split(delimitador)
    .map(Number)
    .filter(num => num <= 1000);

  return numeros.reduce((acc, num) => acc + num, 0);
}

export default calcular;
