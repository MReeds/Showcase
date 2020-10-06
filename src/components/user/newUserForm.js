import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import APIManager from "../../modules/APIManager";

const NewUserForm = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    let [select, setSelect] = useState(false);
    const [usaStateId, setUSAStateId] = useState(0);
  

    const handleNumberfieldChange = (evt, name) => {
        const stateToChange = { ...usaStateId };
        stateToChange[evt.target.id] = +evt.target.value;
        setUSAStateId(stateToChange);
        console.log(stateToChange)
    };
    const [usaState, setUSAState] = useState("");
    const [usaStates, setNewUSA] = useState([]);

   const [user, setUser] = useState({ firstName: "", lastName: "", city: "", stateId: "", linkedIn: "", resume: "", });
    const handleFieldChange = e => {
        //   Setting state each time a key stroke happens in the targetted id of a prop from verse
        const stateToChange = { ...user };
        stateToChange[e.target.id] = e.target.value;
        setUser(stateToChange);
        const secondstateToChange = { ...usaStateId };
        secondstateToChange[e.target.id] = +e.target.value;
        setUSAStateId(secondstateToChange);
        console.log(e.target.id)
    };

    const onSelectHandler = (e) => {
        setSelect(true);
        setUSAState(e.target.value);
        const stateToChange = { ...usaState };
        stateToChange["usaState"] = e.target.value;
        setUSAState(stateToChange);
    };

    const getUSAStates = () => {
        return APIManager.getAll("states").then((data) => {
            setNewUSA(data);
            console.log(data);
        });
    };
    let createNewUser = e => {
        e.preventDefault();
        // if a user doesnt write anything for the book or chapter field they will get an alert. If they do then it will post that entry and get all of them
        if (
            user.firstName === "" ||
            user.lastName === "" ||
            user.city === "" ||
            user.linkedIn === "" 
            // user.resume === "" 
            // user.stateId === ""
        ) {
            window.alert("Please fill out all fields");
        } else {
            APIManager.post("users", user).then(props.getusers);
            //   Once manager posts new user and gets the list again its resets the value of the text boxes to an empty string below
            e.target.firstName.value = "";
            e.target.lastName.value = "";
            e.target.city.value = "";
            e.target.linkedIn.value = "";
            e.target.resume.value = "";
            // e.target.stateId.value = "";
        }
    };




    useEffect(() => {
        getUSAStates();
    }, []);
    const handleUpload = async (e) => {
        let files = e.target.files;
        let data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "showcaseApp");
        console.log(data);
        setLoading(true);
        let responseUrl = "https://api.cloudinary.com/v1_1/mreeds123/image/upload";
        let response = await fetch(`${responseUrl}`, {
            method: "POST",
            body: data,
        });
        let file = await response.json();
        console.log(file);
        setImage(file.secure_url);
        setLoading(false);
    };
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const [unitedStateId, setCount] = useState("");
    const classes = useStyles(props);
    const handleChange = (event, name) => {

        console.log(event.target.value)
        setCount(event.target.value);


    };
    return (
        <div>
            <form onSubmit={createNewUser}>
                <input placeholder="FirstName" id="firstName" type="input" onChange={handleFieldChange} />
                <input placeholder="LastName" id="lastName" type="input" onChange={handleFieldChange} />
                <input  placeholder="city" id="city" type="input" onChange={handleFieldChange} />
                <input placeholder="linkedin"  id="linkedIn" type="input" onChange={handleFieldChange} />
                <input placeholder="resume"  id="resume" type="file" onChange={handleFieldChange} />
                <input placeholder="photo"  id="cloudinary" type="file" onChange={handleUpload} />
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">
                            Pick Your State
            </InputLabel>
                        <Select
                            className={classes.selectEmpty}
                            displayEmpty
                            labelId="unitedStateId"
                            id="stateId"
                            value={unitedStateId}
                            onChange={(e) => {
                                handleChange(e, "unitedStateId")
                                onSelectHandler(e)
                                handleNumberfieldChange(e)
                            }
                            }
                        >
                            {usaStates.map((usState, i) => {
                                return (
                                    <MenuItem key={i} value={usState.id}>
                                        {usState.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>Select One</FormHelperText>
                    </FormControl>
                </div>
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                        <img src={image} style={{ width: "100px" }} />
                    )}
                    <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default NewUserForm;
