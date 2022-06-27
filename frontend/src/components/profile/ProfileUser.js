import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditUser, getCurrent } from "../../JS/actions/userActions";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import "./profileUser.css";
const ProfileUser = () => {
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state) => state.userReducer.user);
  console.log(profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, []);

  return (
    <div className="contt">
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{profile.username}</h5>

                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Edit photo
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">FirstName</p>
                    </div>
                    <div className="col-sm-9">
                      {" "}
                      <span>
                        <p className="text-muted mb-0">
                          {profile.firstName}{" "}
                          <i
                            class="fa-solid fa-pen-to-square"
                            id="edit"
                            onClick={dispatch(EditUser())}
                          ></i>
                        </p>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">LastName</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.lastName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">UserName</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.username}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileUser;
