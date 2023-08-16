$(document).ready(function () {
  $("#farm").submit(function (e) {
    if (!$(this)[0].checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      $("#username").text("username:" + " " + $("#recipient-name").val());
      $("#recipient-name").val("");

      $("#userid").text("ID:" + " " + $("#userId").val());
      $("#userId").val("");

      $("#titl").text("Title:" + " " + $("#title").val());
      $("#title").val("");

      $("#bady").text("Body:" + " " + $("#body").val());
      $("#body").val("");

      $("#rdbtn").text(
        "Gender:" + " " + $("input:radio[name=gender]:checked").val()
      );

      $("#slct").text(
        "University:" + " " + $("#slectuni").find(":selected").val()
      );

      if ($("#checkbox").is(":checked")) {
        //  $("#submit").trigger("reset");
      }
      e.preventDefault();
    }
    $(this).addClass('was-validated')
  });
});
