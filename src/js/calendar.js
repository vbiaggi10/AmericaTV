const getTbody = document.querySelector('#tbody');
const arrayDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const handleGetDataCalendar = () => {
  database.ref('/calendar').once('value').then((snapshot) => {
    Object.values(snapshot.val()).forEach((element, i) => {
      const tr1 = document.createElement('tr');
      const th1 = document.createElement('th');
      th1.setAttribute('scope', 'row');
      th1.textContent = `${(i < 10 ? ('0' + i) : i)}:00`;
      tr1.appendChild(th1);
      arrayDay.map(day => {
        const td1 = document.createElement('td');
        const ancla = document.createElement('a')
        ancla.setAttribute('href','#')
        ancla.setAttribute('id', `${i + "-" + day + "-" + element[day].name + "-" + element[day].price}`)
        ancla.textContent = element[day].name;
        td1.appendChild(ancla);
        return (tr1.appendChild(td1))
      })
      getTbody.appendChild(tr1);
      arrayDay.map(day => {
        document.getElementById(`${i + "-" + day + "-" + element[day].name + "-" + element[day].price}`).addEventListener('click', e => {
          console.log(e.target.id);
          window.location.href = 'form.html';
          handleGetData()
        })
      })
    });

  });
}

handleGetDataCalendar()


// / const data = `
//       //   <tr>
//       //     <th scope="row">${(i < 10 ? ('0' + i) : i)}:00</th>
//       //     ${arrayDay.map(day => {
      //     return (`<td><a href="#" id="${i + "-" + day + "-" + element[day].name + "-" + element[day].price}" data-name="${element[day].name}" data-price="${element[day].price}">${element[day].name}</a></td>`)
      //   })}
      //   </tr>
      // `;
      // getTbody.innerHTML += data;

      // arrayDay.map(day => {
      //   document.getElementById(`${i + "-" + day + "-" + element[day].name + "-" + element[day].price}`).addEventListener( e => {
      //     console.log("hola");

      //   })
      // })