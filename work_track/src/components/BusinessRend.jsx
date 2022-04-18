const BusinessRend = ({ businessName, image, id, showBusiness }) => {
  return (
    <div className="biz-wrapper" onClick={() => showBusiness(id)}>
      <div className="biz-image-wrapper">
        <img src={image} alt={businessName} />
      </div>
      <div className="biz-info-wrapper flex-col">
        <h3>{businessName}</h3>
      </div>
    </div>
  )
}

export default BusinessRend
