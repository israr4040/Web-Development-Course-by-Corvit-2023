$(document).ready(function () {
    data = "";
    var userdata = "https://jsonplaceholder.typicode.com";
    axios.get(userdata + "/albums?userId=1").then(function (post) {
      post.data.forEach((element) => {
        $("#row").append(
          '<div id="' +element.id +'" class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
            '<div class="card bg-secondary bg-gradient text-white";">' +
            '<h4 class="p-2 text-center"> User Data</h4>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' +
            "<b>User id:</b>" +
            " " +
            element.userId +
            "</li>" +
            ' <li class="list-group-item">' +
            "<b>ID:</b>" +
            " " +
            element.id +
            "</li>" +
            ' <li class="list-group-item">' +
            "<b>Title:</b>" +
            " " +
            element.title +
            "</li>" +
            "</ul>" +
            '<div class="card-footer ">' +
            '<button type="button" class="btn btn-info ms-4 edit-user-class" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" user-id="' +
            element.id +
            '">Edit</button>' +
            '<button type="button" class="btn btn-danger ms-4 delete-user-class" data-bs-toggle="modal" data-bs-target="#DeleteModal" data-bs-whatever="@fat" user-id="' +
            element.id +
            '">Delete</button>' +
            "</div>" +
            "</div>" +
            "</div>"
        );
      });
  
      //Tost message
  
      function showToast(message) {
        const toastElement = $('#toast');
        toastElement.text(message);
        toastElement.show();
        setTimeout(() => {
          toastElement.hide();
        }, 3000);
      }
   
  
      //Edit User
      $(".edit-user-class").click(function () {
        axios
          .get(userdata + "/albums/" + $(this).attr("user-id"))
          .then((edituser) => {
            let user = edituser.data;
  
            $("#editusername").val(user.userId);
            $("#edituserId").val(user.id);
            $("#edittitle").val(user.title);
          });
      });
  
      $("#editForm").submit(function (event) {
        if (!$(this)[0].checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
        
        
          let data = {
            userId: $("#editusername").val(),
            id: $("#edituserId").val(),
            title: $("#edittitle").val(),
          };
          axios.patch(userdata + "/albums/" + data.id, data).then((res) => {
            let user = res.data;
            console.log(user);
  
            $("#" + user.id).html("");
            $("#" + user.id).html(
              '<div class="card bg-secondary bg-gradient text-white";">' +
                '<h4 class="p-2 text-center"> User Data</h4>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' +
                "<b>User id:</b>" +
                " " +
                user.userId +
                "</li>" +
                ' <li class="list-group-item">' +
                "<b>ID:</b>" +
                " " +
                user.id +
                "</li>" +
                ' <li class="list-group-item">' +
                "<b>Title:</b>" +
                " " +
                user.title +
                "</li>" +
               
                "</ul>" +
                '<div class="card-footer ">' +
                '<button type="button" class="btn btn-info ms-4 edit-user-class" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" user-id="' +
                user.id +
                '">Edit</button>' +
                '<button type="button" class="btn btn-danger ms-4 delete-user-class" data-bs-toggle="modal" data-bs-target="#DeleteModal" data-bs-whatever="@fat" user-id="' +
                user.id +
                '">Delete</button>' +
                "</div>" +
                "</div>"
            );
           
              showToast('album Updated Successfully');
  
          });
          event.preventDefault();
        }
  
        $(this).addClass("was-validated");
        $("#exampleModal").modal("hide");
      });
      //Delete User
  
      $(".delete-user-class").click(function () {
        $("#delete-user-id").val($(this).attr("user-id"));
        $("#DeleteModal").modal("show");
      });
  
      $("#deleteSubmit").click(function (e) {
        e.preventDefault();
        axios.delete(userdata + "/albums/" + $("#delete-user-id").val())
          .then((singleUser) => {
            console.log($("#delete-user-id").val());
            $("#" + $("#delete-user-id").val()).remove();
            $("#DeleteModal").modal("hide");
  
            showToast('album Deleted Successfully');
  
          });
      });
  
      //Registration Form
  
      $('#RegForm').submit(function (event) {
        if (!$(this)[0].checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          let data = {
            userId: $("#reguserId").val(),
            title: $("#regtitle").val(),
            body: $("#regbody").val()
          };
          axios.post(userdata + "/albums/", data).then((res) => {
            let user = res.data;
            console.log(user);
  
            $("#row").append('<div class="col-12 col-lg-4 col-md-4 col-sm-6 col-xl-3 mt-2 mb-5 " >' +
              '<div class="card bg-secondary bg-gradient text-white";">' +
                '<h4 class="p-2 text-center"> User Data</h4>' +
                '<ul class="list-group list-group-flush">' +
                '<li class="list-group-item">' +
                "<b>User id:</b>" +
                " " +
                
                "</li>" +
                ' <li class="list-group-item">' +
                "<b>ID:</b>" +
                " " +
                user.id +
                "</li>" +
                ' <li class="list-group-item">' +
                "<b>Title:</b>" +
                " " +
                user.title +
                "</li>" +
               
                "</ul>" +
                '<div class="card-footer ">' +
                '<button type="button" class="btn btn-info ms-4 edit-user-class" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" user-id="' +
                user.id +
                '">Edit</button>' +
                '<button type="button" class="btn btn-danger ms-4 delete-user-class" data-bs-toggle="modal" data-bs-target="#DeleteModal" data-bs-whatever="@fat" user-id="' +
                user.id +
                '">Delete</button>' +
                "</div>" +
                "</div>" +
                "</div>"
            )
                       showToast('album Added Successfully');
  
          })
          event.preventDefault();
        }
  
        $(this).addClass("was-validated");
        $("#regModal").modal("hide");
      });
    });
  });
  