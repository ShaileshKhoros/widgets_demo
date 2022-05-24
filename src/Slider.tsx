import React, { useEffect,useState } from 'react';
import {
    FaChevronRight,
    FaChevronLeft,
  } from "react-icons/fa";
import styled from "styled-components";
import "./styles.css";
import "./Carousal"

 const SlideImage = styled.img`
  width: 350px;
  height: 220px;
  
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:15%
`;


interface IProps {
   slides?:any
    
}
interface IData {
image?:string;
title?:string;
}

type Props = IProps&IData;

const Slide: React.FC<Props> = ({slides}) => {
    const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
 


      
      
        return (
            <StyledSlider>
            <FaChevronLeft
              className="left-arrow"
              size={40}
              color="#6B6A6B"
              onClick={prevSlide}
              style={{marginRight:20}}
            />
            
            {slides.map((slide: IData, index: number | null | undefined) => {
              return (
                <div key={index}>
                  {index === current && (
                    < >
                    <SlideImage src={slide.image}  alt="" />
                    <div className='button-div' >
                      <div className='card-title'> {slide.title}</div>
                      <div className='info-title' > 6D-588 ( 8:30 AM - 2:10 PM)<br/><br/>NY - DEL Price USD: 903 $</div>
                      <button>Book</button>
                    </div>
                    </>
                  )}
                </div>
              );
            })}
            <FaChevronRight
              className="right-arrow"
              onClick={nextSlide}
              size={40}
              color="#6B6A6B"
              style={{marginLeft:20}}


            />
          </StyledSlider>
        );
      };

export default Slide;



                
