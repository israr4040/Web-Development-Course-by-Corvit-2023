<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">

  <title>Users For Each Loop</title>
</head>

<body>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <!-- <th>website</th> -->
      </tr>
    </thead>
    <?php
   $connect=mysqli_connect('localhost','root','','social');
   if (!$connect) {
    die('Connection Failed: <br>'.mysqli_connect_error());
   }else {
    echo "Connected successfully <br>";
   }

   $query= 'select * from user';
   $record=mysqli_query($connect,$query);
   echo "Total No of Records= "." ". mysqli_num_rows($record);
  while ($user=mysqli_fetch_array($record)) {
    echo "<tr>" .
        "<td>".$user['id'].
        "<td>".$user['name'].
        "<td>".$user['username'].
        "<td>".$user['email'].
        "<td>".$user['phone'].
        // "<td>".$user['website'].
  "</tr>";
  }
// foreach ($users as $key => $value) {
//   echo "<tr>" ."<td>".$value['id'].
//         "<td>".$value['name'].
//         "<td>".$value['username'].
//         "<td>".$value['email'].
//         "<td>".$value['phone'].
//         "<td>".$value['website'].
  
  
//   "</tr>";
// }




    ?>
  </table>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>