import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useChatStore } from '../../lib/chatStore';
import { auth, db } from '../../lib/firebase';
import { useUserStore } from '../../lib/userStore';
import './detail.css';

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBock = async () => {
    if (!user) return;

    const userDocRef = doc(db, 'users', currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || './avatar.png'} alt="avatar" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="arrowUp" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="arrowUp" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" alt="arrowUp" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="avatar" />
                <span>photo_2024_1.png</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="avatar" />
                <span>photo_2024_1.png</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="avatar" />
                <span>photo_2024_1.png</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="arrowUp" />
          </div>
        </div>

        <button onClick={handleBock}>
          {isCurrentUserBlocked ? 'You are Blocked!' : isReceiverBlocked ? 'User blocked' : 'Block User'}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
