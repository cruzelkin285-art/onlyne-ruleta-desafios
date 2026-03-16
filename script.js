const ruleta = document.getElementById('ruleta');
const girarBtn = document.getElementById('girar');
const resultadoDiv = document.getElementById('resultado');

const desafios = [
    "¡Baila como un pollo durante 30 segundos!",
    "¡Canta una canción con voz de opereta!",
    "¡Haz 10 saltos de rana!",
    "¡Cuenta un chiste malo!",
    "¡Imita a un animal!",
    "¡Di algo en otro idioma!",
    "¡Haz una pose ridícula!",
    "¡Grita '¡Soy el rey del mundo!'!"
];

let girando = false;

girarBtn.addEventListener('click', () => {
    if (girando) return;
    girando = true;
    resultadoDiv.classList.remove('mostrar');
    
    const grados = Math.floor(Math.random() * 360) + 360 * 5; // Múltiples vueltas
    ruleta.style.transform = `rotate(${grados}deg)`;
    
    setTimeout(() => {
        const anguloFinal = grados % 360;
        const seccion = Math.floor(anguloFinal / 45);
        const desafio = desafios[seccion];
        resultadoDiv.textContent = `Tu desafío: ${desafio}`;
        resultadoDiv.classList.add('mostrar');
        girando = false;
    }, 4000);
});