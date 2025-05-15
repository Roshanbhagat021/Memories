import React from 'react';
import { MoreHorizontal, Heart, Trash } from 'lucide-react';

const MemoryCard = ({ memory }) => {
  const { image, creator, createdAt, tags, title, message } = memory;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
      {/* Image Section with Overlay */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-50 object-cover" />
        <div className="absolute inset-0  flex flex-col justify-between p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold">{creator}</h3>
              <p className="text-xs">{createdAt}</p>
            </div>
            <button className="text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-blue-500">{tags.map(tag => `#${tag}`).join(' ')}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4 pt-0">
         <button className="flex items-center gap-1 text-pink-500 hover:text-pink-700">
          <Heart size={18} /> <span>Like</span>
        </button>
        <button className="flex items-center gap-1 text-red-600 hover:text-red-800">
          <Trash size={18} /> <span>Delete</span>
        </button>
       
      </div>
    </div>
  );
};

export default MemoryCard;
