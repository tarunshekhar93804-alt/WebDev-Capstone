 import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';


 const SongItem = ({name,image,desc,id}) => {
  const {playWithID}=useContext(PlayerContext)
   return (
     <div onClick={()=>playWithID(id)} className='min-w-46 p-2 px-3 rounded cursor-pointer hover:bg-[#9fd7f126] '>
       <img className='rounded' src={image} alt="" />
       <p className='font-bold mt-3 mb-2'>{name}</p>
       <p className='text-slate-200 text-sm'>{desc}</p>
     </div>
   )
  }
 export default SongItem ;