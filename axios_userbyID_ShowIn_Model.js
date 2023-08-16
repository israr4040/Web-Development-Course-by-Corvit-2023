$(document).ready(function () {
    // var usersdata="https://jsonplaceholder.typicode.com";
  var usersdata = "http://localhost:5000";

    axios.get(usersdata + "/users").then (function (userRes) {
        let users= userRes.data;
       
        users.forEach(user => {
            var view_btn = '<button type="button" class="btn btn-link view-user-class" user-id="' + user.id + '">View</button>';
            var update_btn = '<button type="button" class="btn btn-link edit-user-class" user-id="' + user.id + '">Edit</button>';
            var delete_btn = '<button type="button" class="btn btn-link delete-user-class" user-id="' + user.id + '">Delete</button>';
            $('#tbl-data').append(
                '<tr id="user_' + user.id + '">' +
                '<td>' + user.name + '</td>' +
                '<td>' + user.username + '</td>' +
                '<td>' + user.email + '</td>' +
                '<td>' + user.phone + '</td>' +
                '<td>' + view_btn + '|' + update_btn + '|' + delete_btn + '</td>' +
                '</tr>'
            );
            
        })
        $('.view-user-class').click(function () {
            axios.get(usersdata + '/users/' + $(this).attr('user-id')).then((singleUser) => {

                $('#user-view-table').html(
                    '<tr>' +
                    '<th>Name</th>' +
                    '<td>' + singleUser.data.name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>username</th>' +
                    '<td>' + singleUser.data.username + '</td>' +
                    '</tr>'+
                    '<th>Email</th>' +
                    '<td>' + singleUser.data.email + '</td>' +
                    '</tr>'
                );
                $('#view-user-modal').modal('show');
            })
        
        })

        $('.edit-user-class').click(function () {
            axios.get(usersdata + '/users/' + $(this).attr('user-id')).then((edituser) => {
                $('#editInputForm').val(edituser.data.name);
                $('#editFormusername').val(edituser.data.username);
                $('#EditFormemail').val(edituser.data.email);
                $('#edit-user-id').val(edituser.data.id);
            })
            $('#Edit-user-modal').modal('show');

        
        })
        //Edit Form
        $('#editform').submit(function (event) {
            if (!$(this)[0].checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {

                let data = {
                    name: $('#editInputForm').val(),
                    username: $('#editFormusername').val(),
                    email: $('#EditFormemail').val(),
                    phone: $('#Editphone').val(),
                }
                axios.patch(usersdata + '/users/' + $('#edit-user-id').val(), data).then((res) => {
                    let user = res.data;
                    console.log(user);

                    var view_btn = '<button type="button" class="btn btn-link view-user-class" user-id="' + user.id + '">View</button>';
                    var update_btn = '<button type="button" class="btn btn-link edit-user-class" user-id="' + user.id + '">Edit</button>';
                    var delete_btn = '<button type="button" class="btn btn-link delete-user-class" user-id="' + user.id + '">Delete</button>';
                    $('#user_' + user.id).html('');
                    $('#user_' + user.id).html(
                        '<td>' + user.name + '</td>' +
                        '<td>' + user.username + '</td>' +
                        '<td>' + user.email + '</td>' +
                        '<td>' + user.phone + '</td>' +
                        '<td>' + view_btn + '|' + update_btn + '|' + delete_btn + '</td>' 
                    );
                })
                event.preventDefault();
            }

            $(this).addClass("was-validated");
            $('#Edit-user-modal').modal('hide');
            
        })

         //Registration Form
         
         $('#regForm').submit(function (event) {
            if (!$(this)[0].checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {

                let data = {
                    username: $('#regformusername').val(),
                    name: $('#regformaname').val(),
                    email: $('#regemail').val(),
                    phone: $('#regphone').val(),

                }
                console.log(data);
                axios.post(usersdata + '/users', data).then((res) => {
                    let user = res.data;
                    console.log(user);
                    
                    var view_btn = '<button type="button" class="btn btn-link view-user-class" user-id="' + user.id + '">View</button>';
                    var update_btn = '<button type="button" class="btn btn-link edit-user-class" user-id="' + user.id + '">Edit</button>';
                    var delete_btn = '<button type="button" class="btn btn-link delete-user-class" user-id="' + user.id + '">Delete</button>';

                  
                    $('#tbl-data').append('<tr>'+
                    '<td>' + user.username + '</td>' +
                        '<td>' + user.name + '</td>' +
                        '<td>' + user.email + '</td>' +
                        '<td>' + user.phone + '</td>' +
                        '<td>' + view_btn + '|' + update_btn + '|' + delete_btn+'</td>' +'</tr>'
                    );
                })
                event.preventDefault();
            }

            $(this).addClass("was-validated");
            $('#Regmodel').modal('hide');
            
        })

        //Delete User

        $('.delete-user-class').click(function () {
            $('#delete-user-id').val($(this).attr('user-id'))
            $('#Delete-user-modal').modal('show');
        })

        $('#delete-submit').click(function () {

            axios.delete(usersdata + '/users/' + $('#delete-user-id').val())
            .then((singleUser) => {
                $('#user_' + $('#delete-user-id').val()).remove();
                $('#Delete-user-modal').modal('hide');

                $('#success-msg').text('User Deleted Successfully');
                $('#success-msg').toggleClass('d-none');

                setTimeout(() => {
                    
                $('#success-msg').toggleClass('d-none');
                }, 2000);
            })

        
        })
    })

    
})