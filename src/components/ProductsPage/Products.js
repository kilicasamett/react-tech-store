import React from 'react'
import {ProductConsumer} from '../../context';
import Title from '../Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';

export default function Products() {
    return ( <ProductConsumer>
        {value => {
          const { filteredProducts } = value;
            return (
            <section className="py-5">
                <div className="container">
                    {/*title */}
                  <Title center title ="ürünlerimiz" />
                   {/** product filter*/} 
                  <ProductFilter/> 
                 
                  {/**total count */}
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <h6 className="text-title">
                        bulunan ürün sayısı: {filteredProducts.length}
                      </h6>
                    </div>
                  </div>
                  
                  {/**Products */}
                  <div className="row py-5">
                    {filteredProducts.length===0?(
                      <div className="col text-title text-center">
                        üzgünüz, istedğiniz kriterde ürün bulunamamıştır.
                      </div>
                    ): (
                      filteredProducts.map(product =>{
                        return <Product key={product.id} product={product}/>;
                      }))}
                  </div>
                </div>
                
            </section>)
            ;
        }}
    </ProductConsumer>
    );
}
