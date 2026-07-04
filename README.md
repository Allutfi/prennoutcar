# Prenn Out Car

Website dealer kendaraan mewah premium berbasis Next.js untuk **Prenn Out Car** — koleksi eksklusif kendaraan pre-owned terpilih di Miami.

## Tentang Proyek

Prenn Out Car adalah platform web showroom otomotif mewah yang menawarkan pengalaman pembelian kendaraan kelas atas secara digital. Website ini menampilkan inventaris kendaraan premium, layanan pembiayaan, serta perawatan kendaraan berstandar tinggi.

## Fitur Utama

- **Halaman Beranda** — Hero section dengan parallax scroll, inventaris unggulan, value banner, promo bento grid, dan brand carousel
- **Inventaris** — Daftar kendaraan lengkap dengan filter (merek, body style, tipe bahan bakar, kisaran harga), sorting, dan paginasi
- **Detail Kendaraan** — Halaman detail per kendaraan dengan galeri foto, spesifikasi performa, dan fitur unggulan
- **Pembiayaan** — Kalkulator cicilan interaktif (vehicle price, down payment, term, APR) dan form aplikasi kredit online
- **Layanan** — Menu servis lengkap, jadwal appointment online, dan penawaran spesial musiman
- **Tentang Kami** — Profil perusahaan, nilai-nilai inti, galeri showroom, dan tim kepemimpinan

## Tech Stack

| Teknologi | Versi |
|---|---|
| [Next.js](https://nextjs.org) | 16.2.9 |
| [React](https://react.dev) | 19.2.4 |
| [Tailwind CSS](https://tailwindcss.com) | v4 |
| [TypeScript](https://www.typescriptlang.org) | ^5 |

**Font:** Montserrat (heading) + Inter (body) via `next/font/google`  
**Ikon:** Material Symbols Outlined

## Struktur Proyek

```
src/
├── app/
│   ├── page.tsx              # Beranda
│   ├── layout.tsx            # Root layout (metadata, font, global CSS)
│   ├── globals.css           # Global styles
│   ├── about/page.tsx        # Halaman Tentang Kami
│   ├── finance/page.tsx      # Halaman Pembiayaan
│   ├── inventory/
│   │   ├── page.tsx          # Daftar inventaris + filter sidebar
│   │   └── [id]/page.tsx     # Detail kendaraan
│   └── services/page.tsx     # Halaman Layanan & Perawatan
└── components/
    ├── Navbar.tsx             # Navigasi utama
    ├── UtilityBar.tsx         # Bar utilitas atas (kontak, jam operasional)
    ├── HeroSection.tsx        # Hero dengan parallax (client component)
    ├── InventorySection.tsx   # Seksi inventaris unggulan di beranda
    ├── FinanceCalculator.tsx  # Kalkulator cicilan interaktif (client component)
    ├── BrandCarousel.tsx      # Carousel merek kendaraan
    ├── PromoSection.tsx       # Bento grid promo
    ├── ValueBanner.tsx        # Banner nilai/keunggulan
    ├── RemoteImage.tsx        # Wrapper next/image untuk gambar eksternal
    └── Footer.tsx             # Footer global
```

## Memulai

### Prasyarat

- Node.js >= 18
- [pnpm](https://pnpm.io) (package manager yang digunakan proyek ini)

### Instalasi

```bash
pnpm install
```

### Menjalankan Development Server

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk Produksi

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Konfigurasi Gambar

Gambar produk dimuat dari CDN Google (`lh3.googleusercontent.com/aida-public/**`). Konfigurasi remote pattern sudah diatur di `next.config.ts`. Gambar eksternal dilayani melalui komponen `RemoteImage` yang membungkus `next/image`.

## Lisensi

Proyek ini bersifat public.
