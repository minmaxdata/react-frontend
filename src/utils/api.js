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
    //.then(({ categories }) => categories.map(({ category}) => category))
  }
