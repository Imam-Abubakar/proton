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
    /*
    useEffect(() => {
        setProduct(
                {
                    "products": [
                        {
                            "title": "Haroun and the Sea of Stories - by Salman Rushdie (Paperback)",
                            "manufacturer": "Los Angeles",
                            "brand": "Salman Rushdie",
                            "description": "About the Book The author of The Satanic Verses returns with his most humorous and accessible novel yet. This is the story of Haroun, a 12-year-old boy whose father Rashid is the greatest storyteller in a city so sad that it has forgotten its name. When the gift of gab suddenly deserts Rashid, Haroun sets out on an adventure to rescue his print. Book Synopsis A captivating fantasy novel for readers of all ages, by the author of Midnight's Children and The Satanic Verses \"This is, simply put, a book for anyone who loves a good story. It's also a work of literary genius.\" --Stephen King Set in an exotic Eastern landscape peopled by magicians and fantastic talking animals, Haroun and the Sea of Stories inhabits the same imaginative space as The Lord of the Rings, The Alchemist, The Arabian Nights, and The Wizard of Oz. Twelve-year-old Haroun sets out on an adventure to restore his father's gift of storytelling by reviving the poisoned Sea of Stories. On the way, he encounters many foes, all intent on draining the sea of all its storytelling powers. In this wondrously delightful story, Salman Rushdie gives us an imaginative work of extraordinary power and endearing humor that is, at its heart, an illumination of the necessity of storytelling in our lives. Review Quotes \"A performance that dazzles the eye as it erupts triumphantly out of the dark in a display of fireworks.\" --Anita Desai, The Washington Post Book World \"Fantastical, funny, whooping through drama and comedy, good and evil, introducing creatures delightful or frightening, this joyous and tender book is a whole Arabian Nights entertainment.\" --Nadine Gordimer, The Times Literary Supplement \"A lively, wonderfully inventive comic tale.. His own Sea of Stories from which he drew this entertaining and moving book continues to flow as clear and brilliant as ever.\" --Alison Lurie, The New York Times Book Review \"Wonderful.. A novel of tremendous charm.. A tribute to the pleasures, and terrible powers of storytelling.. As lively and impassioned as any of his previous novels, but this time full of love.\" --Newsweek \"Fantasy, adventure, and allegory in a beautiful mix.. Salman Rushdie reappears enriched as a human being and as a writer.\" --Mario Vargas Llosa \"Eloquent and rejuvenative.. A testament to the magic and power of a child's belief, and to Rushdie's undaunted optimism for the future.\" --Newsday \"Rushdie's gifts include wit and wildness in a sharp engagement with the world's complexities.\" --Los Angeles Times \"Rushdie is a master of brilliant, seductive language.. He transforms his story into the lush, arcane fabric of myth. It is a tale of high adventure, deep sadness, and miraculous recovery--a landmark work from one of today's most important writers.\" --Self \"Like all good fables and fairy tales, Haroun and the Sea of Stories yields its riches on many levels. Readers will relish the wordplay and multilingual punning.\" --Boston Sunday Herald \"A defiantly high-spirited and chivalrous novel.\" --Vanity Fair \"Haroun and the Sea of Stories is a wonderful novel, timeless in the way fine literature is always timeless.\" --Stephen King \"I enjoyed this adventure story.. It involves you at once and keeps you reading, and so it should, for it's from the same magic land as Sinbad, The Thousand and One Nights, The Golden Fleece.\" --Doris Lessing \"Full of light and magic.. A testimony to creativity, and to the gentle strength of hope.\" --The Boston Sunday Globe About the Author Born in Bombay in 1947, Salman Rushdie is the author of six novels, including Grimus, Shame, The Satanic Verses, The Moor's Last Sigh, and The Ground Beneath Her Feet, and a volume of essays, Imaginary Homelands. His numerous literary prizes include the Booker Prize for Midnight's Children and the Whitbread Prize for The Satanic Verses.",
                            "images": [
                                "https://images.barcodelookup.com/134/1342375-1.jpg"
                            ],
                        }
                    ]
                }
            )
    }, [])
    */
    
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
            .get(`${API_URL}=${title}&formatted=y&key=zln3n79lmbnnx1gxso8e9n0wehvhjz`)
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
