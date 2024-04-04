import React from 'react';
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Análise de desempenho</h1>
          <p className="lead">Analise o desempenho das vendas por diferentes perspectivas</p>
          <hr />
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Acessar dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;