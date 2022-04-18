const BusinessRend = (props) => {
  return (
    <div className="biz" onClick={() => props.showBusiness(props.businessId)}>
<<<<<<< HEAD
    <div className="biz-wrapper">
      <img src={props.image} alt="business" />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.businessName}</h3>
      <h4>{props.businessAddress}, {props.businessCity}, {props.businessState}</h4>
    </div>
=======
      <div className="biz-wrapper">
        <img src={props.image} alt="business" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.businessName}</h3>
      </div>
>>>>>>> 1e1d4b17037568542361cd23683616703cc1bbf2
    </div>
  )
}

export default BusinessRend
