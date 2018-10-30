const getTbody = document.querySelector('#tbody');
const arrayDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const handleGetDataCalendar = () => {
  database.ref('/calendar').once('value').then((snapshot) => {
    Object.values(snapshot.val()).forEach((element, i) => {
      const data = `
        <tr>
          <th scope="row">${(i < 10 ? ('0' + i) : i)}:00</th>
          ${arrayDay.map(day => {
          return (`<td><a href="#" id="${i + "-" + day + "-" + element[day].name + "-" + element[day].price}" data-name="${element[day].name}" data-price="${element[day].price}">${element[day].name}</a></td>`)
        })}
        </tr>
      `;
      getTbody.innerHTML += data;

      arrayDay.map(day => {
        document.getElementById(`${i + "-" + day + "-" + element[day].name + "-" + element[day].price}`).addEventListener( e => {
          console.log("hola");

        })
      })
    });

  });
}

handleGetDataCalendar()