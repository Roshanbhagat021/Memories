import { MoreHorizontal, Heart, Trash } from 'lucide-react';
import axios from 'axios';
import getRelativeTime from '../utils/getRelativeTime';

const MemoryCard = ({ memory,setChangeHappended }) => {

  console.log('memory: ', memory);
  const { image, creator, createdAt, tags, title, message,_id,likeCount } = memory;

  async function handleDeleteMemory(){
    try {
      await axios.delete(`http://localhost:8080/posts/delete/${_id}`)
    } catch (error) {
      console.log({err:error})
    }finally{
      setChangeHappended((prev)=>!prev)
    }
  }

  async function handleLikeCountInc(){
    try {
      await axios.patch(`http://localhost:8080/posts/update/${_id}`)
    } catch (error) {
      console.log({err:error})
    }finally{
      setChangeHappended((prev)=>!prev)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-h-[max-content]  ">
      {/* Image Section with Overlay */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-45 object-cover" />
        <div className="absolute inset-0  flex flex-col justify-between p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{creator}</h3>
              <p className="text-md">{getRelativeTime(createdAt)}</p>
            </div>
            <button className="text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}

      <div className='flex flex-col  h-50 '>

      
        <div className="p-4 space-y-2 flex-1">
          <p className="text-sm text-blue-500">{tags.map(tag => `#${tag}`).join(' ')}</p>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center p-3 pt-0">
          <button onClick={handleLikeCountInc} className="cursor-pointer flex items-center gap-1 text-pink-500 hover:text-pink-700">
            <Heart size={18} /> <span>{likeCount}</span>
          </button>
          <button onClick={handleDeleteMemory} className=" cursor-pointer flex items-center gap-1 text-red-600 hover:text-red-800">
            <Trash size={18} /> <span>Delete</span>
          </button>
        
        </div>

      </div>
    </div>
  );
};

export default MemoryCard;
