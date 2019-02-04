/**
 * esm-select-url-switch
 * Creates a change event listener for all targeted select elements where
 * you wish for the page to follow the url located in the option value
 * @param {*} selectSelector A selector for select elements
 */
export default function selectUrlSwitch(selectSelector) {
  const selects = document.querySelectorAll(selectSelector);
  if (selects.length) {
    selects.forEach((select) => {
      select.addEventListener('change', () => {
        window.location.href = select.value;
      });
    });
  }
}
