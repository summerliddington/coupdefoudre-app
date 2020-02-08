const remoteURL = "http://localhost:5002"

export default {
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(result => result.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(result => result.json())
  },
  getUserEmail(email){
    return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json())
  },
  getItems() {
    return fetch(`${remoteURL}/items`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/items/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
    post(newItem) {
      return fetch(`${remoteURL}/items`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newItem)
      }).then(data => data.json())
  },
    update(editedItem) {
      return fetch(`${remoteURL}/items/${editedItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedItem)
      }).then(data => data.json());
    }
}
