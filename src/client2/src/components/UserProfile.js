import axios from 'axios';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function UserProfile(){
    
return(
    <div>
<Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>

</div>
)


}
export default UserProfile