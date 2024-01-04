<?php
$server = "localhost";
$user = "root";
$pas = "";
$database = "hayporto";

$koneksi = mysqli_connect($server, $user, $pas, $database);

if (!$koneksi) {
  die("Koneksi database gagal: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['simpan'])) {
  $nama = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  if (!empty($nama) && !empty($email) && !empty($message)) {
    $query = "INSERT INTO komentar (nama, email, message) VALUES ('$nama', '$email', '$message')";
    $simpan = mysqli_query($koneksi, $query);

    if ($simpan) {
      echo '<script>alert("Terima kasih atas komentarnya.");</script>';
      header("Location: public.php");
    } else {
      echo '<script>alert("Data gagal disimpan: ' . mysqli_error($koneksi) . '");</script>';
    }
  } else {
    echo '<script>alert("Semua input harus diisi.");</script>';
  }
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['tampilkan_email'])) {
  $email_tujuan = $_POST['email_tujuan'];
  echo '<script>
          document.getElementById("email").value = "' . $email_tujuan . '";
        </script>';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="admin.css" />
  <title>Document</title>
</head>

<body>
  <h1>Halaman Admin</h1>
  <div class="comments">
    <h2>Comments</h2>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Pesan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <?php
        $query = "SELECT * FROM komentar";
        $result = mysqli_query($koneksi, $query);
        $no = 1;

        while ($row = mysqli_fetch_assoc($result)) {
          echo '<tr>';
          echo '<td>' . $no . '</td>';
          echo '<td>' . $row['nama'] . '</td>';
          echo '<td>' . $row['email'] . '</td>';
          echo '<td>' . $row['message'] . '</td>';
          echo '<td><button class="hapus" data-email="">Hapus</button></td>';
          echo '</tr>';
          $no++;
        }
        ?>
      </tbody>
    </table>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="send">
        <h2>Kirim Email</h2>
        <form action="proses.php" method="post">
          <div class="mb-3 mt-3">
            <label>Email Tujuan:</label>
            <input type="email" class="form-control" placeholder="Email Tujuan" name="email" required>
          </div>
          <div class="mb-3 mt-3">
            <label>Judul Pesan:</label>
            <input type="text" class="form-control" placeholder="Judul Pesan" name="judul" required>
          </div>
          <div class="mb-3 mt-3">
            <label>Isi Pesan:</label>
            <textarea class="form-control" name="pesan" placeholder="Pesan" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Kirim</button>
        </form>
      </div>
    </div>
    <div class="col-6">
      
    </div>
  </div>




  <script>

  </script>
</body>

</html>