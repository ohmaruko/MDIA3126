"use client";

import { useState } from "react";


 export default function Home() {
    // 🐶 button to call api
    // function that calls the api
    // 🐶 somewhere to output the data i get back
    // iterator to work throught the data and format
    // 🐶 display an empty and fullfilled state
    // create a state to contain my data

    // const [products, setProducts] = useState(null);
    const [media, setMedia] = useState(null);

    // const API_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2';

    // async function fetchProducts() {
    //     const response = await fetch(API_URL);
    //     // console.log(response); can see it on network tab in inspect
    //     const data = await response.json();
    //     console.log(data);
    //     setProducts(data); //wait for fetch api, then wait for json, then set product data
    // }
    async function fetchMedia() {
        const response = await fetch(API_URL);
        // console.log(response); can see it on network tab in inspect
        const data = await response.json();
        console.log(data);
        setMedia(data); //wait for fetch api, then wait for json, then set product data
    }

    // const ProductOutput = () => {
    //     if(products){

    //         let productsList = [];
    //         products.forEach((product, index) => {
    //             productsList.push(
    //                 <li key={index}>
    //                     {product.name}
    //                 </li>
    //             )
    //         })

    //         return(
    //             <div className="p-4 border-4 border-black text-center">
    //                 <ul>{productsList}</ul>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div className="p-4 border-4 border-black text-center">💛💛👀💛💛 💛 NO PRODUCT YET 💛 💛💛👀💛💛</div>
    //     )
    // }
    const MediaOutput = () => {
        if(media){

            let mediaLists = [];
            media.forEach((mediaItem, index) => {
                mediaLists.push(
                    <li className="mb-2 text-left p-4" key={index}>
                        <h2 className="text-xl pb-4 pt-4">{mediaItem.title}</h2>
                        <img src={mediaItem.url} alt={mediaItem.explanation}/>
                        <p className="pb-4 pt-4">{mediaItem.explanation}</p>
                    </li>
                )
            })

            return(
                <div className="p-4 border-4 border-black text-center">
                    {/* <ul>{productsList}</ul> */}
                    <ul>{mediaLists}</ul>
                </div>
            )
        }
        return (
            // <div className="p-4 border-4 border-black text-center">💛💛👀💛💛 💛 NO PRODUCT YET 💛 💛💛👀💛💛</div>
            <div className="p-4 border-4 border-black text-center">💛💛👀💛💛 💛 NO MEDIA YET 💛 💛💛👀💛💛</div>
        )
    }

  return (
    <div className="p-4 bg-sky-700">
        <header className="p-4 mb-4 border-4 border-black">
            <h1 className="text-4xl mb-4">Welcome to my product page! 🍪</h1>
            <button
                className="text-sky-300 bg-black p-4"
                // onClick={fetchProducts}
                onClick={fetchMedia}
                >
            🥪 Fetch products!
            </button>

        </header>
        {/* <ProductOutput /> */}
        <MediaOutput />
    </div>
  );
}
