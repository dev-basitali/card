import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        // <h6 className="card-title "><i class="bi bi-heart"></i></h6>
        <>
            <div className="container-fluid d-flex mt-5">
                <div className=" my-card card text-center">
                    <h6 className="card-title text-end pt-3 pe-2"><i class="bi bi-heart"></i></h6>
                    <img src="/images/img1.png" className="my-img mx-auto p-4" alt="..." />
                    <h5 className="card-title">Apple iPad</h5>
                    <ul class="list-inline small">
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star text-warning"></i></li>
                        </Link>
                    </ul>
                    <h6>
                        <s className='text-secondary'>$400.00</s>&nbsp;
                        $396.00
                    </h6>
                    <button className='my-btn mx-auto p-1'>Add to Cart</button>
                </div>
                <div className=" my-card card text-center ms-5">
                    <h6 className="card-title text-end pt-3 pe-2"><i class="bi bi-heart"></i></h6>
                    <img src="/images/img2.png" className="my-img  mx-auto p-4" alt="..." />
                    <h5 className="card-title">Sony Headphone</h5>
                    <ul class="list-inline small">
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star-fill text-warning"></i></li>
                        </Link>
                        <Link>
                            <li class="list-inline-item m-1"><i class="bi bi-star text-warning"></i></li>
                        </Link>
                    </ul>
                    <h6>
                        <s className='text-secondary'>$400.00</s>&nbsp;
                        $396.00
                    </h6>
                    <button className='my-btn mx-auto p-1'>Add to Cart</button>
                </div>
            </div>



        </>
    )
}
