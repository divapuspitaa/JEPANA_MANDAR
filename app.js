const namaAplikasi = "Jepa'na Mandar";
const tagline = "Rasa Tradisi, Cerita Generasi.";

console.log("=== Inisialisasi Aplikasi ===");
console.log("Nama Aplikasi:", namaAplikasi);
console.log("Tagline:", tagline);

const renderHeaderNav = () => {
    console.log("Memproses Header dan Navigasi...");
    return `
        <header class="bg-amber-800 text-amber-50 py-12 px-4 text-center shadow-md">
            <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-2">${namaAplikasi}</h1>
            <p class="text-amber-200 text-lg italic">${tagline}</p>
        </header>

        <nav class="sticky top-0 z-50 bg-amber-900/95 backdrop-blur text-amber-100 shadow-lg">
            <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4 md:gap-8 font-medium">
                <a href="#beranda" class="hover:text-amber-400 transition-colors">Beranda</a>
                <a href="#tentang" class="hover:text-amber-400 transition-colors">Tentang Jepa</a>
                <a href="#produk" class="hover:text-amber-400 transition-colors">Produk</a>
                <a href="#galeri" class="hover:text-amber-400 transition-colors">Galeri</a>
                <a href="#video" class="hover:text-amber-400 transition-colors">Video</a>
                <a href="#kontak" class="hover:text-amber-400 transition-colors">Kontak</a>
            </div>
        </nav>
    `;
};

function renderBeranda() {
    console.log("Memproses Section Beranda...");
    return `
        <section id="beranda" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100">
            <h2 class="text-3xl font-bold text-amber-900 mb-4 border-b-2 border-amber-500 pb-2 inline-block">Selamat Datang di Jepa'na Mandar</h2>
            <p class="mb-4 text-stone-700">
                Jepa merupakan makanan tradisional khas Mandar tepatnya di Sulawesi Barat, yang dibuat dari campuran ubi kayu (singkong) parut, kelapa parut dan sedikit garam sebagai penyedap rasa.
            </p>
            <p class="mb-6 text-stone-700">
                Adonan tersebut dicampur hingga rata dan dipanggang berbentuk pipih hingga matang.
            </p>

            <figure class="mt-6 flex flex-col items-center">
                <div class="w-full max-w-2xl rounded-xl overflow-hidden shadow-md">
                    <img src="jepa-utama.jpg" alt="Jepa'na Mandar" class="w-full object-cover transition-transform duration-500 hover:scale-105">
                </div>
                <figcaption class="mt-3 text-sm text-stone-500 text-center">
                    Jepa tradisional khas Mandar.<br>
                    <span class="italic">Sumber: Warta Event</span>
                </figcaption>
            </figure>
        </section>
    `;
}

function renderTentang() {
    console.log("Memproses Section Tentang Jepa...");
    return `
        <section id="tentang" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100 space-y-6">
            <h2 class="text-3xl font-bold text-amber-900 border-b-2 border-amber-500 pb-2 inline-block">Tentang Jepa</h2>
            
            <div class="space-y-3">
                <p class="text-stone-700">
                    Asal-usul Jepa yang tersebar luas di masyarakat, menyebutkan bahwa Jepa hadir sebagai makanan alternatif ketika masyarakat Mandar menghadapi keterbatasan dalam memperoleh beras. Singkong yang lebih mudah diperoleh kemudian diolah menjadi makanan yang praktis dan mengenyangkan.
                </p>
                <p class="text-sm text-stone-600">
                    <strong>Sumber:</strong>
                    <a href="https://indonesiakaya.com/pustaka-indonesia/jepa/" target="_blank" class="text-amber-700 underline hover:text-amber-900">Indonesia Kaya</a>
                </p>
            </div>

            <div class="pt-4 border-t border-stone-100 space-y-3">
                <h3 class="text-xl font-semibold text-amber-800">Jepa dalam Kehidupan Masyarakat Mandar</h3>
                <p class="text-stone-700">
                    Bagi masyarakat suku Mandar, Jepa tidak hanya berfungsi sebagai makanan tetapi telah menjadi bagian dari identitas dan kearifan lokal.
                </p>
                <p class="text-sm text-stone-600">
                    <strong>Sumber:</strong>
                    <a href="https://rri.co.id/biak/kuliner/1322482/jepa-warisan-kuliner-tradisional-indonesia-dari-sulawesi-barat" target="_blank" class="text-amber-700 underline hover:text-amber-900">RRI</a>
                </p>
            </div>
        </section>
    `;
}

