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
export function getPosts () {
  return fetch(`${api}/posts`, { headers })
    .then((res) => res.json())
    .catch(function() {
      console.log('error');
  });
}

export const addPost = data =>
   fetch (`${api}/posts`,
    { method: 'post',
    headers: {
     ...headers,
      "Content-Type": "application/json"
    },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(function () {
        console.log('error state')
      });

export const deletePost = id =>
    fetch (`${api}/posts/${id}`, {
      method: 'DELETE',
      headers: {
       ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })
      .then(res => res.json())
      .catch(function () {
        console.log('error state')
      });
