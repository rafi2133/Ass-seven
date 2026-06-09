import { useLoaderData, useParams } from 'react-router';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import vdo from '../../assets/video.png'
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { HiOutlineArchive } from 'react-icons/hi';
const FriendCard = () => {
    const { id } = useParams();
    const friends = useLoaderData();
    const expectedFriend = friends?.find(friend => friend.id == id); // Added optional chaining

    // Handle case when friend is not found
    if (!expectedFriend) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-red-600">Friend not found</h2>
                <p className="mt-2 text-gray-600">The friend you're looking for doesn't exist.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-6  gap-4 p-4 w-10/12 mx-auto">

            <div className="col-span-2 row-span-4  ">
                <div key={expectedFriend.id} className="block max-w-md mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6">
                            {/* Image - Centered */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={expectedFriend.picture}
                                    alt={expectedFriend.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                                />
                            </div>
                            {/* Name */}
                            <h3 className="font-semibold text-gray-800 text-center text-xl mb-2">
                                {expectedFriend.name}
                            </h3>

                            {/* Status badge */}
                            <div className="flex justify-center">
                                <span className={`text-xs font-medium mb-4 px-3 py-1 rounded-full ${expectedFriend.status === 'on-track'
                                    ? 'bg-green-100 text-green-700'
                                    : expectedFriend.status === 'almost due'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-red-100 text-red-700'
                                    }`}>
                                    {expectedFriend.status.toUpperCase()}
                                </span>
                            </div>
                            {/* Tags section */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {expectedFriend.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-bold bg-green-100 text-black px-2 py-1 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Bio */}
                            {expectedFriend.bio && (
                                <p className="text-sm text-gray-600 text-center mb-4 italic">
                                    "{expectedFriend.bio}"
                                </p>
                            )}

                            <p className="text-sm text-gray-500 text-center mb-3 link link-hover">E-mail: {expectedFriend.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-4 row-span-2 border bg-white pt-8 px-4 ">
                <div className="grid grid-cols-3 gap-4  col-span-4 ">
                    <div className="border bg-white rounded-lg p-4 text-center">
                        <h2>{expectedFriend.days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="border bg-white rounded-lg p-4 text-center">
                        <h2>{expectedFriend.goal}</h2>
                        <p>Goal (Days)</p>
                    </div>
                    <div className="border bg-white rounded-lg p-4 text-center">
                        <h2>{expectedFriend.next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div></div>

            <div className="border p-4 col-span-4 row-span-2 my-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                    <h2 className='font-bold text-gray-800'>Relationship Goal</h2>
                    <button className='text-xs text-[#3E6356] hover:text-[#2d4d41] font-medium hover:bg-gray-50 px-3 py-1 rounded-md transition-colors duration-200 btn'>
                        Edit
                    </button>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded-lg">
                    <p className="text-gray-700">
                        Connect every <span className="font-bold text-[#3E6356] text-lg">{expectedFriend?.goal || 14}</span> days
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                        Last contact: {expectedFriend?.days_since_contact} days ago
                    </p>
                </div>
            </div>

            <div className="col-span-2  row-span-3 space-y-3">
                <button className="w-full bg-white border border-gray-200 hover:border-[#3E6356] hover:bg-[#F8FAFC] text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <RiNotificationSnoozeLine />
                    Snooze 2 weeks
                </button>

                <button className="w-full bg-white border border-gray-200 hover:border-[#3E6356] hover:bg-[#F8FAFC] text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <HiOutlineArchive />
                    Archive
                </button>

                <button className="w-full bg-white border border-red-200 hover:bg-red-50 text-red-600 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:border-red-300">
                    <RiDeleteBin6Line />
                    Delete
                </button>
            </div>

            <div className="border col-span-4 row-span-3 rounded-lg p-6 bg-white shadow-sm">
                <h2 className='font-bold text-xl text-gray-800 mb-4'>Quick Check-In</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border rounded-lg bg-[#F8FAFC] p-4 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#3E6356] hover:text-white group">
                        <img src={call} alt="Call" className="w-8 h-8 mx-auto mb-2 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <p className="font-medium text-gray-700 group-hover:text-white">Call</p>
                    </div>

                    <div className="border rounded-lg bg-[#F8FAFC] p-4 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#3E6356] hover:text-white group">
                        <img src={text} alt="Text" className="w-8 h-8 mx-auto mb-2 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <p className="font-medium text-gray-700 group-hover:text-white">Text</p>
                    </div>

                    <div className="border rounded-lg bg-[#F8FAFC] p-4 text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#3E6356] hover:text-white group">
                        <img src={vdo} alt="Video" className="w-8 h-8 mx-auto mb-2 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                        <p className="font-medium text-gray-700 group-hover:text-white">Video Call</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FriendCard;