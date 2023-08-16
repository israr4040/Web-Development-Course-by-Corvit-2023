axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (todo) {
          //  var row = $('#row')
        // var row = document.getElementById("row");
      var datashow = "";
        todo.data.forEach(element => {
            datashow += '<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
                '<div class="card bg-secondary bg-gradient text-white";">' +
                '<h4 class="p-2 text-center"> User Data</h4>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + '<b>Userid:</b>' + ' ' + element.userId + '</li>' +
                ' <li class="list-group-item">' + '<b>ID:</b>' + ' ' + element.id + '</li>' +
                ' <li class="list-group-item">' + '<b>Title:</b>' + ' ' + element.title + '</li>' +
                ' <li class="list-group-item">' + '<b>Completed:</b>' + ' ' + element.completed + '</li>' +
                '</ul>' +
                '</div>' +
                '</div>'

        });
        $('#row').html(datashow)

    })
      .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });