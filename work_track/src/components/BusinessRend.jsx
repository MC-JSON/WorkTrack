const BusinessRend = (props) => {
  return (
    <div className="biz" onClick={props.showBusiness(props.businessId)}>
      <div className="biz-wrapper">
        <img src={props.image} alt="business" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.businessName}</h3>
      </div>
    </div>
  )
}

export default BusinessRend
