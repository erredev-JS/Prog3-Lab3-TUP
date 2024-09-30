import { Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct {
    handleAddProduct: Function
}

export const FormProduct: FC<IPropsFormProduct>= ({handleAddProduct}) => {

    
    
    const {handleChange, values, resetForm} = useForm({
        nombre:"",
        imagen:"",
        precio:0
    })
    console.log(values);

    const handleSubmitForm = ()=>{
        handleAddProduct(values)
        resetForm();
    }


    return (


    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
            <Form.Label/>Nombre<Form.Label/>
            <Form.Control type="text" name="nombre" placeholder="Ingrese el nombre del producto" value={values.nombre} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formNombre">
            <Form.Label/>Imagen<Form.Label/>
            <Form.Control type="text" name="imagen" placeholder="Ingrese el nombre del producto" value={values.imagen} onChange={handleChange}/>
        </Form.Group>
        
        <Form.Group controlId="formNombre">
            <Form.Label/>Precio<Form.Label/>
            <Form.Control type="number" name="precio" placeholder="Ingrese el nombre del producto" value={values.precio} onChange={handleChange}/>
        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
            <button onClick={handleSubmitForm}>Enviar Producto</button>
        </div>
    </Form>
)
}
