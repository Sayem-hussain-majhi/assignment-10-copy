import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrandName = () => {
    const brands = useLoaderData()

    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-4/5 mx-auto mt-10'>
                {
                    brands.map(brand =>
                        <div key={brand._id}>
                            <Link to={`/brandItems/${brand.brandName}`}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer">
                                    <figure><img src={brand.brandImg} alt="Shoes" /></figure>
                                    <div className="card-body items-center">
                                        <h2 className="card-title">{brand.brandName}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandName;