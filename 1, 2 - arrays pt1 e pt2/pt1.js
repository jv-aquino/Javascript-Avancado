const Lista = (() => {
  const items = [];

  function getAll() {
    return items;
  }

  function removerAll() {
    alert('oi')
    // todo
  }

  function hasItem(item) {
    // todo
  }

  function addItem(item) {
    if (hasItem(item)) {
      return console.log('item já existe!!!')
    }
    // todo
  } 
  
  function removerItem(item) {
    // todo
  }

  return { getAll, addItem, removerItem, removerAll };
})()

const UI = (() => {
  let ul = document.querySelector('#lista');

  function refreshList() {
    // re-renderizar lista
  }

  return { refreshList }
})()