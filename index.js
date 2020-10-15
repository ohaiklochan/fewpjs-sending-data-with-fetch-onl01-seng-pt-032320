<<<<<<< HEAD
function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let h2 = document.createElement('h2');
      h2.innerHTML = object.id;
      document.body.appendChild(h2);
      console.log(object);
    })
  .catch(function(error) {
    let h3 = document.createElement('h3');
    h3.innerHTML = error.message;
    document.body.appendChild(h3);
    console.log(error.message);
=======
function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    method: 'POST',
    body: {
      firstName: "Jason",
      registryMessage: "Hello, this is my message to the registry"
    }
  })
  .then(function(result) => {
    return result.json();
  }).then(function(json) {
    return json.message;
  });
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Byron the Poodle",
      "registryMessage": "Bite!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(x) {
    return ":(";
>>>>>>> 493bd3aa2a067aaa4af3286c377f4579b49f3f22
  });
}