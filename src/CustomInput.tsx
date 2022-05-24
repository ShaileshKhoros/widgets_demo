import React from 'react';
import "./input.css";

interface IProps {
placeholder?:string;
inputValue?:string;
onChange?: () => void;
size?:number;   
}

type Props = IProps;

const Input: React.FC<Props> = ({onChange,inputValue,placeholder,size}) => {

        return (
            
                <div className='input-container'>
                  <input
                     value={inputValue}
                     placeholder={placeholder||"Enter a tag"}
                     onChange={onChange}
                     size={size||40}
                   />
                </div>
                     
        );
      };

export default Input;



