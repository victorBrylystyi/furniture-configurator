import { Box, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, SelectChangeEvent, MenuItem, Select, Button, FormLabel, Switch } from "@mui/material";
import { useCallback } from "react";
import { colors, state, updateTableCoverColor, updateTableHeight, updateTableMaterial, updateTVcontentType } from "../../store";
import { MaterialTypes, TableHeightTypes, TVContentTypes } from "../../helpers/types";
import { useSnapshot } from "valtio";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { drawRT } from "../../helpers/utils";
import { Color } from "three";
import { R3FRef } from "../../store/R3FStore";

export const Overlay = () => {

    const {tableHeight, tvContent} = useSnapshot(state);

    const handleRadio = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        updateTableHeight(event.target.value as TableHeightTypes);
    }, []);

    const handleChange = useCallback((event: SelectChangeEvent) => {
      updateTableMaterial(event.target.value as MaterialTypes);
    }, []);

    const handleDownloadButton = useCallback(() => {

        if (!state.rt || !R3FRef.current) return;

        const {gl, scene, camera} = R3FRef.current.getState();
        
        gl.setRenderTarget(state.rt);

        const c = new Color().setRGB(0.0, 0.0, 0.0, 'srgb-linear');
        gl.setClearColor(c, 0.0);
        gl.clearColor();
    
        gl.render( scene, camera );

        gl.setRenderTarget(null);

        drawRT(gl, state.rt, 'screenshot');

    }, []);
  
    return <>
        <div id="overlay">
            <div className="overlayHeader">
                <Button 
                    variant="outlined" 
                    startIcon={<CameraAltIcon />}
                    onClick={handleDownloadButton}
                >
                    Download
                </Button>
            </div>
            <div className="overlayContent"> 
                <Box 
                    component="div"
                    style={{
                        display:'flex',
                        flexDirection:'column'
                    }}
                >
                    <FormControl variant="standard" >
                        <FormLabel id="demo-simple-select-standard-label">Table height</FormLabel>
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
                    </FormControl>
                    <FormControl variant="standard" style={{marginTop: '20px'}}>
                        <InputLabel id="demo-simple-select-standard-label">Materials</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            defaultValue={MaterialTypes.default}
                            onChange={handleChange}
                            label="Materials"
                        >
                            <MenuItem value={MaterialTypes.default}>default</MenuItem>
                            <MenuItem value={MaterialTypes.v1}>Wood 1</MenuItem>
                            <MenuItem value={MaterialTypes.v2}>Wood 2</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset" sx={{marginTop: '10px'}}> 
                        <FormControlLabel
                            value={tvContent === TVContentTypes.video}
                            control={<Switch color="primary" onChange={(e) => updateTVcontentType(e.target.checked)}/>}
                            label="TV content"
                            labelPlacement="end"
                        />
                    </FormControl>
                </Box>
            </div>
        </div>
        <div id="colorControll">
            <div className="pallete">
                {colors.map((color, index) => (
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