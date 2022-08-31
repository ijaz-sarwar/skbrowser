import React from 'react'

function About() {
  return (
    <div style={{ width: '70%', display: 'inline-block', margin: 40, justifyContent: 'flex-start' }}>
      <img style={{ marginTop: 20, marginBottom: 20 }} src="about.jpg" alt="Smiley face" width="1000px" height="400px" />
      <h2 style={{ textAlign: 'start' }}>About KPBrowser</h2>
      <p style={{ textAlign: 'start' }}>KPBrowser is the bioinformatics freely available extensible, integrative and user-friendly database which provides access to over 150 gene and protein sequences, various prediction tools to support research activities for K. pneumoniae in life science. K. pneumoniae is one of the most concerning pathogens involved in antibiotic resistance in this day and age, and thus it was a dire need to design a platform where its omics was studied in an indetialed manner to factors that pose a threat on Humans.</p>
      <h2 style={{ textAlign: 'start' }}>Mission</h2>
      <p style={{ textAlign: 'start' }}>Today's biology study is widely acknowledged to require both computer and experimental equipment. The paradigm shift in biology has been strongly influenced by information derived from massive data. Together, in silico and in vitro/in vivo analyses will advance the limits of life sciences. Computer analysis of the rapidly growing nucleotide sequence data is particularly critical for life science researchers. KPBrowser plays a major role in carrying out research on K. pneumonia by providing its complete biological information on the genome, proteome, and metabolome at a single platform. The database could be regarded as a shared human treasure. In view of this, KPBrowser access is provided worldwide.</p>
      <h2 style={{ textAlign: 'start' }}>Credit</h2>
      <p style={{ textAlign: 'start' }}>We do hope your use of KPBrowser helped you in your research or educational activities!</p>
      <h2 style={{ textAlign: 'start' }}>Contact</h2>
      <p style={{ textAlign: 'start' }}>Bioinformatics Lab</p>
      <p style={{ textAlign: 'start' }}>Department of Bioinformatics and Biotechnology</p>
      <p style={{ textAlign: 'start' }}>Faculty of Life Sciences</p>
      <p style={{ textAlign: 'start' }}>Government College University,</p>
      <p style={{ textAlign: 'start' }}>Allama Iqbal Road,</p>
      <p style={{ textAlign: 'start' }}>Faisalabad, Pakistan.</p>
      <p style={{ textAlign: 'start' }}>Phone lab: +92 333 6613470</p>
      <p style={{ textAlign: 'start' }}>Phone office: 041-9201553</p>
      <div style={{ display: 'flex' }}>
        <p style={{ textAlign: 'start' }}>E-mails:</p>
        <div style={{ marginLeft: 20 }}>
          <p style={{ textAlign: 'start', color: 'blue' }}>bioinfo.biotech@gcuf.edu.pk</p>
          <p style={{ textAlign: 'start', color: 'blue' }}>irfanmanzoor@gcuf.edu.pk</p>
          <p style={{ textAlign: 'start', color: 'blue' }}>malkanibibi@gmail.com</p>

        </div>
      </div>

    </div>
  )
}

export default About