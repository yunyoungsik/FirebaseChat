import { useUserStore } from '../../../lib/userStore';
import './userInfo.css'

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className='userInfo'>
      <div className='user'>
        <img src={currentUser.avatar || './avatar.png'} alt='avatar' />
        <h2>{currentUser.username}</h2>
      </div>

      <div className='icons'>
        <img src='./more.png' alt='more' />
        <img src='./video.png' alt='video' />
        <img src='./edit.png' alt='edit' />
      </div>
    </div>
  )
}

export default Userinfo