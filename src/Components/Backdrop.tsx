import React, { useEffect,useState } from 'react';
// import {
//     FaChevronRight,
//     FaChevronLeft,
//   } from "react-icons/fa";
// import styled from "styled-components";
import "./Backdrop.css";

//  const SlideImage = styled.img`
//   width: 400px;
//   height: 300px;
//   object-fit: cover;
// `;

// const StyledSlider = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;


interface IProps {
    close?:any
    onReview?: (id: number, studentId?: number) => void;
//    slides:any
    
}

type Props = IProps;

const BackdropFile: React.FC<Props> = ({close}) => {
    const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };
    // console.log(loading,posts,"==========>")


      
      
        return (
          
                <div className="backdrop"  onClick={close} />

        );
      };

export default BackdropFile;



