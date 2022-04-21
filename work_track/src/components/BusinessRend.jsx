const BusinessRend = ({
  businessName,
  businessImage,
  businessAddress,
  businessCity,
  businessState,
  id,
  showBusiness
}) => {
  return (
    <div
      className="biz-wrapper"
      onClick={() =>
        showBusiness(
          id,
          businessName,
          businessAddress,
          businessCity,
          businessState,
          businessImage
        )
      }
    >
      <div className="biz-image-wrapper">
        <img src={businessImage} alt={businessName} />
      </div>
      <div className="biz-info-wrapper flex-col">
        <h3>{businessName}</h3>
      </div>
    </div>
  )
}

export default BusinessRend
