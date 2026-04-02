
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');
    const themeSwitch = document.getElementById('checkbox');

    const getBallColor = (number) => {
        if (number <= 10) return 'ball-color-1';
        if (number <= 20) return 'ball-color-2';
        if (number <= 30) return 'ball-color-3';
        if (number <= 40) return 'ball-color-4';
        return 'ball-color-5';
    };

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        lottoNumbersContainer.innerHTML = '';
        numbers.forEach(number => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball', getBallColor(number));
            ball.textContent = number;
            lottoNumbersContainer.appendChild(ball);
        });
    };

    const triggerFireworks = () => {
        for (let i = 0; i < 30; i++) {
            const firework = document.createElement('div');
            firework.classList.add('fireworks');
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.animationDelay = `${Math.random()}s`;
            document.body.appendChild(firework);
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }
    };

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
        triggerFireworks();
    });

    // Theme switcher
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', function() {
        if(this.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Initial generation
    displayNumbers(generateLottoNumbers());
});
