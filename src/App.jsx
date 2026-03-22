import { useState } from "react";

function App() {
  const [touchMsg, setTouchMsg] = useState("");
  const [switchMsg, setSwitchMsg] = useState("");

  const sendMessages = async () => {
    const res = await fetch("https://raspi-door-api.onrender.com/set_message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ touch: touchMsg, switch: switchMsg })
    });
    const data = await res.json();
    console.log(data);
    alert("メッセージ送信完了");
  };

  return (
    <div>
      <h2>読み上げるメッセージを設定してください</h2>
      <div>
        <label>初回ドア（タッチセンサー）:</label><br/>
        <input value={touchMsg} onChange={e => setTouchMsg(e.target.value)} style={{ width: "300px" }} />
      </div>
      <div>
        <label>最終ゲート（ボタン）:</label><br/>
        <input value={switchMsg} onChange={e => setSwitchMsg(e.target.value)} style={{ width: "300px" }} />
      </div>
      <button onClick={sendMessages} style={{ marginTop: "20px" }}>送信</button>
    </div>
  );
}

export default App;