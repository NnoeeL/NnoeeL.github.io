# Portofolio Pribadi - Muhammad Farrel (Noel)

Website portofolio resmi **Muhammad Farrel** (akrab disapa **Noel** / `@NnoeeL`), mahasiswa S1 Teknik Informatika di **Universitas Siliwangi (UNSIL)**, Tasikmalaya.

Website live dapat diakses di: **[https://nnoeel.github.io](https://nnoeel.github.io)**

---

## Tentang Portofolio Ini

Website ini dirancang dengan tema anime Jepang pesisir pantai pastel (*Shonan Coastline*), dilengkapi simulasi fisika fluida ombak Gerstner interaktif dan synthesizer audio deburan ombak berbasis Web Audio API.

Seluruh kode dibangun secara murni (*vanilla*) tanpa framework berat, memastikan waktu muat yang instan dan performa tinggi di semua perangkat.

---

## Fitur Utama

1. **Simulasi Ombak Pantai Gerstner Realistis**
   - Simulasi matematika *Gerstner trochoidal waves* multi-lapisan di atas pasir pantai pastel pada HTML5 Canvas.
   - Respon riak air interaktif saat kursor atau layar disentuh.
   - Penghitung FPS *real-time* berbasis `requestAnimationFrame`.

2. **Synthesizer Suara Ombak (Web Audio API)**
   - Pembangkit derau merah muda (*pink noise*) terfilter tanpa file audio eksternal untuk suara deburan ombak pantai yang menenangkan.

3. **Pengalih Suasana Waktu (Atmosphere Switcher)**
   - Tiga palet suasana: Siang (*Day*), Senja (*Sunset*), dan Malam (*Night*).

4. **Showcase Proyek Nyata & Terverifikasi**
   - **Sahabat Mahasiswa:** Superapp kebutuhan mahasiswa (pencarian kosan radius 10 km UNSIL/Tasikmalaya, kalkulator IPK, pelacak tugas) dengan arsitektur *offline-first* lintas Web PWA, Android APK, dan Windows Electron.
   - **BikinPlan:** Platform perencana arsitektur perangkat lunak untuk menyusun PRD terstruktur, skema DDL PostgreSQL, kontrak REST API, dan 24 task board pengembangan.
   - **ArsipBelajar:** Aplikasi belajar mandiri cerdas untuk mengonversi materi kuliah, dokumen, dan tautan YouTube menjadi ringkasan, flashcard bersistem Leitner, dan kuis interaktif.
   - Dilengkapi screenshot pratinjau antarmuka dan penjelasan tantangan teknis tersulit yang dipecahkan pada masing-masing proyek.

5. **Aksesibilitas & Kode Bersih**
   - Navigasi keyboard penuh (`Tab`, `Shift+Tab`, `Escape`).
   - Kontras warna memenuhi standar WCAG AA.
   - Tata letak responsif ramah ponsel tanpa *horizontal overflow*.

---

## Teknologi yang Digunakan

- **HTML5:** Struktur semantik, meta tag SEO, Open Graph, dan Twitter Card.
- **CSS3:** Variabel CSS (*tokens*), CSS Grid, Flexbox, dan efek transisi halus.
- **JavaScript (Vanilla ESNext):** Fisika ombak Canvas, Web Audio API synth, render data, dan manajemen tema.
- **Pustaka & Aset:** Google Fonts (*Plus Jakarta Sans*, *JetBrains Mono*, *Zen Maru Gothic*) dan Font Awesome 6.

---

## Menjalankan Proyek Secara Lokal

Tidak memerlukan dependensi atau *build tool*:
1. Clone repositori:
   ```bash
   git clone https://github.com/NnoeeL/NnoeeL.github.io.git
   ```
2. Buka folder dan jalankan `index.html` langsung di browser atau gunakan server lokal:
   ```bash
   npx serve .
   ```
