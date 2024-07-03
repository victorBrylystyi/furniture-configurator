// import { Grid, Radio } from "@mui/material";
import { useCallback } from "react";

let bit = false;

export const Overlay = () => {

    const showHide = useCallback(() => {
        bit = !bit;
        const overlay = document.getElementById('overlay');

        if (overlay) {
            if (bit) {
                overlay.style.height = '100px';
            } else {
                overlay.style.height = '500px';
            }
        }



    }, [])

    return <>
        <div id="overlay">
            <div className="overlayHeader">
                <button onClick={showHide}> Show/hide </button>
                <button> Download </button>
            </div>
            <div className="overlayContent"> 
            {/* <Grid>
                <Radio
                // checked={radioButton === 'A'}
                // onChange={handleChange}
                value="A"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                // checked={radioButton === 'B'}
                // onChange={handleChange}
                value="B"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                // checked={radioButton === 'C'}
                // onChange={handleChange}
                value="C"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'C' }}
                />
            </Grid> */}
            </div>
        </div>
        <div id="colorControll">
            <div className="pallete">

            </div>
        </div>
    </>
};