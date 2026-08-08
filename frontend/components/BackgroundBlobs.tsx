"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundBlobs(){
 const [mouse,setMouse]=useState({x:0,y:0})
 const [client,setClient]=useState(false)
 useEffect(()=>{setClient(true);const move=(e:MouseEvent)=>setMouse({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[])
 const stars=client?Array.from({length:70},(_,i)=>({id:i,left:Math.random()*100,top:Math.random()*100,size:i%9===0?2:i%4===0?1.5:1,delay:Math.random()*8,duration:5+Math.random()*10})):[]
 return <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02030a]" aria-hidden="true">
   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,.4),#02030a_72%)]"/>
   <motion.div className="absolute -top-[20%] -left-[15%] h-[65%] w-[65%] rounded-full bg-cyan-500/[0.055] blur-[130px]" animate={{x:client?mouse.x*.015:0,y:client?mouse.y*.015:0}} transition={{type:'spring',stiffness:40,damping:24}}/>
   <motion.div className="absolute -bottom-[25%] -right-[15%] h-[70%] w-[70%] rounded-full bg-violet-600/[0.09] blur-[140px]" animate={{x:client?mouse.x*-.012:0,y:client?mouse.y*-.012:0}} transition={{type:'spring',stiffness:35,damping:26}}/>
   <motion.div className="absolute top-[25%] left-[48%] h-[40%] w-[42%] rounded-full bg-indigo-500/[0.045] blur-[120px]" animate={{x:client?mouse.x*.02:0,y:client?mouse.y*.01:0}} transition={{type:'spring',stiffness:30,damping:28}}/>
   <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(34,211,238,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,.04) 1px,transparent 1px)',backgroundSize:'80px 80px'}}/>
   <div className="absolute inset-0 opacity-70" style={{backgroundImage:'radial-gradient(circle at 50% 50%,rgba(255,255,255,.85) 0 1px,transparent 1.2px)',backgroundSize:'150px 150px'}}/>
   {stars.map(s=><motion.span key={s.id} className="absolute rounded-full bg-white" style={{left:`${s.left}%`,top:`${s.top}%`,width:s.size,height:s.size}} initial={{opacity:.08}} animate={{opacity:[.08,.65,.12,.5,.08],scale:[1,1.25,1,1.15,1]}} transition={{duration:s.duration,delay:s.delay,repeat:Infinity,ease:'easeInOut'}}/>)}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0,rgba(2,3,10,.18)_50%,rgba(2,3,10,.7)_100%)]"/>
 </div>
}
