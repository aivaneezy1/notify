import React from 'react'
import { DarkModeComponent } from '@/app/(Components)/DarkMode'
const page = () => {
    return (
        <div className='flex justify-between items-center gap-5 font-normal'>
            <div>
                Document title
            </div>

            <div className=' flex justify-between items-center ml-auto gap-5'>
                <div>
                    Edited 6h ago
                </div>

                <div>
                    Share
                </div>
                <div>
                    Favorites
                </div>

                <div>
                    <DarkModeComponent />
                </div>

            </div>
        </div>
    )
}

export default page
