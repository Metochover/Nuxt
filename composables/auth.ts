export const useAuth = () => {

  const user = ref()

  function showUser(id: number) {
    fetch("http://localhost:60711/api/Auth/showUser?id=" + id, {
      method: "get"
    }).then(res => {
      return res.json(); // JSON sonucunu döndüren bir Promise döner
    }).then(userData => {
      user.value = userData;
      console.log(userData);
    }).catch(error => {
      console.error(error);
    });
  }

  function SignUpUser(formdata: any) {
    fetch("http://localhost:60711/api/Auth/SignUpUser?", {
      method: "post"
    }).then(res => {
      return res.json(); // JSON sonucunu döndüren bir Promise döner
    }).then(userData => {
      formdata.value = userData;
      console.log(userData);
    }).catch(error => {
      console.error(error);
    });
  }

  return {
    user,
    showUser, SignUpUser
  }
}