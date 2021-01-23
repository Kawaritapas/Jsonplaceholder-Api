import { React, Fragment, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button, Modal } from "semantic-ui-react";

export default function Post(props) {
  let [modal, setModal] = useState("");
  let [user, setUser] = useState("");
  function handleClick() {
    setModal(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.post.userId}`)
      .then((res) => {
        console.log(res.data);
        setUser((user = res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Fragment>
      <br></br>
      <div className="ui main text container ">
        <div
          class="ui  card"
          style={{ width: "600px", backgroundColor: "white" }}
        >
          <div class="content">
            <div class="header">Post Title</div>
            <p>{props.post.title}</p>
          </div>
          <div class="content">
            <h4 class="ui sub header" style={{ color: "blue" }}>
              Description
            </h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>{props.post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content">
            <button onClick={handleClick} class="ui primary button">
              Show More Information
            </button>
          </div>
          <div>
            <Modal
              size="medium"
              open={modal}
              onClose={() => setModal(false)}
              onOpen={() => setModal(true)}
            >
              <Modal.Header>More Information</Modal.Header>
              <Modal.Content image scrolling>
                <Modal.Description>
                  <p>
                    Authors name:{" "}
                    <span style={{ color: "blue" }}>{user.name}</span>
                  </p>
                  {user.company ? (
                    <p>
                      CatchPhrase:{" "}
                      <span style={{ color: "blue" }}>
                        {user.company.catchPhrase}
                      </span>
                    </p>
                  ) : (
                    <p>...loading</p>
                  )}
                  <p>
                    Post Title:{" "}
                    <span style={{ color: "blue" }}>{props.post.title}</span>
                  </p>
                  <p>
                    {" "}
                    Post body:{" "}
                    <span style={{ color: "blue" }}>{props.post.body}</span>
                  </p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  content="Close"
                  labelPosition="right"
                  icon="close"
                  onClick={() => setModal(false)}
                  negative
                />
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      </div>
      <br></br>
    </Fragment>
  );
}
