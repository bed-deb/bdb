function login() {
        var password = document.getElementById('password').value;

        // Tablica przechowująca poprawne hasła
        var correctPasswords = ["Lz_4!k$Xr@v#Qm", "Pt_6!h$Kq@d#Lm", "Bn_6!g$Kr@x#Vz", "Qz_7!t$Wk@p#Hd", "Zk_5!s$Vp@q#Rm", "Bn_6!g$Kr@x#Vz", "Rt_8!k$Jq@v#Zp", "polak"]; // Możesz dodać więcej haseł tutaj

        // Sprawdzenie, czy wprowadzone hasło znajduje się w tablicy
        if (password === "") {
            alert("Proszę wprowadzić hasło.");
        } else if (correctPasswords.includes(password)) {
            // Jeśli hasło jest poprawne, przekierowanie na stronę
            window.location.href = 'dashboard.html';
        } else {
            // Jeśli hasło jest niepoprawne
            alert("Niepoprawne hasło.");
        }
    }






