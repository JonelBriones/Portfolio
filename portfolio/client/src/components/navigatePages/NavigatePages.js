import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as AiFillCaretRight from 'react-icons/ai';
import * as AiFillCaretLeft from 'react-icons/ai';
const NavigatePages = (props) => {

    const {left,page,right} = props;

    const navigate = useNavigate();
    const redirect = (page) => {
        navigate(page);
    }
    return (
        <div className='navigate-container'>
            <div className='navigate'>
                <p onClick={()=>redirect(`/${left}`)}><AiFillCaretLeft.AiFillCaretLeft/>{left}</p>
                <h1>{page}</h1>
                <p onClick={()=>redirect(`/${right}`)} className='navigate-right'>{right}<AiFillCaretRight.AiFillCaretRight/></p>
            </div>
        </div>
    )
}
export default NavigatePages;