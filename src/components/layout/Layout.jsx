//layout ka use hum isliye krte h ki kuch aise component hote h jaise ki navbar, footer etc to wo humein hr page pr chahiye hota hai aur unke bich ke content change hote rhte hain , isliye hum layout naam k component ko bnate hain

import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
function layout({children}) {
  return (
    <div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout