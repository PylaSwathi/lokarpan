import React from 'react';
import './Newsletter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus,faNewspaper ,faCalendarDays,faComputer,faMicroscope} from '@fortawesome/free-solid-svg-icons';


const Newsletter = () => {
    return (
        <div>
            <section className='newsletter-section'>
                <div className='newsletter-section-header'>Get the best for Lokarpan in your in-box.</div>
                <div className='newsletter-section-subheader'>Select the newsletter you would like to recieve. Then, add your email to sign up.</div>
                </section>
                
                <section className='newsletter-letters'>
   <div className='daily'>
    < div className='daily-icon'>
    <FontAwesomeIcon icon={faNewspaper} className='daily-icon1' />
    <FontAwesomeIcon icon={faCirclePlus} className='daily-icon2'/>
    </div>
     
    <div className='newsbox-heading'>Daily</div>
    <div className='newsbox-content'>Our flagship newsletter highlights
    the best of The New Works, including
     top stories, fiction, horror and podcasts.</div>
     <button className='newsbox-tag'>Daily</button>

  

    </div>
    <div className='daily'>
    < div className='daily-icon'>
    <FontAwesomeIcon icon={faCalendarDays} className='daily-icon12' />
    
   
    <FontAwesomeIcon icon={faCirclePlus} className='daily-icon2'/>
    </div>
      <div className='newsbox-heading'>Weekly</div>
    <div className='newsbox-content'>Our flagship newsletter highlights
    the best of The New Works, including top stories,
     fiction, horror and podcasts.</div>
    
     <button className='newsbox-tag'>Weekly</button>
    
    
    </div>
    
                
                </section>
   
    
                <section className='newsletter-letters-1'>
                    <div className='kith'>Kith</div>
                    <div className='newsletter-letters-1-newsboxs'>
   <div className='daily'>
    < div className='daily-icon'>
   
    <FontAwesomeIcon icon={faComputer} className='ic1' />
    <FontAwesomeIcon icon={faCirclePlus} className='daily-icon2'/>
    </div>
     
    <div className='newsbox-heading'>New Yorker</div>
    <div className='newsbox-content'>Our flagship newsletter highlights
    the best of The New Works, including
     top stories, fiction, horror and podcasts.</div>
     <button className='newsbox-tag'>Twce Weekly</button>

  

    </div>
    <div className='daily'>
    < div className='daily-icon'>
    
    <FontAwesomeIcon icon={faMicroscope} className='ic1'/>
   
    <FontAwesomeIcon icon={faCirclePlus} className='daily-icon2'/>
    </div>
      <div className='newsbox-heading'>Science</div>
    <div className='newsbox-content'>Our flagship newsletter highlights
    the best of The New Works, including top stories,
     fiction, horror and podcasts.</div>
    
     <button className='newsbox-tag'>Weekly</button>
    
    
    </div>
    
    </div>
                </section>   
                
                
                </div>
      )

}
export default Newsletter;