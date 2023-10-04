import { body } from './baseElements';
import renderButtons from './buttons';

const renderMain = () => {
  const markup = `
  <main class="wrapper">
    <div class="output">
      <p></p>
    </div>
    <div class="input">
      ${renderButtons()}
    </div>
  </main>
`;

  body.insertAdjacentHTML('beforeend', markup);
};

export default renderMain;
