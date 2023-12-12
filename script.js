const abspannElement = document.getElementById('abspannElement');
    const textArray = [
        'Arbeitslos',
        'Autounfall',
        'Bandscheibenvorfall',
        'Chemieexplosion',
        'Diebstahl',
        'Einbruch'
    ];

    let index = 0;

    function changeText() {
        abspannElement.style.opacity = 0; // Setzen Sie die Opazität auf 0 vor dem Ändern des Textes
        setTimeout(() => {
            abspannElement.textContent = textArray[index];
            index = (index + 1) % textArray.length;
            abspannElement.style.opacity = 1; // Setzen Sie die Opazität auf 1 nach dem Ändern des Textes
        }, 1000); // Warten Sie 1000 Millisekunden (1 Sekunde) vor dem erneuten Anzeigen
    }

    setInterval(changeText, 6000); // Ändert den Text alle 6 Sekunden