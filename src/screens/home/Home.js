import React from 'react'

function Home() {
  return (
    <div style={{ width: '70%', display: 'inline-block', margin: 40 }}>
      <img style={{ marginTop: 20, marginBottom: 20 }} src="home.jpg" alt="Smiley face" width="100%" height="auto" />

      <p style={{ textAlign: 'start' }}>Metabolomics is the newly emerging field of “omics” research. Each organism has a unique and chemically distinct metabolome.
        In field of metabolomics, there is need to create the metabolome database for gram positive bacterial species. Gram positive
        bacteria have a thick layer of cell wall which contains several surface proteins and enzymes for the cell wall sorting and
        targeting mechanism. Many essential details of cellular metabolism and numerous metabolic pathways of gram positive bacteria
        have been worked out through careful biochemical studies and extensive metabolic manipulations. Gram Positive Bacterial
        Metabolite database (GPBMDB) will be design along with their biological roles like disease associations, chemical reaction and
        metabolic pathways. Initially, focus on three gram positive bacteria (Staphylococcus aureus, Streptococcus pneumonaie and
        Bacillus subtilis) to create metabolite database. The pathways, chemical reactions, structure and physical properties of
        metabolites will be collected from online databases like PubChem, KEGG, ChEBI, NCBI and from metabolite libraries.
        An online user-friendly database will be constructed by using computer programs like MySQL and JAVA. The database will create
        to use Ruby and Rails development tool for web applications in the database. This GPBMDB will provide a platform which is
        expected to be a richly annotated, web-accessible and user friendly metabolite database. On the discovery of new metabolites
        the existing information will be updated present in the database. </p>

    </div>
  )
}

export default Home