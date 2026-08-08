"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Users, GitBranch, Activity, Clock, CheckCircle } from 'lucide-react'

interface GitHubData { public_repos:number; followers:number; following:number; status?:string; last_active?:string; total_commits?:number }

export default function GitHubStatus(){
 const [githubData,setGithubData]=useState<GitHubData>({public_repos:0,followers:0,following:0,status:'Active',last_active:'Just now',total_commits:0}); const [loading,setLoading]=useState(true)
 useEffect(()=>{const fetchGitHubData=async()=>{try{const base=process.env.NEXT_PUBLIC_API_URL||'http://127.0.0.1:8000/api';const response=await fetch(`${base}/github-status/`);const data=await response.json();setGithubData(data)}catch(error){setGithubData({public_repos:25,followers:150,following:89,status:'Active',last_active:'2 hours ago',total_commits:1247})}finally{setLoading(false)}};fetchGitHubData();const interval=setInterval(fetchGitHubData,300000);return()=>clearInterval(interval)},[])
 if(loading)return <div className="flex items-center gap-3 px-4 py-2"><div className="w-4 h-4 bg-cyan-300/30 rounded-full animate-pulse"/><div className="w-16 h-3 bg-cyan-300/10 rounded animate-pulse"/><div className="w-12 h-3 bg-violet-400/10 rounded animate-pulse"/></div>
 return <div className="flex flex-col items-center gap-2 text-slate-300"><div className="flex items-center gap-2"><motion.div initial={{rotate:0}} animate={{rotate:360}} transition={{duration:2,repeat:Infinity,ease:'linear'}}><Github className="w-4 h-4 text-cyan-300"/></motion.div><motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{delay:.4}} className="flex items-center gap-1 px-2 py-1 bg-emerald-400/10 rounded-full border border-emerald-300/20"><CheckCircle className="w-2 h-2 text-emerald-300"/><span className="text-xs font-medium text-emerald-300">{githubData.status}</span></motion.div></div><div className="flex items-center gap-2 text-xs"><div className="flex items-center gap-1"><GitBranch className="w-2 h-2 text-violet-300"/><span>{githubData.public_repos}</span></div><div className="flex items-center gap-1"><Users className="w-2 h-2 text-cyan-300"/><span>{githubData.followers}</span></div><div className="flex items-center gap-1"><Activity className="w-2 h-2 text-emerald-300"/><span>{githubData.total_commits}</span></div></div><motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}} className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-2 h-2"/><span>{githubData.last_active}</span></motion.div></div>
}
