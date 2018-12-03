imanes();

/*document.querySelector('#Fimanes').addEventListener("submit", evt =>{
    fetch('/',{
        method: 'POST'
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
})*/

function imanes(){
    let llenado = document.querySelector('#llenar');
    let content = "";

    fetch('/users/imanes')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    data.imanes.forEach(element => {
        content = content + `<tr>
        <th scope="col">${element._id}</th>
        <td>${element.c1}</td>
        <td>${element.c2}</td>
        <td>${element.c3}</td>
        <td>
          <a href="/users/delete" class="eliminar"><i class="fas fa-trash-alt ml-2 mr-4"></i></a>
          <a href="/users/actualizar" class="actualizar"><i class="fas fa-pencil-alt"></i></a>
        </td>
      </tr>`
    });
    llenado.innerHTML = content;
    });
    /*let btn_eliminar = document.querySelector('.eliminar');
    btn_eliminar.addEventListener('click', function(evt){
        fetch('/')
    })
*/

}