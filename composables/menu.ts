
export const useMenu = () => {

  const menu = ref()

  function showMenu(id: number) {
    fetch("http://localhost:60711/api/Menu/showMenu?id=" + id, {
      method: "get"
    }).then(res => {
      return res.json(); // JSON sonucunu döndüren bir Promise döner
    }).then(menuData => {
      menu.value = menuData;
      console.log(menuData);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    menu,
    showMenu
  }
}