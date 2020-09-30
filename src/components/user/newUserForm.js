import React, { useState, useEffect } from "react";
import APIManager from '../../modules/APIManager'
import { MaterialStatesSelect } from '../material/MaterialStatesSelect'
const NewUserForm = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({ firstName: "", lastName: "",city: "",stateId: 0,linkedIn: "",resume: "",})
    const [usStates, setUsStates] = useState('')
    const [usStateId, setUsStateId] = useState(0)

    const handleNumberfieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = +evt.target.value;
        setUsStates(stateToChange);

    };


    const handleFieldChange = e => {
        //   Setting state each time a key stroke happens in the targetted id of a prop from verse
        const stateToChange = { ...user };
        stateToChange[e.target.id] = e.target.value;
        setUser(stateToChange);
    };
    const handleUpload = async e => {
        let files = e.target.files
        let data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'showcaseApp')
        console.log(data)
        setLoading(true)
        let responseUrl = 'https://api.cloudinary.com/v1_1/mreeds123/image/upload'
        let response = await fetch(`${responseUrl}`,
            {
                method: "POST",
                body: data
            })
        let file = await response.json()
        console.log(file)
        setImage(file.secure_url)
        setLoading(false)
    };


    return (
        < div >
            <form>
                <input id="firstName" type="input" onChange={handleFieldChange} />
                <input id="LastName" type="input" onChange={handleFieldChange} />
                <input id="city" type="input" onChange={handleFieldChange} />
                <input id="linkedin" type="input" onChange={handleUpload} />
                <input id="resume" type="file" onChange={handleUpload} />
                <MaterialStatesSelect
                    handleNumberfieldChange={handleNumberfieldChange}
                    {...props, USAStatesArray} />
                {
                    loading ? (
                        <h3>
                            Loading...
                        </h3>
                    ) : (
                            <img src={image} style={{ width: '300px' }} />
                        )
                }
            </form>
        </div >
    );
};
export default NewUserForm;
