import React, { Children, useEffect,useState } from 'react';

import "./SlideDrawer.css";



interface IProps {
   show:boolean;
   children?:any;
    
}

type Props = IProps;

const Slide: React.FC<Props> = ({show,children}) => {


    let drawerClasses = 'side-drawer'
    if(show) {
       drawerClasses = 'side-drawer open'
    }
           
        return (         
            <div className={drawerClasses}>
               {children}
              
         </div>

        );
      };

export default Slide;



