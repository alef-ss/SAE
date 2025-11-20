function comportamentoCheckboxEquipamento(clickedCheckbox) {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="tipo_equipamento"]'
  );

  // garante apenas uma selecionada
  checkboxes.forEach((checkbox) => {
    if (checkbox !== clickedCheckbox) {
      checkbox.checked = false;
    }
  });

  // controla as sections
  controlarSections(clickedCheckbox);
}

function controlarSections(checkbox) {
  const secaoSalas = document.getElementById('secao-salas');
  const secaoGuardiao = document.getElementById('secao-guardiao');

  // sempre esconde tudo primeiro
  if (secaoSalas) secaoSalas.style.display = 'none';
  if (secaoGuardiao) secaoGuardiao.style.display = 'none';

  // agora mostra o que deve aparecer
  if (checkbox.id === 'informatica') {
    if (secaoSalas) secaoSalas.style.display = 'block';
  }

  if (checkbox.id === 'guardiao') {
    if (secaoGuardiao) secaoGuardiao.style.display = 'block';
  }
}

function comportamentoCheckboxSalas(clickedCheckbox) {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="sala"]'
  );

  checkboxes.forEach((checkbox) => {
    if (checkbox !== clickedCheckbox) {
      checkbox.checked = false;
    }
  });
}

function comportamentoCheckboxTurno(clickedCheckbox) {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="selecao"]'
  );

  checkboxes.forEach((checkbox) => {
    if (checkbox !== clickedCheckbox) {
      checkbox.checked = false;
    }
  });
}
