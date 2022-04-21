const BusinessRend = ({ businessName, image, id, showBusiness }) => {
  return (
    <div className="card" onClick={() => showBusiness(id, businessName)}>
      <div className="img-wrapper">
        <img src={image} alt={businessName} />
        </div>
        <div className="info-wrapper">
        {/* <h4>{businessName}</h4> */}
      </div>
      </div>
  )
}

export default BusinessRend
