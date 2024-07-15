import myAvatar from '../img/avatar.png'
function Avatar() {
  return (
    <div className='card w-48 h-[8.5rem] items-center p-5 bg-zinc-800 hidden md:block rounded-lg'>
      <div className="avatar flex justify-center">
        <div className='w-24 rounded-full'>
          <img src={myAvatar} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Avatar
