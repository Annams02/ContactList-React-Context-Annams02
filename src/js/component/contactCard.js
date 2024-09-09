import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const ContactCard = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");


	function deleteOneContact(element) {
		setId(element)
	}

	function confirmDelete() {
		actions.deleteContact(id);
	}

	function idUpdateContact(id, name, address, phone, email) {
		actions.setIdForUpdate(id, name, address, phone, email)
	}


	let urlImage = "h-https://www.freepik.es/foto-gratis/hombre-casco-mirando-camara_2146200.htm#fromView=search&page=1&position=0&uuid=5fc24659-9dbf-4bdf-ad02-62504d8b4283"
	


	return (
		<div>
		  {store.Contacts.length === 0 && (
			<span className="m-5 p-5">No hay contactos agregados</span>
		  )}
	  
		  {store.Contacts.map((contact) => {
			return (
			  <div key={contact.id} className="row border rounded m-2 p-3">
				<div className="col-3 col-lg-2 p-2 mx-4 my-auto">
				  <img
					src={urlImage}
					className="card-img rounded-circle"
					alt={contact.name}
				  />
				</div>
				<div className="col p-2 my-auto">
				  <div className="row d-flex">
					<div className="col-12 py-3">
					  <h5 className="pt-2">{contact.name}</h5>
					</div>
					<div className="col text-secondary">
					  <div className="d-flex align-items-center">
						<p className="pt-3 mb-0">{contact.address}</p>
					  </div>
					  <div className="d-flex align-items-center">
						<p className="pt-3 mb-0">{contact.phone}</p>
					  </div>
					  <div className="d-flex align-items-center">
						<p className="pt-3 mb-0">{contact.email}</p>
					  </div>
					</div>
				  </div>
				</div>
				<div className="col-2 p-2 ms-auto d-flex align-items-center justify-content-end">
				  <div className="d-flex flex-column align-items-start">
					<Link to="/updateContact">
					  <button
						onClick={() =>
						  idUpdateContact(
							contact.id,
							contact.name,
							contact.address,
							contact.phone,
							contact.email
						  )
						}
						className="btn btn-outline-primary mb-2"
					  >
						<i className="fas fa-edit"></i> {/* Ícono de editar */}
					  </button>
					</Link>
					<button
					  onClick={() => deleteOneContact(contact.id)}
					  className="btn btn-outline-danger"
					  data-bs-toggle="modal"
					  data-bs-target="#exampleModal"
					>
					  <i className="fas fa-trash-alt"></i> {/* Ícono de borrar */}
					</button>
				  </div>
				</div>
			  </div>
			);
		  })}
	  
		  {/* Modal de confirmación para borrar */}
		  <div
			className="modal fade"
			id="exampleModal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		  >
			<div className="modal-dialog">
			  <div className="modal-content">
				<div className="modal-header">
				  <h1 className="modal-title fs-5" id="exampleModalLabel">
					¿Estás seguro?
				  </h1>
				  <button
					type="button"
					className="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
				  ></button>
				</div>
				<div className="modal-body">
				  ¡Si eliminas este contacto, no podrás recuperarlo!
				</div>
				<div className="modal-footer">
				  <button
					type="button"
					className="btn btn-secondary"
					data-bs-dismiss="modal"
				  >
					Cancelar
				  </button>
				  <button
					onClick={() => confirmDelete()}
					type="button"
					className="btn btn-primary"
					data-bs-dismiss="modal"
				  >
					Confirmar
				  </button>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  );
};