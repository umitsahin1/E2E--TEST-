import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Success() {
  const history = useHistory();
  return (
    <div className="success">
      <h2>Sisteme başarı ile giriş yaptınız</h2>
      <Button color="primary" onClick={() => history.push("/")}>
        Ana Sayfa
      </Button>
    </div>
  );
}
