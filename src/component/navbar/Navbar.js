import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./navbar.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible({
      visible: true,
    });
  };
  const onClose = () => {
    setVisible({
      visible: false,
    });
  };
  return (
    <Menu
      defaultSelectedKeys={["home"]}
      mode="horizontal"
      className="container"
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="search">
        <Link to="search">Search</Link>
      </Menu.Item>
      <SubMenu title={<span>Tools and Analysis</span>}>
        <SubMenu title={<span>Genome</span>}>
          <SubMenu title={<span>Essentiality of Genes </span>}>
            <MenuItemGroup
              title={<a href="http://guolab.whu.edu.cn/geptop/">Geptop</a>}
            ></MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span>Primer Prediction </span>}>
            <MenuItemGroup
              title={<a href="https://primer3.ut.ee/">Primer3</a>}
            ></MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span>Promoter Prediction</span>}>
            <MenuItemGroup title={<a href="http://www.softberry.com/berry.phtml?topic=bprom&group=programs&subgroup=gfindb">BPROM</a>} />
            <MenuItemGroup title={<a href="https://fruitfly.org/seq_tools/promoter.html">BDGP</a>} />
          </SubMenu>
          <MenuItemGroup title={<a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome">Blastn</a>} />
          <MenuItemGroup title={<a href="http://genome2d.molgenrug.nl/g2d_pepper_transterm.php">Transcription Terminator Prediction</a>} />
          <MenuItemGroup title={<a href="http://genome2d.molgenrug.nl/g2d_pepper_TFBS.php">Transcription Factor Binding Site Prediction</a>} />
          <MenuItemGroup title={<a href="http://genome2d.molgenrug.nl/g2d_pepper_motifs.php">DNA Motif Build and Search</a>} />
          <MenuItemGroup title={<span>SNP Prediction</span>} />
          <MenuItemGroup title={<span>Operon Prediction</span>} />

        </SubMenu>

        <SubMenu title={<span>Transcriptome</span>} />
        <SubMenu title={<span>Proteome</span>}>
          <SubMenu title={<span>Localization Prediction</span>}>
            <MenuItemGroup title={<a href="https://www.psort.org/psortb/"> PSortb</a>} />
            <MenuItemGroup title={<a href="http://cello.life.nctu.edu.tw/"> CELLO</a>} />
          </SubMenu>
          <SubMenu title={<span>Family Prediction</span>}>
            <MenuItemGroup title={<a href="https://www.ebi.ac.uk/interpro/"> InterPro</a>} />
          </SubMenu>
          <SubMenu title={<span>Motif Prediction</span>}>
            <MenuItemGroup title={<a href="https://prosite.expasy.org/scanprosite/"> ScanProsite</a>} />
          </SubMenu>
          <MenuItemGroup title={<a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome"> Blastp</a>} />
          <MenuItemGroup title={<a href="https://www.expasy.org/resources/protparam">ProtParam</a>} />
          <MenuItemGroup title={<a href="https://prosite.expasy.org/scanprosite/"> ScanProsite</a>} />

        </SubMenu>
        <SubMenu title={<span>Metabolome</span>} />
      </SubMenu>
      <SubMenu title={<span>Download</span>}>
        <MenuItemGroup title={<a href='Kp45.152StrainFASTASequence .docx'>Kp45.152 FASTA Sequence</a>} />
        <MenuItemGroup title={<a href='Kp45.152StrainGenbankFullFile.docx'>Kp45.152 Genbank Full File</a>} />
        <MenuItemGroup title={<a href='Sequencesofgenes.docx'>Sequences of Genes</a>} />
        <MenuItemGroup title={<a href='SequencesofProteins.docx'>Sequences of Proteins</a>} />
      </SubMenu>
      <Menu.Item key="about">
        <Link to="about">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="contact">Contact Us</Link>
      </Menu.Item>
      <Menu.Item key="help">
        <Link to="help">Help</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
