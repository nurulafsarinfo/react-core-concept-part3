import React from 'react';

const ProductTable = ({ products }) => {
    console.log("Product-", products)
    return (
        <div>
            <h3>{products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            console.log("prorooror- ", product);
                            return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td></td>
                            </tr>)
                        })

                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;