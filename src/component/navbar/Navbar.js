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
          <MenuItemGroup
            title={<a href="https://primer3.ut.ee/">Primer Prediction</a>}
          ></MenuItemGroup>
          <MenuItemGroup
            title={<a href="http://guolab.whu.edu.cn/geptop/">Promoter Prediction</a>}
          ></MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Transcriptome</span>}>
          <MenuItemGroup
            title={<a href="https://www.w3schools.com"> w3schools</a>}
          ></MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Proteome</span>}>
          <MenuItemGroup
            title={<a href="https://www.w3schools.com"> w3schools</a>}
          ></MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Metabolome</span>}>
          <MenuItemGroup
            title={<a href="https://www.w3schools.com"> w3schools</a>}
          ></MenuItemGroup>
        </SubMenu>
      </SubMenu>
      <SubMenu title={<span>Download</span>}>
        <MenuItemGroup title={<a href='SequencesofProteins.docx'>Kp45.152 FASTA Sequence</a>} />
        <MenuItemGroup title={<a href='SequencesofProteins.docx'>Kp45.152 Genbank Full File</a>} />
        <MenuItemGroup title={<a href='SSequencesofgenes.docx'>Sequences of Genes</a>} />
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
