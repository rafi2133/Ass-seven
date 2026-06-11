import React, { useContext } from 'react';
import { FriendContext } from '../../components/context/FriendContext';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import vdo from '../../assets/video.png';

const TimeLine = () => {
    const { contacted, texted, called, } = useContext(FriendContext);
    
    // Combine all interactions into one array with type
    const allInteractions = [
        ...contacted.map(item => ({ ...item, type: 'contacted' })),
        ...texted.map(item => ({ ...item, type: 'texted' })),
        ...called.map(item => ({ ...item, type: 'called' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

    // Function to get icon based on type
    const getInteractionIcon = (type) => {
        switch(type) {
            case 'called':
                return <img src={call} alt="Call" className="w-8 h-8" />;
            case 'texted':
                return <img src={text} alt="Text" className="w-8 h-8" />;
            case 'contacted':
                return <img src={vdo} alt="Video" className="w-8 h-8" />;
            default:
                return null;
        }
    };

    // Function to get label based on type
    const getInteractionLabel = (type) => {
        switch(type) {
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
            <h2 className="font-bold text-2xl mb-6">Timeline</h2>            
            {allInteractions.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No interactions yet.</p>
                    <p className="text-sm text-gray-400 mt-2">Start interacting with your friends!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {allInteractions.map((interaction, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                            
                            <div className="flex items-center gap-4"> 
                                {/* Interaction Details */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        {/* Interaction Type Icon */}
                                        <div className="w-6 h-6">
                                            {getInteractionIcon(interaction.type)}
                                        </div>
                                        
                                        {/* Interaction Label */}
                                        <span className="font-medium text-gray-700">
                                            {getInteractionLabel(interaction.type)}
                                        </span>
                                        
                                        {/* Friend Name */}
                                        <span className="text-gray-600">•</span>
                                        <h3 className="font-semibold text-gray-800">
                                            {interaction.name}
                                        </h3>
                                    </div>
                                    
                                    {/* Date */}
                                    <p className="text-sm text-gray-500 mt-2 ml-8">
                                        {interaction.date}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        
            )}
        </div>
    );
};

export default TimeLine;