import React, { useState } from "react";
import * as firebase from "../../config/firebaseConfig.js";
//add import for storage
const NewUserForm = (props) => {
    const allInputs = { imgUrl: '' }
    const [image, setImage] = useState(null)
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    // console.log(imageAsFile)?


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

   const handleUpload = () => {
        const uploadTask = firebase.storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                firebase.storage.ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {

                })
            }
        )

    }


    return (
        <div>
            <form>
                <input
                    type="file"
                    onChange={handleChange}
                />
                <button onclick={handleUpload}>upload to firebase</button>
            </form>
        </div>
    );
};
export default NewUserForm;
