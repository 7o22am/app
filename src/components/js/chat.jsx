import React from 'react'
import '../css/chat.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from '../../assets/24.png'
import Img2 from '../../assets/25.png'
import Img3 from '../../assets/26.png'
import Img4 from '../../assets/27.png'
import { AiOutlineFileText, AiOutlinePlaySquare } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { VscKebabVertical, VscChromeRestore } from "react-icons/vsc";
import { BsFillSendFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
export default function chat() {
    return (
        <>

            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-md-2">
                        <div className="item">
                            <div className="item-cap  ">
                                <h3>Lorem ipsum </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-5 overflow-auto " style={{ maxHeight: '500px'}}>
                                    <div className="d-flex justify-content-between">
                                        <h3 className='items-title'> Chats </h3>
                                        <button className='  items-add'>+ Create new Chat </button>
                                    </div>
                                    <div>
                                        <form className="form-inline my-2 my-lg-0">
                                            <div className="input-group py-2 w-100">
                                                <input className="form-control mr-sm-2 w-100  " type=" search" placeholder=" Search" aria-label="Search" />
                                            </div>
                                        </form>

                                    </div>
                                    <div className='item-chat py-3'>
                                        <div className=' d-flex py-3  justify-content-between'>
                                            <div className=' item-inf'>
                                                <img className='item-img ' src={Img} alt="img" />
                                                <div className='d-flex  flex-column align-items-start  mx-2 '>
                                                    <h5 className='item-inf-name'>Luy Robin</h5>
                                                    <p className='item-inf-det'>writes</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='item-inf-last'>1 minute ago</p>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-10 ">
                                                    <div>
                                                        <p className='item-p'>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>
                                                    </div>

                                                </div>
                                                <div className="col-md-1">
                                                    <div className='item-unread'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                                                            <g filter="url(#filter0_ddd_1_5263)">
                                                                <circle cx="40.0252" cy="40.4042" r="6.78013" fill="#FF3366" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_ddd_1_5263" x="0.0224876" y="0.401394" width="81.3613" height="81.3613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="0.678013" dy="0.678013" />
                                                                    <feGaussianBlur stdDeviation="16.9503" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.15 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="1.35603" dy="1.35603" />
                                                                    <feGaussianBlur stdDeviation="3.39006" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_1_5263" result="effect2_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="2.71205" dy="2.71205" />
                                                                    <feGaussianBlur stdDeviation="5.0851" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.05 0" />
                                                                    <feBlend mode="normal" in2="effect2_dropShadow_1_5263" result="effect3_dropShadow_1_5263" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_5263" result="shape" />
                                                                </filter>
                                                            </defs>
                                                            <text x="36" y="46" fill="white">1</text>
                                                        </svg>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='item-chat  py-3'>
                                        <div className=' d-flex py-3  justify-content-between'>
                                            <div className=' item-inf'>
                                                <img className='item-img' src={Img2} alt="img" />
                                                <div className='d-flex  flex-column align-items-start mx-2'>
                                                    <h5 className='item-inf-name'>Jared Sunn</h5>
                                                    <p className='item-inf-det'>records voice message</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='item-inf-last' >1 minute ago</p>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div>
                                                        <p className='  item-p py-3'> Voice message (01:15) </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between py-0'>
                                                        <div className='d-flex justify-content-between  align-items-center item-ico-file '>
                                                            <AiOutlineFileText size={15} color="#333" /> &nbsp;&nbsp;
                                                            Files (x2)
                                                        </div>
                                                        <div className='d-flex justify-content-between align-items-center item-ico-pho'>
                                                            <HiPhotograph size={15} color="#333" /> &nbsp;&nbsp;

                                                            Photo  &nbsp;&nbsp;
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="col-md-1">
                                                    <div className='item-unread'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">

                                                            <g filter="url(#filter0_ddd_1_5263)">
                                                                <circle cx="40.0252" cy="40.4042" r="6.78013" fill="#FF3366" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_ddd_1_5263" x="0.0224876" y="0.401394" width="81.3613" height="81.3613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="0.678013" dy="0.678013" />
                                                                    <feGaussianBlur stdDeviation="16.9503" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.15 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="1.35603" dy="1.35603" />
                                                                    <feGaussianBlur stdDeviation="3.39006" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_1_5263" result="effect2_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="2.71205" dy="2.71205" />
                                                                    <feGaussianBlur stdDeviation="5.0851" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.05 0" />
                                                                    <feBlend mode="normal" in2="effect2_dropShadow_1_5263" result="effect3_dropShadow_1_5263" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_5263" result="shape" />
                                                                </filter>
                                                            </defs>
                                                            <text x="36" y="46" fill="white">2</text>
                                                        </svg>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='item-chat item-chat-used  py-3 h-25'>
                                        <div className=' d-flex py-3  justify-content-between'>
                                            <div className=' item-inf'>
                                                <img className='item-img' src={Img3} alt="img" />
                                                <div className='d-flex  flex-column align-items-start  mx-2'>
                                                    <h5 className='item-inf-name'> Nika Jerrardo</h5>
                                                    <p className='item-inf-det'>last online 5 hours ago</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='item-inf-last'>3 days ago</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='item-chat  py-3'>
                                        <div className=' d-flex py-3  justify-content-between'>
                                            <div className=' item-inf'>
                                                <img className='item-img' src={Img4} alt="img" />
                                                <div className='d-flex  flex-column align-items-start  mx-2'>
                                                    <h5 className='item-inf-name'>david Amrosa</h5>
                                                    <p className='item-inf-det'>last online 5 hours ago</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='item-inf-last'>1 minute ago</p>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div>
                                                        <p className=' item-p py-3'>Cicero famously orated against his political opponent Lucius Sergius Catilina. </p>
                                                    </div>
                                                    <div className='d-flex justify-content-between py-0'>
                                                        <div className='d-flex justify-content-between  align-items-center item-ico-video '>
                                                            <AiOutlinePlaySquare size={15} color="#333" /> &nbsp;&nbsp;
                                                            Video (x3)
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className="col-md-1">
                                                    <div className='item-unread'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">

                                                            <g filter="url(#filter0_ddd_1_5263)">
                                                                <circle cx="40.0252" cy="40.4042" r="6.78013" fill="#FF3366" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_ddd_1_5263" x="0.0224876" y="0.401394" width="81.3613" height="81.3613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="0.678013" dy="0.678013" />
                                                                    <feGaussianBlur stdDeviation="16.9503" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.15 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="1.35603" dy="1.35603" />
                                                                    <feGaussianBlur stdDeviation="3.39006" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.1 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_1_5263" result="effect2_dropShadow_1_5263" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="2.71205" dy="2.71205" />
                                                                    <feGaussianBlur stdDeviation="5.0851" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.105882 0 0 0 0 0.290196 0 0 0 0.05 0" />
                                                                    <feBlend mode="normal" in2="effect2_dropShadow_1_5263" result="effect3_dropShadow_1_5263" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_5263" result="shape" />
                                                                </filter>
                                                            </defs>
                                                            <text x="36" y="46" fill="white">2</text>
                                                        </svg>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="col-md-6 offset-1">
                                    <div className=' d-flex py-3  justify-content-between chat-inf'>
                                        <div className='item-inf '>
                                            <img className='item-img ' src={Img3} alt="img" />
                                            <div className='d-flex  flex-column align-items-start  mx-2 '>
                                                <h5 className='item-inf-name'>Nika Jerrardo</h5>
                                                <p className='item-inf-det'>last online 5 hours ago</p>
                                            </div>
                                        </div>
                                        <div>
                                            <VscChromeRestore size={15} color="#333" /> &nbsp;&nbsp;
                                            <VscKebabVertical size={15} color="#333" /> &nbsp;&nbsp;
                                        </div>
                                    </div>

                                    <div className=" d-flex  chat-ms-se1  " >
                                        <img className='item-img item-img-log mx-3' src={Img3} alt="img" />
                                        <div className="d-flex flex-column">
                                            <p className='chat-ms-se1-p p-2' >Hello! Finally found the time to write to you I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>

                                    <div className=" d-flex  chat-ms-se2 my-2 " >
                                        <div className=" d-flex flex-column">
                                            <p className='chat-ms-se2-p  p-2'>Can I send you files?</p>
                                            <small className=' d-flex chat-ms-dt justify-content-end '>4 days ago</small>
                                        </div>
                                    </div>

                                    <div className=" d-flex  chat-ms-res my-2 justify-content-end " >
                                        <div className=" d-flex flex-column  ">
                                            <p className='chat-ms-res-p  p-2'>Hey! Okay, send out.</p>
                                            <small className=' d-flex chat-ms-dt justify-content-end '>4 days ago</small>
                                        </div>
                                    </div>
                                    <div className="chat-send container">
                                        <div class="input-group-prepend ">
                                            <button class="btn btn-outline-secondary chat-ic-app" type="button">
                                                <HiPhotograph size={15} color="#fff" /> 
                                            </button>&nbsp;&nbsp;

                                        </div>
                                        <div class="input-group-prepend  ">
                                            <button class="btn btn-outline-secondary chat-ic-app" type="button">
                                                <AiOutlineFileText size={15} color="#fff" />  
                                            </button> 

                                        </div>
                                        <div class="input-group-prepend  ">
                                            <button class="btn btn-outline-secondary chat-ic-app" type="button">
                                                <AiOutlinePlaySquare size={15} color="#fff" /> 
                                            </button> 

                                        </div>
                                    </div>


                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <div class="input-group-prepend  ">
                                                        <button class="btn btn-outline-secondary chat-ic" type="button">
                                                            <FaPlus size={15} color="#fff" />
                                                        </button>&nbsp;&nbsp;
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Type your message here..." />
                                                    <div class="input-group-append  ">
                                                        &nbsp;&nbsp;
                                                        <button class="btn btn-primary chat-ic" type="button">
                                                            <BsFillSendFill size={15} color="#fff" />
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}
