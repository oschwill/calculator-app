import { body } from './baseElements';

const renderHeader = () => {
  const markup = `
    <header class="header">
      <h1>calc</h1>
      <p>THEME</p>
      <!-- ! TOGGLE SWITCH -->
      <div class="toggle-switch">
        <label for="switch"><span>1</span><span>2</span><span>3</span></label>
        <input type="range" min="0" max="2" value="0" class="toggle-color" />
      </div>
    </header>
  `;

  body.insertAdjacentHTML('beforeend', markup);
};

export default renderHeader;
