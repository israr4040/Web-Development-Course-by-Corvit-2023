axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    var row = document.getElementById("row");
    var data = "";
    response.data.forEach(element => {
        data += '<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
            '<div class="card bg-secondary bg-gradient text-white";">' +
            '<h4 class="p-2 text-center"> User Data</h4>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + '<b>ID:</b>' + ' ' + element.id + '</li>' +
            ' <li class="list-group-item">' + '<b>Name:</b>' + ' ' + element.name + '</li>' +
            ' <li class="list-group-item">' + '<b>User Name:</b>' + ' ' + element.username + '</li>' +
            '<li class="list-group-item">' + '<b>email:</b>' + ' ' + element.email + '</li>' +
            '<li class="list-group-item">' + '<b>Adress:<br>&nbsp &nbsp &nbsp &nbsp &nbsp   Street:</b>' + ' ' + element.address.street + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Suite:</b>' + ' ' + element.address.suite +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>City:</b>' + ' ' + element.address.city + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp <b>Zipcode:</b>' + ' ' + element.address.zipcode +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  <b>Geo:</b>' +
            '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Latitude:</b>' + ' ' + element.address.geo.lat + '<br>' + ' &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp <b>Longitude:</b>' + ' ' + element.address.geo.lng + '</li>' +
            '<li class="list-group-item">' + '<b>Phone:</b>' + ' ' + element.phone + '</li>' +
            '<li class="list-group-item">' + '<b>Website:</b>' + ' ' + element.website + '</li>' +
            '<li class="list-group-item">' + '<b>Company:<br>   Name:</b>' + ' ' + element.company.name + '<br>' + '<b>Catchphrse:</b>' + ' ' + element.company.catchPhrase +
            '<br>' + '<b>BS:</b>' + ' ' + element.company.bs +
            '</ul>' +
            '</div>' +
            '</div>'

    });
    row.innerHTML = data;
   console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });