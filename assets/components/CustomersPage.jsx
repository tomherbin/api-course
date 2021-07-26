import React from "react";

const CustomersPage = (props) => {
  return (
    <>
      <h1>Liste des clients</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id.</th>
            <th scope="col">Client</th>
            <th scope="col">Email</th>
            <th scope="col">Entreprises</th>
            <th scope="col" className="text-center">Factures</th>
            <th scope="col" className="text-center">Montant total</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>18</td>
            <td><a href="#">Tom Herbin</a></td>
            <td>tom@gmail.com</td>
            <td>Tom Inc</td>
            <td className="text-center">
                <span className="badge badge-primary">4</span>
                </td>
            <td className="text-center">2400$</td>
            <td><button className="btn btn-sm btn-danger">Supprimer</button></td>
          </tr>
          <tr>
          <td>18</td>
            <td><a href="#">Tom Herbin</a></td>
            <td>tom@gmail.com</td>
            <td>Tom Inc</td>
            <td className="text-center">
                <span className="badge badge-primary">4</span>
                </td>
            <td className="text-center">2400$</td>
            <td><button className="btn btn-sm btn-danger">Supprimer</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomersPage;