function renderProduk() {
    console.log("Memproses Section Produk...");
    return `
        <section id="produk" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100">
            <h2 class="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2 inline-block">Produk Jepa'na Mandar</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse rounded-lg overflow-hidden text-left">
                    <thead>
                        <tr class="bg-amber-800 text-amber-50">
                            <th class="p-4 font-semibold">Nama Produk</th>
                            <th class="p-4 font-semibold">Deskripsi Singkat</th>
                            <th class="p-4 font-semibold w-32">Harga</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-amber-100">
                        <tr class="hover:bg-amber-50/50 transition-colors">
                            <td class="p-4 min-w-[200px]">
                                <div class="w-36 h-24 rounded-md overflow-hidden shadow-sm mb-2">
                                    <img src="jepa-original.jpg" alt="Jepa Original" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                                </div>
                                <strong class="block text-amber-900 text-base">Jepa Original</strong>
                            </td>
                            <td class="p-4 text-stone-700 align-top">Jepa dengan cita rasa original khas Mandar.</td>
                            <td class="p-4 font-semibold text-amber-800 align-top">Rp10.000</td>
                        </tr>
                        <tr class="hover:bg-amber-50/50 transition-colors">
                            <td class="p-4 min-w-[200px]">
                                <div class="w-36 h-24 rounded-md overflow-hidden shadow-sm mb-2">
                                    <img src="jepa-bau-peapi.jpg" alt="Jepa + Bau Peapi" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                                </div>
                                <strong class="block text-amber-900 text-base">Jepa + Bau Peapi</strong>
                            </td>
                            <td class="p-4 text-stone-700 align-top">Jepa disajikan bersama ikan masak kuah kuning khas Mandar.</td>
                            <td class="p-4 font-semibold text-amber-800 align-top">Rp20.000</td>
                        </tr>
                        <tr class="hover:bg-amber-50/50 transition-colors">
                            <td class="p-4 min-w-[200px]">
                                <div class="w-36 h-24 rounded-md overflow-hidden shadow-sm mb-2">
                                    <img src="jepa-gula-merah.jpeg" alt="Jepa + Gula Merah" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
                                </div>
                                <strong class="block text-amber-900 text-base">Jepa + Gula Merah</strong>
                            </td>
                            <td class="p-4 text-stone-700 align-top">Jepa dipadukan dengan gula merah manis alami.</td>
                            <td class="p-4 font-semibold text-amber-800 align-top">Rp12.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderMedia() {
    console.log("Memproses Section Galeri dan Video...");
    return `
        <section id="galeri" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100">
            <h2 class="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2 inline-block">Galeri Jepa'na Mandar</h2>
            <figure class="flex flex-col items-center">
                <div class="w-full max-w-md rounded-xl overflow-hidden shadow-md">
                    <img src="proses-pembuatan-jepa.jpg" alt="Proses Pembuatan Jepa" class="w-full object-cover transition-transform duration-500 hover:scale-105">
                </div>
                <figcaption class="mt-3 text-sm text-stone-500 text-center">Proses pembuatan Jepa secara tradisional.</figcaption>
            </figure>
        </section>

        <section id="video" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100">
            <h2 class="text-3xl font-bold text-amber-900 mb-4 border-b-2 border-amber-500 pb-2 inline-block">Cara Pembuatan Jepa</h2>
            <figure class="flex flex-col items-center">
                <div class="w-full max-w-2xl overflow-hidden rounded-xl shadow-md bg-black">
                    <video class="w-full h-auto" controls>
                        <source src="prosedur-pembuatan-jepa.mp4" type="video/mp4">
                    </video>
                </div>
            </figure>
        </section>
    `;
}

function renderKontak() {
    console.log("Memproses Section Formulir Kontak...");
    return `
        <section id="kontak" class="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100 space-y-6">
            <h2 class="text-3xl font-bold text-amber-900 border-b-2 border-amber-500 pb-2 inline-block">Minat dan Informasi</h2>

            <form method="POST" action="#" class="pt-4">
                <fieldset class="border border-amber-200 rounded-xl p-6 bg-amber-50/30 space-y-6">
                    <legend class="text-amber-900 font-semibold text-lg px-2">Formulir Pemesanan & Informasi</legend>

                    <div class="space-y-4">
                        <h3 class="font-medium text-amber-900 border-b border-amber-200 pb-1">Data Pengunjung</h3>
                        <div>
                            <label for="nama" class="block text-sm font-medium text-stone-700 mb-1">Nama Lengkap</label>
                            <input type="text" id="nama" name="nama" required class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-stone-700 mb-1">Email</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white">
                        </div>
                    </div>

                    <div class="space-y-4 pt-2">
                        <h3 class="font-medium text-amber-900 border-b border-amber-200 pb-1">Informasi Pemesanan Jepa</h3>
                        <div>
                            <label for="jumlah" class="block text-sm font-medium text-stone-700 mb-1">Jumlah</label>
                            <input type="number" id="jumlah" name="jumlah" min="1" required class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white">
                        </div>
                        <div>
                            <label for="produk" class="block text-sm font-medium text-stone-700 mb-1">Pilih Produk</label>
                            <select id="produk" name="produk" required class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white">
                                <option value="original">Jepa Original</option>
                                <option value="bau-peapi">Jepa + Bau Peapi</option>
                                <option value="gula-merah">Jepa + Gula Merah</option>
                            </select>
                        </div>
                        <div>
                            <label for="pesan" class="block text-sm font-medium text-stone-700 mb-1">Pesan</label>
                            <textarea id="pesan" name="pesan" rows="4" class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"></textarea>
                        </div>
                    </div>

                    <div class="space-y-2 pt-2">
                        <h3 class="font-medium text-amber-900 border-b border-amber-200 pb-1">Metode Pengiriman</h3>
                        <div class="flex items-center gap-6 pt-1">
                            <div class="flex items-center gap-2">
                                <input type="radio" id="reguler" name="pengiriman" value="reguler" required class="w-4 h-4 text-amber-600 focus:ring-amber-500">
                                <label for="reguler" class="text-stone-700">Reguler</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input type="radio" id="ekspres" name="pengiriman" value="ekspres" class="w-4 h-4 text-amber-600 focus:ring-amber-500">
                                <label for="ekspres" class="text-stone-700">Ekspres</label>
                            </div>
                        </div>
                    </div>

                    <div class="pt-2">
                        <div class="flex items-start gap-3">
                            <input type="checkbox" id="setuju" name="setuju" required class="mt-1 w-4 h-4 text-amber-600 focus:ring-amber-500 rounded">
                            <label for="setuju" class="text-sm text-stone-700">Saya telah membaca dan memahami informasi yang tersedia.</label>
                        </div>
                    </div>

                    <div class="pt-2">
                        <button type="submit" class="w-full md:w-auto px-8 py-3 bg-amber-800 hover:bg-amber-900 text-amber-50 font-semibold rounded-lg shadow-md transition-colors cursor-pointer">
                            Kirim
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    `;
}

let kontenUtama = `
    ${renderHeaderNav()}
    <main class="max-w-5xl mx-auto px-4 py-10 space-y-16">
        ${renderBeranda()}
        ${renderTentang()}
        ${renderProduk()}
        ${renderMedia()}
        ${renderKontak()}
    </main>
    <footer class="bg-amber-950 text-amber-200/80 py-8 px-4 text-center mt-12 text-sm space-y-1">
        <p>&copy; 2026 ${namaAplikasi}. All Rights Reserved.</p>
        <p>Dibuat oleh <span class="text-amber-400 font-medium">Diva Puspita</span></p>
    </footer>
`;

console.log("Seluruh konten HTML berhasil digabungkan. Siap dirender dengan document.write().");

document.write(kontenUtama);

console.log("=== Halaman Web Berhasil Dirender ===");