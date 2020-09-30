function API_getRequest(id) {
    axios.get('http://localhost:3000/listPlant/' + id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
 
// function API_getFilteredRequest(filter) {
//     axios.get('http://localhost:3000/item', {
//         params: {
//             filter: filter
//         }
//     })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//     });
// }
 
function API_getAllRequest() {
    axios.get('http://localhost:3000/listPlants')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
 
function API_postRequest(data) {
    axios.post('http://localhost:3000/createPlants', {
        data: data
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
 
function API_putRequest(id, data) {
    axios.put('http://localhost:3000/item/ ' + id, {
        data: data
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
 
function API_patchRequest(id, data) {
    axios.patch('http://localhost:3000/item/ ' + id, {
        data: data
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
 
 
function API_deleteRequest(id) {
    axios.delete('http://localhost:3000/item/' + id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}