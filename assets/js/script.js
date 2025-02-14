document.addEventListener("DOMContentLoaded", function () {
    // Animation du texte
    const message = "Aujourd’hui, le monde célèbre un jour spécial, celui où une étoile est née pour illuminer nos vies. ✨ Que cette journée soit remplie de sourires, de bonheur et de surprises à la hauteur de ta lumière. Tu es une mélodie douce dans le tumulte du quotidien, un éclat de joie qui réchauffe chaque instant. Que cette nouvelle année t’apporte tout ce que ton cœur désire et bien plus encore. Continue d’être cette merveilleuse personne qui embellit le monde par sa présence. Joyeux anniversaire à toi,  joyce! ";
    let i = 0;

    function typeText() {
        if (i < message.length) {
            document.getElementById("message").textContent += message.charAt(i);
            i++;
            setTimeout(typeText, 100);
        } else {
            // Après 5 secondes, le message disparaît et l'animation commence
            setTimeout(startAnimation, 5000);
        }
    }

    setTimeout(() => {
        typeText();
    }, 1000);
});

// Fonction pour démarrer les confettis et afficher l’image
function startAnimation() {
    // Masquer le message
    document.getElementById("content").classList.add("opacity-0", "pointer-events-none");

    // Afficher le canvas
    const canvas = document.getElementById("confetti");
    canvas.classList.remove("hidden");

    // Lancer les confettis
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 5 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speedY;
            if (p.y > canvas.height) p.y = 0;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }

    animate();

    // Afficher l’image surprise après 1 seconde
    setTimeout(() => {
        document.getElementById("surprise-image").classList.add("show");
    }, 1000);
}
