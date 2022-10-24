import "./customersData.css";

function CustomersData() {
  return (
    <div className="container customers__data">
      <div className="customers__data__one">
        <h4>Titulo llamativo</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ipsum
          quo veniam labore in sint iste aperiam molestias quibusdam architecto
          tempora sed harum aliquam, et esse obcaecati deleniti sequi corrupti?
        </p>
      </div>
      <div className="customers__data__two">
        <div>
            <h4>Servicio:</h4>
            <span>Logo</span>
            <span>Manual de marca</span>
            <span>Brochure</span>
        </div>
        <div>
            <h4>Cliente</h4>
            <span>Oreva S.A.C</span>
        </div>
      </div>
    </div>
  );
}

export default CustomersData;
