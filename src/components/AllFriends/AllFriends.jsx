import React, { use } from 'react';
import { Link } from 'react-router';


const friendDataPromise = fetch('/friendsData.json').then(res => res.json());


const AllFriends = () => {
    const friends = use(friendDataPromise);
    return (
        <div className="w-10/12 mx-auto">
            <h2 className=' font-bold text-2xl my-10'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {friends.map(friend => {
                    return (
                        <Link to={`/friendCard/${friend.id}`} key={friend.id} className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                <div className="p-4">
                                    {/* Image - Centered */}
                                    <div className="flex justify-center mb-3">
                                        <img
                                            src={friend.picture}
                                            alt={friend.name}
                                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                                        />
                                    </div>

                                    {/* Name - Below image */}
                                    <h3 className="font-semibold text-gray-800 text-center mb-1">
                                        {friend.name}
                                    </h3>

                                    {/* Days ago - Below name */}
                                    <p className="text-sm text-gray-500 text-center mb-3">
                                        {friend.days_since_contact} days ago
                                    </p>

                                    {/* Tags section - Below days */}
                                    <div className="mb-3">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {friend.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs font-bold bg-green-100 text-black px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Status badge - Bottom, right-aligned */}
                                    <div className="flex justify-center">
                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${friend.status === 'on-track'
                                            ? 'bg-green-100 text-green-700'
                                            : friend.status === 'almost due'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}>
                                            {friend.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}

            </div>
            {/* git check */}
        </div>
    );
};

export default AllFriends;