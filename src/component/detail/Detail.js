import React from 'react'

import { useLocation } from 'react-router-dom'
const Detail = () => {

  const location = useLocation()
  const { testvalue } = location.state

  return (

    <div style={{ alignSelf: 'center', margin: 50,width:'80%',display:'inline-block'}}>
      <div style={{ display: 'flex', border: '1px solid', flexDirection: 'row', }}>
        <div style={{ width: '25%', border: '1px solid', }}>
          <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10, textAlign: 'start', margin: 10 }}>Gene Id : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
          <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneId}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
      <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Name : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneName}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
      <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Mol_Type : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.molType}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Type : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneType}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Start Position : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneStartPosition}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene End Position : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneEndPosition}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Length (bp) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneLengthBp}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Feature : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.feature}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Codon_Start : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.condonStart}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Description : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneDescription}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Sequence (FASTA) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneSequenceFasta}</p>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Gene Product (Protein) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.geneProductProtein}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Protein Description : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.proteinDescription}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Protein Sequence (FASTA) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.proteinSequenceFasta}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Protein Length : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.proteinLength}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Localization of Protein using PSortb : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.localizationOfProteinUsingPsortb}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Localization of Protein using CELLO (P) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.localizationOfProteinUsingCelloP}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Non-Homologgous Prediction : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.nonHomologousPridection}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Family Of Protein : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.familyOfProtein}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Biological Process of Protein (P) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.biologicalProcessOfProteinP}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Molecular function of Protein (P) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.molecularFunctionOfProteinP}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Cellular Component Of Protein (p) : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.cellularComponentOfProteinP}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Essentialality of Genes : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.essentialtyOfGenes}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Primer Sequence Of Gene : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.primerSequenceOfGenes}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Promoter Sequence Of Gene by BPROM : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.promoteSequenceOfGenesByBprom}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Promoter Prediction using BDGP : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.promotePredictionUsingBdgp}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>SNP Prediction : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.snpPrediction}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Molecular Weight of Protein : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.molecularWeightOfProtein}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Theoretical pI of Protein : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.theoreticalPIOfProtein}</p>
      </div>
      </div><div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Formula : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.formula}</p>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Instability Index : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.instabilityIndex}</p>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Aliphatic Index : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.aliphaticIndex}</p>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Nature Of Protein : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.natureOfProtein}</p>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
        <div style={{ width: '25%', border: '1px solid', }}>
        <h4 style={{ fontWeight: 'bold', textAlign: 'start', margin: 10 }}>Motif of Protein : </h4>
        </div>
        <div style={{ width: '75%', border: '1px solid', }}>
        <p style={{ margin: 10,overflowWrap:'break-word' }}>{testvalue[0]?.motifOfProtein}</p>
      </div>
      </div>
    </div>
  )
}

export default Detail