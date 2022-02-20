import React, { useEffect, useRef, useState, Component } from 'react'

import './Home.css'
import Img from '../Components/Imgs/IKONIKS AVATARS 2.0.png'
export default function Home() {
    return (

        <div className='container-fluid Home'>
            <div className='container pt-5 '>
                <nav className="navbar row navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='col-4'>
                        <h5>Logo</h5>
                    </div>
                    <div className="collapse navbar-collapse col-4" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <i class="fab fa-twitter Ico px-3  h2 text-white"></i>
                            </li>
                            <li className="nav-item">
                                <i class="fab fa-discord Ico px-3  h2 text-white"></i>
                            </li>
                            <li className="nav-item">
                                <i class="fas fa-ship  px-3  h2 text-white"></i>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4' >
                        <button type="button" class="btn btn-warning  text-white">Connect Wallet</button>
                    </div>
                </nav>
            </div>
            <div className='container ' >

                <div className='row  ' >
                    <div className='col-12 ' >
                        <img src={Img} className="rounded mx-auto d-block Imgs" alt="..."></img>
                        <br></br>
                    </div>
                    <div className='row d-flex align-items-center BtnDiv'>
                        {/* <div className='container' >
                            <div className='my-3' >

                                <h6>Quantity</h6>
                                <h3> {count} </h3>
                                <button className='btn btn-warning mx-3 ' onClick={() => setcount(count - 1)} disabled={count == 0}> - </button>
                                <button className='btn btn-warning mx-3 ' onClick={() => setcount(count + 1)}  > + </button>

                            </div>

                        </div> */}
                        <button type="button" class="btn btn-warning Btn text-white">Connect Wallet</button>
                    </div>
                </div>
                <div className='text-center py-5 text-white'>
                    <h2>OFFICIAL MINT PAGE OF IKONIKS <span className='text-warning'>AVATARS</span></h2>
                    <p className='text-white'>IKONIKS AVATARS Represents Limited Edition Collection Of 500 Unique 1/1 Hand-Drawn Avatars Categorized By Level Of Rarity & Created With More Than 75 Well-Designed Traits. Each Avatar Is An Unique 1/1 NFT, With Different Hairstyles, Hats, Clothes, Faces, Colors & Items. These Are The IKONIKS Avatars Ready To Takeover & Rule The Party!

                        “Icons Are Not Born - They Are Created”

                        PRICE IS 0.06 ETH & YOU CAN MINT UP TO 5 AVATARS

                        1. CONNECT YOUR WALLET WITH METAMASK
                        2. CLICK ON BUTTON TO MINT YOUR AVATARS</p>
                </div>
                <div className='text-center'>
                <span className='text-center'>
                        <i class="fab fa-twitter NavBtn px-3  h2 text-white"></i>
                        <i class="fab fa-discord NavBtn px-3  h2 text-white"></i>
                        <i class="fas fa-ship  px-3  h2 text-white"></i>

                    </span>
                <div className='container w-50'>
                <nav className="navbar navbar-expand-lg navbar-light pl-5 ml-2">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                        <li className="nav-item">
                                <h6 className="px-4 NavBtn" href="#"> <a href='#Roadmap'>HOME</a></h6>
                            </li>
                           
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn" href="#"> <a href='#Roadmap'>ROADMAP</a></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn" href="#"> <a href='#Team'>TEAM</a></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn " href="#">  <a href="#lession1 ">FAQ</a></h6>
                            </li>

                        </ul>
                    </div>
                    
                </nav>
            </div>
                </div>
            </div>
        </div>);
}
