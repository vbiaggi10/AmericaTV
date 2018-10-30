const database = firebase.database();

window.handleLogin = (email, password) => {
  database.ref('/agency').once('value').then(snapshot => {    
    if(snapshot.val().email=== email && snapshot.val().password === parseInt(password))
      window.location.href = 'src/calendar.html'
    else
      alert("Correo electrónico o contraseña invalida");      
  });
}

window.handleGetDataCalendar = () => {
  database.ref('/prueba').once('value').then(snapshot => {
    Object.values(snapshot.val()).forEach(element => {
      console.log(element.time.Lunes);
      if(element.time.Lunes){}
    });
    
  });
}


