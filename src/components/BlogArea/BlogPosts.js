import React from 'react'
import "./BlogArea.css"

function BlogPosts() {
  return (
    <div className='blogPosts'>
        
            <section className="cards-wrapper">
            <div className="card-grid-space">

                <div className="card" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1174073400/photo/meeting-corporate-success-business-brainstorming-teamwork-concept.jpg?s=612x612&w=0&k=20&c=iYrMpV0QVCZj25N_JEeCPvL2_im9Zc1POmvhLKkwXDs=)'}}>
                <div>
                    <h3>Fed Chair Powell calls case &apos;strong&apos; for more interest rate hikes</h3>
                    <p className='text-sm'>
                        Citing robust growth and a generational low in unemployment, 
                        Federal Reserve Chairman Jerome Powell emphasized the central bank&apos;s 
                        commitment to further interest rates in a speech Wednesday. Economic gains 
                        are negating the need for crisis-era monetary policy, the Fed leader told a 
                        European Central Bank forum.
                    </p>
                    <div className="date">21st Aug 2018</div>
                    <div className="tags">
                    <div className="tag">Twitter</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-grid-space">

                <div className="card" style={{backgroundImage: 'url(https://media.istockphoto.com/id/485369549/photo/seller-and-buyer.jpg?s=612x612&w=0&k=20&c=rAAN5nDkMH51cbCCT1eKfbVg5WpAWRfNj1pHB7Oaj5w=)'}}>
                <div>
                    <h3>There is a &apos;much bigger issue&apos; for the market than trade: Analyst</h3>
                    <p className='text-sm'>
                        There is a “much bigger issue” for the market than concerns about trade, investing expert 
                        Richard Bernstein told CNBC on Tuesday. In fact, over the last three to four months, almost every 
                        sizeable market sell-off has come from pro-inflation policies out of Washington, D.C., the CEO and
                        chief investment officer of Richard Bernstein Advisors said.
                     </p>
                    <div className="date">17th Dec 2015</div>
                    <div className="tags">
                    <div className="tag">Facebook</div>
                    </div>
                </div>
                </div>
            </div>

            <div className='blogItemGrp'>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Wealth
                    </h2>
                    <p>
                        EastDale Finance wealth management at its best.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Account
                    </h2>
                    <p>
                        Personal Online and Private Banking with Samson and Barkley Cooperatives.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Payment
                    </h2>
                    <p>
                        Easy transfer of funds between local and foreign accounts.
                    </p>
                </div>
                <div className=' blogItm text-blue-900  leading-relaxed cursor-pointer hover:bg-slate-600 hover:text-white'>
                    <h2 className='text-blue-400 text-2xl mb-4 font-bold'>
                        Commodities
                    </h2>
                    <p>
                        Real time stock market analysis on the go.
                    </p>
                </div>
            </div>
            
            
        </section>    

    </div>
  )
}

export default BlogPosts