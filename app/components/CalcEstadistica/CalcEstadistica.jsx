'use client'
import React from "react";

export default function CalcEstadistica({data}) {
   
    const datos = data.reduce((acc, item) => {
        const existingItem = acc.find((stat) => stat.number === item);
        if (existingItem) {
            existingItem.times++;
        } else {
            acc.push({
                number: item,
                times: 1   
            });
        }
        return acc;
    }, []).sort((a, b) => a.number - b.number);

    const totalTimes = datos.reduce((acc, item) => acc + item.times, 0);
    const totalNumber = datos.reduce((acc, item) => acc + (item.number * item.times), 0);
    const totalPercentage = datos.reduce((acc, item) => acc + (item.times / totalTimes), 0).toFixed(2);

    const sortedData = data.map(item => item).sort((a, b) => a - b);
    const median = sortedData.length % 2 === 0
        ? (sortedData[sortedData.length / 2] + sortedData[(sortedData.length / 2) - 1]) / 2
        : sortedData[Math.floor(sortedData.length / 2)];

    return (
        <div>
            {
                data.length > 0 ? 
                    <div className="results">
                        <h1>Resultados</h1>
                        <div className="tabla">
                            <p className="firstRow">Variable</p>
                            <p className="firstRow">fr</p>
                            <p className="firstRow">h</p>
                            <p className="firstRow">%</p>
                            {
                                datos.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <p className="middle">{item.number}</p>
                                            <p className="middle">{item.times}</p>
                                            <p className="middle">{parseFloat(item.times/totalTimes).toFixed(4)}</p>
                                            <p className="middle">{parseFloat((item.times/totalTimes)*100).toFixed(2)}%</p>
                                        </React.Fragment>
                                    )
                                })
                            }
                            <p className="lastRow">Total</p>
                            <p className="lastRow">{totalTimes}</p>
                            <p className="lastRow">{totalPercentage}</p>
                            <p className="lastRow">{((totalPercentage)*100)}%</p>
                        </div>
                        <div className="datosEstadisticos">
                            <p><span>Media:</span> {(totalNumber/totalTimes).toFixed(2)}</p>
                            <p><span>Mediana:</span> {median} </p>
                            <p><span>Moda:</span> {datos.reduce((acc, item) => item.times > acc.times ? item : acc).number}</p>
                        </div>
                    </div>
                : null
            }
        </div>
    )
}