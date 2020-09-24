import React, { useState } from "react";
import { storage } from "./firebase/firebase";
//add import for storage
export default function newUserForm() {

    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allImputs)

    console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }
    return (
        <div className="App">
                  //form for handling file upload
            <form>
                <input
                    type="file"
                    // allows you to reach into your file directory and upload image to the browser
                />
            </form>
        </div>
    );
}
