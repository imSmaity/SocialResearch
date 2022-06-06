import { Button, TextField } from "@mui/material";


const Material=({materialData,isCompleted})=>{
    
    const {data,setData,material,setMaterial}=materialData;
  
    const handleMaterial=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setMaterial({...material,[name]:value})
    }
    const addMaterial=()=>{
      data.materials[(data.materials.length)-1].title=material.title
      data.materials[(data.materials.length)-1].name.push(material.name)
      setData({...data})
      setMaterial({...material,name:''})
    }
  
    return(
      <>
        <TextField
          sx={{mt:3}}
          fullWidth
          id="outlined-multiline-flexible"
          label="Material Title"
          value={material.title}
          disabled={isCompleted}
          name='title'
          onChange={handleMaterial}
        />
        <TextField
          sx={{width:'70%',mt:3}}
          id="outlined-multiline-flexible"
          label="Material Name"
          name='name'
          disabled={isCompleted}
          value={material.name}
          onChange={handleMaterial}
        />
        <Button sx={{width:'30%',p:2,mt:3}} disabled={isCompleted} onClick={addMaterial}>Add</Button>
      </>
    )
  }

export default Material;