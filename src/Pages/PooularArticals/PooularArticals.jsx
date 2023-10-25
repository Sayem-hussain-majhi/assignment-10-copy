import React, { useEffect, useState } from 'react';
// import brand1 from '../../../src/assets/brand1.jfif'

const PooularArticals = () => {
    const [articals, setArtials] = useState([])

    useEffect(() => {
        fetch('artial.json')
            .then(res => res.json())
            .then(data => setArtials(data))
    }, [])

    console.log(articals)



    return (
        <div className='bg-slate-300 rounded-lg p-10 m-9'>
            <h1 className='text-4xl font-extrabold mt-12'>Popular Artical</h1>
            {/* <figure><img src={brand1} alt="Shoes" /></figure> */}
            <div className='grid grid-cols-3 mt-10'>
                {
                    articals.map(art => <>
                        <div className=''>
                        <div className="card card-compact w-96 ">
                            <div className="card-body p-4">
                                <h2 className="card-title">{art.title}</h2>
                                <p>{art.description}</p>
                                <div className="card-actions mt-5"><button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </>
                    )
                }

            </div>
        </div>
    );
};

export default PooularArticals;