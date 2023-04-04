/**
 * Dada las revoluciones por minuto de un auto en un juego de carreras,
 * indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:
        *Si las RPM son menores a 1000 debe bajar
        *Si las RPM están entre 1000 y 3000 debe mantener
        *Si las RPM son más de 3000 debe subir
 */

  let revoluciones_por_minutos =parseInt(prompt('Ingrese Revoluciones por Minutos (RPM)')); 
  if(! isNaN(revoluciones_por_minutos) && revoluciones_por_minutos > 0){
    if(revoluciones_por_minutos < 1000){
        alert("debe BAJAR los cambios"); 
    } else if(revoluciones_por_minutos >3000){
       alert("debe SUBIR los cambios"); 
    }else {
       alert("debe MANTENERLOS los cambios"); 
    }
  }else{
    alert('Ingrese una RPM valida'); 
  }