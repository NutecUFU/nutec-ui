export function firstLogin() {
  const { NODE_ENV } = process.env;
  return  localStorage.getItem('nc-us');
}

export function saveUserAuth(data) {
  localStorage.setItem('nc-us', JSON.stringify(data));
}

export function getUserAuth(){
  const data = localStorage.getItem('nc-us');
  return JSON.parse(data);
}

export function getToken() {
  const storageData = localStorage.getItem('nc-us');

  if (storageData) {
    const user = JSON.parse(storageData);
    const { token } = user;
    return token;
  }

  return '';
}

export function logout(){
  localStorage.removeItem('nc-us');
}