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

    // Validasi apakah input tidak kosong
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

    <h2>Input Data Proyek</h2>
    <form action="public.php" method="post" id="InputData" enctype="multipart/form-data">
        <label for="title">Judul Proyek:</label>
        <input type="text" name="title" id="title" required><br>

        <label for="description">Deskripsi Proyek:</label><br>
        <textarea name="description" id="description" rows="4" cols="50" required></textarea><br>

        <label for="image">Gambar Proyek:</label>
        <input type="file" name="image" id="image" accept="image/*"><br>

        <input type="submit" value="Submit">
    </form>

    <form method="POST" action="proses.php">
      Email Tujuan: <input type="email" name="email_tujuan" id="email"><br><br>
      Judul Email: <input type="text" name="judul" id="judul"><br><br>
      Pesan: <textarea name="pesan" id="pesan" rows="8" cols="20"></textarea><br><br>
      <button type="submit" name="submit">Kirim Email!</button>
    </form> 

    <script>
      
    </script>
  </body>
</html>