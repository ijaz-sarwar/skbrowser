import React from 'react'

function Help() {
  return (
    <div style={{ width: '70%', display: 'inline-block', margin: 40, justifyContent: 'flex-start' }}>
      <h2 style={{ textAlign: 'start' }}>KPBrowser Search</h2>
      <p style={{ textAlign: 'start' }}>You can submit your query in two ways by entering the required gene name (e.g. dnaA) in its search bar and it also accepts the KPB ID to retrieve the corresponding entry in its separate search bar. The KPB ID starts from 1 and goes on. Each record has a specific number starting from 1 and then so on e.g. first record has 1 ID number, second record has 2 ID and it goes on till the last record of the database. </p>
      <p style={{ textAlign: 'start' }}>When the search term does not match any of the gene names or KPB ID, no information is given on the page. </p>
</div>
  )
}

export default Help