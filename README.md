# Husni Attin — Portfolio

Portfolio satu halaman untuk Husni Attin, profesional healthcare administration dan public health di Jakarta. Situs menampilkan pengalaman admission/frontliner, pendidikan, pengalaman lapangan, kompetensi, pelatihan, CV, serta sertifikat.

## Stack

- Astro 7 untuk static-site generation
- Tailwind CSS 4 melalui plugin Vite
- TypeScript untuk data profil dan interaksi klien
- `@astrojs/sitemap` untuk sitemap saat `SITE_URL` tersedia

## Fitur

- Desain responsif dan aksesibel, termasuk skip link dan navigasi mobile.
- Konten portofolio berbasis data dari `src/data/profile.ts`.
- Toggle bahasa Inggris/Bahasa Indonesia dengan preferensi tersimpan di browser.
- Tombol unduh CV dan tautan sertifikat pelatihan.
- Metadata SEO, Open Graph, Twitter Card, canonical URL, structured data `Person`, `robots.txt`, dan sitemap.
- Domain produksi kanonis: `https://husniattin.my.id`; `www.husniattin.my.id` diarahkan ke domain utama.

## Prasyarat

- Node.js LTS
- npm

## Menjalankan Lokal

```sh
npm install
npm run dev
```

Buka URL lokal yang dicetak Astro. Untuk mengecek hasil production build:

```sh
npm run build
npm run preview
```

## Perintah

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Astro. |
| `npm run check` | Menjalankan diagnostik Astro dan TypeScript. |
| `npm run build` | Membuat static production build ke `dist/`. |
| `npm run preview` | Menyajikan hasil build lokal. |

## Struktur Proyek

```text
src/
  assets/       Foto portrait yang dioptimalkan Astro
  data/         Data profil, pengalaman, pendidikan, dan tautan dokumen
  layouts/      Metadata dokumen, SEO, dan structured data
  pages/        Halaman utama serta route robots.txt
  scripts/      Toggle bahasa sisi klien
  styles/       Style global
public/
  certificates/ Sertifikat yang dapat diakses langsung
  cv/           CV yang dapat diunduh
  og/           Gambar social-sharing
assets/         File sumber asli portrait, CV, dan sertifikat
```

## Memperbarui Konten

- Ubah data teks, pengalaman, tautan LinkedIn, dan URL dokumen di `src/data/profile.ts`.
- Ganti portrait di `src/assets/husni-attin-portrait.png`.
- Simpan CV publik di `public/cv/husni-attin-cv.pdf`.
- Simpan sertifikat publik di `public/certificates/service-excellence-selling-skill-2026.pdf`.
- Ganti gambar Open Graph di `public/og/husni-attin-og.jpg` bila diperlukan.

File dalam `public/` disajikan apa adanya dan dirujuk memakai path root, misalnya `/cv/husni-attin-cv.pdf`.

## Konfigurasi Produksi

Salin `.env.example` menjadi `.env` dan gunakan domain kanonis tanpa `www`:

```sh
SITE_URL=https://husniattin.my.id
```

`SITE_URL` harus berupa URL absolut untuk mengaktifkan sitemap dan menghasilkan canonical/OG URL absolut saat build. Variabel ini bukan rahasia dan tidak memerlukan kredensial aplikasi.

## Deployment VPS

Situs ini merupakan static Astro site. Jalankan build dengan `SITE_URL` lalu sajikan isi `dist/` menggunakan web server yang telah ada.

```sh
npm ci
SITE_URL=https://husniattin.my.id npm run build
```

Produksi saat ini menggunakan Nginx pada VPS untuk menyajikan build tersebut, mengalihkan HTTP ke HTTPS, dan mengalihkan `www.husniattin.my.id` ke `https://husniattin.my.id`. Sertifikat TLS Let’s Encrypt mencakup kedua hostname dan diperpanjang otomatis oleh Certbot.

## Validasi

```sh
npm run check
npm run build
```

Jangan commit `.env`, private key, token deployment, atau kredensial server.
