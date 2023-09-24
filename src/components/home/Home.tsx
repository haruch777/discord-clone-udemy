// import useEffect and useState
import { useEffect, useState } from "react";
// import modal from material UI
import { Modal, Box } from "@mui/material";

// write some style to pass into modal
const style = {
  fontFamily: "Montserrat",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 200,
  border: "10px solid hotpink",
  boxShadow: 24,
  padding: 5,
  textAlign: "center",
  background: "#de4899",
};

export default function Home() {
  const [displayPopUp, setDisplayPopUp] = useState(true);

  // when pop-up is closed this function triggers
  const closePopUp = () => {
    // setting key "seenPopUp" with value true into localStorage
    localStorage.setItem("seenPopUp", "true");
    // setting state to false to not display pop-up
    setDisplayPopUp(false);
  };

  // the useEffect to trigger on first render and check if in the localStorage we already have data about user seen and closed the pop-up
  useEffect(() => {
    // getting value of "seenPopUp" key from localStorage
    let returningUser = localStorage.getItem("seenPopUp");
    // if it's not there, for a new user, it will be null
    // if it's there it will be boolean true
    // setting the opposite to state, false for returning user, true for a new user
    setDisplayPopUp(!returningUser);
  }, []);

  return (
    <>
      <div>
        {/* conditional rendering, if displayPopUp is truthy we will show the modal */}
        {displayPopUp && (
          <Modal
            open={true}
            // once pop-up will close "closePopUp" function will be executed
            onClose={closePopUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* in the line below we pass our custom styles object to the modal via 'sx' prop*/}
            <Box sx={style}>
              {/* what user will see in the modal is defined below */}
              <h1>Very important message</h1>
              <h3>Just press OK button to never see it again</h3>
              <button onClick={closePopUp}>OK</button>
            </Box>
          </Modal>
        )}
      </div>
    </>
  );
}
