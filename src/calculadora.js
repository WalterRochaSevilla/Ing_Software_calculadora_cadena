function calcular(a) {
  if (a.trim() === ""){
    return 0;
  }
  else {
    let delimitador = /,|-/;
    let numerosStr = a;

    const delimitadorPersonalizado = a.match(/^\/\/(\[.+?\])+\s/);
    if (delimitadorPersonalizado) {
      const delimitadores = [...a.matchAll(/\[(.+?)\]/g)].map(match => match[1]);

      const delimitadoresEscapados = delimitadores.map(delim => delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      delimitador = new RegExp(`${delimitadoresEscapados.join('|')}|,|-`); 
      numerosStr = a.slice(delimitadorPersonalizado[0].length); 
    }

   const numeros = numerosStr
      .split(delimitador)
      .map(Number)
      .filter(num => num <= 1000); 

    return numeros.reduce((acc, num) => acc + num, 0);
  }
}

export default calcular;
