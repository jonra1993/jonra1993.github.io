import React from 'react';

const Testimonials = (props) => {

   const testimonials = () => {
      if (props.data) {
         const test = props.data.map((testimonials) => (
               <li key={testimonials.user}>
                  <blockquote style={{color:'#FFFFFF'}}>
                     <p>{testimonials.text}</p>
                     <cite>{testimonials.user}</cite>
                  </blockquote>
               </li>
            )
         )
         return(test);
      } else {
         return null
      }
   }


   return (
      <section style={{backgroundColor:'#1F1F1F', backgroundImage:'url(../images/testimonials-bg.jpg)',backgroundSize:'cover', backgroundAttachment:'fixed', position:'relative', minHeight:200, width:'100%', overflow:'hidden'}}>
         <div style={{paddingTop:96, paddingBottom:66}}>
            <div className="row">
               <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
                  <ul >
                     {testimonials()}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Testimonials;
