<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="public.css" />
  <title>Hay Portofolio</title>
</head>

<body>
  <nav class="navbar">
    <span class="logo">Muhammad Haykal</span>
    <ul class="menu" id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about-me">About</a></li>
      <li><a href="#projek">Project</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="burger" id="burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>

  <section class="hero" id="home">
    <h1>Hello, I'm Muhammad Haykal</h1>
    <p id="typing-text">
    </p>
    <a href="#projek" class="btn" onmouseover="changeText(this)" onmouseout="resetText(this)">View Project</a>
  </section>

  <section class="about" id="about-me">
    <div class="foto">
      <img src="aset/IMG_20220824_094553_111.jpg" alt="" />
    </div>
    <div class="Deskripsi">
      <h2>Muhammad Haykal</h2>
      <p>
        Hello everyone, my name is Muhammad Haykal. Currently, I am in grade
        eleven at SMK Taruna Bhakti. I am majoring in RPL (Software
        Engineering). I have a strong interest in web development and am
        enthusiastic in learning and applying my skills to create dynamic and
        user-friendly websites.
      </p>
      <p>
        I enjoy working with various technologies and frameworks to build
        innovative and interactive web applications. Besides programming, I
        also love exploring new design trends and strive to create visually
        appealing websites.
      </p>
    </div>
  </section>

  <section class="projek" id="projek">
    <h1>Project</h1>
    <div class="cards">
      
    </div>

  </section>


  <section class="contact" id="contact">

    <main>
      <form class="contact-form" action="admin.php" method="post">
        <h1>Comments</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" name="simpan">Send Message</button>
        <button type="button" onclick="clearForm()">Reset</button>
      </form>
    </main>

    <div class="comments">
      <h2>Comments</h2>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Pesan</th>
          </tr>
        </thead>
        <tbody>
          <?php
          $query = "SELECT * FROM komentar";
          $stmt = $koneksi->query($query);
          $no = 1;

          while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo '<tr>';
            echo '<td>' . $no . '</td>';
            echo '<td>' . $row['nama'] . '</td>';
            echo '<td>' . $row['email'] . '</td>';
            echo '<td>' . $row['message'] . '</td>';
            echo '</tr>';
            $no++;
          }
          ?>
        </tbody>
      </table>
    </div>
  </section>

  <footer>
    <p>&copy; 2023 Muhammad Haykal. All rights reserved.</p>
  </footer>

  <script src="public.js"></script>
</body>

</html>