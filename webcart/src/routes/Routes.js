import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'


const Routes = () => {
    return (
        <Switch>
        <div>
            <h1>Link Page</h1>
            <Route path='/products/:id'>
                <ProductDetail />
            </Route>
            <Route path='/products'>
                <Products />
            </Route>
            <Route path='/'>
                <Index />
            </Route>
            <Route path='*'>
                <PageNotFound/>
            </Route>
        </div>
        </Switch>
    )
}


export default Routes;