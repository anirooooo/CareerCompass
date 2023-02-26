import { useEffect, useState } from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { TextField } from '@material-ui/core';
import {Paper} from '@material-ui/core'
import { Button } from '@mui/material';

function Item(props)
{
  if(props.isActive){
    return (
      <Paper>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>

          <Button className="CheckButton">
              Check it out!
          </Button>
      </Paper>
    )
  }else{
    return(<></>)
  }
    
}
function OneInputCarousel(){
  const [active,setActive] = useState(2);
    const items = [
        {
            id:1,
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            id:2,
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div>
            {
                items.map( (item, i) => 
                <div className='Card'>
                  <Item key={i} item={item} isActive={item.id===active} />
                </div>
                 )
            }
        </div>
    )
}

export default OneInputCarousel;
