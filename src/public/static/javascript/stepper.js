const input = document.getElementById('quantidade');
const add = document.querySelector('.quant-btn.add');
const sub = document.querySelector('.quant-btn.sub');

add.onclick = () => {
  const val = parseInt(input.value) || 1;
  if (val < 40) input.value = val + 1;
};

sub.onclick = () => {
  const val = parseInt(input.value) || 1;
  if (val > 1) input.value = val - 1;
};
