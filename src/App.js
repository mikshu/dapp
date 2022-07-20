import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Token from "./artifacts/contracts/Token.sol/Token.json";

const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const [userAccount, setUserAccount] = useState("");
  const [amount, setAmount] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
    }
  }

  async function sendCoins() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={getBalance}
          style={{
            marginBottom: "10px",
            color: "white",
            background: "red",
            fontSize: "15px",
          }}
        >
          Get Balance
        </button>
        <button
          onClick={sendCoins}
          style={{
            marginBottom: "10px",
            color: "white",
            background: "blue",
            fontSize: "15px",
          }}
        >
          Send Coins
        </button>
        <input
          onChange={(e) => setUserAccount(e.target.value)}
          placeholder="Account ID"
          style={{
            marginBottom: "10px",
            border: "1px solid green",
            fontSize: "18px",
          }}
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          style={{ border: "1px solid green", fontSize: "18px" }}
        />
      </header>
    </div>
  );
}

export default App;
