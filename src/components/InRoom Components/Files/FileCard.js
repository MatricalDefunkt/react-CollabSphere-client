import React from "react";
import { Button } from "@mui/material";
import {
  MDBCard,

  MDBCardBody,
  
} from "mdb-react-ui-kit";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";


var bgColor = ["#ffc09f", "#ffee93", "#fcf5c7", "#a0ced9", "#adf7b6"];


export default function FileCard(props) {

    var bgColor = "#fff"; // Default background color

    if (props.fileType === '.pdf') {
      bgColor = '#FFB6C1'; // Pastel Red
    } else if (props.fileType === '.doc' || props.fileType === '.docx') {
      bgColor = '#87CEEB'; // Pastel Blue
    } else if (props.fileType === '.xlsx' || props.fileType === '.xls') {
      bgColor = '#98FB98'; // Pastel Green
    } else if (props.fileType === '.jpg' || props.fileType === '.jpeg') {
      bgColor = '#FFD700'; // Pastel Yellow
    } else if (props.fileType === '.png') {
      bgColor = '#FFA07A'; // Pastel Orange
    } else if (props.fileType === '.txt') {
      bgColor = '#FFC0CB'; // Pastel Pink
    } else {
        bgColor = "#fff";
      // Add more file types and their colors as needed
    }
    
    // Now the 'bgColor' variable holds the pastel color based on the file type.
    
  return (
    
    <Button href={props.fileLink} target="_blank" className="my-2 p-0" style={{background:'transparent',color:'black',minWidth:'100%',borderRadius:'20px'}}>
    <MDBCard className=" w-100" style={{ backgroundColor: bgColor}}>
      <MDBCardBody className="d-flex justify-content-center align-items-center">
        <div
          className="col-6 d-flex justify-content-start align-items-center"
          style={{ overflow: "hidden" }}
        >
          <AssignmentOutlinedIcon style={{ fontSize: "2em" }} />
          <h5
            className="mb-0 mx-2 p-0"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.fileName}
          </h5>
        </div>

        <div className="col-6 d-flex justify-content-end ">
          <div style={{ textAlign: "right" }}>
            <p
              className="m-0 p-0"
              style={{ fontStyle: "oblique", display: "" }}
            >
              {props.fileType}
            </p>
            <p
              className="m-0 p-0"
              style={{ fontStyle: "oblique", display: "" }}
            >
              {props.creationDate}
            </p>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
    </Button>

  );
}
