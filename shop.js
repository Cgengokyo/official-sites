let radio_btns = document.querySelectorAll(`input[type='radio'][name='type']`);
for (let target of radio_btns) {
  target.addEventListener(`change`, () => {
    document.querySelector(`#output`).innerHTML = `${target.value} : ${target.checked}`;
  });
}
