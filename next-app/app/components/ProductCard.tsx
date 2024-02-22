import React from 'react';
import Image from 'next/image';
import TimePicker from './TimePicker';

type ProductCardProps = {
    id: number;
    model: string;
    os: string;
    cpu: string;
    gpu: string;
    storage: string;
    ram: string;
    price: number;
    originalPrice: number;
    buildType: string;
    isFreeShipping: boolean;
    imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, model, os, cpu, gpu, storage, ram, price, originalPrice, buildType, isFreeShipping, imageUrl }) => {
    return (
        <div key={id} className="swiper-slide flex w-auto min-h-[640px] justify-items-center " >
            <div data-model-id={id} className='flex h-full shrink-0 flex-col justify-between rounded-[10px] bg-white shadow-productCard !mx-[12.5px] text-ellipsis whitespace-nowrap'>

                <div className='relative flex h-full flex-col gap-2 p-5 overflow-hidden text-ellipsis whitespace-nowrap'>
                    <div className='w-fit rounded-full border border-[#929292] px-2 py-0.5 text-[9px] font-[800] text-[#929292] absolute left-5 top-6'>
                        {buildType}
                    </div>
                    <div className='relative flex justify-center'>
                        <a href='#' className='!mt-4'>
                            <Image src={imageUrl} alt={model} width={200} height={200} objectFit="cover" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href='#' className=''>
                            <h4 className="!m-0 line-clamp-2 min-h-[40px] text-ellipsis whitespace-normal text-[16px] font-bold leading-[20px] hover:text-[#fe1b1b]">{model}</h4>
                        </a>

                        <ul className='flex flex-col items-start gap-2 overflow-hidden mt-1 md:gap-1 swiper-no-swiping'>
                            <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{os}</li>
                            <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{cpu}</li>
                            <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{gpu}</li>
                            <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{storage}</li>
                            <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{ram}</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col justify-between rounded-b-[10px] bg-[#F2F6FA] !p-5'>
                    <div className="flex flex-col">
                        <div className='flex w-fit border border-red-500 bg-red-500 py-1 text-white gap-1 rounded-full px-2 text-[11px]'>
                            <span>SAVE</span>
                            <span>${`${originalPrice - price}`}</span>
                        </div>

                        <div className='flex items-end gap-3 mt-3'>
                            <p className="text-[20px] font-bold">{`$${price}`}</p>
                            <p className="relative bottom-1 !my-0 text-xs text-gray-400 line-through">{`$${originalPrice}`}</p>
                        </div>

                        <button className='affirm_affirm border-0 bg-transparent !pl-0 text-start flex items-baseline'>
                            <p className='a-affirm-as-low-as marginBottom0 flex items-center gap-1'>
                                {'Starting at '}
                                <span className=' text-blue-500'>
                                    ${Math.ceil(price / 12)}/mo
                                </span>
                                {' with '}
                                <span className='flex items-baseline'>
                                    <Image src="/icon-affirm.svg" alt="Affirm Logo" width={35} height={35} />
                                </span>
                            </p>
                        </button>
                    </div>

                    <div className='flex justify-between gap-2 xl:!gap-1 mt-5'>
                        <div className='flex flex-col items-start'>
                            {isFreeShipping && (
                                <span className="text-xs font-bold">Free Shipping</span>
                            )}

                            {buildType === 'Prebuilt' ?
                                <span className='flex overflow-hidden text-ellipsis whitespace-nowrap text-xs'>Delivery By Wednesday, Feb 21</span>
                                :
                                <span className='flex overflow-hidden text-ellipsis whitespace-nowrap text-xs'>Estimate Ship By 02/26/2024 </span>
                            }


                        </div>

                        <div>
                            <a href="#" aria-label={buildType}>
                                <button
                                    className='relative flex justify-center items-center px-3 py-1 border border-red-500 text-red-500 rounded-full transition duration-300 ease-in-out hover:bg-red-500 hover:text-white text-xs sm:text-sm'
                                    type="button">
                                    {buildType === 'Prebuilt' ? "Buy Now" : "Customize"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;