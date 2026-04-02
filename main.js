
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');

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

    // Initial generation
    displayNumbers(generateLottoNumbers());
});
