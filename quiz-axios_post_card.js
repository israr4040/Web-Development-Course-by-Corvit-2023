data = "";
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (post) {
        post.data.forEach(element => {

            data += '<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
                '<div class="card bg-secondary bg-gradient text-white";">' +
                '<h4 class="p-2 text-center"> User Data</h4>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' + '<b>UserId:</b>' + ' ' + element.userId + '</li>' +
                ' <li class="list-group-item">' + '<b>ID:</b>' + ' ' + element.id + '</li>' +
                ' <li class="list-group-item">' + '<b>Title:</b>' + ' ' + element.title + '</li>' +
                ' <li class="list-group-item">' + '<b>Body:</b>' + ' ' + element.body + '</li>' +
                '</ul>' +


                '</div>' +
                '</div>'
        })
$("#row").html(data)

    });




    // // row.innerHTML = data;
    // // console.log(response);

    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    // .finally(function () {
    //     // always executed
    // });


