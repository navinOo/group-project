document.querySelector('.search-icon').addEventListener('click', () => {
    alert('Search functionality coming soon!');
});
       window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const text = document.querySelector('.background-text');
    const image = document.querySelector('.parallax-img');

    // Parallax effect for text
    const scale = Math.max(0.5, 1 - scrollY * 0.0001); // Shrink text (min scale: 0.5)
    const opacity = Math.max(0, 1 - scrollY * 0.01); // Fade text (min opacity: 0)
    text.style.transform = `translate(-50%, -50%) scale(${scale})`;
    text.style.opacity = opacity;

    // Parallax movement for image
    image.style.transform = `translateY(${scrollY * 0.2}px)`;
});