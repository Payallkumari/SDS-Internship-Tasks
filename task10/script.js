document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.take-test-btn').addEventListener('click', function() {
        document.getElementById('mcq-section').classList.remove('hidden');
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        let score = 0;
        const answers = document.querySelectorAll('#mcq-form input[type="radio"]:checked');
        answers.forEach(answer => {
            score += parseInt(answer.value);
        });
        document.getElementById('score').innerText = score;
        document.getElementById('score-section').classList.remove('hidden');
    });

    document.getElementById('enroll-btn').addEventListener('click', function() {
        alert('You are about to enroll!');
        document.getElementById('form-section').style.display = 'flex';
        document.getElementById('form-section').style.pointerEvents = 'auto';
        document.body.style.pointerEvents = 'none';
    });

    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('form-section').style.display = 'none';
        document.body.style.pointerEvents = 'auto';
    });

    document.querySelector('.submit-btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('form-section').style.display = 'none';
        document.body.style.pointerEvents = 'auto';
    });
});
