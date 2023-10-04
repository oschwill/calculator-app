import { body } from './baseElements';

const renderAttribution = () => {
  const markup = `
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>
  `;

  body.insertAdjacentHTML('beforeend', markup);
};

export default renderAttribution;
