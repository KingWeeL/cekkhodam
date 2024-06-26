document.getElementById('khodamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const khodamData = {
        'Khodam Harimau sumatra': 'Melambangkan kekuatan dan keberanian yang luar biasa.',
        'Khodam Harimau': 'Menandakan ketangguhan dan keberanian dalam menghadapi tantangan.',
        'Khodam Serigala putih': 'Simbol kecerdikan dan loyalitas.',
        'Khodam Macan Putih': 'Melambangkan keberanian dan kebijaksanaan.',
        'Khodam Ular lidi': 'Melambangkan ketangkasan dan kemampuan beradaptasi.',
        'Khodam Naga bonar': 'Simbol kekuatan besar dan perlindungan.',
        'Khodam Naga api': 'Melambangkan kekuatan dahsyat dan semangat juang.',
        'Khodam Gajah': 'Simbol kebijaksanaan, kekuatan, dan ketenangan.',
        'Khodam Elang': 'Menandakan penglihatan jauh dan kebebasan.',
        'Khodam Serigala api': 'Melambangkan kekuatan dan semangat membara.',
        'Khodam Kuda': 'Simbol ketahanan dan kecepatan.',
        'Khodam Buaya': 'Melambangkan kekuatan dan ketahanan.',
        'Khodam Harimau Putih': 'Melambangkan kekuatan dan kemurnian.',
        'Khodam Biawak': 'Simbol kelicikan dan kemampuan beradaptasi.',
        'Kak Gem': 'Orang yg memiliki khodam ini memiliki kelebihan yang suka memberi paham',
        'Khodam Belut pemalas': 'Simbol kemalasan yang kuat.',
        '': 'Tidak ada Khodam yang terdeteksi.'
    };

    let khodam;
    if (localStorage.getItem(name)) {
        khodam = localStorage.getItem(name);
    } else {
        khodam = Object.keys(khodamData)[Math.floor(Math.random() * Object.keys(khodamData).length)];
        localStorage.setItem(name, khodam);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Nama Anda: ${name}</p><p>Jenis Khodam Anda: ${khodam}</p><p>Makna Khodam: ${khodamData[khodam]}</p>`;

    // Membaca teks dengan suara
    const textToSpeak = `Nama Anda: ${name}. Jenis Khodam Anda: ${khodam}. Makna Khodam: ${khodamData[khodam]}`;
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.lang = 'id-ID'; // Set bahasa ke bahasa Indonesia
    window.speechSynthesis.speak(speech);
});
