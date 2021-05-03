import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './Sdata'
import Cards from './Cards'
import './Cards.css'

ReactDOM.render(
  <>
  <Cards/>
 </>
 
 ,document.getElementById('root')
 );
 
 for (let i = 0; i<Sdata.length; i++){
  let ul_sl = document.querySelector('.react-multi-carousel-track')
  let il_sl = ul_sl.getElementsByTagName("li")[i];
  let imgg = document.getElementById("main_bg")
  console.log(il_sl);
  il_sl.style.transitionDuration='500ms';
  il_sl.onclick = () =>{
   window.location = Sdata[i].link;
  }
  let chngImg = () => {
    setTimeout(function(){
       imgg.src=Sdata[i].img_src; 
      }, 0)
      
      
    };
    il_sl.addEventListener("mouseover", chngImg); 
}