import { Radio, Grid, RadioGroup, FormControlLabel, FormControl, InputLabel, SelectChangeEvent, MenuItem, Select } from "@mui/material";
import { EventHandler, useCallback, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { colors, state, updateTableCoverColor, updateTableHeight, updateTableMaterial } from "../../store";
import { MaterialTypes, TableHeightTypes } from "../../helpers/types";
import { useSnapshot } from "valtio";



let bit = false;

export const Overlay = () => {

    const {tableHeight} = useSnapshot(state);

    const showHide = useCallback(() => {
        bit = !bit;
        const overlay = document.getElementById('overlay');
        const overlayContent = document.querySelector('.overlayContent') as HTMLElement;


        if (overlay) {
            if (bit) {
                overlay.style.height = '100px';
                overlayContent.style.display = 'none';

            } else {
                overlay.style.height = '500px';
                overlayContent.style.display = 'block';
            }
        }



    }, [])

    const handleRadio = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        updateTableHeight(event.target.value as TableHeightTypes);
    }, []);

    // const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value);
      updateTableMaterial(event.target.value as MaterialTypes);
    };

    return <>
        <div id="overlay">
            <div className="overlayHeader">
                <button onClick={showHide}> Show/hide </button>
                <button> Download </button>
            </div>
            <div className="overlayContent"> 
                <Box component="div" >
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={TableHeightTypes.default}
                        name="radio-buttons-group"
                        onChange={handleRadio} 
                        value={tableHeight}
                    >
                        <FormControlLabel value={TableHeightTypes.default} control={<Radio />} label="default" />
                        <FormControlLabel value={TableHeightTypes.h1} control={<Radio />} label={TableHeightTypes.h1} />
                        <FormControlLabel value={TableHeightTypes.h2} control={<Radio />} label={TableHeightTypes.h2} />
                        <FormControlLabel value={TableHeightTypes.h3} control={<Radio />} label={TableHeightTypes.h3} />
                    </RadioGroup>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Materials</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            // value={MaterialTypes.default}
                            defaultValue={MaterialTypes.default}
                            onChange={handleChange}
                            label="Materials"
                        >
                        {/* <MenuItem value="">
                            <em>default</em>
                        </MenuItem> */}
                        <MenuItem value={MaterialTypes.default}>default</MenuItem>
                        <MenuItem value={MaterialTypes.v1}>v1</MenuItem>
                        <MenuItem value={MaterialTypes.v2}>v2</MenuItem>
                        {/* <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
        <div id="colorControll">
            <div className="pallete">
                {colors.map((color, index) => (
                    // <div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
                    <Box 
                        key={color + index} 
                        component="div" 
                        className="circle"
                        style={{
                            background: color
                        }}
                        onClick={() => updateTableCoverColor(index)}

                    />
                ))}
            </div>
        </div>
    </>
};