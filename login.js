import React from 'react';
import { AppBar, Avatar, Button, Grid,Paper,TextField,Toolbar,Typography} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
const Login=()=>{
    const paperstyle={padding :20,height:'60vh',width:280,margin:"100px 100px 100px 550px"}
    const btnstyle ={ margin:'10px'}
  
     return (
      <Grid>     
<Paper elevation={12} style={paperstyle}>
 <Grid align='center'>
   <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon/></Avatar>
     <h2>Sign in</h2>
   </Grid>
    <TextField id="standard-basic" label='Username' variant="standard" placeholder='Enter Username' fullWidth required/>
<TextField id="standard-basic" label='Password' variant="standard" placeholder='Enter Password'  type='pass' fullWidth required/>
<FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
<Button type='Submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
<Link href="#">Forgot Password ?</Link>
<Typography>Do you have an account ?
<Link href="#">Sign Up </Link>
<Link href="#">Terms & Conditions </Link>
</Typography>
</Paper>
      </Grid>
    );
  }
 export default Login  