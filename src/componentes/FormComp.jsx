import React, { useState } from "react";
import InputComponent from "./InputComponent";


function FormComp() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    correo: "",
  });

  const handLeChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  

  const btnEnviar = (e) => {
      // console.log(e.target)
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
  .forEach(function (form) {
      if (!form.checkValidity()) {
        e.preventDefault()
          e.stopPropagation()
          window.alert("Completar los datos")
      } else {
        window.alert("Se enviaron los datos")
          
      }

      form.classList.add('was-validated')
    
  })
  }

  const { nombre, apellido, dni, correo } = formValues;
  return (
    <div className="container ">
      <div className="row mt-5 ">
        <div className="col-12 col-md-6 offset-md-3 bg-secondary rounded d-flex justify-content-center text-center ">
          <form className="g-3 my-3 needs-validation">
            <InputComponent
              dato="Nombre"
              tipo="text"
              handLeChange={handLeChange}
              inputValue={nombre}
            />
            <InputComponent
              dato="Apellido"
              tipo="text"
              handLeChange={handLeChange}
              inputValue={apellido}
            />
            <InputComponent
              dato="DNI"
              tipo="number"
              handLeChange={handLeChange}
              inputValue={dni}
            />
            <InputComponent
              dato="Correo"
              tipo="email"
              handLeChange={handLeChange}
              inputValue={correo}
            />

            <div className="my-3">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={btnEnviar}
              >
                Enviar datos
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComp;
