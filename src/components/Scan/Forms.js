import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";


function Forms() {
    const [err, setError] = useState("");
    const [scan, setScan] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [product, setProduct] = useState([]);

    const API_URL = "https://api.barcodelookup.com/v3/products?barcode";

    const onBarClick = () => {
        setScan(true);
    }
  
    const productSet = product.products?.map((fix) => {
        
            return (
                <div className='col-mb-12'>
                    <div className='mt-5 mb-3'>
                        <img width="90px" src={fix.images !== "" ? fix.images : "https://via.placeholder.com/400"} alt={fix.title} />
                    </div>
                    <div>
                        <div className='mb-5'>
                            <h5>Product Name: </h5>
                            <span>{fix.title}</span>
                        </div>
                        <div className='mb-5'>
                            <h5>Description: </h5>
                            <span>{fix.description}</span>
                        </div>
                        <div className='mb-5'>
                            <h5>Manufacturer: </h5>
                            <span>{fix.manufacturer}</span>
                        </div>
                        <div className='mb-5'>
                            <h5>Brand: </h5>
                            <span>{fix.brand}</span>
                        </div>
                    </div>

                </div>
            );
        
    })


    const searchProduct = async (title) => {
        axios
            .get(`${API_URL}=${title}&formatted=y&key=9djq64dzuij73d9t1128i17wn7vq1y`)
            .then((response) => {
            setProduct(response.data);
            })
    };

    console.log(product)

    const onSubmit = (e) => {
        e.preventDefault();
        searchProduct(searchTerm);
    };

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-12">
                            <div className="contact-form">
                                <h4>Product Lookup</h4>
                                <p>
                                    Click to scan a barcode or enter
                                    your barcode number below
                                </p>
                                <form onSubmit={onSubmit} className="row">
                                    <div className="col-md-12">
                                        {scan ?
                                            (
                                                <div className="text-center col-md-4">
                                                    <BarcodeScannerComponent
                                                        width={200}
                                                        height={200}
                                                        onUpdate={(err, result) => {
                                                            if (result) setSearchTerm(result.text);
                                                            else setError("Not Found");
                                                        }}
                                                    />
                                                </div>
                                            )
                                            :
                                            (
                                                <div>{''}</div>
                                            )

                                        }

                                        <div className="main-btn col-md-12" onClick={onBarClick}>

                                            Scan Barcode
                                            <i className="fa fa-barcode-read ml-2"></i>
                                        </div>
                                        <div className="mb-5 mt-5 text-center">OR</div>
                                        <input
                                            type="text"
                                            name="suject"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Enter Barcode Number"
                                        />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <input type="submit" value="Check Product" />
                                    </div>
                                    {product?.length != 0 ? (
                                        <>
                                            {productSet}
                                        </>
                                    ) : (
                                        <div className="col-md-12 text-center mt-5">
                                            <h5>No product found</h5>
                                        </div>
                                    )}



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forms;
