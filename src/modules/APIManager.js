import * as firebase from "firebase/app";
import "firebase/database";

const APIManager = {
    createNewUser(userId) {
        return firebase
        .database()
        .ref("Devs/" + userId)
        .update({
            first_name: false,
            git_hub: false,
            last_name: false,
            linked_in: false,
            project_name: false
        });
    },
    updateUser(obj, userId) {
        return firebase
          .database()
          .ref("Devs/" + userId)
          .update(obj);
      },
    getUserInfo(userId) {
        return fetch(
        `https://showcase-2b78f.firebaseio.com/Devs.json?&equalTo="${userId}"`
        )
          .then((resp) => resp.json())
          .catch((error) => {
            window.location.reload();
            console.log(error);
          });
      },
}