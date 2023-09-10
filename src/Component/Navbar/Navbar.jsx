import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { PiSpeakerHighBold } from "react-icons/pi";
import { SiMicrosoftedge } from "react-icons/si";
import { GoTools } from "react-icons/go";
import { BsPencilFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineTeam } from "react-icons/ai";
import { FcCopyright } from "react-icons/fc";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fA";
import { AiOutlineHeart } from "react-icons/ai";




  
import Style from "./Navbar.module.css"
function Navbar() {

  
  return <>








    <nav id={Style.Love} class="fixed bg-whit  bg-transparent w-screen  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)]">
      <div class="flex flex-wrap  items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
          <img src={"./logo3.png"} class="h-16 " alt="Flowbite Logo" />
        </a>

        <div class="flex md:order-2 mt-3 ml-2 sm:ml-12 items-center">
       
        <button type="button" class="text-purple-600  hidden sm:block focus:ring-4s shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] focus:ring-blue-300 font-bold rounded-lg text-sm px-8 py-3 mr-2 mb-2 dark:bg-white shadow-gray-600    hover:shadow-md focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
        <button type="button" class="text-white  bg-fuchsia-600  focus:ring-4s  focus:ring-blue-300 font-bold rounded-lg text-sm  px-4 sm:px-8  py-3 mr-2 mb-2 dark:bbg-violet-400   ">Login </button>

      <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2  w-10 h-10 justify-center text-sm  rounded-lg md:hidden  " aria-controls="mega-menu-full" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
  </div>

       
        <div id="mega-menu-full" class="items-center justify-between text-gray-400 font-medium hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col p-4 md:p-0 mt-4 border font-sans  font-semibold text-base
           border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ml-4   ">
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="firstdrowpdown" class="flex   items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Product <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
           
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="secounddrowpdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Solution <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>

            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="thirddrowpdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-800 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Learn <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Enterprice</a>
            </li> <li>
              <a href="#" class="block py-2 pl-3 pr-4 ml-0 sm:ml-44 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Contact Sales</a>
            </li>
          </ul>
          
        </div>


        
      </div>

   <div id="firstdrowpdown" className='bg-white hidden ' >

   
  <div class="flex flex-wrap justify-center gap-10 ">
      <hr />
    <div className=' '>  
    
        <h1 className='font-semibold text-base ml-6 sm:ml-0 mt-10 text-gray-800'>PRODUCT</h1>
<div className=' flex flex-row justify-center sm:justify-start mt-5 py-4'>
        <div className='flex border justify-between  h-16 px-2 w-[320px]  sm:w-[640px] items-center  border-pink-300  rounded-2xl'>
<h1 className='font-bold flex items-center text-xl gap-2'>
<img class="w-8 h-8 " src={"./itunes.png"} alt="Jese Leos image"/>
ClickUpAI
</h1>
<div className='flex '>

<h1 className='  items-center  hidden sm:block text-base gap-2'>
  The only Ai solution that's coustom-build for you

</h1>
  <HiArrowNarrowRight className='text-pink-600 w-5 h-5 mt-1'/>
  {/* <h1 className=' block sm:hidden mt-3 '>All build for you</h1> */}
</div>
          </div>
          </div>
<div className='flex gap-2 flex-wrap   w-screen  sm:w-[640px] items flex-row mt-6' >

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-green-50 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  shadow-lg" src={"./check.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Tasks</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-blue-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  shadow-lg" src={"./template.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Docs</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Create beautiful docs and <br /> connect them to task.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  shadow-lg" src={"./dashboard.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Goals </span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Track work against  stragety<br />  with measurble target.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5  hover:bg-cyan-50 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5 shadow-lg" src={"./hashtag.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">whiteboard</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Bring team idea to life with  <br /> virtual collaboration.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-purple-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  shadow-lg" src={"./trophy.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Dashboard </span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Visulize process with real- <br /> time reporting.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-yellow-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  shadow-lg" src={"./google-docs.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Chats</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Collabrate with your team <br /> in real time.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

</div>
<div className='flex flex-row justify-center sm:justify-start pt-5'>

          <div className=' bg-gray-300  cursor-pointer z-auto font-bold rounded-xl text-sm  w-[320px]  sm:w-[640px] items  px-10  py-3 mt-4'>
<h1 className='flex items-center justify-center'>
    See All Features
 <HiArrowNarrowRight className='mt-1 ml-2 text-violet-700'/>   
</h1>
</div>
</div>





          </div>
          <div className='border hidden sm:block'></div>
          <div>  
        <h1 className='font-semibold text-base mt-10 text-gray-800'>PLATFORM</h1>
       
                
<div className='flex gap-5 flex-wrap   w-[320px]  sm:w-[440px] items mt-5 py-4' >

          <div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5  hover:bg-red-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        <img class="w-5 h-5  " src={"./layouts.png"} alt="Jese Leos image"/>
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Tamplates </span>
           
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block  text-gray-600">Save time on project prep <br /> with a custom templates.</div> 
        </div>

    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-blue-100 bg-transparent rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5 " src={"./puzzle-piece.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">CliclApps</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Add even more custom  <br /> tools to you worlflow.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-purple-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  " src={"./energy-system.png"} alt="Jese Leos image"/>
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Integrations</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Connect your favourite apps  <br /> to your workflow.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-green-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  " src={"./eye.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Views </span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Views your work in the wayn <br /> that works best for you.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-amber-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  " src={"./hologram.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Hierarchy</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">See the big pictures  <br /> without the details.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>


<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-amber-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
    <img class="w-5 h-5  " src={"./computer-science.png"} alt="Jese Leos image"/>
 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Automations</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">put your routine busyworks  <br /> on autopilot.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

</div>

          
          </div>
          </div>
<hr  id="" className='mt-10'/>

<div  id="" class="w-52   hidden sm:block  px-1 p-1 py-3.5 mt-5 hover:bg-green-200 bg-white rounded-lg  ml-52 " role="alert">
    <div class="flex  ">
    <img class="w-10 h-10  " src={"./receiver.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Contact Us</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Get in touch with our 24/7 live support team for free...</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
</div>












      <div id="secounddrowpdown" class="hidden bg-white">
      <div class="flex flex-wrap justify-center gap-10 ">
      <hr />
    <div className=' '>  
    
        <h1 className='font-semibold text-base ml-6 sm:ml-0 mt-5 text-gray-800'>PRODUCT</h1>
<div className=' flex flex-row justify-center sm:justify-start mt-5 py-4'>
        
          </div>
<div className='flex gap-2 flex-wrap   w-screen  sm:w-[640px] items flex-row ' >

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <SiMicrosoftedge className='w-8   text-pink-500  h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Software Development</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <PiSpeakerHighBold className='w-8 text-pink-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Markrting</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Create beautiful docs and <br /> connect them to task.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <AiFillSetting className='w-8 text-pink-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Opration  </span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Track work against  stragety<br />  with measurble target.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5  hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <GoTools className='w-8 text-pink-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800"> Engineering</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Bring team idea to life with  <br /> virtual collaboration.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <BsPencilFill className='w-8 text-pink-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Design </span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Visulize process with real- <br /> time reporting.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-pink-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <BsFillPersonLinesFill className='w-8 text-pink-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Human Resores</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Collabrate with your team <br /> in real time.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>

</div>
<div className='flex flex-row justify-center sm:justify-start pt-5'>

          <div className=' bg-orange-200  cursor-pointer z-auto font-bold rounded-xl text-sm  w-[320px]  sm:w-[640px] items  px-10  py-3 mt-4'>
<h1 className='flex items-center justify-center'>
    See All Features
 <HiArrowNarrowRight className='mt-1 ml-2 text-orange-500'/>   
</h1>
</div>
</div>





          </div>




          <div className='border hidden sm:block'></div>
          <div className=''>
        <h1 className='font-semibold text-base ml-6 sm:ml-0 mt-5 text-gray-800'>USE CASE</h1>

          <div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0  mt-10    hover:bg-sky-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <MdOutlineSubject className='w-8 text-sky-500 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Project Management</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div><div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-sky-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <TfiWorld className='w-8  text-sky-500  h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Remote work</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div><div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-sky-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <AiOutlineTeam className='w-8  text-sky-500  h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">CMR</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
          </div>
          <div className='border hidden sm:block'></div>
          <div className=''>
        <h1 className='font-semibold text-base ml-6 sm:ml-0 mt-5 text-gray-800'>TYPE</h1>

          <div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0  mt-10    hover:bg-purple-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <BsFillBagCheckFill className='w-8  text-purple-600  h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Tasks</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div><div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-purple-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <FaRegLightbulb className='w-8   text-purple-600 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Enterprice</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div><div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-purple-100 bg-white rounded-lg " role="alert">
    <div class="flex ">
        {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
        <AiOutlineHeart className='w-8 text-purple-600 h-8'/> 
        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Startup</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
        </div>
    </div>
    <hr className='border  block sm:hidden mt-3 '/>

</div>
          </div>
          </div>
          <hr  id="" className='mt-10'/>

<div  id="" class="w-52   hidden sm:block  px-1 p-1 py-3.5 mt-5 hover:bg-green-200 bg-white rounded-lg  ml-52 " role="alert">
    <div class="flex  ">
    <img class="w-8 h-8  " src={"./receiver.png"} alt="Jese Leos image"/>

        <div class="ml-2 text-sm font-normal">
            <span class="mb-1 text-base font-semibold  text-gray-800">Contact Us</span>
            <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">

Get in touch with our 24/7 live support team for free..</div> 
        </div>
    </div>
    <hr className='border block sm:hidden mt-3 '/>

</div>
      </div>




    

















    <div id="thirddrowpdown" className='bg-white hidden' >

   
<div class="flex flex-wrap justify-center gap-10 ">
    <hr />
  <div className=' '>  
  
      <h1 className='font-semibold text-base ml-6 sm:ml-0 mt-10 text-gray-800'>LEARN</h1>

<div className='flex gap-2 flex-wrap   w-screen  sm:w-[640px] items flex-row mt-6' >

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-green-50 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <SiMicrosoftedge className='w-8 text-purple-500 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Getting Started</span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-blue-100 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <GoTools className='w-8 text-yellow-400 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Click-up Univeristy</span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Create beautiful docs and <br /> connect them to task.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-pink-100 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <BsPencilFill className='w-8 text-teal-600 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Demos </span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Track work against  stragety<br />  with measurble target.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5  hover:bg-cyan-50 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <BsFillPersonLinesFill className='w-8 text-purple-600 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Import</span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Bring team idea to life with  <br /> virtual collaboration.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-purple-100 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <TfiWorld className='w-8 text-orange-500 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Custom </span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Visulize process with real- <br /> time reporting.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 pt-5 hover:bg-yellow-100 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <AiOutlineHeart className='w-8 text-blue-600 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Help Dec</span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Collabrate with your team <br /> in real time.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

</div>

<h1 className='font-semibold text-base ml-6 sm:ml-0 mt-10 text-gray-800'>SERVICES</h1>

<div className='flex gap-2 flex-wrap   w-screen  sm:w-[640px] items flex-row mt-6' >

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0    hover:bg-green-50 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <AiOutlineTeam className='w-8 text-red-600 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Professional Services </span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Break down any size project <br /> into coustmized project.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>
<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 ml-6 sm:ml-0 hover:bg-blue-100 bg-white rounded-lg " role="alert">
  <div class="flex ">
      {/* <img class="w-8 h-8 rounded-full shadow-lg" src={"./sf.png"} alt="Jese Leos image"/> */}
      <BsFillBagCheckFill className='w-8 text-cyan-600 h-8'/> 
      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Partner Services </span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Create beautiful docs and <br /> connect them to task.</div> 
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>




</div>




        </div>
        <div className='border hidden sm:block'></div>
        <div>  
      <h1 className='font-semibold text-base mt-10 text-gray-800'>PLATFORM</h1>
     
              
<div className='flex gap-5 flex-wrap  w-[320px]  flex-col sm:w-[440px] items mt-5 py-4' >

  

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-green-100 bg-white rounded-lg " role="alert">
  <div class="flex items-center">
  <img class="w-32 h-14   rounded-2xl " src={"./img (1).png"} alt="Jese Leos image"/>

      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-sm font-medium  text-gray-800">15 Best To-Do List Apps to Stay <br /> Organized in 2023 </span>
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-amber-100 bg-white rounded-lg " role="alert">
  <div class="flex  items-center">
  <img class="w-32 h-14  rounded-2xl " src={"./img (2).png"} alt="Jese Leos image"/>

      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-sm font-medium  text-gray-800">The Always Up-to-date List of the 50 <br /> Best AI Tools in 2023</span>
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>


<div id="toast-message-cta" class="w-52 px-1 p-1 py-3.5 hover:bg-amber-100 bg-white rounded-lg " role="alert">
  <div class="flex  items-center">
  <img class="w-32 h-14  rounded-2xl  " src={"./img (3).png"} alt="Jese Leos image"/>

      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-sm font-medium  text-gray-800">25 Best Task Management Software Tools for Work in 2023</span>
      </div>
  </div>
  <hr className='border block sm:hidden mt-3 '/>

</div>

</div>

        
        </div>
        </div>
<hr  id="" className='mt-10'/>

<div  id="" class="w-52   hidden sm:block  px-1 p-1 py-3.5 mt-5 hover:bg-green-200 bg-white rounded-lg  ml-52 " role="alert">
  <div class="flex  ">
  <img class="w-8 h-8  rounded-2xl  " src={"./receiver.png"} alt="Jese Leos image"/>

      <div class="ml-2 text-sm font-normal">
          <span class="mb-1 text-base font-semibold  text-gray-800">Contact Us</span>
          <div class="mb-4 mt-2 text-xs font-normal hidden sm:block text-gray-600">Get in touch with our 24/7 live support team for free...</div> 
      </div>
  </div>

  <hr className='border block sm:hidden mt-3 '/>

</div>
</div>
</nav>
 
  </>
}

export default Navbar
