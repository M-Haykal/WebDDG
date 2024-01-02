<?php
$server = "localhost";
$user = "root";
$pass = "";
$database = "hayporto";

$koneksi = mysqli_connect($server, $user, $pass, $database);

if (!$koneksi) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

$pesan = ""; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit_project'])) {
        $title = $_POST['title'];
        $description = $_POST['description'];

        // Validasi apakah input tidak kosong
        if (!empty($title) && !empty($description)) {
            $ImageData = $_FILES['image']['name']; 
            $image_tmp = $_FILES['image']['tmp_name']; 

            if (!empty($ImageData)) {
                $target_dir = "upload/"; 
                $target_path = $target_dir . $ImageData;

                if (move_uploaded_file($image_tmp, $target_path)) {
                    $query = "INSERT INTO project (title, description, ImageData) VALUES ('$title', '$description', '$ImageData')";
                    $simpan = mysqli_query($koneksi, $query);

                    if ($simpan) {
                        $pesan = "Data proyek berhasil disimpan.";
                        header("Location: hasil.php");
                        exit; 
                    } else {
                        $pesan = "Data proyek gagal disimpan: " . mysqli_error($koneksi);
                    }
                } else {
                    $pesan = "Gagal mengunggah gambar.";
                }
            } else {
                $pesan = "Semua input harus diisi.";
            }
        }
    }
}
?>


<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>Input Data Proyek</h1>
    <form action="public.php" method="post" id="InputData" enctype="multipart/form-data">
        <label for="title">Judul Proyek:</label>
        <input type="text" name="title" id="title" required><br>

        <label for="description">Deskripsi Proyek:</label><br>
        <textarea name="description" id="description" rows="4" cols="50" required></textarea><br>

        <label for="image">Gambar Proyek:</label>
        <input type="file" name="image" id="image" accept="image/*" required><br>

        <input type="submit" name="submit_project" value="Submit Project">
    </form>
    <?php echo $pesan; ?>
</body>
</html>
