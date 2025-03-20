import React, { useEffect, useState } from "react";
// import axios from "axios";
import * as signalR from "@microsoft/signalr";

const StreamData = () => {
  useEffect(() => {
    //fetchData();

    // Setup SignalR Connection
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5116/JadwalUjianHub") // localhost:5116 alamat backend
      .withAutomaticReconnect()
      .build();

    connection.start().catch((err) => console.error("SignalR Error:", err));

    // Listen for stock updates from SignalR
    connection.on("ReceiveJadwalUjianUpdate", (UjianDetailResponse) => {
      console.log("UjianDetailResponse:", UjianDetailResponse);
    });

    return () => {
      connection.stop();
    };
  }, []);

  const fetchData = async () => {
    // try {
    //   const response = await axios.get(
    //     `http://localhost:5000/api/stocks`
    //   );

    //   setStocks(response.data.stocks);
    //   setTotalStocks(response.data.totalStocks);
    // } catch (error) {
    //   console.error("Error fetching stock data:", error);
    // }
  };

  return <h1>Uji Coba React Terhubung SignalR Net Core</h1>;
};

export default StreamData;
