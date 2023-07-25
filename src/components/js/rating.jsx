import React from 'react'
import styles from '../css/rating.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineBell } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';


export default function rating() {

    return (
        <>
            <div className={`${styles.itemTitle} p-3`}>
                <h3> </h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <AiOutlineSearch size={24} color="#333" />
                    <HiOutlineBell size={24} color="#333" />
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-2">

                        <div >
                            <h3>Lorem ipsum </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam.</p>
                        </div>


                    </div>
                    <div className="col-md-10">


                        <div className='d-flex flex-column '>
                            <div className='d-flex  align-items-center '>
                                <div className={` ${styles.itemName} px-1`} >Name Teacher</div>
                                <div className={`${styles.itemBgRt} w-25 `}>
                                    <div className={`${styles.bar3} px-2 `}  > </div>
                                </div>
                                <div className={`${styles.itemRat} px-2`} >3</div>
                                <svg className='px-2' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5296 0.243164L14.7827 7.96133L22.7704 8.8605L16.7899 14.4967L18.4443 22.7568L11.4953 18.5216L4.5302 22.7279L6.21586 14.4742L0.256836 8.81354L8.2474 7.94764L11.5296 0.243164Z" fill="#D81159" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#D9D9D9" />
                                </svg>
                                <div className={styles.itemRev}> &nbsp;&nbsp; 273 Reviews</div>
                            </div>
                            <div className='d-flex  align-items-center '>
                                <div className={` ${styles.itemName} px-1`} >Name Teacher</div>
                                <div className={`${styles.itemBgRt} w-25 `}>
                                    <div className={`${styles.bar2} px-2 `}  > </div>
                                </div>

                                <div className={`${styles.itemRat} px-2`}>2</div>
                                <svg className='px-2' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5296 0.243164L14.7827 7.96133L22.7704 8.8605L16.7899 14.4967L18.4443 22.7568L11.4953 18.5216L4.5302 22.7279L6.21586 14.4742L0.256836 8.81354L8.2474 7.94764L11.5296 0.243164Z" fill="#D81159" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#D9D9D9" />
                                </svg>
                                <div className={styles.itemRev}> &nbsp;&nbsp; 273 Reviews</div>
                            </div>
                            <div className='d-flex  align-items-center '>
                                <div className={` ${styles.itemName} px-1`} >Name Teacher</div>
                                <div className={`${styles.itemBgRt} w-25 `}>
                                    <div className={`${styles.bar5} px-2 `}  > </div>
                                </div>

                                <div className={`${styles.itemRat} px-2`}>5</div>
                                <svg className='px-2' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5296 0.243164L14.7827 7.96133L22.7704 8.8605L16.7899 14.4967L18.4443 22.7568L11.4953 18.5216L4.5302 22.7279L6.21586 14.4742L0.256836 8.81354L8.2474 7.94764L11.5296 0.243164Z" fill="#D81159" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#D9D9D9" />
                                </svg>
                                <div className={styles.itemRev}> &nbsp;&nbsp; 273 Reviews</div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
