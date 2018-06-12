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
  let response = await fetch(`${api}/categories`, { headers });
  let json = await response.json();
  return json;
};

export const getPosts = async () => {
  let request = new Request(`${api}/posts`, { headers: headers });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const getPostById = async (id) => {
  let request = new Request(`${api}/posts/${id}`, { headers: headers });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const getComments = async (id) => {
  let request = new Request(`${api}/posts/${id}/comments`, {
    headers: headers
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const getComment = async (id) => {
  let request = new Request(`${api}/comments/${id}`, { headers: headers });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const deleteComment = async (id) => {
  let request = new Request(`${api}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const addComment = async (data) => {
  let request = new Request(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const editComment = async (data) => {
  let request = new Request(`${api}/comments/${data.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
};

export const voteComment = async (data) => {
  let request = new Request(`${api}/comments/${data.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'option':data.option})
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
}

export const votePost = async (data) => {
  let request = new Request(`${api}/posts/${data.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({'option':data.option})
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
}

export const editPost = async (data) => {
  let request = new Request(`${api}/posts/${data.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  let response = await fetch(request);
  let json = await response.json();
  return json;
}

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
