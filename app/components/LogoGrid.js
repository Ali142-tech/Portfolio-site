export default function LogoGrid({ logos }) {
  return (
    <div className="row justify-content-center g-4 align-items-center">
      {logos.map((logo, index) => (
        <div className="col-6 col-md-3 col-lg-2 text-center" key={`${logo}-${index}`}>
          <img src={logo} alt={`Client logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
