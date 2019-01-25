import  React from 'react'

const PicturesComponent = (props) => {
    return(
        <a href="javascript:void(0)" className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
            {/* <span class="d-block ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/Pool.jpg')"}}></span> */}
             <span class="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url(${props.ImageUrl})` }} ></span>
             {/* <img src={props.ImageUrl} alt="" /> */}
        </a>
    )
}

export default PicturesComponent