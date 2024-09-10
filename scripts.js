document.addEventListener('DOMContentLoaded', (event) => {
const boxes = document.querySelectorAll('#boxes .box','.service','#about, #history');
boxes.forEach((box, index) => {
	setTimeout(() => {
		box.style.opacity = 0;
		box.style.transform = 'translateY(20px)';
		box.style.transition = 'opacity 0.5s, transform 0.5s';
		setTimeout(() => {
			box.style.opacity = 1;
			box.style.transform = 'translateY(0)';
		}, index * 200);
	}, 500);
});

const showcaseText = document.querySelector('#showcase h1');
showcaseText.style.opacity = 0;
showcaseText.style.transform = 'translateY(-20px)';
showcaseText.style.transition = 'opacity 1s, transform 1s';
setTimeout(() => {
	showcaseText.style.opacity = 1;
	showcaseText.style.transform = 'translateY(0)';
}, 300);

const form = document.getElementById('contact');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// Here you would typically send the form data to a server
	// For demonstration, we'll just log to console and show an alert
	console.log('Form submitted');
	alert('Obrigado por entrar em contato! Retornaremos em breve.');
	form.reset();
});

// Simple form validation
const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
	input.addEventListener('blur', () => {
		if (!input.value) {
			input.style.borderColor = 'red';
		} else {
			input.style.borderColor = '#ddd';
		}
	});
});
});