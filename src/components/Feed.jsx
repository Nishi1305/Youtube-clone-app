import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav.jsx";
import VideoCard from './VideoCard';

const Feed = () => {

    const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        document.getElementById('root').classList.remove('custom-h');
    }, []);

    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {
                        !loading && searchResults && searchResults?.map((item, i) => {
                            if (item?.type !== 'video') {
                                return false;
                            }

                            if (item?.type == 'video') {
                                return (
                                    <VideoCard
                                        // key={item?.video?.videoId}
                                        key={i}
                                        video={item?.video}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Feed