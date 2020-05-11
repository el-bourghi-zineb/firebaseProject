// a functional component because it has not a state
import React from 'react';
import{Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
//import SignedOutLinks from './SignedOutLinks';
//import {connect} from 'react-redux';

const MoreInfo=()=>{
    return(
        <div className="container">
        <h5>Cette application vous offre plusieurs services et avantages. Vous pouvez</h5>
        <ul>
         <li>Uploader des fichiers (tous types de fichiers : images, documents, vidéos, etc.)</li>
         <li>Télécharger ces fichiers</li>
         <li>Supprimer ces fichiers</li>
         <li>Générer un lien pour partager un fichier (pour usage publique)</li>
        </ul>
        </div>
    
    )
}


export default MoreInfo;