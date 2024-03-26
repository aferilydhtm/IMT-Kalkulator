document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const berat = parseFloat(document.getElementById('berat').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const umur = parseInt(document.getElementById('umur').value);

        // Periksa jenis kelamin
        const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;

        // Hitung stunting
        const tbu = stunting(umur, tinggi, jenisKelamin);
        document.getElementById('tbu').value = tbu;

        // Hitung IMT
        const imt = kategorigizi(tinggi, berat, jenisKelamin);
        document.getElementById('imt').value = imt;
    });
});

function stunting(umur, tinggi, jenisKelamin) {
    if (jenisKelamin === 'pria') {
        // Batas tinggi menurut umur untuk anak laki-laki
        const batasTinggi = [
            51, 54, 57, 60, 62, 63, 65, 66, 67, 68, 70, 71, 72, 73, 75, 75, 76, 77, 78, 79, 79, 81, 81, 82, 82,
            83, 84, 84, 85, 86, 86, 87, 87, 88, 88, 89, 90, 90, 91, 91, 91, 92, 93, 93, 94, 94, 95, 95, 96, 96,
            97, 97, 98, 98, 99, 99, 100, 100, 102
        ];

        if (umur <= 60) {
            return tinggi <= batasTinggi[umur - 1] ? 'Ya' : 'Tidak';
        } else {
            return 'Umur anak diluar batas perhitungan stunting';
        }
    } else if (jenisKelamin === 'wanita') {
        // Batas tinggi menurut umur untuk anak perempuan
        const batasTinggi = [
            50, 53, 56, 59, 61, 62, 64, 65, 66, 67, 69, 70, 71, 72, 74, 74, 75, 76, 77, 78, 78, 80, 80, 81, 81,
            82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 94,
            95, 95, 96, 96, 97, 97, 97, 98, 98
        ];

        if (umur <= 60) {
            return tinggi <= batasTinggi[umur - 1] ? 'Ya' : 'Tidak';
        } else {
            return 'Umur anak diluar batas perhitungan stunting';
        }
    }
}

function kategorigizi(tinggi, berat, jenisKelamin) {
    const rumus1 = tinggi / 100;
    const rumus2 = rumus1 * rumus1;
    const rumus = berat / rumus2;

    if (jenisKelamin === 'pria') {
        if (rumus > 27) {
            return 'Obesitas';
        } else if (rumus >= 23) {
            return 'Kegemukan';
        } else if (rumus >= 17) {
            return 'Normal';
        } else if (rumus < 17 && rumus > 13) {
            return 'Kurus';
        } else if (rumus < 14) {
            return 'Sangat Kurus';
        }
    } else if (jenisKelamin === 'wanita') {
        if (rumus > 27) {
            return 'Obesitas';
        } else if (rumus >= 25) {
            return 'Kegemukan';
        } else if (rumus >= 18) {
            return 'Normal';
        } else if (rumus < 18 && rumus > 14) {
            return 'Kurus';
        } else if (rumus < 15) {
            return 'Sangat Kurus';
        }
    }
}