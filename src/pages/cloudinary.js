import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
        allCloudinaryAsset {
            nodes {
              id
              fluid {
                src
              }
            }
        }
    }
  `);
    console.log(data.allCloudinaryAsset.nodes);
    var fotos = data.allCloudinaryAsset.nodes;
  return  <div>
            {fotos.map(foto => (
                <div key={foto.id} >
                    <Image style={{ height: `300px`}} fluid={foto.fluid} alt="Jason" />
                </div>
            ))}
        </div>;
};