let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill01 = document.getElementById('hill1');
let hill04 = document.getElementById('hill4');
let hill05 = document.getElementById('hill5');

const maxScroll = 400;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value > maxScroll) {
        value = maxScroll;
    }

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill05.style.left = value * 1.5 + 'px';
    hill04.style.left = value * -1.5 + 'px';
    hill01.style.top = value * 1 + 'px';
})

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
});

document.getElementById('mute-sound-btn').addEventListener('click', () => {
    const audio = document.getElementById('sound');
    if (audio.muted) {
        audio.muted = false;
        document.getElementById('mute-sound-btn').textContent = 'Silenciar';
    } else {
        audio.muted = true;
        document.getElementById('mute-sound-btn').textContent = 'Activar';
    }
});

window.addEventListener('load', () => {
    const audio = document.getElementById('sound');
    if (!audio.autoplay) {
        audio.play().catch(error => {
            console.log("La reproducción automática fue bloqueada.");
        });
    }
});

let autoScrollInterval;
const scrollStep = 1;
const scrollInterval = 15;

document.getElementById('autoscroll-btn').addEventListener('click', () => {
    if (!autoScrollInterval) {
        autoScrollInterval = setInterval(() => {
            window.scrollBy(0, scrollStep);
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
                document.getElementById('autoscroll-btn').textContent = 'Autoscroll';
            }
        }, scrollInterval);
        document.getElementById('autoscroll-btn').textContent = 'Detener Autoscroll';
    } else {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        document.getElementById('autoscroll-btn').textContent = 'Autoscroll';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#img');
    

    function checkVisibility() {
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          image.style.opacity = '1';
          image.classList.add('animate');
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
  });