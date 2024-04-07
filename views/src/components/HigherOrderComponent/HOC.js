import React from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


export default function HOC(WrappedComponent) {
  class HOC extends React.Component{
    render()
    {
        return(
            <div className='container'>
                <Header />
                <WrappedComponent {...this.props} />
                <Footer/>
            </div>
        )
    }
  }

  return HOC;
}
