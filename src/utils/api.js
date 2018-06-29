const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getCategories = async () => {
  const request = new Request(`${api}/categories`, { headers: headers });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const getPosts = async () => {
  const request = new Request(`${api}/posts`, { headers: headers });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const getPostById = async id => {
  const request = new Request(`${api}/posts/${id}`, { headers: headers });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const getPostsByCategory = async id => {
  const request = new Request(`${api}/${id}/posts`, { headers: headers });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const getComments = async id => {
  const request = new Request(`${api}/posts/${id}/comments`, {
    headers: headers
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const getComment = async id => {
  const request = new Request(`${api}/comments/${id}`, { headers: headers });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const deleteComment = async id => {
  const request = new Request(`${api}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const addComment = async data => {
  const request = new Request(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const editComment = async data => {
  const request = new Request(`${api}/comments/${data.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const voteComment = async data => {
  const request = new Request(`${api}/comments/${data.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: data.option })
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const votePost = async data => {
  const request = new Request(`${api}/posts/${data.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: data.option })
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const editPost = async data => {
  const request = new Request(`${api}/posts/${data.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export const addPost = data =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(function() {
      console.log("error state");
    });

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  })
    .then(res => res.json())
    .catch(function() {
      console.log("error state");
    });
