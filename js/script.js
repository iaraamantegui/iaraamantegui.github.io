// Placeholder for potential interactivity
console.log("Orchid Showcase Website Loaded.");
console.log("Intro section:", document.querySelector(".intro"));

function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
}