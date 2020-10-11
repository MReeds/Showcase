const remoteURL = "http://localhost:5002"
let APIManager = {

    get(id, database) {
        return fetch(`${remoteURL}/${database}/${id}`).then(e => e.json())
    },
    getAndExpand(id, database, expanded) {
        return fetch(`${remoteURL}/${database}/${id}?_expand=${expanded}`).then(e => e.json())
    },
    getAll(database) {
        return fetch(`${remoteURL}/${database}`).then(e => e.json())
    },
    //http://localhost:5002/favorites/1/comments?userId=1
    //http://localhost:5002/favorites/1/comments?userId=1 this one works
    getCommentsFromOneFaveAndSingleUser(firstResource, id, secondResource, userId) {
        return fetch(`${remoteURL}/${firstResource}/${id}/${secondResource}?userId=${userId}`)
            .then(result => result.json())
    },

    getAllWithUserId(database, userId, secondResource) {
        return fetch(`${remoteURL}/${database}/?userId=${userId}&_embed=${secondResource}`).then(e => e.json())
    },                  //http://localhost:5002/favorites?_sort=votes&_order=asc&userId=1&_embed=comments this one works

    delete(id, database) {
        return fetch(`${remoteURL}/${database}/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    post(newObject, database) {

        return fetch(`${remoteURL}/${database}`, {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(newObject)
        }).then(data => data.json())
    },
    update(editedObject, database) {
        return fetch(`${remoteURL}/${database}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
    updateComment(editedObject, database, id) {
        return fetch(`${remoteURL}/${database}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
}
export default APIManager