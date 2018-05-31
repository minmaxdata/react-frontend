const api = "http://localhost:3001"


let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function getCategories () {
  return fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .catch(function() {
    console.log('error');
});
    }
  // This method retrieves the list of posts (by category if not empty).
  // export const loadPosts = (category = '') => {
  // const url = XXXXXXXXX;
  //
  // return fetch(url, HEADERS)
  //     .then(XXXXXXXX)
  //     .catch(XXXXXX);
  // }
  //
  // // This method retrieved the list of categories.
  // export const loadCategories = () => {
  // const url = XXXXXXX;
  //
  // return fetch(url, HEADERS)
  //     .then(XXXXXXXX)
  //     .catch(XXXXXX);
  // }
