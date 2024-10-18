import myAvatar from '../img/avatar.png'
function Avatar() {
  return (
    <div className='card w-32 h-32 items-center p-2 bg-zinc-800 hidden md:block rounded-full'>
      <div className="avatar flex justify-center">
        <div className='w-48 h-48 rounded-full'>
          <img src={myAvatar} alt="" className='rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Avatar
