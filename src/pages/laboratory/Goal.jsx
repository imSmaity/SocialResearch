import { TextField } from "@mui/material";

const Goal=({data,handleResearch,isCompleted})=>{
    return(
      <>
        <TextField
          sx={{mt:3}}
          id="outlined-multiline-static"
          fullWidth
          name='goal'
          value={data.goal}
          label="Goal"
          disabled={isCompleted}
          multiline
          rows={3}
          onChange={handleResearch}
        />
      </>
    )
  }
  export default Goal;