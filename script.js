
function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if(email && senha) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Preencha todos os campos!');
    }
}

function logout() {
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}

function showPlaylist(estilo) {
    const playlists = {
        sertanejo: [`<iframe src="https://www.youtube.com/embed/1j9ro77HxW8"></iframe>`, `<iframe src="https://www.youtube.com/embed/GJZ4N03QcJg"></iframe>`],
        forro: [`<iframe src="https://www.youtube.com/embed/C2wJ7e33ecE"></iframe>`, `<iframe src="https://www.youtube.com/embed/vWSKD1kQIgE"></iframe>`],
        gospel: [`<iframe src="https://www.youtube.com/embed/5mXSbF7_3-Q"></iframe>`],
        funk: [`<iframe src="https://www.youtube.com/embed/ULx9k2RZC4g"></iframe>`],
        eletronica: [`<iframe src="https://www.youtube.com/embed/IcrbM1l_BoI"></iframe>`],
        mpb: [`<iframe src="https://www.youtube.com/embed/hR-NXv5TmaI"></iframe>`]
    };
    const area = document.getElementById('contentArea');
    area.innerHTML = playlists[estilo].join("<br><br>");
}
