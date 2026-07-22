class MenaceVideoFacade extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', this.load.bind(this), { once: true });
  }

  load() {
    const videoId = this.dataset.videoId;
    if (!videoId) return;

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`);
    iframe.setAttribute('title', this.dataset.title || 'Animation');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );
    iframe.setAttribute('allowfullscreen', '');
    iframe.classList.add('menace-video-facade__iframe');

    this.innerHTML = '';
    this.appendChild(iframe);
    this.classList.add('menace-video-facade--playing');
  }
}

customElements.define('menace-video-facade', MenaceVideoFacade);
