import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Calculadora.css";

  document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById('imcResult').innerText = `Seu IMC é: ${imc}`;
  });

  return (
  <section id="imc"class="mb-4">
      <h2>Calculadora IMC</h2>
      <form id="imcForm">
          <div class="form-group">
              <label for="weight">Peso (kg):</label>
              <input type="number" class="form-control" id="weight" required></input>
          </div>
          <div class="form-group">
              <label for="height">Altura (m):</label>
              <input type="number" class="form-control" id="height" required></input>
          </div>
          <button type="submit" class="btn btn-primary">Calcular IMC</button>
      </form>
      <p id="imcResult" class="mt-3"></p>
  </section>
  );

export default Calculadora;
