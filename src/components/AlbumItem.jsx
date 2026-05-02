import React from 'react'
import { useNavigate } from 'react-router-dom'


const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-48 p-2 px-3 rounded cursor-pointer hover:bg-[#cfdb6326] '>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-3 mb-2'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem