import { TextField } from "@mui/material";

const Description=({data,handleResearch,isCompleted})=>{
    return(
      <>
        <TextField
          sx={{mt:3}}
          id="outlined-multiline-static"
          fullWidth
          label="Description"
          name='description'
          disabled={isCompleted}
          value={data.description}
          onChange={handleResearch}
          multiline
          rows={10}
        />
      </>
    )
  }

  export default Description;