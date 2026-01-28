import React from 'react'

const Card = ({id,title,subtitle,description,readMore,buttonText,image}) => {
  return (
    
    <div className="col-md-3 mb-4" key={id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={image} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {subtitle}
                </h6>

                <p className="card-text">{description}</p>

                <a
                  href={readMore}
                  target={"_blank"}
                  className="btn btn-primary"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
  )
}

export default Card