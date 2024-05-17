import Button from "./assets/Components/Button";
import { useState } from "react";
import Input from "./assets/Components/Input";
import "./assets/Css/index.css";

function App() {
  const [data, setdata] = useState(0);
  return (
    <>
      <div>
        <Input value={data} />
        <div className="calculator-body">
          <Button
            name="C"
            click={() => {
              setdata("");
            }}
          />
          <Button
            name="%"
            click={() => {
              console.log("Clicked");
            }}
          />
          <Button
            name="Del"
            click={() => {
              setdata(data.slice(0, -1));
            }}
          />
          <Button
            name="/"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="7"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="8"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="9"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="*"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="4"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="5"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="6"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="-"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="1"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="2"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="3"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="+"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />

          <Button
            name="00"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="0"
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="."
            click={(e) => {
              setdata(data + e.target.value);
            }}
          />
          <Button
            name="="
            click={() => {
              setdata(eval(data));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
