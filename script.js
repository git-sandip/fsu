// Adjust the marquee speed by calculating animation duration based on the text length and container width
const marqueeElement = document.querySelector('.marquee');
const marqueeText = marqueeElement.querySelector('span');
const marqueeTextWidth = marqueeText.offsetWidth;
const containerWidth = marqueeElement.parentElement.offsetWidth;
const animationDuration = (marqueeTextWidth + containerWidth) / 100;

marqueeElement.style.animationDuration = animationDuration + 's';