import React from 'react'

const ContactsComponent = props => {
    
    return(
            <div className="contacts-col col-4" key={props.id} id={props.id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="contact-content">
                        <img src={props.Image} className="contact-content-img rounded-circle"  alt="" style={{ width:"15%", height: "auto" }} />
                        <div className="contact-content-about">
                            <h4 className="contact-content-name mb-1">
                                {props.Title}
                            </h4>
                            <div style={{ fontSize: "12px" }}>{props.Description}</div>
                        </div>
                        <div className='small'>
                            {props.phone}
                        </div>
                        <hr className="border-light"></hr>
                        <div>
                          <a href={'//www.'+ props.email} className="text-secondary">
                            <span className="ion ion-md-mail"></span>
                          </a> &nbsp;&nbsp;
                          <span className="text-lighter">|</span> &nbsp;&nbsp;
                          <a href={'//www.'+ props.twitter} className="text-twitter">
                            <span className="ion ion-logo-twitter"></span>
                          </a> &nbsp;&nbsp;
                          <a href={'//www.'+ props.facebook} className="text-facebook">
                            <span className="ion ion-logo-facebook"></span>
                          </a> &nbsp;&nbsp;
                          <a href={'//www.'+ props.instagram} className="text-instagram">
                            <span className="ion ion-logo-instagram"></span>
                          </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactsComponent