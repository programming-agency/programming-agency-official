import useSticky from '@/hooks/use-sticky';
import Language from '@/src/common/language';
import Sidebar from '@/src/layout/headers/sidebar';
import { SocialLinksHomeTwo } from '@/src/common/social-links';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';

const HeaderTwo = () => {

  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

    return (
        <>
      <header>
      <div className="tp-it-header">
         <div className="tp-it-header__top d-none d-lg-block">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-6">
                     <div className="tp-it-header__top-left">
                        <span>Connect Now:</span>
                        <SocialLinksHomeTwo />                        

                     </div>
                  </div>
                  <div className="col-6">
                     <div className="tp-it-header__top-right text-end">
                        <div className="tp-it-header__top-right-menu">
                           <ul>
                             <li><Link href="/job">Careers</Link></li>
                              <li><Link href="/faq">FAQ</Link> </li>
                           </ul>
                        </div>
                        <div className="tp-it-header__top-right-lang">
                           <span>English <i className="fal fa-angle-down"></i></span>
                           <ul>
                            <Language />
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <div id="header-sticky" className={`tp-it-header__main p-relative ${sticky ? "header-sticky"  : ""}`}>
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-lg-3 col-3">
                     <div className="logo">
                        <Link href="/"><img style={{height: '100px', padding: '14px'}} src="/assets/img/logo/Logo-long.png" alt="logo" /></Link>
                     </div>
                  </div>
                  <div className="col-xl-7 d-none d-xl-block">
                     <div className="main-menu it-menu">
                        <nav id="mobile-menu">
                            <NavMenu />
                            
                        </nav>
                     </div>
                  </div>
                  <div className="col-xl-2 d-none d-xl-block">
                     <div className="d-flex justify-content-end">
                        <div className="tp-it-header__main-cta">
                           <span><i className="fas fa-phone"></i> Call US</span>
                           <b style={{fontSize: '16px'}}><a href="callto:+8801518919421">+880 15189 19421</a></b>
                        </div>
                     </div>

                  </div>
                  <div className="col-9 d-xl-none">
                     <div className="tp-header-search-nav d-flex justify-content-end">
                        <div className="tp-header-search p-relative">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <input type="text" placeholder="Keyword..." />
                              <button type="submit"><i className="fal fa-search"></i></button>
                           </form>
                        </div>
                        <div className="tp-header-nav" onClick={()  => setIsActive(true)}>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <Sidebar isActive={isActive}  setIsActive={setIsActive} />
        </>
    );
};

export default HeaderTwo;