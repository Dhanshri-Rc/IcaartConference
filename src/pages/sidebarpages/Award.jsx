import React from "react";

function Award() {

  const container = {
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial, Helvetica, sans-serif"
  };

  const title = {
    fontSize: "28px",
    fontWeight: "bold"
  };

  const description = {
    color: "#444",
    marginTop: "10px"
  };

  const years = {
    margin: "15px 0",
    color: "#c46a00",
    fontSize: "14px"
  };

  const yearTitle = {
    marginTop: "25px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "5px",
    fontSize: "16px"
  };

  const awardBlock = {
    marginTop: "15px"
  };

  const paperTitle = {
    color: "#c46a00",
    fontStyle: "italic",
    margin: "4px 0"
  };

  const authors = {
    fontSize: "14px",
    color: "#333"
  };

  return (
    <div style={container} className="text-justify text-[14px]">

      <h1 style={title}>Previous Awards</h1>

      <p style={description}>
        The papers receiving these awards were selected from a set of outstanding
        papers, based on the quantitative and qualitative classifications as well
        as comments provided by the program committee reviewers, their final
        classification as full paper and their oral presentation at the conference.
      </p>

      <div style={years}>
        2026 | 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015 | 2014 | 2013 | 2012 | 2011 | 2010
      </div>

      {/* 2026 */}
      <h4 style={yearTitle} className="text-[12px] font-bold">ICAART 2026</h4>

      <div style={awardBlock}>
        <h3>Best Paper Award</h3>
        <p style={paperTitle}>
          Sliced-Wasserstein Distribution Alignment Loss Improves the Ultra-Low-Bit Quantization of Large Language Models
        </p>
        <p style={authors}>Deyu Cao, Yixin Yin and Samin Aref</p>
      </div>

      <div style={awardBlock}>
        <h3>Best Student Paper Award</h3>
        <p style={paperTitle}>
          Sura.ai: Multi-Agent Infrastructure Recovery with LLM-Powered Autonomous Remediation
        </p>
        <p style={authors}>
          Ananya Arvind, Shruti Sathya Narayanan and Saishriya Sathya Narayanan
        </p>
      </div>

      <div style={awardBlock}>
        <h3>Best Poster Award</h3>
        <p style={paperTitle}>
          ZQBA: Zero Query Black-Box Adversarial Attack
        </p>
        <p style={authors}>
          Joana C. Costa, Tiago Roxo, Hugo Proença and Pedro R. M. Inácio
        </p>
      </div>

      <div style={awardBlock}>
        <h3>Best Industrial Paper Award</h3>
        <p style={paperTitle}>
          JewelCVSS: A Domain-Tuned LLM for Automated Vulnerability Scoring
        </p>
        <p style={authors}>
          Roberto Lorusso, Antonio Maci, Alessandro Santorsola, Pietro Spaluto and Stefano Valcada
        </p>
      </div>

      {/* 2025 */}
      <h2 style={yearTitle} className="text-[12px] font-bold">ICAART 2025</h2>

      <div style={awardBlock}>
        <h3>Best Paper Award</h3>
        <p style={paperTitle}>
          Dynamic Graph Representation with Contrastive Learning for Financial Market Prediction:
          Integrating Temporal Evolution and Static Relations
        </p>
        <p style={authors}>
          Yunhua Pei, Jin Zheng and John Cartlidge
        </p>
      </div>

      <div style={awardBlock}>
        <h3>Best Student Paper Award</h3>
        <p style={paperTitle}>
          A Novel Vision Transformer for Camera-LiDAR Fusion Based Traffic Object Segmentation
        </p>
        <p style={authors}>
          Toomas Tahves, Junyi Gu, Mauro Bellone and Raivo Sell
        </p>
      </div>

      <div style={awardBlock}>
        <h3>Best Poster Award</h3>
        <p style={paperTitle}>
          Toolshed: Scale Tool-Equipped Agents with Advanced RAG-Tool Fusion and Tool Knowledge Bases
        </p>
        <p style={authors}>
          Elias Lumer, Vamse Kumar Subbiah, James A. Burke, Pradeep Honaganahalli Basavaraju and Austin Huber
        </p>
      </div>

    </div>
  );
}

export default Award;