import React, { useContext, useState } from 'react';
import { FriendContext } from '../../components/context/FriendContext';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import vdo from '../../assets/video.png';

const TimeLine = () => {
    const { contacted, texted, called } = useContext(FriendContext);
    const [sortingType, setSortingType] = useState(""); // Fixed: use useState correctly

    // Combine all interactions into one array with type
    const allInteractions = [
        ...contacted.map(item => ({ ...item, type: 'contacted' })),
        ...texted.map(item => ({ ...item, type: 'texted' })),
        ...called.map(item => ({ ...item, type: 'called' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Filter interactions based on selected type
    const filteredInteractions = sortingType
        ? allInteractions.filter(interaction => {
            if (sortingType === 'call') return interaction.type === 'called';
            if (sortingType === 'text') return interaction.type === 'texted';
            if (sortingType === 'video') return interaction.type === 'contacted';
            return true;
        })
        : allInteractions;

    // Function to get icon based on type
    const getInteractionIcon = (type) => {
        switch (type) {
            case 'called':
                return <img src={call} alt="Call"  />;
            case 'texted':
                return <img src={text} alt="Text"  />;
            case 'contacted':
                return <img src={vdo} alt="Video"  />;
            default:
                return null;
        }
    };

    // Function to get label based on type
    const getInteractionLabel = (type) => {
        switch (type) {
            case 'called':
                return 'Call';
            case 'texted':
                return 'Text';
            case 'contacted':
                return 'Video Call';
            default:
                return '';
        }
    };

    return (
        <div className="w-10/12 mx-auto py-8">

            {filteredInteractions.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">
                        {sortingType
                            ? `No ${sortingType} interactions yet.`
                            : "No interactions yet."}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        {sortingType
                            ? `Start making ${sortingType} interactions with your friends!`
                            : "Start interacting with your friends!"}
                    </p>
                </div>
            ) : (
                <div className="">
                        <h2 className="font-bold text-2xl">Timeline</h2>
                       <div className="mt-4 mb-10">
                         <label className="border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm my-10">
                            <select
                                value={sortingType}
                                onChange={(e) => setSortingType(e.target.value)}
                                className="outline-none bg-transparent text-gray-600 font-medium cursor-pointer"
                            >
                                <option value="">Filter timeline</option>
                                <option value="call">Call</option>
                                <option value="text">Text</option>
                                <option value="video">Video Call</option>
                            </select>
                        </label>
                       </div>
                  <div className="space-y-4">
                      {filteredInteractions.map((interaction, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4">
                                {/* Interaction Details */}
                                <div className="flex">
                                    <div className="flex items-center gap-2">
                                        {/* Interaction Type Icon */}
                                        <div className="">
                                            {getInteractionIcon(interaction.type)}
                                        </div>
                                        <div className="">
                                            {/* Interaction Label */}
                                            {/* Friend Name */}
                                            <h3 className="font-semibold text-gray-800">
                                                {getInteractionLabel(interaction.type)} <span className="text-gray-600">•</span>  {interaction.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {interaction.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
                </div>
            )}
        </div>
    );
};

export default TimeLine;