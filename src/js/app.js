const database = firebase.database();

window.handleLogin = (email, password) => {
  firebase.database().ref('/agency').once('value').then(snapshot => {
    console.log(email);
    console.log(parseInt(password));
    console.log(snapshot.val().email);
    console.log(snapshot.val().password);
    
    if(snapshot.val().email=== email && snapshot.val().password === parseInt(password))
      console.log("ingresaste");
    else
      console.log("no ingresaste");      
  });
}


