import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MOCK_DATA from '../../MOCK_DATA';
import './WideCardList.module.css'

function WideCard({ m }) {
   return (
      <Card sx={{ display: 'flex' }}>
         <Box backgroundColor={m.type} sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  {m.title}
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" component="div">
                  {m.type}
                  <br />
                  {m.schema}
               </Typography>
            </CardContent>
         </Box>
         {/*<CardMedia
            component="img"
            sx={{ width: 15 }}
            image="/static/images/cards/live-from-space.jpg"
         />*/}
      </Card>
   );
}

function WideCardList() {
   let fList = MOCK_DATA.reverse();
   const [listIndex, setListIndex] = React.useState(fList.length - 11);
   const [list, setList] = React.useState(fList.slice(listIndex));

   function Load() {
      const newIndex = listIndex - 10
      let slice = fList.slice(newIndex, listIndex);
      console.log(slice)
      let tempList = list.concat(slice);
      setListIndex(newIndex);
      setList(tempList);
   }

   return (
      <div className='WideCardList'>
         {
            list.map((e, i) => {
               if (i == list.length - 1) {
                  return (
                     <>
                        <WideCard m={e} />
                        <br />
                        <button onClick={Load}>Load More</button>
                     </>
                  )
               } else {
                  return (
                     <WideCard m={e} />
                  )
               }
            })
         }
      </div>
   )

}

export default WideCardList;