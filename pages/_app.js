import '../styles/globals.css'
import { useEffect, useRef } from 'react'
import Router from 'next/router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import "locomotive-scroll/src/locomotive-scroll.scss"


NProgress.configure({showSpinner: false})
NProgress.configure({ easing: 'ease', speed: 500 })
NProgress.configure({ trickleRate: 0.2, trickleSpeed: 620 })


Router.events.on('routeChangeStart', () =>  NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

  const ref = useRef(null)

  useEffect(() => {
    let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
          scroll = new locomotiveModule.default({
              el: document.querySelector("[data-scroll-container]"),
              smooth: true,
              // multiplier: 1
          });
      });

      // `useEffect`'s cleanup phase
      return () => scroll.destroy();
    });
    
  return (

    <main ref={ref} data-scroll-container  >
      <Component {...pageProps} />
    </main>
    )}
    
export default MyApp
    
 
 
 
 
 
 
 
 
    // useEffect(() => {
    // let scroll;
    //   import("locomotive-scroll").then((locomotiveModule) => {
    //       scroll = new locomotiveModule.default({
    //           el: document.querySelector("[data-scroll-container]"),
    //           smooth: true,
    //           smoothMobile: false,
    //           resetNativeScroll: true
    //       });
    //   });
  
    //   // `useEffect`'s cleanup phase
    //   return () => scroll.destroy();
    // });
    // <main className="main" data-scroll-container>
    // </main>  