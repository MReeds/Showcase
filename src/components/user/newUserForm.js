import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import APIManager from "../../modules/APIManager";

const NewUserForm = (props) => {


    let [usaState, setUSAState] = useState("AL");

    let handleStatePick = (evt) => {
        setUSAState(evt.target.value)
        // setUser(({...user}) => user.stateId = usaState)
        const stateToChange = { ...user };
        // stateToChange[evt.target.id] = + usaState

        stateToChange.stateId = evt.target.value
        setUser(stateToChange);

        console.log('statePicked: ', user.stateId);
    };




    //USER STATE OBJECT
    const [user, setUser] = useState({ firstName: "", lastName: "", city: "", stateId: usaState, linkedIn: "", resume: "", });

    const handleFieldChange = evt => {
        const stateToChange = { ...user };
        stateToChange[evt.target.id] = evt.target.value;
        setUser(stateToChange);

    };


    //this returns a fetch to json database to return an array of objects
    const getUSAStates = () => {
        return APIManager.getAll("states").then((data) => {
            setUsaStateList(data);
            console.log(data);
        });
    };

    //this will create a new user object and post to api
    let createNewUser = e => {
        e.preventDefault();
        // if a user doesnt write anything for the book or chapter field they will get an alert. If they do then it will post that entry and get all of them
        if (
            user.firstName === "" ||
            user.lastName === "" ||
            user.city === "" ||
            user.linkedIn === "" ||
            // user.resume === "" ||
            user.stateId === ""
        ) {
            window.alert("Please fill out all fields");
        } else {
            APIManager.post(user,"users").then(props.getusers);
            //   Once manager posts new user and gets the list again its resets the value of the text boxes to an empty string below
            e.target.firstName.value = "";
            e.target.lastName.value = "";
            e.target.city.value = "";
            e.target.linkedIn.value = "";
            e.target.resume.value = "";
        }
    };



    // this watches for changes made in usStates
    const [usaStateList, setUsaStateList] = useState([]);
    useEffect(() => {
        getUSAStates();
    }, []);

    //this handles cloudnairy upload

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

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
    const classes = useStyles(props);

    //     // console.log("this is valueProp:",event.target.value)



    // };
    return (
        <div>
            <form onSubmit={createNewUser}>
                <input placeholder="FirstName" id="firstName" type="input" onChange={handleFieldChange} />
                <input placeholder="LastName" id="lastName" type="input" onChange={handleFieldChange} />
                <input placeholder="city" id="city" type="input" onChange={handleFieldChange} />
                <input placeholder="linkedin" id="linkedIn" type="input" onChange={handleFieldChange} />
                <input placeholder="resume" id="resume" type="file" onChange={handleFieldChange} />
                <input placeholder="photo" id="cloudinary" type="file" onChange={handleUpload} />
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
                            value={usaState}
                            onChange={handleStatePick}
                        >
                            <MenuItem value="" disabled>
                            </MenuItem>
                            {usaStateList.map((item, i) => (

                                <MenuItem key={i} id={"stateId"} value={item.id}>
                                    {item.name}
                                </MenuItem>

                            ))}
                        </Select>
                            <FormHelperText>{usaState.name}</FormHelperText>
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
