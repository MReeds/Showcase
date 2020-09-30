import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export function MaterialStatesSelect(props) {
    const classes = useStyles();
    const [stateId, setCount] = React.useState("");

    const handleChange = (event, name) => {

        console.log(name)
        setCount(event.target.value);


    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Pick Your State</InputLabel>
                <Select
                    name={props.USAStatesArray}

                    labelId="unitedStateId"
                    id="id"
                    // value={usState.id}
                    onChange={(e) => {
                        handleChange(e, "unitedStateId")
                        props.handleNumberfieldChange(e);
                    }}
                >
                    {props.USAStatesArray.map((usState, i) => (
                        <MenuItem key={i} value={usState.id}>
                            {usState.name}
                        </MenuItem>

                    ))}
                </Select>
                <FormHelperText>Select One</FormHelperText>
            </FormControl>
        </div>
    );
}