import React from 'react'

class index extends React.Component {
  render() {
    return (
     <div className='h-16 bg-navbar w-full fixed shadow-xl bg-opacity-70 backdrop-blur-sm'>
        <div className='flex px-10'>
            <div className='flex justify-between w-1/3 items-center h-16  text-white'>
            <span className='font-bold text-3xl cursor-pointer'>QTemu</span>
            <span className='font-normal text-xl opacity-75 cursor-pointer'>Create MeetUp</span>
            <span className='font-normal text-xl opacity-75 cursor-pointer'>Explore</span>
            </div>
            <div className='w-2/3 bg'>
              <div className='flex justify-end w-full items-center  h-16  text-white'>
                <span className='font-normal text-xl opacity-75 cursor-pointer'>Login</span>
              </div>
            </div>
        </div>
     </div>
    )
  }
}
export default index