import React, { useEffect,useState } from 'react';
// import {
//     FaChevronRight,
//     FaChevronLeft,
//   } from "react-icons/fa";



interface IProps {

toggle?: () => void;
    
}

type Props = IProps;

const MainPage: React.FC<Props> = ({toggle}) => {
    const [current, setCurrent] = useState(0);


      
      
        return (
            
                <div>
                  <button className='drawer-button' onClick={toggle}>Click me!</button>
                </div>
             
  
        );
      };

export default MainPage;



