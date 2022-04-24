import React, { useState, useEffect } from 'react';
import 'react-bootstrap';
// import { Buffer } from 'buffer';
// import { useModal } from 'react-hooks-use-modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert, Col } from "react-bootstrap";
import { keys } from "regenerator-runtime";
import './CreatePopUp.css';
const BN = require("bn.js");

const CreateNFT = () => {
  // const [nftURL, setNftURL] = useState();
  // const [src, setsrc] = useState()
  // const [file, setFile] = useState()
  // const [dimension, setDimension] = useState({
  //     row: 2,
  //     column: 2,
  // })
  // const [description, setDescription] = useState({
  //     name: '',
  //     description: '',
  // });
  // const [Modal, open, close, isOpen] = useModal('root', {
  //     preventScroll: true,
  //     closeOnOverlayClick: false
  //   });
  // const [loading, setLoading] = useState(false);
  // const [create, setCreate] = useState(false);

//   const handleFileChange = (e) => {
//     const fileData = e.target.files[0];
//     setFile(fileData);
    
//     const URL = window.URL || window.webkitURL;
//     const image = document.getElementById('nft');
//     image.src = URL.createObjectURL(fileData);
//     setsrc(URL.createObjectURL(fileData));
// }

//   const fileUpload = async () => {
//       setLoading(true);
//       console.log("Uploading...");
//       if(file != null) {
//           const REQUEST_URL = "https://api.nft.storage/upload";
        
//           const CID = await fetch(REQUEST_URL, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "image/jpeg",
//               }
//           })
           
//       }
//   }

//   const updateDimension = () => {
//       const row = document.getElementById('row');
//       const column = document.getElementById('column');
//       const re = /^[0-9\b]+$/;
      
//       if ((re.test(row.value) || row.value === '') && (column.value === '' || re.test(column.value))) {
//           setDimension({
//               row: parseInt(row.value),
//               column: parseInt(column.value)
//           })
//       } else {
//           alert("Please enter a valid number");
//       }
//   }

//   const updateDescription = () => {
//     const name = document.getElementById('name');
//     const description = document.getElementById('description');
//     setDescription({
//         name: name.value,
//         description: description.value
//     })
// }

  const createNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: window.accountId,
        metadata: {
            title: "Tjelailah's SpringIsNEAR Meme",
            description: "Tjelailah's Meme Contest Submission for Challenge 1 of the NEAR Spring Hackathon",
            media:
              "ipfs://bafybeibavct5kgdgcbuqqvjl336g2m4zyfqdb7nyrmoic3jo43oo7tpu2q",
          },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <Card style={{
      border: 'none',
      borderRadius: 5,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      paddingTop: 10,
      height: 300
    }}>
      <Container>
        {/* <Row style={{ marginBottom: "2vh" }}> */}
           {/* <Col> */}
            <p>
              Step 2: After you have logged in, hit this button to mint your "Go
              Team" Token and go your{" "}
              <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
              NFT
            </p>
            <Button
            disabled={window.accountId === ""}
            onClick={setCreate(true)}
            style={{ 
              position: "absolute",
              bottom: 10,
              left: 20,
              }}
          >
          Create NFT
          </Button>
      </Container>
      {/* {create &&
        <div className='mint'>
            <input type="file" accept='image/jpg, image/jpeg' onChange={handleFileChange} /><br />
            <input type="text" placeholder="Name" id='name' onChange={updateDescription} /><br />
            <input type="text" placeholder="Description" id="description" onChange={updateDescription} /><br />
            <input type="number" placeholder="Rows" id='row' onChange={updateDimension} /><br />
            <input type="number" placeholder="Columns" id='column' onChange={updateDimension} /><br />
            <img className="nft-image" id='nft' /><br />
            <input id='mint' type="submit" value='MINT' onClick={open} disabled={!file} />
        </div>}
      <Modal>
        <div className='mintModal'>
            {!loading && 
            <button className='close' onClick={() => {
                setLoading(false)
                close();
            }}>&#x2715;</button>}
            <img className="modal-image" id='nft' src={src} /><br />
            <p>Name: {description.name}</p>
            <p>Description: {description.description}</p>
            <p>Dimension: {dimension.row} x {dimension.column}</p>
            <button onClick={fileUpload} disabled={loading}>
                {loading && <FontAwesomeIcon icon={faSpinner} />}
                Continue
            </button>
            {loading && <h5>Open your wallet to confirm the transaction</h5>}
        </div>
        </Modal> */}
    </Card>
    
  );
};

CreateNFT.propTypes = {};

export default CreateNFT;