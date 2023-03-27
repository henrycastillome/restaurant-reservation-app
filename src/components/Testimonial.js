
const Testimonial = ({ imageSrc, name, title, review }) => {
    return (
        <div className="div4 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src={imageSrc} alt={name}/>
          </div>
          <div className="detbox">
            <p className="name dark">{name}</p>
            <p className="designation dark">Verified Customer</p>
          </div>
        </div>
        <div className="review dark">
          <h4>{title}</h4>
        <p>“ {review} ”</p>
        </div>
      </div>
    );
  };
  
  export default Testimonial;