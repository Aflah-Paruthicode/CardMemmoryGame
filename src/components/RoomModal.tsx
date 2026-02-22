  
  import { X } from 'lucide-react'
import React, { type SetStateAction } from 'react'

type RoomModalProps = {
  closeInput: () => void;
};
  
  const RoomModal = (props : RoomModalProps) => {
    return (
      <div className='absolute inset-0 bg-black/70 z-99 flex justify-center items-center'> 
        <div className='relative bg-black border-white border w-1/3 h-1/3 flex  flex-col items-center justify-center rounded-lg'>
        <X className=' text-white absolute top-5 right-5 cursor-pointer hover:text-gray-500' onClick={props.closeInput}/>
            <input type="number" placeholder='Enter Room Id ...' />
            <button className='reset-btn'>Submit Id</button>
        </div>
      </div>
    )
  }
  
  export default RoomModal
