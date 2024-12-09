// Placeholder for potential interactivity
console.log("Orchid Showcase Website Loaded.");
console.log("Intro section:", document.querySelector(".intro"));

function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const modelViewerContainers = document.querySelectorAll('.model-viewer-container');

    modelViewerContainers.forEach(container => {
        const hotspots = container.querySelectorAll('.Hotspot');
        const defaultMessage = container.querySelector('.default-message');
        const hotspotContent = container.querySelector('.hotspot-content');
        const titleElement = container.querySelector('.hotspot-title');
        const textElement = container.querySelector('.hotspot-text');

        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', function() {
                const title = this.getAttribute('data-title');
                const info = this.getAttribute('data-info');

                // Hide default message and show hotspot content
                defaultMessage.style.display = 'none';
                hotspotContent.style.display = 'block';

                // Update content
                titleElement.textContent = title;
                textElement.textContent = info;
            });
        });
    });
});