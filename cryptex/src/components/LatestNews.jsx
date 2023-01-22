import axios, { Axios } from 'axios'
import React, { useState, useEffect } from 'react'

const LatestNews = () => {
const [news, setNews] = useState([])
const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4cb01de2d14040cf9b9ed5bda0fa949a';

useEffect(() => {
  axios.get(url).then(response => {
    setNews(response.data.articles)
    console.log(response.data.articles);
  }).catch(error => {
    console.error(error)
   
  })

}, [])

  return (
    <div className=''
    data-aos='fade-up'
    data-aos-delay='400'
    >

            
                <h3 className='font-bold text-xl text-center -mb-32 mt-16'>
                    Keep Updated With the Latest Happennings.
                </h3>
            
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 mt-40'>

                {news.map((news) => {
                    return (
                        
                        <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src={news.urlToImage} alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>{news.author}</h3>
                            <h3 className='font-bold px-3'>{news.title}</h3>
                            <h3 className='text-gray-600 p-4'>{news.description}</h3>
                            <a href={news.url} target='_blank' className='text-blue-hover p-4'>Read More</a>
                        </div>

                            
                        
                    )
                })}
            </div>
    </div>
  )
}

export default LatestNews




