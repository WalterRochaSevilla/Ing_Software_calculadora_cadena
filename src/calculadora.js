function calcular(inputString) {
  if (inputString.trim() === "") {
    return 0;
  } else {
    let delimitador = /,|-/;
    let numerosCadena = inputString;

    const delimitadorPersonalizado = inputString.match(/^\/\/(\[.+?\])+\s/);
    if (delimitadorPersonalizado) {
      const delimitadores = [...inputString.matchAll(/\[(.+?)\]/g)].map(match => match[1]);

      const delimitadoresEscapados = delimitadores.map(delim => delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      delimitador = new RegExp(`${delimitadoresEscapados.join('|')}|,|-`);
      numerosCadena = inputString.slice(delimitadorPersonalizado[0].length);
    }

    const numeros = numerosCadena
      .split(delimitador)
      .map(Number)
      .filter(num => num <= 1000);

    return numeros.reduce((acc, num) => acc + num, 0);
  }
}

export default calcular;