// function post(){
// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Bearer d1f78cd95096c17b2a71d77ed9b4e09e7869b39ae75324bfe95f907a37a39707");

// var raw = JSON.stringify({
//   "name": "Tenali Ramakrishna",
//   "gender": "male",
//   "email": "terenaam@salmanKhan.com",
//   "status": "active"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://gorest.co.in/public/v2/users", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }



// Update a data

// update();
// function update(){
//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", "Bearer d1f78cd95096c17b2a71d77ed9b4e09e7869b39ae75324bfe95f907a37a39707");
  
//   var raw = JSON.stringify({
//     "id": 1005251,
//     "name": "Kanaka Reddy",
//     "email": "kan@reddyy.com",
//     "gender": "female",
//     "status": "active"
//   });
  
//   var requestOptions = {
//     method: 'PATCH',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
  
//   fetch("https://gorest.co.in/public/v2/users/1005251", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

//Delete a Data

// remove();
// function remove(){
//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", "Bearer d1f78cd95096c17b2a71d77ed9b4e09e7869b39ae75324bfe95f907a37a39707");
  
//   var requestOptions = {
//     method: 'DELETE',
//     headers: myHeaders,
//     redirect: 'follow'
//   };
  
//   fetch("https://gorest.co.in/public/v2/users/1004702", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }


// get()
// function get(){
//   var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Bearer d1f78cd95096c17b2a71d77ed9b4e09e7869b39ae75324bfe95f907a37a39707");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://gorest.co.in/public/v2/users", requestOptions)
//   .then(response => response.json())
//   .then(result => {show(result)})
//   .catch(error => console.log('error', error));
// }

function show(data){
  for (const i in data) {
    document.querySelector("table").innerHTML += `
  
    <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      <td>${data[i].gender}</td>
      <td>${data[i].status}</td>
    </tr>`
}
}


async function get(link){
  let obj = await fetch(link);
  let data = await obj.text()

  localStorage.setItem("data",data);
  let output = localStorage.getItem("data");
  output = JSON.parse(output)
  console.log(show(output))
  console.log(output)
}


get("./details.json");  