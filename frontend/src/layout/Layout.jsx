// import React from 'react'
// import PropTypes from 'prop-types'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

// const Layout = ({children}) => {
//   return (
//     <div className='flex flex-col min-h-screen'>
//         <Header/>
//         <div className=' py-10 flex-1'>
//         {children}
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

const Layout = ({children, title}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header title={title}/>
        <SideBar children={children}/>
        <div className='flex-1'>
        </div>
        <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
