import React,{useState,useEffect} from 'react';
import './Gallery.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {data} from '../data'
import {PhotoCard} from '../PhotoCard';
import {useRouteMatch} from 'react-router-dom';


export const Gallery = () => {
    return (
        <BrowserRouter>
           <div className="gallery">
           <ul>
             {
               data.map((route,id) => {
                 return (
                    <li className="nav"  key={id}>
                        <Link to={route.path}>{route.title}</Link>
                    </li>
                 );
               })
             }
           </ul>
           <Switch>
             {
               data.map((route,id) => {
                 return (
                      <Route path={route.path} img={route.img} key={id}>
                        <PhotoCard className="pic" tit={route.tit} name={route.name} path={route.path} img={route.img} key={id} id={id}/>
                      </Route>
                 );
               })
             }
           </Switch>
        </div>
        </BrowserRouter>
      );
}


