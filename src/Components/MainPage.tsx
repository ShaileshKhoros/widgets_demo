import React, { useEffect,useState } from 'react';
// import {
//     FaChevronRight,
//     FaChevronLeft,
//   } from "react-icons/fa";
import styled from "styled-components";
// import "./styles.css";

 const SlideImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


interface IProps {
//    slides:any
// toggle:any;
toggle?: () => void;
    
}

type Props = IProps;

const MainPage: React.FC<Props> = ({toggle}) => {
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
            
                <div>
                  <button onClick={toggle}>Click me!</button>
                </div>
             
        //     <StyledSlider>
        //     <FaChevronLeft
        //       className="left-arrow"
        //       onClick={prevSlide}
        //     />
            
        //     {slides.map((slide: { image: string | undefined; }, index: number | null | undefined) => {
        //       return (
        //         <div key={index}>
        //           {index === current && (
        //             <SlideImage src={slide.image} alt="" />
        //           )}
        //         </div>
        //       );
        //     })}
        //     <FaChevronRight
        //       className="right-arrow"
        //       onClick={nextSlide}
        //     />
        //   </StyledSlider>
        );
      };

export default MainPage;



